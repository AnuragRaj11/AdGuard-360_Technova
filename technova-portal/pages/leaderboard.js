export default function Leaderboard() {
  const sample = [
    { name: 'Citizen A', count: 8 },
    { name: 'Citizen B', count: 5 },
    { name: 'Citizen C', count: 3 },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Leaderboard (Demo)</h2>
      <div className="card">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2">Rank</th>
              <th className="text-left p-2">User</th>
              <th className="text-left p-2">Valid Reports</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((s, i) => (
              <tr key={s.name} className="border-t">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
