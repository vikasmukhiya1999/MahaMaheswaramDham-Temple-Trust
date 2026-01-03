
import React from 'react';
import { Home, MapPin, Heart, Calendar, Info, ShieldCheck, Grid, MessageSquare, Compass } from 'lucide-react';
import { DonationCampaign, Facility, SocialPost } from './types';

export const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'Pilgrimage', path: '/visit', icon: <Compass size={18} /> },
  { name: 'Donations', path: '/donations', icon: <Heart size={18} /> },
  { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
  { name: 'Facilities', path: '/facilities', icon: <Grid size={18} /> },
  { name: 'Chronicles', path: '/social', icon: <MessageSquare size={18} /> },
];

export const CAMPAIGNS: DonationCampaign[] = [
  {
    id: '1',
    title: 'Daily Annadaan Seva',
    category: 'Annadaan',
    description: 'Nourishing souls through the sacred tradition of free food distribution to pilgrims and the underprivileged.',
    impactMessage: '₹50 provides a complete nutritious meal to one person.',
    imageUrl: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [501, 1100, 2100, 5100],
    currentAmount: 345000,
    goalAmount: 1000000,
    featured: true,
  },
  {
    id: '2',
    title: 'Nanda Gaushala Support',
    category: 'Gau Seva',
    description: 'Providing a sanctuary for abandoned and aged cows with premium fodder and 24/7 veterinary care.',
    impactMessage: '₹1000 provides green fodder for 5 cows for a day.',
    imageUrl: 'https://images.unsplash.com/photo-1545468843-27956f32958a?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [251, 501, 1001, 2501],
    currentAmount: 189000,
    goalAmount: 500000,
    featured: true,
  },
  {
    id: '3',
    title: 'Maha Yagya Purnahuti',
    category: 'Yagya',
    description: 'Participate in the cosmic vibrations of our monthly Shanti Yagya for global peace.',
    impactMessage: 'Includes a digital certificate of participation.',
    imageUrl: 'https://images.unsplash.com/photo-1621274403997-37aae1848b40?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [1001, 2101, 5101],
    currentAmount: 145000,
    goalAmount: 300000,
    featured: false,
  },
  {
    id: 'festival-diwali',
    title: 'Deepawali Jyoti Seva',
    category: 'Festival',
    description: 'Help us light up the entire Dham complex with 21,000 traditional handmade earthen diyas.',
    impactMessage: 'One Diya costs ₹11. Light as many as you wish.',
    imageUrl: 'https://images.unsplash.com/photo-1543059231-64582f3c3a9d?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [501, 1101, 2501, 5101],
    currentAmount: 120000,
    goalAmount: 250000,
    featured: true,
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Mangal Vivah Bhawan',
    description: 'A grand hall dedicated to helping economically weaker sections celebrate weddings with full Vedic rituals and dignity.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    amenities: ['Vedic Mandap', 'Dining Hall', 'Guest Rooms', 'Kitchen Access'],
    rules: ['Mandatory Vegetarianism', 'No Alcohol', 'Strict 10 PM Curfew'],
    status: 'Available',
    enquiryCTA: 'Book Venue'
  },
  {
    id: 'f2',
    name: 'Shakti Open Gym',
    description: 'Promoting Physical Seva (Body is the Temple) with state-of-the-art outdoor fitness equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    amenities: ['Pull-up Bars', 'Leg Press', 'Cardio Rowers'],
    rules: ['Age 15+', 'Proper Footwear', 'Max 60 mins usage'],
    status: 'Available',
    enquiryCTA: 'Check Rules'
  },
  {
    id: 'f3',
    name: 'Rishi Van Park',
    description: 'A quiet ecological preserve for meditation, containing rare Himalayan herbs and sacred trees.',
    imageUrl: 'https://images.unsplash.com/photo-1518132047140-98da13edcfc2?auto=format&fit=crop&q=80&w=800',
    amenities: ['Meditation Pods', 'Herbal Garden', 'Walking Trail'],
    rules: ['Silence Please', 'No Plastics', 'Dawn to Dusk'],
    status: 'Available',
    enquiryCTA: 'Explore Van'
  }
];

export const POSTS: SocialPost[] = [
  {
    id: 'p1',
    title: 'Transforming Lives through Seva',
    content: 'Our latest winter distribution drive reached the remotest parts of the Divine Valley, providing warmth to over 500 families.',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800',
    tags: ['Impact', 'WinterDrive', 'Community'],
    publishedAt: '2024-05-12',
    author: 'Trust Editorial Team'
  }
];
