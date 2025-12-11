import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-linear-to-br from-[#3A0844] via-indigo-800 to-[#6A057E] flex justify-center">
      <div className="max-w-[1200px] w-full text-white">
          <footer className=" text-white">
      {/* Footer Code Here */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-indigo-900 font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold">ChairShare</h3>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              10x your workflow with ChairShare
            </p>
            <p className="text-indigo-300 text-xs">
              Save countless hours of design and ship great looking designs faster.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Browse Merchants
                </Link>
              </li>
              <li>
                <Link to="/merchant/onboarding" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Become a Merchant
                </Link>
              </li>
              <li>
                <Link to="/booking-request" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* For Merchants */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Merchants</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/merchant/dashboard" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/merchant/profile" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/merchant/onboarding" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/auth/login" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/auth/login" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/auth/forgot-password" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Find Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 ">
            <div className="border-t pt-8 border-[#9D26B5] opacity-40 "></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-indigo-300 text-sm">
              © 2077 ChairShare. All rights reserved.
            </p>
            <a
              href="https://tekupja.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-200 hover:text-white text-sm transition-colors group"
            >
              <span>Developed by TekUpJa</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

      </div>
    </div>

    
  );
};
