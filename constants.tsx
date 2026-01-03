
import React from 'react';
import { Home, MapPin, Heart, Calendar, Info, ShieldCheck, Grid, MessageSquare } from 'lucide-react';
import { DonationCampaign, TempleEvent, Facility, Banner, SocialPost } from './types';

export const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'Visit', path: '/visit', icon: <MapPin size={18} /> },
  { name: 'Donations', path: '/donations', icon: <Heart size={18} /> },
  { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
  { name: 'Facilities', path: '/facilities', icon: <Grid size={18} /> },
  { name: 'Social', path: '/social', icon: <MessageSquare size={18} /> },
  { name: 'About', path: '/about', icon: <Info size={18} /> },
];

export const CAMPAIGNS: DonationCampaign[] = [
  {
    id: '1',
    title: 'Annadaan Seva',
    category: 'Annadaan',
    description: 'Help us feed the pilgrims and the needy who visit the dham daily. Each meal costs ₹50.',
    imageUrl: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [501, 1100, 2100, 5100],
    currentAmount: 145000,
    goalAmount: 500000,
    featured: true,
  },
  {
    id: '2',
    title: 'Gau Seva (Cow Care)',
    category: 'Gau Seva',
    description: 'Support our Gaushala providing shelter and medical care for abandoned cows.',
    imageUrl: 'https://images.unsplash.com/photo-1545468843-27956f32958a?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [251, 501, 1001],
    currentAmount: 89000,
    goalAmount: 200000,
    featured: false,
  },
  {
    id: '3',
    title: 'Vivah Bhawan Construction',
    category: 'General',
    description: 'Building a hall for underprivileged families to host sacred wedding ceremonies.',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [1100, 5100, 11000, 21000],
    currentAmount: 1245000,
    goalAmount: 2500000,
    featured: true,
  },
  {
    id: '4',
    title: 'Maha Yagya Purnahuti',
    category: 'Yagya',
    description: 'Contribution towards materials for the monthly Maha Yagya ritual.',
    imageUrl: 'https://images.unsplash.com/photo-1621274403997-37aae1848b40?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [1001, 2101, 5101],
    currentAmount: 45000,
    goalAmount: 100000,
    featured: false,
  },
  {
    id: 'festival-1',
    title: 'Special Diwali Deep Seva',
    category: 'Festival',
    description: 'Illuminate the dham with 11,000 diyas this Diwali festival.',
    imageUrl: 'https://images.unsplash.com/photo-1543059231-64582f3c3a9d?auto=format&fit=crop&q=80&w=800',
    suggestedAmounts: [251, 501, 1101],
    currentAmount: 12000,
    goalAmount: 50000,
    featured: true,
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Vivah Bhawan',
    description: 'A spacious, culturally enriched hall dedicated to conducting weddings for low-income families at no or minimal cost.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    rules: ['Booking 3 months in advance', 'Vegetarian food only', 'Max 200 guests'],
    status: 'Available',
    enquiryCTA: 'Book for Wedding'
  },
  {
    id: 'f2',
    name: 'Open Air Divine Gym',
    description: 'Equipped with modern fitness machines in a serene outdoor setting next to the park for holistic health.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    rules: ['Open to all visitors', '6:00 AM to 9:00 PM', 'Proper footwear required'],
    status: 'Available',
    enquiryCTA: 'Check Timings'
  },
  {
    id: 'f3',
    name: 'Peace Park & Meditation Grove',
    description: 'Lush greenery with thousands of native plants and quiet spots for meditation and prayer.',
    imageUrl: 'https://images.unsplash.com/photo-1518132047140-98da13edcfc2?auto=format&fit=crop&q=80&w=800',
    rules: ['Keep silence', 'No littering', 'Pet friendly (on leash)'],
    status: 'Available',
    enquiryCTA: 'View Map'
  }
];

export const POSTS: SocialPost[] = [
  {
    id: 'p1',
    title: '1,000 Blankets Distributed',
    content: 'Our winter drive successfully covered 5 neighboring villages. Thank you to all donors who made this possible.',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800',
    tags: ['Charity', 'WinterDrive', 'Community'],
    publishedAt: '2024-05-10'
  }
];
