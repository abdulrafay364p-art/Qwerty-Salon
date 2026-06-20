export interface Service {
  id: string
  name: string
  description: string
  price: string
  duration: string
  image: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'hair',
    name: 'Hair Styling & Coloring',
    description:
      'Precision cuts, balayage, and bespoke color crafted by master stylists using premium ammonia-free products.',
    price: 'From $65',
    duration: '60–120 min',
    image: '/images/hair-station.jpg',
    icon: 'scissors',
  },
  {
    id: 'spa',
    name: 'Spa & Massage Therapy',
    description:
      'Unwind with hot-stone, deep-tissue, and aromatherapy rituals designed to melt tension and restore balance.',
    price: 'From $90',
    duration: '60–90 min',
    image: '/images/spa-room.jpg',
    icon: 'flower',
  },
  {
    id: 'facial',
    name: 'Facial & Skin Care',
    description:
      'Luxury facials with medical-grade serums, LED light therapy, and deep hydration for radiant, glowing skin.',
    price: 'From $75',
    duration: '45–75 min',
    image: '/images/facial-room.jpg',
    icon: 'sparkles',
  },
  {
    id: 'nails',
    name: 'Nail Artistry',
    description:
      'Spa pedicures, gel extensions, and hand-painted nail art in a serene setting with sanitized luxury tools.',
    price: 'From $45',
    duration: '45–75 min',
    image: '/images/pedicure.jpg',
    icon: 'hand',
  },
  {
    id: 'products',
    name: 'Premium Products',
    description:
      'Curated selection of salon-exclusive skincare, haircare, and beauty essentials for your at-home ritual.',
    price: 'From $25',
    duration: 'Shop',
    image: '/images/products.jpg',
    icon: 'bottle',
  },
  {
    id: 'tools',
    name: 'Bridal & Event Glam',
    description:
      'Full bridal packages, trial sessions, and on-location styling for your most memorable occasions.',
    price: 'From $250',
    duration: 'By appt.',
    image: '/images/tools.jpg',
    icon: 'crown',
  },
]

export const testimonials = [
  {
    name: 'Aria M.',
    role: 'Regular Client',
    quote:
      'The most serene salon experience I have ever had. Every detail — from the welcome tea to the final mirror reveal — felt like pure luxury.',
  },
  {
    name: 'Daniel K.',
    role: 'Grooming Member',
    quote:
      'I came for a beard sculpt and left feeling like a new person. The stylists genuinely listen and the atmosphere is unmatched.',
  },
  {
    name: 'Priya S.',
    role: 'Bridal Client',
    quote:
      'My bridal trial was flawless. The team made me feel calm, beautiful, and completely myself on the most important day of my life.',
  },
  {
    name: 'Marcus L.',
    role: 'Spa Member',
    quote:
      'The hot-stone massage melted away months of stress. The spa room is a true sanctuary — I will be back every month.',
  },
]

export const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '25K+', label: 'Happy Clients' },
  { value: '40+', label: 'Expert Stylists' },
  { value: '15', label: 'Award Wins' },
]

export const team = [
  {
    name: 'Elena Rosewood',
    role: 'Creative Director & Master Stylist',
    bio: 'With 18 years shaping runway and editorial looks, Elena leads Qwerty Saloon with a vision of timeless elegance.',
  },
  {
    name: 'Julian Hart',
    role: 'Head of Spa & Wellness',
    bio: 'A certified therapist blending Eastern and Western techniques, Julian curates every wellness ritual on our menu.',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Lead Color Specialist',
    bio: 'Trained in Milan and Paris, Sofia is renowned for her luminous balayage and dimensional color artistry.',
  },
  {
    name: 'Adrian Cole',
    role: 'Skincare & Aesthetics Lead',
    bio: 'A licensed aesthetician specializing in results-driven facials and advanced skin rejuvenation therapies.',
  },
]
