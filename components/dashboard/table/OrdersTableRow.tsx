import { MoreHorizontal } from "lucide-react";
import { OrderRow } from "@/components/dashboard/types/dashboard_types";
import StatusBadge from "@/components/dashboard/table/StatusBadge";

interface OrdersTableRowProps {
  row: OrderRow;
  selected: boolean;
  onToggleSelect: (rowId: string) => void;
}

export default function OrdersTableRow({ row, selected, onToggleSelect }: OrdersTableRowProps) {
  return (
    <tr className="border-b border-neutral-800 dark:border-neutral-600 text-sm last:border-b-0">
      <td className="w-8 px-4 py-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelect(row.id)}
          className="h-4 w-4 rounded border-neutral-700 bg-neutral-900"
        />
      </td>
      <td className="px-4 py-4 font-medium text-neutral-600 dark:text-neutral-300">{row.orderId}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">{row.customer}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">{row.product}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">{row.quantity}</td>
      <td className="px-4 py-4 text-neutral-600 dark:text-neutral-300">₱{row.amount.toLocaleString("en-PH")}</td>
      <td className="px-4 py-4">
        <StatusBadge status={row.status} />
      </td>
    </tr>
  );
}