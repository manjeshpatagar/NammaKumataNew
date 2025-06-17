'use client'

import { useParams } from 'next/navigation'

export default function CategoryPage() {
  const params = useParams()
  const categoryName = params.name as string

  // Format the category name for display (e.g., "hospitals" -> "Hospitals")
  const formattedName = categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{formattedName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for category items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Content for {formattedName} will be displayed here.</p>
        </div>
      </div>
    </div>
  )
} 