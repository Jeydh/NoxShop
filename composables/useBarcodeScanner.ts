import { ref, onBeforeUnmount } from "vue";

type BarcodeDetectorLike = {
  detect: (source: HTMLVideoElement) => Promise<Array<{ rawValue?: string }>>;
};

type BarcodeDetectorConstructor = new (options: { formats: string[] }) => BarcodeDetectorLike;

export const useBarcodeScanner = () => {
  const supported = ref(false);
  const scanning = ref(false);
  const error = ref<string | null>(null);
  const stream = ref<MediaStream | null>(null);
  let detector: BarcodeDetectorLike | null = null;

  const start = async (video: HTMLVideoElement, formats = ["ean_13", "ean_8", "upc_a", "upc_e", "code_128", "qr_code"]) => {
    if (!import.meta.client) return false;
    try {
      const Detector = (window as typeof window & { BarcodeDetector?: BarcodeDetectorConstructor }).BarcodeDetector;
      if (!Detector) {
        error.value = "La détection native n'est pas disponible sur ce navigateur.";
        return false;
      }
      detector = new Detector({ formats });
      stream.value = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      video.srcObject = stream.value;
      await video.play();
      supported.value = true;
      scanning.value = true;
      return true;
    } catch (cause) {
      error.value = cause instanceof Error ? cause.message : "Impossible d'accéder à la caméra.";
      stop();
      return false;
    }
  };

  const detect = async (video: HTMLVideoElement) => {
    if (!detector || !scanning.value) return null;
    const results = await detector.detect(video);
    return results[0]?.rawValue ?? null;
  };

  const stop = () => {
    stream.value?.getTracks().forEach((track) => track.stop());
    stream.value = null;
    scanning.value = false;
  };

  onBeforeUnmount(stop);

  return { supported, scanning, error, start, detect, stop };
};
