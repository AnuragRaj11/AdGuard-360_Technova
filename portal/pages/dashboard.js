import dynamic from 'next/dynamic'
import useSWR from 'swr'
import { fetcher, API_BASE } from '../lib/api'
import ReportTable from '../components/ReportTable'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Dashboard() {
  const { data } = useSWR(`${API_BASE}/reports`, fetcher, { refreshInterval: 5000 })

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <Map reports={data || []} />
      <ReportTable reports={data || []} />
    </div>
  )
}
