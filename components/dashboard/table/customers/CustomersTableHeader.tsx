interface CustomersTableHeaderProps {
  allSelected: boolean;
  onToggleSelectAll: () => void;
}

const COLUMNS = ["Customer", "Email", "Phone", "Joined", "Status"];

export default function CustomersTableHeader({ allSelected, onToggleSelectAll }: CustomersTableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-neutral-800 text-left text-sm text-neutral-800 dark:text-neutral-100 dark:border-neutral-100">
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