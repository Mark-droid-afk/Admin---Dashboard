import { useMemo, useState } from "react";
import { CustomerRow } from "@/components/dashboard/types/dashboard_types";

const DEFAULT_ROWS_PER_PAGE = 5;

export function useCustomersTable(rows: CustomerRow[]) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / rowsPerPage));

  const visibleRows = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return rows.slice(start, start + rowsPerPage);
  }, [rows, currentPage, rowsPerPage]);

  const allVisibleSelected = visibleRows.length > 0 && visibleRows.every((row) => selectedIds.has(row.id));

  const toggleSelect = (rowId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(rowId) ? next.delete(rowId) : next.add(rowId);
      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      visibleRows.forEach((row) => (allVisibleSelected ? next.delete(row.id) : next.add(row.id)));
      return next;
    });
  };

  const changeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return {
    visibleRows,
    selectedIds,
    selectedCount: selectedIds.size,
    allVisibleSelected,
    rowsPerPage,
    currentPage,
    totalPages,
    toggleSelect,
    toggleSelectAll,
    changeRowsPerPage,
    changePage,
  };
}