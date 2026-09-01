export const useShopStatus = () => {
  const now = ref(new Date());
  let timer: ReturnType<typeof setInterval> | undefined;

  const isOpen = computed(() => {
    const hour = now.value.getHours();
    return hour >= 8 || hour < 2;
  });

  const statusText = computed(() => isOpen.value ? "Ouvert — ferme à 02h00" : "Fermé — ouvre demain à 08h00");

  onMounted(() => {
    timer = setInterval(() => { now.value = new Date(); }, 60_000);
  });

  onUnmounted(() => { if (timer) clearInterval(timer); });

  return { isOpen, statusText };
};