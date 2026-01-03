
export enum DonationStatus {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
}

export interface DonationCampaign {
  id: string;
  title: string;
  category: 'General' | 'Yagya' | 'Annadaan' | 'Gau Seva' | 'Festival';
  description: string;
  imageUrl: string;
  suggestedAmounts: number[];
  goalAmount?: number;
  currentAmount: number;
  featured: boolean;
}

export interface TempleEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'Festival' | 'Annadaan' | 'Yagya' | 'Social Work';
  imageUrl: string;
  isRecurring?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rules: string[];
  status: 'Available' | 'Full' | 'Maintenance';
  enquiryCTA: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  active: boolean;
  order: number;
}

export interface SocialPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'SUB_ADMIN' | 'DONOR';
  permissions?: string[];
}
