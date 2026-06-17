"use client";

import { customerRows } from "@/components/dashboard/data/customers";
import { useCustomersTable } from "@/components/dashboard/hooks/useCustomersTable";
import CustomersTableHeader from "@/components/dashboard/table/customers/CustomersTableHeader";
import CustomersTableRow from "@/components/dashboard/table/customers/CustomersTableRow";
// import PaginationControls from "@/components/dashboard/table/PaginationControls";

export default function RecentCustomersCard() {
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
  } = useCustomersTable(customerRows);

  return (
    <section className="rounded-xl border border-neutral-800 dark:border-neutral-600 overflow-hidden">
      <div className="rounded-t-xl bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-800 dark:border-neutral-600 p-4">
        <h2 className="text-base font-semibold text-black dark:text-white">Recent Customers</h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full min-w-[700px] border-collapse">
          <CustomersTableHeader allSelected={allVisibleSelected} onToggleSelectAll={toggleSelectAll} />
          <tbody>
            {visibleRows.map((row) => (
              <CustomersTableRow
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
        totalRows={customerRows.length}
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={changeRowsPerPage}
        onPageChange={changePage}
      /> */}
    </section>
  );
}