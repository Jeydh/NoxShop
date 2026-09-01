const all = [
  "dashboard.view",
  "stock.read",
  "stock.update",
  "orders.read",
  "orders.prepare",
  "products.manage",
  "suppliers.read",
  "suppliers.manage",
  "invoices.read",
  "invoices.manage",
  "analytics.view",
  "team.manage",
  "settings.manage"
];
const users = [
  { id: "u1", name: "Alexandre Martin", email: "gerant@nox.demo", role: "admin", permissions: all },
  { id: "u2", name: "Julie Dupont", email: "julie@nox.demo", role: "manager", permissions: all.filter((p) => !["team.manage", "settings.manage"].includes(p)) },
  { id: "u3", name: "Thomas Bernard", email: "thomas@nox.demo", role: "employee", permissions: ["stock.read", "stock.update", "orders.read", "orders.prepare"] }
];
const roleLabels = {
  admin: "Gérant",
  manager: "Responsable",
  employee: "Employé"
};
export {
  roleLabels as r,
  users as u
};
//# sourceMappingURL=users-CW0tpuyF.js.map
