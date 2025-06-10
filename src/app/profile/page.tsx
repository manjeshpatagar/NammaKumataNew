'use client'

import Link from 'next/link'
import { useState } from 'react'
import { UserCircleIcon, ArrowRightOnRectangleIcon, ShareIcon, LanguageIcon, DocumentTextIcon, InformationCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'

const kannada = {
  myBusiness: 'ನನ್ನ ವ್ಯವಹಾರ',
  languages: 'ಭಾಷೆಗಳು',
  english: 'ಇಂಗ್ಲಿಷ್',
  kannada: 'ಕನ್ನಡ',
  shareApp: 'ಆಪ್ ಹಂಚಿಕೊಳ್ಳಿ',
  privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
  terms: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
  about: 'ನಮ್ಮ ಬಗ್ಗೆ',
  logout: 'ಲಾಗ್ ಔಟ್',
  privacyContent: 'ಇದು ಗೌಪ್ಯತಾ ನೀತಿಯ ಉದಾಹರಣೆ ವಿಷಯ.',
  termsContent: 'ಇದು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳ ಉದಾಹರಣೆ ವಿಷಯ.',
  aboutContent: 'ನಮ್ಮ ಬಗ್ಗೆ: ನಮ್ಮಕುಮಟಾ ಸ್ಥಳೀಯ ವ್ಯವಹಾರಗಳ ಡೈರೆಕ್ಟರಿ.',
}

const english = {
  myBusiness: 'My Business',
  languages: 'Languages',
  english: 'English',
  kannada: 'Kannada',
  shareApp: 'Share App',
  privacyPolicy: 'Privacy Policy',
  terms: 'Terms and Conditions',
  about: 'About Us',
  logout: 'Logout',
  privacyContent: 'This is a sample privacy policy content.',
  termsContent: 'This is a sample terms and conditions content.',
  aboutContent: 'About Us: Namma Kumata is a local business directory.',
}

export default function ProfilePage() {
  const [lang, setLang] = useState<'en' | 'kn'>('en')
  const t = lang === 'kn' ? kannada : english

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Namma Kumata',
        text: 'Check out Namma Kumata local business directory!',
        url: window.location.origin,
      })
    } else {
      alert('Share not supported on this device.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white p-6 flex flex-col items-center">
        <UserCircleIcon className="h-16 w-16 mb-2" />
        <h1 className="text-xl font-bold">Profile</h1>
      </div>
      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* My Business */}
        <Link href="/admin/add-business" className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <BuildingStorefrontIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.myBusiness}</span>
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-400" />
        </Link>
        {/* Languages */}
        <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center">
            <LanguageIcon className="h-6 w-6 mr-3 text-primary" />
            <span className="font-medium">{t.languages}</span>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-sm font-semibold border ${lang==='en' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>{t.english}</button>
            <button onClick={() => setLang('kn')} className={`px-3 py-1 rounded-full text-sm font-semibold border ${lang==='kn' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>{t.kannada}</button>
          </div>
        </div>
        {/* Share App */}
        <button onClick={handleShare} className="flex items-center w-full p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <ShareIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.shareApp}</span>
        </button>
        {/* Privacy Policy */}
        <Link href="/privacy-policy" className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <DocumentTextIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.privacyPolicy}</span>
        </Link>
        {/* Terms and Conditions */}
        <Link href="/terms" className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <DocumentTextIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.terms}</span>
        </Link>
        {/* About Us */}
        <Link href="/about" className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <InformationCircleIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.about}</span>
        </Link>
        {/* Logout */}
        <button className="flex items-center w-full p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition">
          <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3 text-primary" />
          <span className="flex-1 font-medium">{t.logout}</span>
        </button>
      </div>
    </div>
  )
} 