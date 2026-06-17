import { CheckCircle2, Sparkles, MinusCircle } from "lucide-react";
import { CustomerStatus } from "@/components/dashboard/types/dashboard_types";

interface CustomerStatusBadgeProps {
  status: CustomerStatus;
}

const STATUS_CONFIG: Record<CustomerStatus, { icon: typeof CheckCircle2; color: string; bg: string }> = {
  Active: {
    icon: CheckCircle2,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
  New: {
    icon: Sparkles,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  Inactive: {
    icon: MinusCircle,
    color: "text-neutral-600 dark:text-neutral-400",
    bg: "bg-neutral-200 dark:bg-neutral-700",
  },
};

export default function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  const { icon: Icon, color, bg } = STATUS_CONFIG[status];

  return (
    <span className={`${bg} rounded p-1.5 inline-flex items-center gap-1 text-xs ${color}`}>
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}