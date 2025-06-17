'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface FormData {
  businessName: string
  category: string
  pincode: string
  plotNumber: string
  street: string
  landmark: string
  area: string
  state: string
  phone: string
  whatsapp: string
  gstNumber: string
}

interface FormErrors {
  [key: string]: string
}

interface Notification {
  id: number
  title: string
  message: string
  time: string
  isRead: boolean
}

const categories = [
  'Hotels',
  'Restaurants',
  'Mobile Services',
  'Bike Shops',
  'Grocery Stores',
  'Medical Stores',
  'Schools',
  'Auto Services',
]

export default function AddBusiness() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    category: '',
    pincode: '',
    plotNumber: '',
    street: '',
    landmark: '',
    area: '',
    state: '',
    phone: '',
    whatsapp: '',
    gstNumber: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New Business Added',
      message: 'Hotel Kumata has been added to your directory',
      time: '2 minutes ago',
      isRead: false
    },
    {
      id: 2,
      title: 'Profile Update',
      message: 'Your profile has been successfully updated',
      time: '1 hour ago',
      isRead: false
    },
    {
      id: 3,
      title: 'System Update',
      message: 'New features have been added to Namma Kumata',
      time: '2 hours ago',
      isRead: true
    }
  ])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Business Name validation
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }

    // Pincode validation
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits'
    }

    // Plot Number validation
    if (!formData.plotNumber.trim()) {
      newErrors.plotNumber = 'Plot/Building number is required'
    }

    // Street validation
    if (!formData.street.trim()) {
      newErrors.street = 'Street/Road is required'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits'
    }

    // WhatsApp validation
    if (formData.whatsapp && !/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'WhatsApp number must be 10 digits'
    }

    // GST validation (optional but must be valid if provided)
    if (formData.gstNumber && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gstNumber)) {
      newErrors.gstNumber = 'Invalid GST number format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // TODO: Implement actual form submission
    // For now, just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    router.push('/admin/dashboard')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ))
  }

  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 bg-white shadow">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 transition-all shadow-sm mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-primary" />
        </button>
        <h1 className="text-xl font-bold text-primary">Add Business</h1>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between max-w-lg w-full mx-auto px-2 py-4 md:p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={`block w-full rounded-lg border ${errors.businessName ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              placeholder="Enter business name"
              autoComplete="off"
            />
            {errors.businessName && (
              <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`block w-full rounded-lg border ${errors.category ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-600">{errors.category}</p>
            )}
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 gap-4">
            {/* Pincode */}
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                Pincode *
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                placeholder="Enter pincode"
                maxLength={6}
                inputMode="numeric"
              />
              {errors.pincode && (
                <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>
              )}
            </div>

            {/* Plot Number */}
            <div>
              <label htmlFor="plotNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Plot/Building Number *
              </label>
              <input
                type="text"
                id="plotNumber"
                name="plotNumber"
                value={formData.plotNumber}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${errors.plotNumber ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                placeholder="Enter plot/building number"
                autoComplete="off"
              />
              {errors.plotNumber && (
                <p className="mt-1 text-xs text-red-600">{errors.plotNumber}</p>
              )}
            </div>
          </div>

          {/* Street */}
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Street/Road *
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={`block w-full rounded-lg border ${errors.street ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              placeholder="Enter street/road"
              autoComplete="off"
            />
            {errors.street && (
              <p className="mt-1 text-xs text-red-600">{errors.street}</p>
            )}
          </div>

          {/* Landmark */}
          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter nearby landmark"
              autoComplete="off"
            />
          </div>

          {/* Area and State */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter area"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter state"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                placeholder="Enter phone number"
                maxLength={10}
                inputMode="numeric"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.whatsapp && (
                <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>
              )}
            </div>
          </div>

          {/* GST */}
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-1">
              GST Number
            </label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              className={`block w-full rounded-lg border ${errors.gstNumber ? 'border-red-500' : 'border-gray-300'} px-3 py-3 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              placeholder="Enter GST number"
            />
            {errors.gstNumber && (
              <p className="mt-1 text-xs text-red-600">{errors.gstNumber}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary text-white px-4 py-3 text-base font-medium hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isSubmitting ? 'Submitting...' : 'Add Business'}
          </button>
        </div>
      </form>
    </div>
  )
}