'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, MagnifyingGlassIcon, PlusIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center ${
              isActive('/') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>

          {/* Search */}
          <Link
            href="/search"
            className={`flex flex-col items-center ${
              isActive('/search') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </Link>

          {/* Add Business */}
          <Link
            href="add-business"
            className={`flex flex-col items-center ${
              isActive('add-business') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <PlusIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Add</span>
          </Link>

          {/* Advertisements */}
          <Link
            href="/advertisements"
            className={`flex flex-col items-center ${
              isActive('/advertisements') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <MegaphoneIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Ads</span>
          </Link>
        </div>
      </div>
    </footer>
  )
} 