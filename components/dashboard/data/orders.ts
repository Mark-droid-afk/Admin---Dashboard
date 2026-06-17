import { OrderRow } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with a real orders query when the backend is ready.
export const orderRows: OrderRow[] = [
  { id: "1", orderId: "ORD-1042", customer: "Maria Santos", product: "Ube Halaya 250g", quantity: 12, amount: 1800, status: "Completed" },
  { id: "2", orderId: "ORD-1043", customer: "Juan Dela Cruz", product: "Ube Halaya 500g", quantity: 6, amount: 1500, status: "Processing" },
  { id: "3", orderId: "ORD-1044", customer: "Ana Reyes", product: "Ube Jam 250g", quantity: 20, amount: 3000, status: "Completed" },
  { id: "4", orderId: "ORD-1045", customer: "Mark Villanueva", product: "Ube Halaya 250g", quantity: 8, amount: 1200, status: "Pending" },
  { id: "5", orderId: "ORD-1046", customer: "Liza Fernandez", product: "Ube Jam 500g", quantity: 10, amount: 2500, status: "Completed" },
  { id: "6", orderId: "ORD-1047", customer: "Paolo Garcia", product: "Ube Halaya 500g", quantity: 4, amount: 1000, status: "Processing" },
  { id: "7", orderId: "ORD-1048", customer: "Carmela Tan", product: "Ube Jam 250g", quantity: 15, amount: 2250, status: "Completed" },
  { id: "8", orderId: "ORD-1049", customer: "Ramon Cruz", product: "Ube Halaya 250g", quantity: 6, amount: 900, status: "Pending" },
];