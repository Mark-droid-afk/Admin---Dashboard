import { StatCard } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with a real API/Supabase query when the backend is ready.
export const statCards: StatCard[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "₱148,250",
    trend: "up",
    trendValue: "+9.8%",
    title: "Sales trending up this month",
    subtitle: "Revenue across all channels",
  },
  {
    id: "batches",
    label: "Batches Produced",
    value: "86",
    trend: "up",
    trendValue: "+14%",
    title: "Production keeping pace",
    subtitle: "Halaya batches this month",
  },
  {
    id: "stock",
    label: "Raw Ube Stock",
    value: "320 kg",
    trend: "down",
    trendValue: "-18%",
    title: "Stock running low",
    subtitle: "Restock needed within 5 days",
  },
  {
    id: "orders",
    label: "Orders Fulfilled",
    value: "212",
    trend: "up",
    trendValue: "+6.2%",
    title: "Fulfillment steady",
    subtitle: "Out of 228 orders this month",
  },
];