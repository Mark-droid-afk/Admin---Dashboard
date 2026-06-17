export interface StatCard {
  id: string;
  label: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  title: string;
}

export interface ProductionPoint {
  date: string;
  produced: number;
  target: number;
}

export type CustomerStatus = "Active" | "New" | "Inactive";

export interface CustomerRow {
  id: string;
  customer: string;
  email: string;
  phone: string;
  joinedDate: string;
  status: CustomerStatus;
}

export type CampaignStatus = "Active" | "Scheduled" | "Ended";

export interface CampaignRow {
  id: string;
  name: string;
  channel: string;
  status: CampaignStatus;
  budget: number;
  startDate: string;
}

export type TicketPriority = "Low" | "Medium" | "High";
export type TicketStatus = "Open" | "In Progress" | "Resolved";

export interface TicketRow {
  id: string;
  subject: string;
  customer: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
}