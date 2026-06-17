interface OrdersTableHeaderProps {
  allSelected: boolean;
  onToggleSelectAll: () => void;
}

const COLUMNS = ["Order", "Customer", "Product", "Qty", "Amount", "Status"];

export default function OrdersTableHeader({ allSelected, onToggleSelectAll }: OrdersTableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-neutral-800 text-left text-sm text-neutral-800 dark:text-neutral-100 dark:border-neutral-100">
        <th className="w-8 px-4 py-3">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleSelectAll}
            className="h-4 w-4 rounded border-neutral-700 bg-neutral-900"
          />
        </th>
        {COLUMNS.map((column) => (
          <th key={column} className="px-4 py-3 font-medium">
            {column}
          </th>
        ))}
        <th className="w-8 px-4 py-3" />
      </tr>
    </thead>
  );
}