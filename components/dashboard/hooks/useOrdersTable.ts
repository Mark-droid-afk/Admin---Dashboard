"use client";

import { useState } from "react";
import { OrderRow } from "@/components/dashboard/types/dashboard_types";

export function useOrdersTable(initialRows: OrderRow[]) {
  const [rows] = useState<OrderRow[]>(initialRows);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const start = (currentPage - 1) * rowsPerPage;
  const visibleRows = rows.slice(start, start + rowsPerPage);
  const allVisibleSelected =
    visibleRows.length > 0 && visibleRows.every((row) => selectedIds.has(row.id));

  function toggleSelect(rowId: string) {
    const next = new Set(selectedIds);
    if (next.has(rowId)) {
      next.delete(rowId);
    } else {
      next.add(rowId);
    }
    setSelectedIds(next);
  }

  function toggleSelectAll() {
    const next = new Set(selectedIds);
    const shouldSelect = !visibleRows.every((row) => next.has(row.id));
    visibleRows.forEach((row) => {
      if (shouldSelect) {
        next.add(row.id);
      } else {
        next.delete(row.id);
      }
    });
    setSelectedIds(next);
  }

  function changeRowsPerPage(value: number) {
    setRowsPerPage(value);
    setCurrentPage(1);
  }

  function changePage(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  }

  return {
    visibleRows,
    selectedIds,
    selectedCount: selectedIds.size,
    allVisibleSelected,
    rowsPerPage,
    currentPage,
    totalPages,
    totalRows: rows.length,
    toggleSelect,
    toggleSelectAll,
    changeRowsPerPage,
    changePage,
  };
}