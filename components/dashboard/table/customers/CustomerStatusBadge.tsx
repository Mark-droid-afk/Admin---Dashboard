import { CheckCircle2, Sparkles, MinusCircle } from "lucide-react";
import { CustomerStatus } from "@/components/dashboard/types/dashboard_types";

interface CustomerStatusBadgeProps {
  status: CustomerStatus;
}

const STATUS_CONFIG: Record<CustomerStatus, { icon: typeof CheckCircle2; color: string }> = {
  Active: { icon: CheckCircle2, color: "text-emerald-400" },
  New: { icon: Sparkles, color: "text-blue-400" },
  Inactive: { icon: MinusCircle, color: "text-neutral-400" },
};

export default function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  const { icon: Icon, color } = STATUS_CONFIG[status];

  return (
    <span className="inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-200">
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      {status}
    </span>
  );
}