import React from 'react';
import { Trash2, AlertTriangle, CheckCircle } from 'lucide-react';
import { Dustbin } from '../types';

interface DustbinCardProps {
  dustbin: Dustbin;
  onReport: (id: string) => void;
}

export default function DustbinCard({ dustbin, onReport }: DustbinCardProps) {
  const getFillLevelColor = (level: string) => {
    switch (level) {
      case 'EMPTY':
        return 'bg-green-100 text-green-800';
      case 'LOW':
        return 'bg-blue-100 text-blue-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'HIGH':
        return 'bg-orange-100 text-orange-800';
      case 'FULL':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'MAINTENANCE':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'INACTIVE':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Trash2 className="h-8 w-8 text-emerald-600" />
          <div>
            <h3 className="font-semibold text-gray-900">
              {dustbin.type} Bin
            </h3>
            <p className="text-sm text-gray-500">{dustbin.location.address}</p>
          </div>
        </div>
        {getStatusIcon(dustbin.status)}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFillLevelColor(dustbin.fillLevel)}`}>
            {dustbin.fillLevel}
          </span>
          <span className="text-sm text-gray-500">
            Last serviced: {new Date(dustbin.lastServiced).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => onReport(dustbin.id)}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Report Issue
        </button>
      </div>
    </div>
  );
}