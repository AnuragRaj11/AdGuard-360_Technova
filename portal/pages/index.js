import Layout from '../components/Layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center">
        <div className="glass-card p-8 md:p-12 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold technova-gradient-text mb-4">
            Welcome to AdGuard 360
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Your community-driven solution to identify and report unauthorized billboards. Help us make our cities safer and more beautiful, one report at a time.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/report" className="btn-primary font-bold py-3 px-6 rounded-lg text-lg">
              Report a Billboard
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
