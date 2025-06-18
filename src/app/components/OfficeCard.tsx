'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface Office {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  address: string;
  rating: number;
  ratingsCount: number;
  mobile: string;
}

interface OfficeCardProps {
  office: Office;
}

const OfficeCard: React.FC<OfficeCardProps> = ({ office }) => {
  const handleCall = () => {
    window.location.href = `tel:${office.mobile}`;
  };

  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(office.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden items-center p-4 mb-4">
      <div className="flex-shrink-0 w-20 h-20 relative">
        <Image
          src={office.image}
          alt={office.name}
          fill
          className="object-contain rounded"
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="flex items-center mb-1">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded mr-2 flex items-center">
            <span className="mr-1 text-lg">🔥</span> Trending
          </span>
          <span className="font-bold text-lg text-gray-900">{office.name}</span>
        </div>
        <div className="flex items-center mb-1">
          <span className="bg-green-600 text-white text-sm font-semibold px-2 py-0.5 rounded flex items-center">
            {office.rating} ★
          </span>
          <span className="ml-2 text-gray-700 text-sm font-medium">{office.ratingsCount} Ratings</span>
        </div>
        <div className="text-gray-600 text-sm mb-1">{office.address}</div>
        <div className="text-gray-500 text-xs">{office.subtitle}</div>
        <div className="flex mt-4 space-x-2">
          <button
            onClick={handleCall}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Call Now
          </button>
          <button
            onClick={handleDirections}
            className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            <MapPinIcon className="h-5 w-5 mr-2" />
            Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeCard; 