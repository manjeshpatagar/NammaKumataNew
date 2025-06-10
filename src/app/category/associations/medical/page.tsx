'use client'

import Image from 'next/image'

const associations = [
  { id: 1, name: 'Kumata Medical Association', subtitle: 'Doctors Network', image: '/images/medical1.jpg', address: 'Main Road, Kumata', rating: 4.8, ratingsCount: 35, mobile: '+91 9876500301' },
  { id: 2, name: 'Ayurveda Doctors Group', subtitle: 'Ayurvedic Practitioners', image: '/images/medical2.jpg', address: 'Market Street, Kumata', rating: 4.7, ratingsCount: 22, mobile: '+91 9876500302' },
  { id: 3, name: 'Dental Surgeons Forum', subtitle: 'Dentists Association', image: '/images/medical3.jpg', address: 'Dental Lane, Kumata', rating: 4.6, ratingsCount: 18, mobile: '+91 9876500303' },
  { id: 4, name: 'Homeopathy Council', subtitle: 'Homeopathy Doctors', image: '/images/medical4.jpg', address: 'Bus Stand, Kumata', rating: 4.9, ratingsCount: 40, mobile: '+91 9876500304' },
  { id: 5, name: 'Specialist Doctors Group', subtitle: 'Specialists Network', image: '/images/medical5.jpg', address: 'Shanti Nagar, Kumata', rating: 4.5, ratingsCount: 15, mobile: '+91 9876500305' },
]

function BusinessCard({ business }: { business: typeof associations[0] }) {
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

export default function MedicalAssociationsListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-lg font-bold text-black mb-4">Medical Associations in Kumata</h1>
      {associations.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  )
} 