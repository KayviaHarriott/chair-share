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
      <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex flex-col justify-center py-4  px-4 text-gray-800 ">
        <div className="max-w-[1200px] w-full ">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex items-center gap-2 mb-1">
              <Link to="/">
                <img className="h-[50px]" src="./imgs/HorizontalLogo.png" />
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-center font-serif gap-6">
              <Link to="/about">How it Works</Link>
              <Link to="/merchants">Services</Link>
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

        <div className="flex flex-col gap-6 mt-6">
          {/* Hair Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredCategory("Hair")}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="font-bold text-lg hover:text-amber-600 transition-colors">Hair</button>

            {hoveredCategory === "Hair" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                <div className="flex gap-6">
                  <div>
                    <b>Braids</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Box Braids</li>
                      <li className="hover:text-amber-600 cursor-pointer">Knotless Braids</li>
                      <li className="hover:text-amber-600 cursor-pointer">Feed-in Braids</li>
                      <li className="hover:text-amber-600 cursor-pointer">Locs (starter /retwist)</li>
                      <li className="hover:text-amber-600 cursor-pointer">Cornrows</li>
                      <li className="hover:text-amber-600 cursor-pointer">Twists</li>
                    </ul>
                  </div>

                  <div>
                    <b>Natural Hair</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Silk Press</li>
                      <li className="hover:text-amber-600 cursor-pointer">Wash & Style</li>
                      <li className="hover:text-amber-600 cursor-pointer">Blowout</li>
                      <li className="hover:text-amber-600 cursor-pointer">Conditioning Treatment</li>
                      <li className="hover:text-amber-600 cursor-pointer">Two-Strand Twist</li>
                      <li className="hover:text-amber-600 cursor-pointer">Curl Definition</li>
                    </ul>
                  </div>
                  <div>
                    <b>Weaves/Wigs</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Sew-ins</li>
                      <li className="hover:text-amber-600 cursor-pointer">Wig Installs</li>
                      <li className="hover:text-amber-600 cursor-pointer">Quick Weaves</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Barbering Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredCategory("Barbering")}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="font-bold text-lg hover:text-amber-600 transition-colors">Barbering</button>
            
            {hoveredCategory === "Barbering" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                <div className="flex gap-6">
                  <div>
                    <b>Hair Services</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Shape-up / Line-up</li>
                      <li className="hover:text-amber-600 cursor-pointer">Fade</li>
                      <li className="hover:text-amber-600 cursor-pointer">Taper</li>
                      <li className="hover:text-amber-600 cursor-pointer">Beard grooming</li>
                      <li className="hover:text-amber-600 cursor-pointer">Full haircut</li>
                      <li className="hover:text-amber-600 cursor-pointer">Kids cut</li>
                    </ul>
                  </div>

                  <div>
                    <b>Add-Ons</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Hot towel treatment</li>
                      <li className="hover:text-amber-600 cursor-pointer">Razor finish</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nails Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredCategory("Nails")}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="font-bold text-lg hover:text-amber-600 transition-colors">Nails</button>
            
            {hoveredCategory === "Nails" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                <div className="flex gap-6">
                  <div>
                    <b>Acrylics</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Full set</li>
                      <li className="hover:text-amber-600 cursor-pointer">Refill</li>
                      <li className="hover:text-amber-600 cursor-pointer">Removal</li>
                      <li className="hover:text-amber-600 cursor-pointer">Ombre</li>
                      <li className="hover:text-amber-600 cursor-pointer">Encapsulated Designs</li>
                    </ul>
                  </div>

                  <div>
                    <b>Press-Ons</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Custom press-ons</li>
                      <li className="hover:text-amber-600 cursor-pointer">Basic press-ons</li>
                      <li className="hover:text-amber-600 cursor-pointer">Press-on application</li>
                    </ul>
                  </div>

                  <div>
                    <b>Gel/Polish</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Regular polish</li>
                      <li className="hover:text-amber-600 cursor-pointer">Gel polish</li>
                      <li className="hover:text-amber-600 cursor-pointer">Nail art</li>
                      <li className="hover:text-amber-600 cursor-pointer">French tips</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lashes Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredCategory("Lashes")}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="font-bold text-lg hover:text-amber-600 transition-colors">Lashes</button>
            
            {hoveredCategory === "Lashes" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                <div className="flex gap-6">
                  <div>
                    <b>Lash Services</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Classic Lashes</li>
                      <li className="hover:text-amber-600 cursor-pointer">Volume Lashes</li>
                      <li className="hover:text-amber-600 cursor-pointer">Hybrid Lashes</li>
                      <li className="hover:text-amber-600 cursor-pointer">Lash Lift</li>
                      <li className="hover:text-amber-600 cursor-pointer">Lash Tint</li>
                      <li className="hover:text-amber-600 cursor-pointer">Lash Removal</li>
                    </ul>
                  </div>

                  <div>
                    <b>Add-Ons</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Brow tinting</li>
                      <li className="hover:text-amber-600 cursor-pointer">Lash lift combo</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Makeup Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredCategory("Makeup")}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="font-bold text-lg hover:text-amber-600 transition-colors">Makeup</button>
            
            {hoveredCategory === "Makeup" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 z-50">
                <div className="flex gap-6">
                  <div>
                    <b>Makeup Services</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">Bridal Makeup</li>
                      <li className="hover:text-amber-600 cursor-pointer">Special Event Makeup</li>
                      <li className="hover:text-amber-600 cursor-pointer">Everyday Makeup</li>
                      <li className="hover:text-amber-600 cursor-pointer">Airbrush Makeup</li>
                      <li className="hover:text-amber-600 cursor-pointer">Makeup Lessons</li>
                      <li className="hover:text-amber-600 cursor-pointer">Brow Shaping</li>
                    </ul>
                  </div>

                  <div>
                    <b>Add-Ons</b>
                    <ul className="space-y-1">
                      <li className="hover:text-amber-600 cursor-pointer">False lashes</li>
                      <li className="hover:text-amber-600 cursor-pointer">Touch-up kit</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
