'use client'

import Link from 'next/link'

const shopCategories = [
  { name: 'Medical Shops', link: '/category/shop/medical' },
  { name: 'Haircutting Shops', link: '/category/shop/haircutting' },
  { name: 'Lens Shops', link: '/category/shop/lens' },
  { name: 'Aquarium Shops', link: '/category/shop/aquarium' },
]

export default function ShopCategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-lg font-bold text-black mb-4">Shop Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shopCategories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.link}
            className="block bg-white rounded-xl shadow p-6 text-lg font-semibold text-blue-700 hover:bg-blue-50 transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
} 