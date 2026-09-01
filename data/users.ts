import type { Permission, Role, User } from "~/types";

const all: Permission[] = [
  "dashboard.view", "stock.read", "stock.update", "orders.read", "orders.prepare",
  "products.manage", "suppliers.read", "suppliers.manage", "invoices.read",
  "invoices.manage", "analytics.view", "team.manage", "settings.manage",
];

export const users: User[] = [
  { id: "u1", name: "Alexandre Martin", email: "gerant@nox.demo", role: "admin", permissions: all },
  { id: "u2", name: "Julie Dupont", email: "julie@nox.demo", role: "manager", permissions: all.filter((p) => !["team.manage", "settings.manage"].includes(p)) },
  { id: "u3", name: "Thomas Bernard", email: "thomas@nox.demo", role: "employee", permissions: ["stock.read", "stock.update", "orders.read", "orders.prepare"] },
];

export const roleLabels: Record<Role, string> = {
  admin: "Gérant",
  manager: "Responsable",
  employee: "Employé",
};