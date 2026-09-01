export type Role = "employee" | "manager" | "admin";

export type Permission =
  | "dashboard.view"
  | "stock.read"
  | "stock.update"
  | "orders.read"
  | "orders.prepare"
  | "products.manage"
  | "suppliers.read"
  | "suppliers.manage"
  | "invoices.read"
  | "invoices.manage"
  | "analytics.view"
  | "team.manage"
  | "settings.manage";

export type ProductCategory =
  | "drinks"
  | "snacking"
  | "essential"
  | "aperitif"
  | "grocery";

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  stock: number;
  category: ProductCategory;
  image: string;
  barcode: string;
  featured?: boolean;
  alcohol?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  loyaltyPoints: number;
}

export type OrderStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  customerId?: string;
  customerName: string;
  phone: string;
  pickupCode: string;
  pickupSlot: string;
  status: OrderStatus;
  items: CartItem[];
  createdAt: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  status: "connected" | "manual";
  products: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  permissions: Permission[];
}