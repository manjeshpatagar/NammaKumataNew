'use client'

import Image from 'next/image'

const medicalShops = [
  { id: 1, name: 'Kumata Medical Store', subtitle: '24/7 Pharmacy', image: '/images/shopes.webp', address: 'Main Road, Kumata', rating: 4.7, ratingsCount: 30, mobile: '+91 9876500701' },
  { id: 2, name: 'Health Plus Pharmacy', subtitle: 'All Medicines Available', image: '/images/shopes.webp', address: 'Market Street, Kumata', rating: 4.6, ratingsCount: 18, mobile: '+91 9876500702' },
  { id: 3, name: 'City Medicos', subtitle: 'Discounted Medicines', image: '/images/shopes.webp', address: 'Bus Stand, Kumata', rating: 4.8, ratingsCount: 22, mobile: '+91 9876500703' },
]

function BusinessCard({ business }: { business: typeof medicalShops[0] }) {
  const handleCall = () => {
    window.location.href = `tel:${business.mobile}`;
  };

  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(business.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

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
        <div className="text-xs text-gray-500 mb-2">Mobile: {business.mobile}</div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleCall}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Call Now
          </button>
          <button
            onClick={handleDirections}
            className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Directions
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MedicalShopsListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-lg font-bold text-black mb-4">Medical Shops in Kumata</h1>
      {medicalShops.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  )
} 