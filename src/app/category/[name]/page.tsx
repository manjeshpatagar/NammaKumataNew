import Link from 'next/link'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

// Mock data - will be replaced with database data
const mockBusinesses = [
  {
    id: 1,
    name: 'Hotel Kumata',
    phone: '+91 9876543210',
    address: 'Main Road, Kumata',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Seaside Resort',
    phone: '+91 9876543211',
    address: 'Beach Road, Kumata',
    rating: 4.2,
  },
]

export default function CategoryPage({ params }: { params: { name: string } }) {
  const categoryName = params.name.charAt(0).toUpperCase() + params.name.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold text-center">{categoryName}</h1>
      </header>

      {/* Business List */}
      <div className="p-4">
        {mockBusinesses.map((business) => (
          <Link
            key={business.id}
            href={`/shop/${business.id}`}
            className="block bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{business.name}</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{business.address}</span>
                </div>
              </div>
              <div className="bg-primary text-white px-2 py-1 rounded">
                {business.rating} ★
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 