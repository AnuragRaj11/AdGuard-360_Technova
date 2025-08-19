import useSWR from 'swr'
import { fetcher, API_BASE } from '../lib/api'

export default function Leaderboard() {
  const { data } = useSWR(`${API_BASE}/leaderboard`, fetcher, { refreshInterval: 8000 })
  const rows = data || []
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Leaderboard</h2>
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
            {rows.map((s) => (
              <tr key={s.name} className="border-t">
                <td className="p-2">{s.rank}</td>
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
