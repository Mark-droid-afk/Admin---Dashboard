import { ArrowDown, ArrowUp } from "lucide-react";
import { StatCard as StatCardType } from "@/components/dashboard/types/dashboard_types";

interface StatCardProps {
  card: StatCardType;
}

export default function StatCard({ card }: StatCardProps) {
const isUp = card.trend === "up";
const TrendIcon = isUp ? ArrowUp : ArrowDown;
const trendColor = isUp
  ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
  : "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20";

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-600 p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-500 dark:text-white">{card.label}</span>
        <span className={`flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs ${trendColor}`}>
          <TrendIcon className="h-3 w-3" />
          {card.trendValue}
          </span>
      </div>

      <p className="text-3xl font-semibold tabular-nums text-black dark:text-white">{card.value}</p>

      <div className="mt-1 space-y-0.5">
        <p className="flex items-center gap-1 text-sm font-medium text-neutral-400">
          {card.title}
          <TrendIcon className="h-3.5 w-3.5" />
        </p>
        <p className="text-sm text-neutral-500">{card.subtitle}</p>
      </div>
    </div>
  );
}