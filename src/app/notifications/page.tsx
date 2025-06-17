'use client'

import { BellIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef, useState, useEffect } from 'react'

const notifications = [
  { id: 1, title: 'Welcome!', message: 'Thanks for using Namma Kumata.', time: 'Just now' },
  { id: 2, title: 'New Business', message: 'Hotel Kumata added.', time: '2 min ago' },
  { id: 3, title: 'Update', message: 'New features released.', time: '1 hour ago' },
]

export default function NotificationsPage() {
  const router = useRouter();
  const parentRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading notifications
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const rowVirtualizer = useVirtualizer({
    count: notifications.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  })

  if (isLoading) {
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
        <div className="p-4">
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (notifications.length === 0) {
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] p-4">
          <BellIcon className="h-16 w-16 text-gray-300 mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No notifications yet</h2>
          <p className="text-gray-500 text-center">We'll notify you when something important happens.</p>
        </div>
      </div>
    )
  }

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
      
      <div ref={parentRef} className="h-[calc(100vh-64px)] overflow-auto">
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const notification = notifications[virtualRow.index]
            return (
              <div
                key={notification.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className="p-4 hover:bg-gray-50 transition-colors bg-white border-b border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 