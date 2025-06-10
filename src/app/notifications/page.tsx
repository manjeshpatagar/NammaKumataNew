'use client'

import { BellIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const notifications = [
  { id: 1, title: 'Welcome!', message: 'Thanks for using Namma Kumata.', time: 'Just now' },
  { id: 2, title: 'New Business', message: 'Hotel Kumata added.', time: '2 min ago' },
  { id: 3, title: 'Update', message: 'New features released.', time: '1 hour ago' },
]

export default function NotificationsPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white p-4 sticky top-0 z-10 shadow-md flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/20 hover:bg-white/40 transition-all mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-xl font-bold ml-2 flex-1 text-center">Notifications</h1>
        <BellIcon className="h-6 w-6 text-white" />
      </div>
      <div className="max-w-lg mx-auto p-4">
        <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
          {notifications.length > 0 ? notifications.map((n) => (
            <div key={n.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{n.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{n.time}</span>
              </div>
            </div>
          )) : (
            <div className="p-4 text-center text-gray-500">No notifications</div>
          )}
        </div>
      </div>
    </div>
  )
} 