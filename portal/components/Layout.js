import Link from 'next/link'


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <nav className="container px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-lg">AdGuard 360</div>
          <div className="flex gap-3">
            <Link className="btn" href="/">Home</Link>
            <Link className="btn" href="/report">Report</Link>
            <Link className="btn" href="/dashboard">Dashboard</Link>
            <Link className="btn" href="/leaderboard">Leaderboard</Link>
          </div>
        </nav>
      </header>
      <main className="container px-4 py-6">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        Demo only. Do not upload personal data.
      </footer>
    </div>
  )
}
