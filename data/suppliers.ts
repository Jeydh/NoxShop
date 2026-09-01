import type { Supplier } from "~/types";

export const suppliers: Supplier[] = [
  { id: "s1", name: "Distrib Express", contact: "commandes@distrib.example", status: "connected", products: 182 },
  { id: "s2", name: "Grossiste Local", contact: "03 00 00 00 01", status: "manual", products: 74 },
  { id: "s3", name: "Boissons & Co", contact: "api@boissons.example", status: "connected", products: 96 },
];