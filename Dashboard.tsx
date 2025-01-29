import React from 'react';
import { Shield, Key, Lock, Users } from 'lucide-react';

function Dashboard() {
  const stats = [
    { name: 'Passwords Generated', value: '1,234', icon: Key },
    { name: 'Security Score', value: '98%', icon: Shield },
    { name: 'Password Strength', value: 'Strong', icon: Lock },
    { name: 'Active Users', value: '5,678', icon: Users },
  ];

  const recentActivity = [
    { action: 'Password Generated', timestamp: '2 minutes ago' },
    { action: 'Profile Updated', timestamp: '1 hour ago' },
    { action: 'Security Check', timestamp: '3 hours ago' },
    { action: 'Password Generated', timestamp: '5 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <Icon className="w-12 h-12 text-indigo-600 opacity-75" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <li key={index} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.timestamp}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;