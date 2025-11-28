import { useEffect, useState } from 'react';

const offers = [
  {
    id: 1,
    title: '50% Off First Haircut',
    description: 'New clients get half off their first styling session',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    badge: 'NEW CLIENT',
  },
  {
    id: 2,
    title: 'Luxury Spa Package',
    description: 'Complete pampering experience for only $149',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    badge: 'LIMITED TIME',
  },
  {
    id: 3,
    title: 'Beard Trim + Style',
    description: 'Professional grooming at 30% discount',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    badge: 'POPULAR',
  },
];

interface SpecialOffersSectionProps {
  children?: React.ReactNode;
}

export const SpecialOffersSection = ({ children }: SpecialOffersSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset - the section moves slower than scroll for smoother effect
  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      className="relative -mt-20 -mb-20 z-20 px-4 md:px-8"
      style={{
        transform: `translateY(-${Math.min(parallaxOffset, 80)}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Rounded top container */}
      <div className="bg-white rounded-t-[50px] md:rounded-t-[80px] shadow-2xl">
        {/* Special Offers Content */}
        <div className="py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive deals and limited-time promotions just for you
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {offer.badge}
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <button className="w-full bg-white text-black border-2 border-black py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All content below rendered as children */}
        {children}
      </div>
    </section>
  );
};
