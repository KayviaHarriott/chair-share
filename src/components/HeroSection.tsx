export const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 drop-shadow-lg">
          Find Your Perfect Style
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl drop-shadow-md">
          Book appointments with top-rated stylists, barbers, and beauty professionals
        </p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl">
          Book Now
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
    </section>
  );
};
