import React from 'react';
import { MapPin } from 'lucide-react';
import DustbinCard from '../components/DustbinCard';
import { Dustbin } from '../types';

const mockDustbins: Dustbin[] = [
  {
    id: '1',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: '123 Green Street'
    },
    fillLevel: 'MEDIUM',
    type: 'GENERAL',
    status: 'ACTIVE',
    lastServiced: '2024-03-10T10:00:00Z'
  },
  {
    id: '2',
    location: {
      latitude: 40.7129,
      longitude: -74.0061,
      address: '456 Eco Avenue'
    },
    fillLevel: 'HIGH',
    type: 'RECYCLABLE',
    status: 'ACTIVE',
    lastServiced: '2024-03-09T15:30:00Z'
  }
];

export default function HomePage() {
  const handleReport = (id: string) => {
    // Add report handling logic
    console.log('Reporting dustbin:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-emerald-600 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome to WasteWise</h1>
              <p className="text-emerald-100 mt-1">
                Find and report waste bins in your area
              </p>
            </div>
            <MapPin className="h-12 w-12 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDustbins.map((dustbin) => (
            <DustbinCard
              key={dustbin.id}
              dustbin={dustbin}
              onReport={handleReport}
            />
          ))}
        </div>
      </div>
    </div>
  );
}