
export enum DonationStatus {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
}

export type CategoryType = 'General' | 'Yagya' | 'Annadaan' | 'Gau Seva' | 'Festival';

export interface DonationCampaign {
  id: string;
  title: string;
  category: CategoryType;
  description: string;
  imageUrl: string;
  suggestedAmounts: number[];
  goalAmount?: number;
  currentAmount: number;
  featured: boolean;
  impactMessage?: string;
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
  amenities?: string[];
}

export interface SocialPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string;
  author?: string;
}

export interface Message {
  role: 'user' | 'ai';
  text: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'SUB_ADMIN' | 'DONOR';
  permissions?: string[];
}
