import StatCardsGrid from "@/components/dashboard/cards/StatCardsGrid";
import TotalVisitorsCard from "@/components/dashboard/chart/ProductionAreaChart";
import ProductionOverviewCard from "@/components/dashboard/chart/ProductionOverviewCard";
import OutlineTableCard from "@/components/dashboard/table/RecentOrdersCard";

export default function DashboardPage() {
  return (
          <main className="space-y-6 p-6">
            <header>
              <h1 className="text-xl font-semibold text-black dark:text-white">Admin Dashboard</h1>
              <p className="text-base text-neutral-500 dark:text-neutral-400">
                Monitor production performance, inventory levels, and order fulfillment in real time.
              </p>
            </header>
            <StatCardsGrid />
            <ProductionOverviewCard />
            <OutlineTableCard />
          </main>
  );
}