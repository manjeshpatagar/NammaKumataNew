'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

// Mock data - will be replaced with actual advertisements
const mockAds = [
  {
    id: 1,
    title: 'Summer Special Offer',
    business: 'Hotel Kumata',
    image: 'https://via.placeholder.com/400x200',
    description: 'Get 20% off on all rooms this summer!',
  },
  {
    id: 2,
    title: 'New Menu Launch',
    business: 'Seaside Restaurant',
    image: 'https://via.placeholder.com/400x200',
    description: 'Try our new seafood specials!',
  },
]

export default function AdvertisementsPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center sticky top-0 z-10 shadow-md">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/20 hover:bg-white/40 transition-all mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-2xl font-bold text-center flex-1">Advertisements</h1>
      </div>

      {/* Advertisements List */}
      <div className="p-4">
        {mockAds.map((ad) => (
          <div
            key={ad.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden mb-4"
          >
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{ad.title}</h2>
              <p className="text-gray-600 mt-1">{ad.business}</p>
              <p className="text-gray-700 mt-2">{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 