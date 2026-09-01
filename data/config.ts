export const shopConfig = {
  brand: {
    name: "Nox",
    subtitle: "Night Shop & Épicerie",
    tagline: "Tout ce qu'il vous faut, même tard.",
  },
  shop: {
    city: "Lille",
    address: "12 rue de la Nuit",
    phone: "03 00 00 00 00",
    opening: "08:00",
    closing: "02:00",
  },
  features: {
    clickAndCollect: true,
    barcodeScanner: true,
    loyalty: true,
    suppliers: true,
    invoices: true,
  },
} as const;