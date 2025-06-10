"use client"
import Image from 'next/image'

const dummyShops = [
  { id: 1, name: 'Cool Air Solutions', subtitle: 'Expert AC Repair', image: '/images/ac1.jpg', address: 'Main Road, Kumata', rating: 4.8, mobile: '+91 9876500101' },
  { id: 2, name: 'Fresh Breeze Services', subtitle: 'AC Installation & Service', image: '/images/ac2.jpg', address: 'Market Street, Kumata', rating: 4.7, mobile: '+91 9876500102' },
  { id: 3, name: 'Chill Zone Repairs', subtitle: 'Window & Split ACs', image: '/images/ac3.jpg', address: 'Taluk Road, Kumata', rating: 4.6, mobile: '+91 9876500103' },
  { id: 4, name: 'Polar Cool Experts', subtitle: '24/7 Service', image: '/images/ac4.jpg', address: 'Bus Stand, Kumata', rating: 4.9, mobile: '+91 9876500104' },
  { id: 5, name: 'Blue Star Care', subtitle: 'All Brands', image: '/images/ac5.jpg', address: 'Shanti Nagar, Kumata', rating: 4.5, mobile: '+91 9876500105' },
]

export default function HomeServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center justify-center">
        <h1 className="text-lg font-bold text-black">AC Repair & Service</h1>
      </div>
      <div className="p-4 space-y-4">
        {dummyShops.map((shop) => (
          <div key={shop.id} className="flex bg-gray-50 rounded-lg shadow p-3 items-center">
            <Image src={shop.image} alt={shop.name} width={64} height={64} className="rounded-lg object-cover w-16 h-16" />
            <div className="ml-4 flex-1">
              <div className="font-bold text-base">{shop.name}</div>
              <div className="text-xs text-gray-500">{shop.subtitle}</div>
              <div className="text-xs text-gray-600 mt-1">{shop.address}</div>
              <div className="text-xs text-yellow-500 font-semibold mt-1">Rating: {shop.rating} ★</div>
              <div className="text-xs text-gray-700 mt-1">Mobile: {shop.mobile}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 