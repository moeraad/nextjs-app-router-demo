// Dashboard overview page
export default function DashboardPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to your dashboard overview</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {dashboardCards.map((card) => (
          <div 
            key={card.title}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className="font-medium text-lg mb-2">{card.title}</h3>
            <p className="text-3xl font-bold text-primary-600">{card.value}</p>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-start p-3 border-b last:border-b-0"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-4"></div>
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample dashboard data
const dashboardCards = [
  {
    title: 'Total Users',
    value: '1,284',
    description: '+12% from last month',
  },
  {
    title: 'Revenue',
    value: '$34,743',
    description: '+5.2% from last month',
  },
  {
    title: 'Active Projects',
    value: '32',
    description: '8 pending approval',
  },
];

const recentActivities = [
  {
    title: 'New user registration',
    time: '2 minutes ago',
  },
  {
    title: 'Server deployment completed',
    time: '1 hour ago',
  },
  {
    title: 'New feature request submitted',
    time: '3 hours ago',
  },
  {
    title: 'Database backup successful',
    time: '5 hours ago',
  },
];