// import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

// interface PaginationControlsProps {
//   selectedCount: number;
//   totalRows: number;
//   currentPage: number;
//   totalPages: number;
//   rowsPerPage: number;
//   onRowsPerPageChange: (value: number) => void;
//   onPageChange: (page: number) => void;
// }

// const ROWS_PER_PAGE_OPTIONS = [10, 20, 30];

// export default function PaginationControls({
//   selectedCount,
//   totalRows,
//   currentPage,
//   totalPages,
//   rowsPerPage,
//   onRowsPerPageChange,
//   onPageChange,
// }: PaginationControlsProps) {
//   return (
//     <div className="flex flex-col gap-3 px-4 py-3 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
//       <span>
//         {selectedCount} of {totalRows} row(s) selected.
//       </span>

//       <div className="flex items-center gap-6">
//         <div className="flex items-center gap-2">
//           <span>Rows per page</span>
//           <select
//             value={rowsPerPage}
//             onChange={(event) => onRowsPerPageChange(Number(event.target.value))}
//             className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-neutral-700 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
//           >
//             {ROWS_PER_PAGE_OPTIONS.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <span>
//           Page {currentPage} of {totalPages}
//         </span>

//         <div className="flex items-center gap-1">
//           <PageButton ariaLabel="First page" disabled={currentPage === 1} onClick={() => onPageChange(1)}>
//             <ChevronsLeft className="h-4 w-4" />
//           </PageButton>
//           <PageButton
//             ariaLabel="Previous page"
//             disabled={currentPage === 1}
//             onClick={() => onPageChange(currentPage - 1)}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </PageButton>
//           <PageButton
//             ariaLabel="Next page"
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(currentPage + 1)}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </PageButton>
//           <PageButton
//             ariaLabel="Last page"
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(totalPages)}
//           >
//             <ChevronsRight className="h-4 w-4" />
//           </PageButton>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PageButton({
//   children,
//   ariaLabel,
//   disabled,
//   onClick,
// }: {
//   children: React.ReactNode;
//   ariaLabel: string;
//   disabled: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       aria-label={ariaLabel}
//       disabled={disabled}
//       onClick={onClick}
//       className="rounded-md border border-neutral-300 bg-white p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
//     >
//       {children}
//     </button>
//   );
// }