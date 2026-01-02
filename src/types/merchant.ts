// Merchant-related TypeScript types

export interface MerchantProfile {
  id?: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  businessType: string;
  description: string;
  certifications: Certification[];
  portfolio: PortfolioImage[];
  services: Service[];
  workingHours: WorkingHours;
  status: 'pending' | 'approved' | 'rejected';
  createdAt?: Date;
}

export interface Certification {
  id: string;
  type: string;
  file: string;
  fileName: string;
  fileSize: number;
  uploadedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: string;
}

export interface PortfolioImage {
  id: string;
  url: string;
  caption: string;
  order: number;
}

export interface WorkingHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  breaks?: Break[];
}

export interface Break {
  startTime: string;
  endTime: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  duration: number;
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled';
  notes?: string;
  merchantId: string;
  createdAt: Date;
}
