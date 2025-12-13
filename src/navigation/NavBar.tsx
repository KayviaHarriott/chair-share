import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div>
      <div className="bg-[#272727] text-gray-200 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-end items-center gap-4 py-1 px-5">
          <p className="text-sm">Become a Merchant</p>
          <p className="mb-1">|</p>
          <p className="text-sm">Contact Us</p>
          <p className="mb-1">|</p>
          <p className="text-sm">FAQs</p>
        </div>
      </div>
      <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex justify-center py-4 px-4 text-gray-800 relative">
        <div className="max-w-[1200px] w-full ">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex items-center gap-2 mb-1">
              <Link to="/">
                <img className="h-[50px]" src="./imgs/HorizontalLogo.png" />
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-center font-serif gap-6">
              <Link to="/about">How it Works</Link>

              {/* Hair Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory("Hair")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Hair
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hoveredCategory === "Hair" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {hoveredCategory === "Hair" && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                    <div className="flex gap-6">
                      <div>
                        <p className="font-bold mb-2">Braids</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Box Braids</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Knotless Braids</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Feed-in Braids</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Locs (starter /retwist)</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Cornrows</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Twists</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Natural Hair</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Silk Press</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Wash & Style</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Blowout</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Conditioning Treatment</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Two-Strand Twist</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Curl Definition</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Weaves/Wigs</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Sew-ins</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Wig Installs</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Quick Weaves</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Barbering Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory("Barbering")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Barbering
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hoveredCategory === "Barbering" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {hoveredCategory === "Barbering" && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                    <div className="flex gap-6">
                      <div>
                        <p className="font-bold mb-2">Hair Services</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Shape-up / Line-up</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Fade</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Taper</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Beard grooming</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Full haircut</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Kids cut</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Add-Ons</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Hot towel treatment</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Razor finish</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nails Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory("Nails")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Nails
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hoveredCategory === "Nails" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {hoveredCategory === "Nails" && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                    <div className="flex gap-6">
                      <div>
                        <p className="font-bold mb-2">Acrylics</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Full set</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Refill</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Removal</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Ombre</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Encapsulated Designs</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Press-Ons</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Custom press-ons</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Basic press-ons</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Press-on application</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Gel/Polish</p>
                        <ul className="space-y-1">
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Regular polish</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Gel polish</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">Nail art</li>
                          <li className="text-sm hover:text-amber-600 cursor-pointer">French tips</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lashes Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory("Lashes")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Lashes
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hoveredCategory === "Lashes" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {hoveredCategory === "Lashes" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                    <p className="font-bold mb-2">Lash Services</p>
                    <ul className="space-y-1">
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Classic Lashes</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Volume Lashes</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Hybrid Lashes</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Lash Lift</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Lash Tint</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Lash Removal</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Makeup Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredCategory("Makeup")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Makeup
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hoveredCategory === "Makeup" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {hoveredCategory === "Makeup" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                    <p className="font-bold mb-2">Makeup Services</p>
                    <ul className="space-y-1">
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Bridal Makeup</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Special Event Makeup</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Everyday Makeup</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Airbrush Makeup</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Makeup Lessons</li>
                      <li className="text-sm hover:text-amber-600 cursor-pointer">Brow Shaping</li>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/">Near Me</Link>
            </div>
            <div className="w-1/3 flex justify-end items-center gap-6 font-serif">
              <Link to="/merchants">Sign In</Link>
              <Link
                className="bg-linear-to-br from-amber-500 to-[#BF4E30] px-6 py-2 text-white rounded-full"
                to="/register"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
