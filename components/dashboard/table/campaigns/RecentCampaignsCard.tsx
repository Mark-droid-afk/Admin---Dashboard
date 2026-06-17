import CampaignsList from "@/components/dashboard/table/campaigns/CampaignsList";

export default function RecentCampaignsCard() {
  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 overflow-hidden">
      <div className="rounded-t-xl bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-800 dark:border-neutral-600 p-4">
        <h2 className="text-base font-semibold text-black dark:text-white">Recent Campaigns</h2>
      </div>
      <CampaignsList />
    </section>
  );
}