'use client'

import { ChevronRightIcon, HeartIcon, BeakerIcon, UserGroupIcon, UserIcon, FaceSmileIcon, SparklesIcon, StarIcon, AcademicCapIcon, CakeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const subcategories = [
  { name: 'Ayurvedic Doctors', icon: <BeakerIcon className="h-7 w-7 text-green-600 mr-4" />, link: '/category/hospitals/ayurvedic-doctors' },
  { name: 'Bone & Joints Doctors', icon: <UserGroupIcon className="h-7 w-7 text-yellow-600 mr-4" />, link: '/category/hospitals/bone-joints-doctors' },
  { name: 'Cardiologists', icon: <HeartIcon className="h-7 w-7 text-pink-500 mr-4" />, link: '/category/hospitals/cardiologists' },
  { name: 'Chest Specialists', icon: <FaceSmileIcon className="h-7 w-7 text-blue-500 mr-4" />, link: '/category/hospitals/chest-specialists' },
  { name: 'Child Specialist Doctors', icon: <UserIcon className="h-7 w-7 text-orange-500 mr-4" />, link: '/category/hospitals/child-specialist-doctors' },
  { name: 'Cosmetic Surgeons', icon: <SparklesIcon className="h-7 w-7 text-purple-500 mr-4" />, link: '/category/hospitals/cosmetic-surgeons' },
  { name: 'Dentists', icon: <StarIcon className="h-7 w-7 text-yellow-500 mr-4" />, link: '/category/hospitals/dentists' },
  { name: 'Dermatologists', icon: <FaceSmileIcon className="h-7 w-7 text-green-500 mr-4" />, link: '/category/hospitals/dermatologists' },
  { name: 'Diabetologists', icon: <BeakerIcon className="h-7 w-7 text-blue-600 mr-4" />, link: '/category/hospitals/diabetologists' },
  { name: 'Dietitians', icon: <CakeIcon className="h-7 w-7 text-pink-400 mr-4" />, link: '/category/hospitals/dietitians' },
]

export default function HospitalsCategoryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center shadow-sm">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all mr-3"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
        <h1 className="text-xl font-extrabold text-black flex-1 text-center tracking-wide">Doctors</h1>
      </div>
      <div className="space-y-3 p-3">
        {subcategories.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center bg-white rounded-xl shadow group px-4 py-3 hover:bg-gray-50 transition cursor-pointer"
          >
            <span className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mr-4 text-xl">
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