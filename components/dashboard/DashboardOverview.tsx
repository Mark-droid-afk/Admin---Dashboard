import StatCardsGrid from "@/components/dashboard/cards/StatCardsGrid";
import ProductionOverviewCard from "@/components/dashboard/chart/ProductionOverviewCard";
import RecentOrdersCard from "@/components/dashboard/table/RecentOrdersCard";

export default function DashboardOverview() {
  return (
    <div className="space-y-6 p-6">
      <StatCardsGrid />
      <ProductionOverviewCard />
      <RecentOrdersCard />
    </div>
  );
}