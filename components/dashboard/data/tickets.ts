import { TicketRow } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with a real support-tickets query when the backend is ready.
export const ticketRows: TicketRow[] = [
  { id: "T-201", subject: "Order arrived damaged", customer: "Maria Santos", priority: "High", status: "Open", createdAt: "2026-06-17" },
  { id: "T-202", subject: "Request for invoice copy", customer: "Juan Dela Cruz", priority: "Low", status: "Resolved", createdAt: "2026-06-15" },
  { id: "T-203", subject: "Delayed shipment inquiry", customer: "Ana Reyes", priority: "Medium", status: "In Progress", createdAt: "2026-06-16" },
  { id: "T-204", subject: "Wrong product received", customer: "Mark Villanueva", priority: "High", status: "Open", createdAt: "2026-06-14" },
  { id: "T-205", subject: "Bulk order discount question", customer: "Liza Fernandez", priority: "Low", status: "Resolved", createdAt: "2026-06-12" },
  { id: "T-206", subject: "Payment not reflecting", customer: "Paolo Garcia", priority: "Medium", status: "Open", createdAt: "2026-06-17" },
];