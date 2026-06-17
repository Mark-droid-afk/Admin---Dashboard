import { CheckCircle2, LoaderCircle, Clock } from "lucide-react";
import { OrderStatus } from "@/components/dashboard/types/dashboard_types";

interface StatusBadgeProps {
  status: OrderStatus;
}

const STATUS_CONFIG: Record<OrderStatus, { icon: typeof CheckCircle2; color: string }> = {
  Completed: { icon: CheckCircle2, color: "text-emerald-400" },
  Processing: { icon: LoaderCircle, color: "text-blue-400" },
  Pending: { icon: Clock, color: "text-amber-400" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { icon: Icon, color } = STATUS_CONFIG[status];

  return (
    <span className="inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-200">
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      {status}
    </span>
  );
}