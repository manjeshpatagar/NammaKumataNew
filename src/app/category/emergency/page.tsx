"use client"

import { ChevronRightIcon, FireIcon, ShieldCheckIcon, TruckIcon, BeakerIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const subcategories = [
  { name: 'Ambulance', icon: <TruckIcon className="h-7 w-7 text-red-500 mr-4" />, link: '#' },
  { name: 'Police', icon: <ShieldCheckIcon className="h-7 w-7 text-blue-600 mr-4" />, link: '#' },
  { name: 'Fire', icon: <FireIcon className="h-7 w-7 text-orange-500 mr-4" />, link: '#' },
  { name: 'Forest', icon: <BeakerIcon className="h-7 w-7 text-green-600 mr-4" />, link: '#' },
  { name: 'Disaster Management', icon: <ShieldCheckIcon className="h-7 w-7 text-purple-500 mr-4" />, link: '#' },
]

export default function EmergencyCategoryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
        <h1 className="text-lg font-bold text-black flex-1 text-center">Emergency</h1>
      </div>
      <div className="divide-y divide-gray-100">
        {subcategories.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center px-4 py-3 hover:bg-gray-50 transition group"
          >
            {item.icon}
            <span className="flex-1 text-base font-medium text-gray-900">{item.name}</span>
            <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  )
} 