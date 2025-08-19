import Layout from '../components/Layout';

const leaderboardData = [
  { rank: 1, user: 'CitizenReporter_01', reports: 42, points: 420 },
  { rank: 2, user: 'VigilanteView', reports: 35, points: 350 },
  { rank: 3, user: 'AdBuster_99', reports: 28, points: 280 },
  { rank: 4, user: 'CityGuardian', reports: 21, points: 210 },
  { rank: 5, user: 'StreetEye', reports: 15, points: 150 },
];

export default function Leaderboard() {
  return (
    <Layout>
      <div className="glass-card p-6 md:p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 technova-gradient-text">Citizen Leaderboard</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800/50">
              <tr>
                <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Rank</th>
                <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">User</th>
                <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Reports Filed</th>
                <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {leaderboardData.map((entry) => (
                <tr key={entry.rank}>
                  <td className="whitespace-nowrap py-4 px-3 text-lg font-bold text-cyan-400">{entry.rank}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{entry.user}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{entry.reports}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm font-semibold text-green-400">{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
