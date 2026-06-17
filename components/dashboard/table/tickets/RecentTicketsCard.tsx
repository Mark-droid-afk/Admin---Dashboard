import TicketsList from "@/components/dashboard/table/tickets/TicketsList";

export default function RecentTicketsCard() {
  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 overflow-hidden">
      <div className="rounded-t-xl bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-800 dark:border-neutral-600 p-4">
        <h2 className="text-base font-semibold text-black dark:text-white">Recent Tickets</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Latest support requests from customers.
        </p>
      </div>
      <TicketsList />
    </section>
  );
}