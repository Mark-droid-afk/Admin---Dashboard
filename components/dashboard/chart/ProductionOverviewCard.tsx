"use client";

import { useState } from "react";
import { DateRange } from "@/components/dashboard/types/dashboard_types";
import { getProductionSeries } from "@/components/dashboard/data/production-series";
import DateRangeToggle from "@/components/dashboard/chart/DateRangeToggle";
import ProductionAreaChart from "@/components/dashboard/chart/ProductionAreaChart";

const RANGE_DESCRIPTIONS: Record<DateRange, string> = {
  "3m": "Total for the last 3 months",
  "30d": "Total for the last 30 days",
  "7d": "Total for the last 7 days",
};

export default function ProductionOverviewCard() {
  const [range, setRange] = useState<DateRange>("7d");
  const data = getProductionSeries(range);

  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-[15px] font-medium text-black dark:text-white">
            Production output
          </h2>
          <p className="mt-0.5 text-xs text-neutral-400">
            {RANGE_DESCRIPTIONS[range]}
          </p>
        </div>
        <DateRangeToggle value={range} onChange={setRange} />
      </div>

      <ProductionAreaChart data={data} />

      <div className="mt-3 flex items-center gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-3">
        <Legend color="bg-neutral-400 dark:bg-neutral-600" label="Target" dashed />
        <Legend color="bg-neutral-900 dark:bg-neutral-100" label="Produced" />
      </div>
    </section>
  );
}

function Legend({
  color,
  label,
  dashed,
}: {
  color: string;
  label: string;
  dashed?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
      {dashed ? (
        <span className="inline-block w-4 border-t border-dashed border-neutral-400 dark:border-neutral-600" />
      ) : (
        <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
      )}
      {label}
    </div>
  );
}