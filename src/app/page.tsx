'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState, useRef, useEffect } from 'react'
import { ChevronRightIcon, BuildingOffice2Icon, FireIcon, ShieldCheckIcon, TruckIcon, BoltIcon, GlobeAsiaAustraliaIcon, CurrencyRupeeIcon, HeartIcon, UserIcon, BeakerIcon, UserGroupIcon, FaceSmileIcon, SparklesIcon, AcademicCapIcon, StarIcon, CakeIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

// Dynamically import the categories grid
const CategoriesGrid = dynamic(() => import('./components/CategoriesGrid'), {
  loading: () => (
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
  ),
  ssr: false
})

const categories = [
  { name: 'Hospitals', image: '/images/hospital.jpg', link: '/category/hospitals' },
  { name: 'Departments', image: '/images/department.jpg', link: '/category/departments' },
  { name: 'Associations', image: '/images/associations.jpg', link: '/category/associations' },
  { name: 'Banks', image: '/images/bank.jpg', link: '/category/banks' },
  { name: 'Tourism', image: '/images/tourism.jpg', link: '/category/tourism' },
  { name: 'Hotels', image: '/images/hotels.jpg', link: '/category/hotels' },
  { name: 'Rent Vehicles', image: '/images/rent-vehicles.jpg', link: '/category/rent-vehicles' },
  { name: 'Wedding Plannings', image: '/images/weddingplannings.jpg', link: '/category/weddingplannings' },
  { name: 'Schools & Colleges', image: '/images/school.jpg', link: '/category/schools-colleges' },
  { name: 'Emergency', image: '/images/emergency.jpg', link: '/category/emergency' },
  { name: 'Sports & Equipment', image: '/images/sports.jpg', link: '/category/sports-equipment' },
]

// Mock data for featured businesses
const featuredBusinesses = [
  // Schools & Colleges
  {
    id: 3,
    name: 'Government High School',
    phone: '+91 9876543212',
    address: 'School Road, Kumata',
    rating: 4.3,
    category: 'Government Schools',
  },
  {
    id: 4,
    name: 'St. Mary\'s Private School',
    phone: '+91 9876543213',
    address: 'Church Road, Kumata',
    rating: 4.7,
    category: 'Private Schools',
  },
  {
    id: 5,
    name: 'Government College',
    phone: '+91 9876543214',
    address: 'College Road, Kumata',
    rating: 4.4,
    category: 'Government Colleges',
  },
  {
    id: 6,
    name: 'Kumata Private College',
    phone: '+91 9876543215',
    address: 'Main Road, Kumata',
    rating: 4.6,
    category: 'Private Colleges',
  },
  // Emergency Services
  {
    id: 7,
    name: 'Kumata Ambulance Service',
    phone: '+91 9876543216',
    address: 'Hospital Road, Kumata',
    rating: 4.8,
    category: 'Ambulance',
  },
  {
    id: 8,
    name: 'Kumata Police Station',
    phone: '+91 9876543217',
    address: 'Police Road, Kumata',
    rating: 4.5,
    category: 'Police',
  },
  {
    id: 9,
    name: 'Forest Department',
    phone: '+91 9876543218',
    address: 'Forest Road, Kumata',
    rating: 4.4,
    category: 'Forest',
  },
  {
    id: 10,
    name: 'Fire Station',
    phone: '+91 9876543219',
    address: 'Fire Station Road, Kumata',
    rating: 4.7,
    category: 'Fire',
  },
  // Sports & Equipment
  {
    id: 11,
    name: 'Kumata Sports Complex',
    phone: '+91 9876543220',
    address: 'Sports Road, Kumata',
    rating: 4.6,
    category: 'Sports Complex',
  },
  {
    id: 12,
    name: 'Sports Equipment Shop',
    phone: '+91 9876543221',
    address: 'Market Road, Kumata',
    rating: 4.3,
    category: 'Sports Equipment',
  },
]

const homeServices = [
  { name: 'AC Repair & Service', image: '/images/acrepairservice.jpg', slug: 'ac-repair-service' },
  { name: 'Painters', image: '/images/painters.jpg', slug: 'painters' },
  { name: 'Pest Control', image: '/images/pest.jpg', slug: 'pest-control' },
  { name: 'Plumbers', image: '/images/plumbers.jpg', slug: 'plumbers' },
]

const explorePlaces = [
  { name: 'Parks', image: '/images/park.jpg', slug: 'parks' },
  { name: 'Beaches', image: '/images/beach.jpg', slug: 'beaches' },
  { name: 'Temples', image: '/images/temple.jpg', slug: 'temples' },
  { name: 'Waterfalls', image: '/images/falls.jpg', slug: 'waterfalls' },
]

const searchPlaceholders = [
  "Search for shops, services...",
  "Find hotels near you...",
  "Looking for hospitals?",
  "Discover local banks...",
  "Explore schools & colleges...",
  "Need emergency contacts?",
];

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const notifications = [
    { id: 1, title: 'Welcome!', message: 'Thanks for using Namma Kumata.', time: 'Just now' },
    { id: 2, title: 'New Business', message: 'Hotel Kumata added.', time: '2 min ago' },
    { id: 3, title: 'Update', message: 'New features released.', time: '1 hour ago' },
  ]

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false)
      }
    }
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNotifications])

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white p-3 md:p-4 sticky top-0 z-10 shadow-md rounded-b-2xl">
        <div className="relative max-w-2xl mx-auto flex items-center justify-between">
          {/* Profile Icon */}
          <Link href="/profile" aria-label="Profile">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 transition-all shadow-sm">
              <UserCircleIcon className="h-7 w-7 text-primary" />
            </button>
          </Link>
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-center tracking-tight flex-1 select-none">
            <span
              className="bg-gradient-to-r from-[#FFEB3B] to-[#D32F2F] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Namma
            </span>
            <span className="text-primary ml-2">Kumata</span>
          </h1>
          {/* Bell Icon */}
          <Link href="/notifications" aria-label="Notifications">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 transition-all shadow-sm">
              <BellIcon className="h-7 w-7 text-primary" />
            </button>
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white shadow-sm flex justify-center">
        <div className="relative group w-full">
          <input
            type="text"
            placeholder={searchPlaceholders[placeholderIndex]}
            className="w-full p-2 pl-9 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white shadow group-focus-within:shadow-lg group-focus-within:bg-gray-100"
            style={{ height: "45px" }}
          />
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Categories Grid */}
      <CategoriesGrid />

      {/* Advertisement Banner Section */}
      <div className="px-4 mb-4">
        <div className="w-full h-24 md:h-32 rounded-xl bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white text-xl font-bold shadow">
          Advertisement Banner
        </div>
      </div>

      {/* Home Services Section */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Home Services</h2>
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {homeServices.map((service) => (
            <Link
              key={service.name}
              href={`/home-services/${service.slug}`}
              className="relative min-w-[120px] w-32 h-40 rounded-xl overflow-hidden shadow group flex-shrink-0"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-bold text-white px-2 drop-shadow-lg tracking-wide">
                {service.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Places Section */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Explore Places</h2>
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {explorePlaces.map((place) => (
            <Link
              key={place.name}
              href={`/explore-places/${place.slug}`}
              className="relative min-w-[120px] w-32 h-40 rounded-xl overflow-hidden shadow group flex-shrink-0"
              style={{ backgroundImage: `url(${place.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-bold text-white px-2 drop-shadow-lg tracking-wide">
                {place.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Are you a business owner?
          </h2>
          <p className="text-gray-600 mb-6">
            List your business on Namma Kumata and reach more customers
          </p>
          <Link
            href="/add-business/login"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Add Your Business
          </Link>
        </div>
      </div>
    </div>
  )
} 