export const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 mt-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center px-6 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2 mr-8">
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl">✂️</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Chairshare
              </span>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <button className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors text-sm font-medium">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a
                href="#pricing"
                className="text-gray-200 hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </a>

              <a
                href="#features"
                className="text-gray-200 hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </a>

              {/* Resources Dropdown */}
              <button className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors text-sm font-medium">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Start Today Button */}
            <button className="hidden md:flex items-center gap-2 ml-8 px-5 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-sm">
              Start Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white ml-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
