import { CampaignRow } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with a real campaigns query when the backend is ready.
export const campaignRows: CampaignRow[] = [
  { id: "1", name: "Ube Halaya Holiday Promo", channel: "Facebook", status: "Active", budget: 15000, startDate: "2026-06-01" },
  { id: "2", name: "New Customer Welcome Discount", channel: "Email", status: "Active", budget: 5000, startDate: "2026-05-20" },
  { id: "3", name: "Ube Jam Summer Sale", channel: "Instagram", status: "Scheduled", budget: 12000, startDate: "2026-07-01" },
  { id: "4", name: "Wholesale Bulk Order Push", channel: "SMS", status: "Ended", budget: 3000, startDate: "2026-04-10" },
  { id: "5", name: "Referral Rewards Launch", channel: "Email", status: "Active", budget: 8000, startDate: "2026-06-10" },
  { id: "6", name: "Pasalubong Center Partnership", channel: "Facebook", status: "Scheduled", budget: 20000, startDate: "2026-07-15" },
];