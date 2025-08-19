import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <header className="glass-card sticky top-4 mx-auto max-w-6xl z-50 my-4">
        <nav className="container px-6 py-3 flex items-center justify-between">
          <div className="font-bold text-xl technova-gradient-text">
            <Link href="/">AdGuard 360</Link>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/report">Report</Link>
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
            <Link className="nav-link" href="/leaderboard">Leaderboard</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {children}
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        Powered by ESSPL Technova Season 2. Demo only. Do not upload personal data.
      </footer>
    </div>
  );
}
