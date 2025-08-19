import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card space-y-3">
        <h1 className="text-2xl font-bold">AdGuard 360 </h1>
        <p>AI + Citizen Powered Billboard Compliance Platform.</p>
        <div className="flex gap-3">
          <Link href="/report" className="btn btn-primary">Report</Link>
          <Link href="/dashboard" className="btn">Dashboard</Link>
          <Link href="/leaderboard" className="btn">Leaderboard</Link>
        </div>
      </div>
      <div className="card">
        <h2 className="font-semibold mb-2">How it works</h2>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Upload a billboard photo</li>
          <li>Auto geotag (optional)</li>
          <li>AI flags possible violations</li>
          <li>Authorities review & act</li>
        </ol>
      </div>
    </div>
  )
}
