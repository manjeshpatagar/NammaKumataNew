'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h1>
        <p className="text-gray-600">Manage your businesses, advertisements, and users from here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/businesses" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Businesses</h2>
            <p className="text-gray-600">Manage business listings and verify new submissions</p>
          </div>
        </Link>

        <Link href="/advertisements" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Advertisements</h2>
            <p className="text-gray-600">Manage and approve advertisement requests</p>
          </div>
        </Link>

        <Link href="/users" className="block">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Users</h2>
            <p className="text-gray-600">Manage user accounts and permissions</p>
          </div>
        </Link>
      </div>
    </div>
  );
} 