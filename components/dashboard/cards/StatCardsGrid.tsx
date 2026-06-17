import { statCards } from "@/components/dashboard/data/stat-cards";
import StatCard from "@/components/dashboard/cards/StatCard";

export default function StatCardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}