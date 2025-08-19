export default function ReportTable({ reports = [] }) {
  return (
    <div className="overflow-x-auto card">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-2">ID</th>
            <th className="text-left p-2">Location</th>
            <th className="text-left p-2">Violations</th>
            <th className="text-left p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id} className="border-t">
              <td className="p-2">{r.id}</td>
              <td className="p-2">{r.latitude?.toFixed?.(4)}, {r.longitude?.toFixed?.(4)}</td>
              <td className="p-2">
                <div className="flex gap-2 flex-wrap">
                  {Object.entries(r.violations || {}).map(([k, v]) => (
                    <span key={k} className={"px-2 py-1 rounded text-xs " + (v ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")}>
                      {k}: {String(v)}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-2">
                <a className="text-blue-600 underline" href={r.image_url} target="_blank" rel="noreferrer">open</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
