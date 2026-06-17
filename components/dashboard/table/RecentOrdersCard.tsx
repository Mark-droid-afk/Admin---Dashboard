"use client";

import { orderRows } from "@/components/dashboard/data/orders";
import { useOrdersTable } from "@/components/dashboard/hooks/useOrdersTable";
import OrdersTableHeader from "@/components/dashboard/table/OrdersTableHeader";
import OrdersTableRow from "@/components/dashboard/table/OrdersTableRow";
// import PaginationControls from "@/components/dashboard/table/PaginationControls";

export default function RecentOrdersCard() {
  const {
    visibleRows,
    selectedIds,
    selectedCount,
    allVisibleSelected,
    rowsPerPage,
    currentPage,
    totalPages,
    toggleSelect,
    toggleSelectAll,
    changeRowsPerPage,
    changePage,
  } = useOrdersTable(orderRows);

  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 p-3.5">
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-base font-semibold text-black dark:text-white">Recent Orders</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          A snapshot of your latest customer orders and their current status.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <OrdersTableHeader allSelected={allVisibleSelected} onToggleSelectAll={toggleSelectAll} />
          <tbody>
            {visibleRows.map((row) => (
              <OrdersTableRow
                key={row.id}
                row={row}
                selected={selectedIds.has(row.id)}
                onToggleSelect={toggleSelect}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* <PaginationControls
        selectedCount={selectedCount}
        totalRows={orderRows.length}
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={changeRowsPerPage}
        onPageChange={changePage}
      /> */}
    </section>
  );
}