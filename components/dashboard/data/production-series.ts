import { DateRange, ProductionPoint } from "@/components/dashboard/types/dashboard_types";

// MOCK DATA — replace with real production logs when the backend is ready.
const RAW_SERIES: ProductionPoint[] = [
  { date: "Apr 1", produced: 18, target: 20 },
  { date: "Apr 5", produced: 22, target: 20 },
  { date: "Apr 10", produced: 25, target: 22 },
  { date: "Apr 15", produced: 21, target: 22 },
  { date: "Apr 20", produced: 28, target: 24 },
  { date: "Apr 25", produced: 30, target: 24 },
  { date: "May 1", produced: 26, target: 26 },
  { date: "May 5", produced: 32, target: 26 },
  { date: "May 10", produced: 34, target: 28 },
  { date: "May 15", produced: 31, target: 28 },
  { date: "May 20", produced: 36, target: 30 },
  { date: "May 25", produced: 38, target: 30 },
  { date: "May 30", produced: 35, target: 32 },
  { date: "Jun 5", produced: 40, target: 32 },
  { date: "Jun 10", produced: 42, target: 34 },
  { date: "Jun 15", produced: 39, target: 34 },
  { date: "Jun 20", produced: 44, target: 36 },
  { date: "Jun 24", produced: 37, target: 34 },
  { date: "Jun 25", produced: 41, target: 35 },
  { date: "Jun 26", produced: 46, target: 36 },
  { date: "Jun 27", produced: 43, target: 37 },
  { date: "Jun 28", produced: 47, target: 38 },
  { date: "Jun 29", produced: 45, target: 38 },
  { date: "Jun 30", produced: 49, target: 39 },
];

const RANGE_LENGTH: Record<DateRange, number> = {
  "3m": RAW_SERIES.length,
  "30d": 12,
  "7d": 5,
};

export function getProductionSeries(range: DateRange): ProductionPoint[] {
  const length = RANGE_LENGTH[range];
  return RAW_SERIES.slice(-length);
}