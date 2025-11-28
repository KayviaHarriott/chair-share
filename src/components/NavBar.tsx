export const NavBar = () => {
  return (
    <div>
      {/* 
    <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✂️</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Chairshare
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#professionals"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Professionals
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/50">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
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
      </nav>
    </div>
  );
};
