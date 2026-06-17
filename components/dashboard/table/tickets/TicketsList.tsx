import { AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { ticketRows } from "@/components/dashboard/data/tickets";
import { TicketPriority, TicketStatus } from "@/components/dashboard/types/dashboard_types";

const STATUS_CONFIG: Record<TicketStatus, { icon: typeof AlertCircle; color: string; bg: string }> = {
  Open: {
    icon: AlertCircle,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-500/10",
  },
  "In Progress": {
    icon: Clock,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  Resolved: {
    icon: CheckCircle2,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
};

const PRIORITY_CONFIG: Record<TicketPriority, { color: string; bg: string }> = {
  Low: { color: "text-neutral-600 dark:text-neutral-400", bg: "bg-neutral-200 dark:bg-neutral-700" },
  Medium: { color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-500/10" },
  High: { color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-500/10" },
};

export default function TicketsList() {
  return (
    <div className="max-h-72 overflow-y-auto scrollbar-hide">
      {ticketRows.map((ticket) => {
        const { icon: Icon, color: statusColor, bg: statusBg } = STATUS_CONFIG[ticket.status];
        const { color: priorityColor, bg: priorityBg } = PRIORITY_CONFIG[ticket.priority];
        return (
          <div
            key={ticket.id}
            className="flex items-center justify-between gap-4 border-b border-neutral-800 dark:border-neutral-600 px-4 py-3 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="truncate text-md font-medium text-neutral-600 dark:text-neutral-200">
                {ticket.subject}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {ticket.id} · {ticket.customer}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className={`${priorityBg} rounded p-1.5 text-xs font-medium ${priorityColor}`}>
                {ticket.priority}
              </span>
              <span className={`${statusBg} rounded p-1.5 inline-flex items-center gap-1 text-xs ${statusColor}`}>
                <Icon className="h-3.5 w-3.5" />
                {ticket.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}