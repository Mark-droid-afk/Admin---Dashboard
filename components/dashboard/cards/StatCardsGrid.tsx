import { statCards } from "@/components/dashboard/data/stat-cards";
import StatCard from "@/components/dashboard/cards/StatCard";

export default function StatCardsGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {statCards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}