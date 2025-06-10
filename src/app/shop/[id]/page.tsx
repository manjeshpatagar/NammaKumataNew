import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

// Mock data - will be replaced with database data
const mockShop = {
  id: 1,
  name: 'Hotel Kumata',
  phone: '+91 9876543210',
  whatsapp: '+91 9876543210',
  address: 'Main Road, Kumata',
  description: 'A comfortable hotel in the heart of Kumata with modern amenities and great service.',
  rating: 4.5,
  category: 'Hotels',
  gstNumber: '29ABCDE1234F1Z5',
  location: {
    lat: 14.4280,
    lng: 74.4187,
  },
}

export default function ShopPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold text-center">{mockShop.name}</h1>
      </header>

      {/* Shop Details */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold">{mockShop.name}</h2>
              <p className="text-gray-600">{mockShop.category}</p>
            </div>
            <div className="bg-primary text-white px-3 py-1 rounded">
              {mockShop.rating} ★
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>{mockShop.phone}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>{mockShop.address}</span>
            </div>
            {mockShop.gstNumber && (
              <div className="text-gray-700">
                <span className="font-medium">GST:</span> {mockShop.gstNumber}
              </div>
            )}
          </div>

          <p className="mt-4 text-gray-700">{mockShop.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`tel:${mockShop.phone}`}
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${mockShop.whatsapp.replace('+', '')}`}
            className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps?q=${mockShop.location.lat},${mockShop.location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  )
} 