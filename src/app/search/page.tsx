'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// Mock data - will be replaced with actual search results
const mockResults = [
  {
    id: 1,
    name: 'Hotel Kumata',
    category: 'Hotels',
    phone: '+91 9876543210',
    address: 'Main Road, Kumata',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Seaside Resort',
    category: 'Hotels',
    phone: '+91 9876543211',
    address: 'Beach Road, Kumata',
    rating: 4.2,
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(mockResults)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual search functionality
    // For now, just filter mock data
    const filtered = mockResults.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold text-center">Search</h1>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="p-4 bg-white shadow-sm">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for shops, services..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </form>

      {/* Search Results */}
      <div className="p-4">
        {results.map((result) => (
          <Link
            key={result.id}
            href={`/shop/${result.id}`}
            className="block bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{result.name}</h2>
                <p className="text-gray-600">{result.category}</p>
                <p className="text-gray-600 mt-1">{result.address}</p>
              </div>
              <div className="bg-primary text-white px-2 py-1 rounded">
                {result.rating} ★
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 