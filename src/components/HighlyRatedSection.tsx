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
    name: 'Keisha Morgan',
    specialty: 'Master Stylist',
    rating: 4.9,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    location: 'Kingston, Jamaica',
    services: ['Haircuts', 'Coloring', 'Extensions'],
    categories: ['haircuts', 'coloring'],
    price: '$$$',
  },
  {
    id: 2,
    name: 'Jamal Williams',
    specialty: 'Expert Barber',
    rating: 5.0,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    location: 'Montego Bay, Jamaica',
    services: ['Haircuts', 'Beard Trim', 'Hot Towel Shave'],
    categories: ['haircuts', 'beards'],
    price: '$$',
  },
  {
    id: 3,
    name: 'Shanae Brown',
    specialty: 'Nail Artist',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    location: 'Ocho Rios, Jamaica',
    services: ['Manicure', 'Pedicure', 'Nail Art'],
    categories: ['nails'],
    price: '$$',
  },
  {
    id: 4,
    name: 'Trevon Campbell',
    specialty: 'Color Specialist',
    rating: 4.9,
    reviewCount: 267,
    image: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=400&q=80',
    location: 'Portmore, Jamaica',
    services: ['Balayage', 'Highlights', 'Color Correction'],
    categories: ['coloring'],
    price: '$$$',
  },
  {
    id: 5,
    name: 'Natasha Reid',
    specialty: 'Makeup Artist',
    rating: 5.0,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1598550487031-3999f7f8d719?w=400&q=80',
    location: 'Spanish Town, Jamaica',
    services: ['Bridal Makeup', 'Special Events', 'Lessons'],
    categories: ['makeup'],
    price: '$$$',
  },
  {
    id: 6,
    name: 'Andre Thompson',
    specialty: 'Precision Barber',
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    location: 'Negril, Jamaica',
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
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Profile Image with Overlay */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="text-yellow-500 text-base">★</span>
                  <span className="font-bold text-gray-900 text-sm">{stylist.rating}</span>
                  <span className="text-gray-600 text-xs">({stylist.reviewCount})</span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1.5 rounded-full font-bold shadow-lg text-sm">
                  {stylist.price}
                </div>

                {/* Text Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  {/* Name & Specialty */}
                  <h3 className="text-2xl font-bold mb-1">
                    {stylist.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-3 text-sm">
                    {stylist.specialty}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{stylist.location}</span>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {stylist.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs border border-white/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-white text-black py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg text-sm">
                    Book Appointment
                  </button>
                </div>
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
