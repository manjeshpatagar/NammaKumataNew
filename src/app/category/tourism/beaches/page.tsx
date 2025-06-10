'use client'

import Image from 'next/image'

const beaches = [
  { id: 1, name: 'Kumata Beach', subtitle: 'Popular Beach', image: '/images/beach1.jpg', address: 'Beach Road, Kumata', rating: 4.8, ratingsCount: 60, mobile: '+91 9876500501' },
  { id: 2, name: 'Sunset Point', subtitle: 'Scenic View', image: '/images/beach2.jpg', address: 'Sunset Road, Kumata', rating: 4.7, ratingsCount: 45, mobile: '+91 9876500502' },
  { id: 3, name: 'Blue Lagoon', subtitle: 'Family Spot', image: '/images/beach3.jpg', address: 'Lagoon Road, Kumata', rating: 4.6, ratingsCount: 38, mobile: '+91 9876500503' },
  { id: 4, name: 'Paradise Beach', subtitle: 'Relaxing Place', image: '/images/beach4.jpg', address: 'Paradise Lane, Kumata', rating: 4.9, ratingsCount: 55, mobile: '+91 9876500504' },
  { id: 5, name: 'Golden Sands', subtitle: 'Clean Beach', image: '/images/beach5.jpg', address: 'Golden Road, Kumata', rating: 4.5, ratingsCount: 30, mobile: '+91 9876500505' },
]

function BusinessCard({ business }: { business: typeof beaches[0] }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 mb-4 items-center">
      <div className="flex-shrink-0">
        <Image src={business.image} alt={business.name} width={72} height={72} className="rounded-lg object-cover w-20 h-20" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-base text-gray-900 truncate">{business.name}</span>
        </div>
        <div className="text-xs text-primary font-semibold mb-1 truncate">{business.subtitle}</div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">{business.rating} ★</span>
          <span className="text-xs text-gray-500">{business.ratingsCount} Ratings</span>
        </div>
        <div className="text-sm text-gray-700 truncate mb-1">{business.address}</div>
        <div className="text-xs text-gray-500">Mobile: {business.mobile}</div>
      </div>
    </div>
  )
}

export default function BeachesListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-lg font-bold text-black mb-4">Beaches in Kumata</h1>
      {beaches.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  )
} 