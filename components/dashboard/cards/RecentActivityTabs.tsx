"use client";

import { useState } from "react";
import CampaignsList from "@/components/dashboard/table/campaigns/CampaignsList";
import TicketsList from "@/components/dashboard/table/tickets/TicketsList";

type Tab = "campaigns" | "tickets";

export default function RecentActivityTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("campaigns");

  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 overflow-hidden lg:hidden">
      <div className="flex bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-800 dark:border-neutral-600">
        <button
          onClick={() => setActiveTab("campaigns")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === "campaigns"
              ? "text-black dark:text-white border-b-2 border-black dark:border-white"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          Campaigns
        </button>
        <button
          onClick={() => setActiveTab("tickets")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === "tickets"
              ? "text-black dark:text-white border-b-2 border-black dark:border-white"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          Tickets
        </button>
      </div>

      {activeTab === "campaigns" ? <CampaignsList /> : <TicketsList />}
    </section>
  );
}