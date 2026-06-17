import { MoreHorizontal } from "lucide-react";
import { CustomerRow } from "@/components/dashboard/types/dashboard_types";
import CustomerStatusBadge from "@/components/dashboard/table/customers/CustomerStatusBadge";

interface CustomersTableRowProps {
  row: CustomerRow;
  selected: boolean;
  onToggleSelect: (rowId: string) => void;
}

export default function CustomersTableRow({ row, selected, onToggleSelect }: CustomersTableRowProps) {
  return (
    <tr className="border-b border-neutral-800 dark:border-neutral-600 text-sm last:border-b-0">
      <td className="px-4 py-4 font-medium text-neutral-600 dark:text-neutral-300">{row.customer}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">{row.email}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">{row.phone}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">
        {new Date(row.joinedDate).toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" })}
      </td>
      <td className="px-4 py-4">
        <CustomerStatusBadge status={row.status} />
      </td>
    </tr>
  );
}