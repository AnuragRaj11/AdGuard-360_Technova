const mockReports = [
  { id: 1, status: 'Violation', timestamp: '2025-08-20 01:15 AM', location: 'Main St & 2nd Ave', reason: 'Obscene content', image: 'https://placehold.co/100x60/ff0000/ffffff?text=Violation' },
  { id: 2, status: 'Compliant', timestamp: '2025-08-19 10:30 PM', location: 'Oak Rd', reason: 'N/A', image: 'https://placehold.co/100x60/00ff00/ffffff?text=Compliant' },
  { id: 3, status: 'Violation', timestamp: '2025-08-19 05:45 PM', location: 'Highway 5 Exit', reason: 'Blocking traffic signal', image: 'https://placehold.co/100x60/ff0000/ffffff?text=Violation' },
];

export default function Dashboard() {
  return (
    <div className="glass-card p-6 md:p-8 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 technova-gradient-text">Reports Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800/50">
            <tr>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Status</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Timestamp</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Location</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Reason</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Image</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {mockReports.map((report) => (
              <tr key={report.id}>
                <td className="whitespace-nowrap py-4 px-3 text-sm">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${report.status === 'Violation' ? 'bg-red-500/80' : 'bg-green-500/80'}`}>
                    {report.status}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{report.timestamp}</td>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{report.location}</td>
                <td className="py-4 px-3 text-sm text-gray-300 max-w-xs truncate" title={report.reason}>{report.reason}</td>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                  <a href={report.image} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
