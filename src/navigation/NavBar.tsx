import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  KeyboardArrowDownRounded,
  MenuRounded,
  CloseRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

// Categories data structure
const categories = [
  {
    name: "Hair",
    subcategories: [
      {
        title: "Braids",
        items: [
          "Box Braids",
          "Knotless Braids",
          "Feed-in Braids",
          "Locs (starter /retwist)",
          "Cornrows",
          "Twists",
        ],
      },
      {
        title: "Natural Hair",
        items: [
          "Silk Press",
          "Wash & Style",
          "Blowout",
          "Conditioning Treatment",
          "Two-Strand Twist",
          "Curl Definition",
        ],
      },
      {
        title: "Weaves/Wigs",
        items: ["Sew-ins", "Wig Installs", "Quick Weaves"],
      },
    ],
  },
  {
    name: "Barbering",
    subcategories: [
      {
        title: "Hair Services",
        items: [
          "Shape-up / Line-up",
          "Fade",
          "Taper",
          "Beard grooming",
          "Full haircut",
          "Kids cut",
        ],
      },
      {
        title: "Add-Ons",
        items: ["Hot towel treatment", "Razor finish"],
      },
    ],
  },
  {
    name: "Nails",
    subcategories: [
      {
        title: "Acrylics",
        items: [
          "Full set",
          "Refill",
          "Removal",
          "Ombre",
          "Encapsulated Designs",
        ],
      },
      {
        title: "Press-Ons",
        items: ["Custom press-ons", "Basic press-ons", "Press-on application"],
      },
      {
        title: "Gel/Polish",
        items: ["Regular polish", "Gel polish", "Nail art", "French tips"],
      },
    ],
  },
  {
    name: "Lashes",
    subcategories: [
      {
        title: "Lash Services",
        items: [
          "Classic Lashes",
          "Volume Lashes",
          "Hybrid Lashes",
          "Lash Lift",
          "Lash Tint",
          "Lash Removal",
        ],
      },
      {
        title: "Add-Ons",
        items: ["Brow tinting", "Lash lift combo"],
      },
    ],
  },
  {
    name: "Makeup",
    subcategories: [
      {
        title: "Makeup Services",
        items: [
          "Bridal Makeup",
          "Special Event Makeup",
          "Everyday Makeup",
          "Airbrush Makeup",
          "Makeup Lessons",
          "Brow Shaping",
        ],
      },
      {
        title: "Add-Ons",
        items: ["False lashes", "Touch-up kit"],
      },
    ],
  },
  {
    name: "Recommended Supply Stores",
  },
];

export const NavBar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    navigate(`/browse?search=${encodeURIComponent(item)}`);
    setHoveredCategory(null);
    setMobileMenuOpen(false);
    setMobileExpandedCategory(null);
  };

  const toggleMobileCategory = (categoryName: string) => {
    setMobileExpandedCategory(
      mobileExpandedCategory === categoryName ? null : categoryName
    );
  };

  return (
    <div>
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-[#272727] text-gray-200 hidden lg:flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-end items-center gap-4 py-1 px-5">
          <Link to="/merchants" className="text-sm hover:text-amber-400 transition-colors">
            Become a Merchant
          </Link>
          <p className="mb-1">|</p>
          <Link to="/contact" className="text-sm hover:text-amber-400 transition-colors">
            Contact Us
          </Link>
          <p className="mb-1">|</p>
          <Link to="/faqs" className="text-sm hover:text-amber-400 transition-colors">
            FAQs
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div
        className="relative hidden lg:block"
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <nav className="shadow-sm/5 bg-white border-b border-gray-200 flex flex-col justify-center pt-4 items-center">
          <div className="max-w-[1200px] px-4 pb-2 w-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2 mb-1">
                <Link to="/">
                  <img className="h-[50px]" src="/imgs/HorizontalLogo.png" alt="Chair Share" />
                </Link>
              </div>
              <div className="flex justify-end items-center gap-6">
                <Link className="hover:text-amber-600" to="/merchants">
                  Sign In
                </Link>
                <Link
                  className="bg-gradient-to-br from-amber-500 to-[#BF4E30] px-6 py-2 text-white rounded-full hover:from-amber-600 hover:to-[#A0432A] transition-all"
                  to="/register"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t w-full pt-1 border-gray-200 flex items-center justify-center">
            <div className="max-w-[1200px] w-full flex gap-8 pb-4 px-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category.name)}
                >
                  <button
                    onClick={() => {
                      if (!category.subcategories) {
                        handleItemClick(category.name);
                      }
                    }}
                    className="hover:text-amber-600 transition-colors flex items-center mt-3 cursor-pointer whitespace-nowrap"
                  >
                    {category.name}

                    {/* Only show arrow if subcategories exist */}
                    {category.subcategories && (
                      <KeyboardArrowDownRounded sx={{ marginTop: "0px" }} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop Dropdown */}
        <div className="">
          <div className="">
            {categories.map(
              (category) =>
                hoveredCategory === category.name &&
                category.subcategories && (
                  <div
                    key={category.name}
                    className="absolute top-full left-0 w-full bg-white border-gray-200 shadow-lg px-6 pt-5 pb-8 z-50 flex justify-center"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                  >
                    <div className="max-w-[1200px] w-full px-4">
                      <div className="flex gap-24">
                        {category.subcategories.map((subcategory, index) => (
                          <div key={index}>
                            <p
                              onClick={() => handleItemClick(subcategory.title)}
                              className="pb-2 font-bold hover:text-amber-600 cursor-pointer"
                            >
                              {subcategory.title}
                            </p>
                            <ul className="space-y-1 text-gray-800">
                              {subcategory.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  onClick={() => handleItemClick(item)}
                                  className="hover:text-amber-600 cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img className="h-[40px]" src="/imgs/HorizontalLogo.png" alt="Chair Share" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <CloseRounded className="text-gray-700" sx={{ fontSize: 28 }} />
            ) : (
              <MenuRounded className="text-gray-700" sx={{ fontSize: 28 }} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 pt-20">
            {/* Auth Buttons */}
            <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-gray-200">
              <Link
                to="/merchants"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-3 text-center border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-3 text-center bg-gradient-to-br from-amber-500 to-[#BF4E30] text-white rounded-full font-semibold hover:from-amber-600 hover:to-[#A0432A] transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name}>
                  {/* Category Button */}
                  <button
                    onClick={() => {
                      if (category.subcategories) {
                        toggleMobileCategory(category.name);
                      } else {
                        handleItemClick(category.name);
                      }
                    }}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-800">
                      {category.name}
                    </span>
                    {category.subcategories && (
                      <KeyboardArrowRightRounded
                        className={`text-gray-600 transition-transform ${
                          mobileExpandedCategory === category.name
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Subcategories - Expandable */}
                  {category.subcategories &&
                    mobileExpandedCategory === category.name && (
                      <div className="ml-4 mt-2 space-y-4 pb-4">
                        {category.subcategories.map((subcategory, index) => (
                          <div key={index} className="space-y-2">
                            <button
                              onClick={() => handleItemClick(subcategory.title)}
                              className="font-semibold text-amber-600 hover:text-amber-700 text-sm"
                            >
                              {subcategory.title}
                            </button>
                            <ul className="space-y-2 ml-4">
                              {subcategory.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <button
                                    onClick={() => handleItemClick(item)}
                                    className="text-sm text-gray-700 hover:text-amber-600 transition-colors"
                                  >
                                    {item}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Link
                to="/merchants"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                Become a Merchant
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
