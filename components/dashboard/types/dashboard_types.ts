export interface StatCard {
  id: string;
  label: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  title: string;
  subtitle: string;
}

export interface ProductionPoint {
  date: string;
  produced: number;
  target: number;
}

export type OrderStatus = "Completed" | "Processing" | "Pending";

export interface OrderRow {
  id: string;
  orderId: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  status: OrderStatus;
}

export type DateRange = "3m" | "30d" | "7d";
