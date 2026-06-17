import { DateRange } from "@/components/dashboard/types/dashboard_types";

interface RangeOption {
  value: DateRange;
  label: string;
}

const RANGE_OPTIONS: RangeOption[] = [
  { value: "3m", label: "Last 3 months" },
  { value: "30d", label: "Last 30 days" },
  { value: "7d", label: "Last 7 days" },
];

interface DateRangeToggleProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

export default function DateRangeToggle({ value, onChange }: DateRangeToggleProps) {
  return (
    <div className="flex rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-0.5 gap-0.5">
      {RANGE_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded-md px-3 py-1.5 text-xs transition-all duration-150 ${
            value === option.value
              ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-none border border-neutral-200 dark:border-neutral-700 font-medium"
              : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
} 