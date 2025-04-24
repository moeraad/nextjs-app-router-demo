import { Metadata } from 'next';

// Settings page-specific metadata
export const metadata: Metadata = {
  title: 'Settings | Dashboard',
  description: 'Configure your account settings',
};

// Client form component (marked with 'use client')
'use client';
function SettingsForm() {
  return (
    <form className="max-w-2xl">
      <div className="space-y-8">
        {/* Profile Settings Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Profile Information</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="john.doe@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                defaultValue="Full-stack developer with experience in Next.js, React, and Node.js."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Notification Settings Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            {notificationOptions.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.id}
                  name={option.id}
                  defaultChecked={option.defaultChecked}
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
                <label htmlFor={option.id} className="ml-2 block text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Security Settings */}
        <div>
          <h3 className="text-lg font-medium mb-4">Security Settings</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                name="currentPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                name="newPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="mr-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

// Settings page component (server component)
export default function SettingsPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
      </header>
      
      <SettingsForm />
    </div>
  );
}

// Sample notification options for the form
const notificationOptions = [
  { id: 'email-notifications', label: 'Email Notifications', defaultChecked: true },
  { id: 'sms-notifications', label: 'SMS Notifications', defaultChecked: false },
  { id: 'push-notifications', label: 'Push Notifications', defaultChecked: true },
  { id: 'weekly-digest', label: 'Weekly Digest Email', defaultChecked: true },
  { id: 'marketing-emails', label: 'Marketing Emails', defaultChecked: false },
];