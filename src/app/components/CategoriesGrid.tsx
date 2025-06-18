'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const categories = [
  { name: 'Hospitals', image: '/images/hospital.jpg', link: '/category/hospitals' },
  { name: 'Departments', image: '/images/department.jpg', link: '/category/departments' },
  { name: 'Associations', image: '/images/associations.jpg', link: '/category/associations' },
  { name: 'Banks', image: '/images/bank.jpg', link: '/category/banks' },
  { name: 'Shopes', image: '/images/shopes.webp', link: '/category/shop' },
  { name: 'Tourism', image: '/images/tourism.jpg', link: '/category/tourism' },
  { name: 'Hotels', image: '/images/hotels.jpg', link: '/category/hotels' },
  { name: 'Rent Vehicles', image: '/images/rent-vehicles.jpg', link: '/category/rent-vehicles' },
  { name: 'Wedding Plannings', image: '/images/weddingplannings.jpg', link: '/category/weddingplannings' },
  { name: 'Schools & Colleges', image: '/images/school.jpg', link: '/category/schools-colleges' },
  { name: 'Emergency', image: '/images/emergency.jpg', link: '/category/emergency' },
  { name: 'Sports & Equipment', image: '/images/sports.jpg', link: '/category/sports-equipment' },
]

export default function CategoriesGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsVisible(true)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            href={category.link}
            className={`relative rounded-lg shadow-md overflow-hidden group h-28 md:h-32 lg:h-32 transition-opacity duration-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
            prefetch={false}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform group-hover:scale-105"
              priority={index < 4}
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            <span className="absolute bottom-0 left-0 right-0 text-center text-base font-bold text-white pb-2 px-1">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 