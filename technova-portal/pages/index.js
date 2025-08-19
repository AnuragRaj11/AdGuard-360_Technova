import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card space-y-3">
        <h1 className="text-2xl font-bold">Smart Billboard Compliance Portal</h1>
        <p>
          Help your city identify unauthorized billboards. Upload a photo and our AI will flag potential violations.
        </p>
        <div className="flex gap-3">
          <Link href="/report" className="btn btn-primary">Report a Billboard</Link>
          <Link href="/dashboard" className="btn">View Dashboard</Link>
        </div>
      </div>
      <div className="card">
        <h2 className="font-semibold mb-2">How it works</h2>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Take a clear photo of the billboard.</li>
          <li>Allow location for geotagging.</li>
          <li>Submit and see instant AI checks (size, placement, content, structural).</li>
          <li>Authorities review and take action.</li>
        </ol>
      </div>
    </div>
  )
}
