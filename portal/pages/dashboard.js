import { useState, useEffect } from 'react';
import { API_BASE } from '../lib/api'; // Assuming api.js is in a lib folder

export default function Dashboard() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/reports`);
      if (!response.ok) {
        throw new Error('Failed to fetch reports from the server.');
      }
      const data = await response.json();
      // Sort to show newest first
      setReports(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);
  
  const hasViolation = (violations) => {
    return violations.size || violations.placement || violations.content || violations.structural;
  }

  return (
    <div className="glass-card p-6 md:p-8 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold technova-gradient-text">Reports Dashboard</h1>
        <button onClick={fetchReports} className="btn-primary text-sm" disabled={isLoading}>
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800/50">
            <tr>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Status</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Timestamp</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Location</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Reporter</th>
              <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-white">Image</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {isLoading ? (
              <tr><td colSpan="5" className="text-center py-8 text-gray-400">Loading reports...</td></tr>
            ) : error ? (
              <tr><td colSpan="5" className="text-center py-8 text-red-400">Error: {error}</td></tr>
            ) : reports.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-8 text-gray-400">No reports have been submitted yet.</td></tr>
            ) : (
              reports.map((report) => (
                <tr key={report.id}>
                  <td className="whitespace-nowrap py-4 px-3 text-sm">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${hasViolation(report.violations) ? 'bg-red-500/80' : 'bg-green-500/80'}`}>
                      {hasViolation(report.violations) ? 'Violation' : 'Compliant'}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{new Date(report.created_at).toLocaleString()}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{report.latitude?.toFixed(4)}, {report.longitude?.toFixed(4)}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{report.reporter}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                    <a href={report.image_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Image</a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
