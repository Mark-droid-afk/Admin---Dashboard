import { StatCard } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with a real API/Supabase query when the backend is ready.
export const statCards: StatCard[] = [
  {
    id: "Customers",
    label: "Total Customers",
    value: "250",
    trend: "up",
    trendValue: "+9.8%",
    title: "Customer growth this month",
  },
  {
    id: "Campaigns",
    label: "Total Active Campaigns",
    value: "86",
    trend: "down",
    trendValue: "-14%",
    title: "Campaign performance is falling",
  },
  {
    id: "Tickets",
    label: "Available Tickets",
    value: "15",
    trend: "up",
    trendValue: "+18%",
    title: "Support requests increased",
  },
];