import { Megaphone, CalendarClock, CheckCircle2 } from "lucide-react";
import { campaignRows } from "@/components/dashboard/data/campaigns";
import { CampaignStatus } from "@/components/dashboard/types/dashboard_types";

const STATUS_CONFIG: Record<CampaignStatus, { icon: typeof Megaphone; color: string; bg: string }> = {
  Active: {
    icon: Megaphone,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
  },
  Scheduled: {
    icon: CalendarClock,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  Ended: {
    icon: CheckCircle2,
    color: "text-neutral-600 dark:text-neutral-400",
    bg: "bg-neutral-200 dark:bg-neutral-700",
  },
};

export default function CampaignsList() {
  return (
    <div className="max-h-72 overflow-y-auto scrollbar-hide">
      {campaignRows.map((campaign) => {
        const { icon: Icon, color, bg } = STATUS_CONFIG[campaign.status];
        return (
          <div
            key={campaign.id}
            className="flex items-center justify-between gap-4 border-b border-neutral-800 dark:border-neutral-600 px-4 py-3 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="truncate text-md font-medium text-neutral-600 dark:text-neutral-200">
                {campaign.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {campaign.channel} ·{" "}
                {new Date(campaign.startDate).toLocaleDateString("en-PH", { month: "short", day: "numeric" })}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                ₱{campaign.budget.toLocaleString("en-PH")}
              </span>
              <span className={`${bg} rounded p-1.5 inline-flex items-center gap-1 text-xs ${color}`}>
                <Icon className="h-3.5 w-3.5" />
                {campaign.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}