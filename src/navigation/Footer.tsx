import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
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

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                    Solutions
                  </Link>
                  <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>
                </div>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/updates" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Media kit
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Help centre
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-indigo-700">
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
  );
};
