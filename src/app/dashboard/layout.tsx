import { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for the dashboard section
export const metadata: Metadata = {
  title: 'Dashboard | Next.js App Router Demo',
  description: 'Dashboard section of the Next.js App Router Demo',
};

// Dashboard Layout Component
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-700">Dashboard</h2>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="block p-2 rounded hover:bg-primary-100 hover:text-primary-700 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto pt-6">
          <Link
            href="/"
            className="block p-2 text-gray-600 hover:text-primary-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

// Navigation items for the dashboard
const navItems = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Settings', href: '/dashboard/settings' },
];