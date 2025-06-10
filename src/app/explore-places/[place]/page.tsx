"use client"
import Image from 'next/image'

const dummyParks = [
  {
    id: 1,
    name: 'Green Valley Park',
    images: ['/images/park1.jpg', '/images/park2.jpg', '/images/park3.jpg', '/images/park4.jpg'],
    open: '6:00 AM',
    close: '8:00 PM',
    rating: 4.7,
    details: 'A beautiful park with walking trails, kids play area, and lots of greenery.'
  },
  {
    id: 2,
    name: 'Sunrise Garden',
    images: ['/images/park5.jpg', '/images/park6.jpg', '/images/park7.jpg', '/images/park8.jpg'],
    open: '5:30 AM',
    close: '7:30 PM',
    rating: 4.6,
    details: 'Perfect for morning walks and yoga, with a serene lake view.'
  },
  {
    id: 3,
    name: 'City Central Park',
    images: ['/images/park9.jpg', '/images/park10.jpg', '/images/park11.jpg', '/images/park12.jpg'],
    open: '6:00 AM',
    close: '9:00 PM',
    rating: 4.8,
    details: 'Large open spaces, jogging tracks, and a small café.'
  },
  {
    id: 4,
    name: 'Lotus Eco Park',
    images: ['/images/park13.jpg', '/images/park14.jpg', '/images/park15.jpg', '/images/park16.jpg'],
    open: '7:00 AM',
    close: '7:00 PM',
    rating: 4.5,
    details: 'Eco-friendly park with lots of native plants and a butterfly garden.'
  },
  {
    id: 5,
    name: 'Riverfront Park',
    images: ['/images/park17.jpg', '/images/park18.jpg', '/images/park19.jpg', '/images/park20.jpg'],
    open: '6:30 AM',
    close: '8:30 PM',
    rating: 4.9,
    details: 'Scenic river views, picnic spots, and boating facilities.'
  },
]

export default function ExplorePlacePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center justify-center">
        <h1 className="text-lg font-bold text-black">Parks</h1>
      </div>
      <div className="p-4 space-y-6">
        {dummyParks.map((park) => (
          <div key={park.id} className="bg-gray-50 rounded-lg shadow p-4">
            <div className="font-bold text-lg mb-2">{park.name}</div>
            <div className="flex space-x-2 mb-2">
              {park.images.map((img, idx) => (
                <Image key={idx} src={img} alt={park.name + ' image ' + (idx+1)} width={80} height={60} className="rounded object-cover w-20 h-16" />
              ))}
            </div>
            <div className="text-xs text-gray-600 mb-1">Open: {park.open} - Close: {park.close}</div>
            <div className="text-xs text-yellow-500 font-semibold mb-1">Rating: {park.rating} ★</div>
            <div className="text-xs text-gray-700">{park.details}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 