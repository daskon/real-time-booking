interface Props {
  data: any[];
  columns: { key: string; label: string }[];
}

export default function DataTable({ data, columns}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          {columns.map((col)=> (
            <th key={col.key} className="p-2 border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row,i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key} className="p-2 border">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}