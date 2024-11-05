export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface Dustbin {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  fillLevel: 'EMPTY' | 'LOW' | 'MEDIUM' | 'HIGH' | 'FULL';
  type: 'GENERAL' | 'RECYCLABLE' | 'ORGANIC';
  status: 'ACTIVE' | 'MAINTENANCE' | 'INACTIVE';
  lastServiced: string;
}

export interface Report {
  id: string;
  dustbinId: string;
  status: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'RESOLVED';
  imageUrl?: string;
  description: string;
  createdAt: string;
}