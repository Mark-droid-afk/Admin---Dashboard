import { AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { ticketRows } from "@/components/dashboard/data/tickets";
import { TicketPriority, TicketStatus } from "@/components/dashboard/types/dashboard_types";

const STATUS_CONFIG: Record<TicketStatus, { icon: typeof AlertCircle; color: string }> = {
  Open: { icon: AlertCircle, color: "text-amber-400" },
  "In Progress": { icon: Clock, color: "text-blue-400" },
  Resolved: { icon: CheckCircle2, color: "text-emerald-400" },
};

const PRIORITY_COLOR: Record<TicketPriority, string> = {
  Low: "text-neutral-400",
  Medium: "text-amber-400",
  High: "text-rose-400",
};

export default function TicketsList() {
  return (
    <div className="max-h-72 overflow-y-auto scrollbar-hide">
      {ticketRows.map((ticket) => {
        const { icon: Icon, color } = STATUS_CONFIG[ticket.status];
        return (
          <div
            key={ticket.id}
            className="flex items-center justify-between gap-4 border-b border-neutral-800 dark:border-neutral-600 px-4 py-3 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-neutral-600 dark:text-neutral-200">
                {ticket.subject}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {ticket.id} · {ticket.customer}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-200">
                <Icon className={`h-3.5 w-3.5 ${color}`} />
                {ticket.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}