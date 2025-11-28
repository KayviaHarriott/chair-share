import { useState } from 'react';

interface Stylist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  image: string;
  location: string;
  services: string[];
  categories: string[];
  price: string;
}

const stylists: Stylist[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Master Stylist',
    rating: 4.9,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
    location: 'Downtown, NYC',
    services: ['Haircuts', 'Coloring', 'Extensions'],
    categories: ['haircuts', 'coloring'],
    price: '$$$',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    specialty: 'Expert Barber',
    rating: 5.0,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    location: 'Brooklyn, NYC',
    services: ['Haircuts', 'Beard Trim', 'Hot Towel Shave'],
    categories: ['haircuts', 'beards'],
    price: '$$',
  },
  {
    id: 3,
    name: 'Emily Chen',
    specialty: 'Nail Artist',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    location: 'Manhattan, NYC',
    services: ['Manicure', 'Pedicure', 'Nail Art'],
    categories: ['nails'],
    price: '$$',
  },
  {
    id: 4,
    name: 'David Kim',
    specialty: 'Color Specialist',
    rating: 4.9,
    reviewCount: 267,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    location: 'Queens, NYC',
    services: ['Balayage', 'Highlights', 'Color Correction'],
    categories: ['coloring'],
    price: '$$$',
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    specialty: 'Makeup Artist',
    rating: 5.0,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    location: 'Manhattan, NYC',
    services: ['Bridal Makeup', 'Special Events', 'Lessons'],
    categories: ['makeup'],
    price: '$$$',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    specialty: 'Precision Barber',
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    location: 'Bronx, NYC',
    services: ['Fades', 'Line-ups', 'Beard Sculpting'],
    categories: ['haircuts', 'beards'],
    price: '$$',
  },
];

const categories = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'haircuts', label: 'Haircuts', icon: '✂️' },
  { id: 'coloring', label: 'Coloring', icon: '🎨' },
  { id: 'nails', label: 'Nails', icon: '💅' },
  { id: 'beards', label: 'Beards', icon: '🧔' },
  { id: 'makeup', label: 'Makeup', icon: '💄' },
];

export const HighlyRatedSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStylists = activeCategory === 'all' 
    ? stylists 
    : stylists.filter(stylist => stylist.categories.includes(activeCategory));

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Highly Rated Professionals
          </h2>
          <p className="text-base text-gray-600">
            Discover talented stylists, barbers, and beauty experts in your area
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }
              `}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStylists.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="text-yellow-500 text-xl">★</span>
                  <span className="font-bold text-gray-900">{stylist.rating}</span>
                  <span className="text-gray-600 text-sm">({stylist.reviewCount})</span>
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {stylist.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Name & Specialty */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {stylist.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-2 text-sm">
                  {stylist.specialty}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{stylist.location}</span>
                </div>

                {/* Services */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {stylist.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all shadow-md hover:shadow-lg text-sm">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStylists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No professionals found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
