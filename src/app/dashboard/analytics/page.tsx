import { Metadata } from 'next';

// Analytics page-specific metadata
export const metadata: Metadata = {
  title: 'Analytics | Dashboard',
  description: 'View your analytics data',
};

// Mock data for the analytics chart
const analyticsData = [
  { month: 'Jan', users: 230, pageviews: 1200 },
  { month: 'Feb', users: 250, pageviews: 1300 },
  { month: 'Mar', users: 300, pageviews: 1700 },
  { month: 'Apr', users: 340, pageviews: 2100 },
  { month: 'May', users: 380, pageviews: 2400 },
  { month: 'Jun', users: 410, pageviews: 2600 },
];

// Analytics dashboard page
export default function AnalyticsPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-600 mt-2">View your site performance and user statistics</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Summary Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-medium text-lg mb-2">Users This Month</h3>
          <p className="text-3xl font-bold text-primary-600">2,549</p>
          <p className="text-sm text-green-600 mt-2">+18.2% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-medium text-lg mb-2">Average Session Duration</h3>
          <p className="text-3xl font-bold text-primary-600">4m 23s</p>
          <p className="text-sm text-green-600 mt-2">+2.1% from last month</p>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Monthly Overview</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page Views
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Session
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analyticsData.map((data) => (
                <tr key={data.month}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {data.month}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.users}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.pageviews}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.floor(data.pageviews / data.users * 0.5)}m {Math.floor(Math.random() * 60)}s
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>Data shows the last 6 months of activity. For more detailed analytics, export to CSV.</p>
        </div>
      </div>
    </div>
  );
}