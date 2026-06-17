import RecentCampaignsCard from "@/components/dashboard/table/campaigns/RecentCampaignsCard";
import RecentTicketsCard from "@/components/dashboard/table/tickets/RecentTicketsCard";

export default function RecentActivityRow() {
  return (
    <div className="hidden gap-4 lg:grid lg:grid-cols-2">
      <RecentCampaignsCard />
      <RecentTicketsCard />
    </div>
  );
}