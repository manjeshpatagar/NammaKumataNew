'use client'

import { ChevronRightIcon, UserGroupIcon, ScaleIcon, AcademicCapIcon, WrenchScrewdriverIcon, ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const subcategories = [
  { name: 'Medical', icon: <UserGroupIcon className="h-7 w-7 text-red-500 mr-4" />, link: '/category/associations/medical' },
  { name: 'Legal', icon: <ScaleIcon className="h-7 w-7 text-blue-500 mr-4" />, link: '/category/associations/legal' },
  { name: 'Teachers', icon: <AcademicCapIcon className="h-7 w-7 text-green-500 mr-4" />, link: '/category/associations/teachers' },
  { name: 'Engineers', icon: <WrenchScrewdriverIcon className="h-7 w-7 text-yellow-500 mr-4" />, link: '/category/associations/engineers' },
  { name: 'Traders', icon: <ShoppingBagIcon className="h-7 w-7 text-purple-500 mr-4" />, link: '/category/associations/traders' },
]

export default function AssociationsCategoryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center shadow-sm">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-all mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
        <h1 className="text-xl font-extrabold text-black flex-1 text-center tracking-wide">
          Doctors
        </h1>
      </div>
      <div className="divide-y divide-gray-100">
        {subcategories.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="
              flex items-center px-4 py-3
              bg-white hover:bg-gray-50 transition
              rounded-lg mb-2 shadow-sm
              group
            "
            style={{ textDecoration: 'none' }}
          >
            <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 mr-4">
              {item.icon}
            </span>
            <span className="flex-1 text-base font-semibold text-gray-900 group-hover:text-primary">
              {item.name}
            </span>
            <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  )
} 