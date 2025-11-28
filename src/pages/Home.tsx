import { NavBar } from "../components/NavBar";
import { SpecialOffersSection } from "../components/SpecialOffersSection";
import { HighlyRatedSection } from "../components/HighlyRatedSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-purple-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <NavBar />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium backdrop-blur-sm">
                ✨ Your Desire, Our Expertise
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your Style with{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Premium Beauty
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with elite barbers, hairstylists, and nail artists. 
              Book appointments seamlessly and experience royal treatment every time.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                <div className="flex-1 flex items-center px-4 py-3 bg-white/5 rounded-xl">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search services..." 
                    className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/50">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Categories */}
            <div className="flex flex-wrap justify-center gap-3 pb-24">
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all">
                💇 Haircuts
              </button>
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all">
                💅 Nails
              </button>
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all">
                ✨ Styling
              </button>
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all">
                🧔 Beard Care
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Special Offers Section with Parallax - Contains all sections below */}
      <SpecialOffersSection>
        {/* Featured Section */}
        <section className="relative py-10 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Featured Professionals
            </h2>
            <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-semibold">
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Card 1 */}
            <div className="bg-purple-50 rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-purple-500/30 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                  👨‍🦱
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Shayla's Hair & Nails</h3>
                      <p className="text-gray-600 text-sm">Master Stylist & Nail Artist</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-slate-900 font-semibold">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    10+ years of experience in luxury hair styling and nail artistry. Specializing in modern cuts and creative nail designs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Haircuts</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Styling</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Nails</span>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="bg-purple-50 rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                  🧔‍♂️
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Marcus The Barber</h3>
                      <p className="text-gray-600 text-sm">Expert Barber & Grooming Specialist</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-slate-900 font-semibold">5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Elite barbering with precision cuts, beard sculpting, and hot towel shaves. Your grooming destination for excellence.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Haircuts</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Beard</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-xs">Shaving</span>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highly Rated Section with Profile Cards and Filters */}
      <HighlyRatedSection />

      {/* How It Works Section */}
      <section className="relative py-10 px-4 bg-white" id="how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Get started in three simple steps and experience luxury beauty services at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                🔍
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Browse & Search</h3>
                <p className="text-gray-600 text-sm">
                  Explore our curated list of elite professionals. Filter by service, location, and ratings to find your perfect match.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                📅
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Book Appointment</h3>
                <p className="text-gray-600 text-sm">
                  Select your preferred date and time. Our smart booking system ensures you get the slot that works best for you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                ✨
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enjoy Service</h3>
                <p className="text-gray-600 text-sm">
                  Show up and enjoy premium service. Rate your experience and help others discover excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New to Chairshare Section */}
      <section className="relative py-10 px-4 bg-purple-50/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              New to Chairshare
            </h2>
            <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-semibold">
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New Card 1 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-6xl relative">
                <span>🌟</span>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Maria's Spa and Wellness</h3>
                <p className="text-gray-600 text-sm mb-4">Full-service spa offering massages, facials, and relaxation treatments</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Starting at <span className="text-purple-600 font-bold text-lg">$45</span></span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* New Card 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl relative">
                <span>👔</span>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Gentlemen's Cut</h3>
                <p className="text-gray-600 text-sm mb-4">Premium barbershop specializing in classic and modern men's grooming</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Starting at <span className="text-purple-600 font-bold text-lg">$38</span></span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* New Card 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-6xl relative">
                <span>💖</span>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Glam Squad Studio</h3>
                <p className="text-gray-600 text-sm mb-4">Makeup artistry and special occasion styling by certified professionals</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Starting at <span className="text-purple-600 font-bold text-lg">$65</span></span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 pb-24 bg-gradient-to-b from-white to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl border border-purple-400 p-6 md:p-10 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Ready to Experience{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Royal Treatment?
              </span>
            </h2>
            <p className="text-purple-100 text-base mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust Chairshare for their beauty and grooming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg">
                Get Started Now
              </button>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-bold rounded-xl hover:bg-white/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      </SpecialOffersSection>

      {/* Footer - Outside Parallax */}
      <footer className="relative py-8 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Haircuts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Styling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Nails</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Beard Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-800 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Chairshare
                </span>
              </div>
              
              <p className="text-gray-400 text-sm">
                © 2024 Chairshare. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all">
                  <span className="text-white">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all">
                  <span className="text-white">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all">
                  <span className="text-white">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}