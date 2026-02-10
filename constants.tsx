import React from 'react';
import { NavItem, Category, Feature } from './types';
import { BadgeCheck, Users, Wrench, Clock, Home, Building2, Hammer, Ruler, CheckCircle } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Financing', href: '/financing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'resurfacing', name: 'Resurfacing', image: '/kitchens-bathrooms.png' },
  { id: 'reglazing', name: 'Reglazing', image: '/kitchens-bathrooms.png' },
  { id: 'countertops', name: 'Countertops', image: '/kitchens-bathrooms.png' },
  { id: 'garages', name: 'Garages', image: '/residential-construction.png' },
  { id: 'floors', name: 'Floors', image: '/residential-construction.png' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Expert Craftsmanship',
    description: 'Professional resurfacing and reglazing services that restore and enhance your home surfaces.',
    icon: <Ruler className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Quality Materials',
    description: 'We use premium materials and proven techniques to ensure lasting, beautiful results.',
    icon: <Hammer className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Fast & Efficient',
    description: 'Quick turnaround times with minimal disruption to your daily routine.',
    icon: <Clock className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Affordable Solutions',
    description: 'Cost-effective alternatives to replacement that deliver exceptional value and results.',
    icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
  },
];