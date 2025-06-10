'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function TermsPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white p-6 text-center shadow-md sticky top-0 z-10 flex items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/20 hover:bg-white/40 transition-all mr-2"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Terms and Conditions</h1>
      </div>
      <div className="max-w-lg mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-4 text-gray-800 text-sm leading-relaxed">
          <p>This is a sample terms and conditions content for Namma Kumata. By using this app, you agree to our terms and conditions. Please read them carefully before using our services.</p>
        </div>
      </div>
    </div>
  )
} 