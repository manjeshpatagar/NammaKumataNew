'use client'

import Image from 'next/image'

const dentists = [
  {
    id: 1,
    name: "Dr Vora's Dental Care",
    image: '/images/dentist1.jpg',
    location: 'Road Junction, Kumata',
    rating: 4.9,
    ratingsCount: 42,
    contact: '+91 9876543210',
  },
  {
    id: 2,
    name: 'Root Cure',
    image: '/images/dentist2.jpg',
    location: 'Shanti Park Road, Kumata',
    rating: 4.7,
    ratingsCount: 18,
    contact: '+91 9876543211',
  },
  {
    id: 3,
    name: 'Smile Dental Studio',
    image: '/images/dentist3.jpg',
    location: 'Market Road, Kumata',
    rating: 4.8,
    ratingsCount: 25,
    contact: '+91 9876543212',
  },
  {
    id: 4,
    name: 'Bright Teeth Clinic',
    image: '/images/dentist4.jpg',
    location: 'Near Bus Stand, Kumata',
    rating: 4.6,
    ratingsCount: 30,
    contact: '+91 9876543213',
  },
  {
    id: 5,
    name: 'Healthy Smile Dental Care',
    image: '/images/dentist5.jpg',
    location: 'Opp. City Hospital, Kumata',
    rating: 4.5,
    ratingsCount: 20,
    contact: '+91 9876543214',
  },
]

function BusinessCard({ business }: { business: typeof dentists[0] }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 mb-4 items-center">
      <div className="flex-shrink-0">
        <Image
          src={business.image}
          alt={business.name}
          width={72}
          height={72}
          className="rounded-lg object-cover w-20 h-20"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-base text-gray-900 truncate">{business.name}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">{business.rating} ★</span>
          <span className="text-xs text-gray-500">{business.ratingsCount} Ratings</span>
        </div>
        <div className="text-sm text-gray-700 truncate mb-1">{business.location}</div>
        <div className="text-xs text-gray-500">Contact: {business.contact}</div>
      </div>
    </div>
  )
}

export default function DentistsListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-lg font-bold text-black mb-4">Dentists in Kumata</h1>
      {dentists.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  )
} 