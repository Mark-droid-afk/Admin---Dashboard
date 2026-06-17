import StatCardsGrid from "@/components/dashboard/cards/StatCardsGrid";
import RecentActivityRow from "@/components/dashboard/cards/RecentActivityRow";
import RecentActivityTabs from "@/components/dashboard/cards/RecentActivityTabs";
import RecentCustomersCard from "@/components/dashboard/table/customers/RecentCustomersCard";

export default function DashboardPage() {
  return (
    <main className="space-y-6 p-6">
      <header>
        <h1 className="text-xl font-semibold text-black dark:text-white">Hi! Admin</h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400">
          Monitor production performance, inventory levels, and order fulfillment in real time.
        </p>
      </header>
      <StatCardsGrid />
      <RecentActivityRow />
      <RecentActivityTabs />
      <RecentCustomersCard />
    </main>
  );
}