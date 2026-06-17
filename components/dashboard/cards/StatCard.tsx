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
    <div className="flex flex-col gap-1.5 sm:gap-2 rounded-xl border border-neutral-600 p-2.5 sm:p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-1">
        <span className="text-xs sm:text-base md:text-xl text-neutral-800 dark:text-white">{card.label}</span>
        <span className={`flex shrink-0 items-center gap-0.5 rounded-md border px-1.5 py-0.5 text-[10px] sm:text-xs ${trendColor}`}>
          <TrendIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          {card.trendValue}
          </span>
      </div>

      <p className="text-lg sm:text-2xl md:text-3xl font-semibold tabular-nums text-black dark:text-white">{card.value}</p>

      <div className="mt-0.5 sm:mt-1 space-y-0.5">
        <p className="flex items-center gap-1 text-[11px] sm:text-sm font-medium text-neutral-400">
          {card.title}
          <TrendIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </p>
      </div>
    </div>
  );
}