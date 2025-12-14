import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BannerIconCard } from "../components/BannerIconCard";
import { Section } from "../components/Section";
import { SectionCard } from "../components/SectionCard";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation phrases
  const phrases = [
    "Try 'Barber shop with beard'...",
    "Try 'Best nail salon downtown'...",
    "Try 'Hair stylist near me'...",
    "Try 'Makeup artist for events'...",
  ];

  // Popular searches
  const popularSearches = [
    { icon: "✂️", label: "Hair Styling" },
    { icon: "💅", label: "Manicure" },
    { icon: "💈", label: "Barbershop" },
    { icon: "💄", label: "Makeup Artist" },
  ];

  // Typing animation effect
  useEffect(() => {
    if (searchValue) return; // Stop animation when user types

    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (placeholderText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setPlaceholderText(
            currentPhrase.slice(0, placeholderText.length + 1)
          );
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (placeholderText.length > 0) {
        const timeout = setTimeout(() => {
          setPlaceholderText(placeholderText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [placeholderText, isTyping, currentPhraseIndex, searchValue, phrases]);

  return (
    <div className="bg-[#eff1f3] ">
      {/* Header/CTA */}
      <Section
        backgroundColor=""
        content={
          <>
            <div className="max-w-4xl mx-auto text-center pt-14 ">
              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6">
                <span className="text-slate-900">Book Your</span>
                <br />
                <span className="text-[#E5B819]">Perfect Chair</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover and book top-rated beauty professionals in your area.
                Seamless scheduling, premium service, elevated experience.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-xl shadow-[#FCECCD] p-4 mb-8 max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="relative flex-1 w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder={placeholderText}
                      className="w-full pl-12 pr-4 py-4 text-slate-700 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                  <button className="w-full font-serif sm:w-auto px-8 py-4 bg-[#d7a524] hover:bg-amber-600 text-white  rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                    Search
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                <span className="text-sm text-slate-600 ">
                  Popular searches:
                </span>
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 text-slate-700 rounded-full border border-slate-200 hover:border-amber-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="text-base">{search.icon}</span>
                    <span className="text-sm font-medium">{search.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        }
      />

      {/* Styling Images * How to Section */}
      <Section content={<div> </div>} />

      <Section
        backgroundColor=""
        content={
          <>
            <div className="flex gap-2 pt-14 ">
              <div className="h-full w-1/3 flex flex-col gap-2 ">
                {/* <img className=" h-[300px] w-1/3" src="/imgs/image_1.png"/> */}
                <div className="h-[300px] shadow-lg shadow-gray-300 bg-cover grayscale-60 rounded-2xl bg-[url(/imgs/image_1.png)]"></div>
                <div className="h-[200px] bg- bg-cover grayscale-60 rounded-2xl bg-no-repeat bg-[url(/imgs/image_6.png)]"></div>
              </div>

              <div className="h-full w-1/3 flex flex-col gap-2">
                <div className="h-[200px] shadow-lg shadow-gray-300  bg-cover grayscale-60  bg-center rounded-2xl bg-no-repeat bg-[url(/imgs/image_5.png)]"></div>
                <div className="h-[300px] bg-cover grayscale-60  rounded-2xl bg-no-repeat bg-[url(/imgs/image_4.png)]"></div>
              </div>

              <div className="h-full w-1/3">
                <div className="h-[508px]  bg-cover grayscale-60  rounded-2xl bg-no-repeat bg-[url(/imgs/image_2.png)]"></div>
              </div>
            </div>

            <div className="pb-14 -mt-60 relative z-10 ">
              <div className="pt-6 bg-linear-to-t from-[#eff1f3] via-[#eff1f3]/85 to-transparent pb-4 font-serif">
                <h2 className="text-2xl sm:text-2xl lg:text-3xl max-w-[500px] mt-24 pt-8 ">
                  <span className="text-gray-500">
                    Finding a stylist near you shouldn't be that hard,
                  </span>{" "}
                  <span>let's make it easier.</span>
                </h2>
              </div>

              <div className="flex w-full gap-4 bg-[#eff1f3] ">
                <SectionCard
                  width={3}
                  content={
                    <div className="flex flex-col justify-between h-full">
                      <div className="h-full">
                        <p>One</p>
                      </div>
                      <div className="">
                        <p>Box</p>
                      </div>
                    </div>
                  }
                />
                <SectionCard
                  width={3}
                  content={
                    <div>
                      <p>One</p>
                      <div>
                        <p>Box</p>
                      </div>
                    </div>
                  }
                />
                <SectionCard
                  width={3}
                  content={
                    <div>
                      <p>One</p>
                      <div>
                        <p>Box</p>
                      </div>
                    </div>
                  }
                />
                {/* <div className="flex w-1/4 items-end justify-center">
                  <div className="h-full w-full flex items-end">
                    <a className="w-full bg-black text-white py-3 px-2 font-semibold rounded-lg shadow-lg text-sm text-center cursor-pointer">
                      Sign Up Today
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        }
      />

      {/* Banner */}
      <Section
        backgroundColor="#272727"
        content={
          <>
            <div className="text-white flex justify-between w-full gap-6 text-center py-12 px-12">
              {[
                {
                  icon: "/icons/shieldIcon.png",
                  alt: "shield icon",
                  title: "Vetted Beauty Professionals",
                  description: "Every stylist is verified before joining",
                },
                {
                  icon: "/icons/starIcon.png",
                  alt: "star icon",
                  title: "Trusted Services",
                  description: "Backed by real portfolios and client reviews",
                },
                {
                  icon: "/icons/privacyIcon.png",
                  alt: "lock icon",
                  title: "Secure Bookings",
                  description: "Clear pricing and transparent availability",
                },
              ].map((item, index) => (
                <BannerIconCard
                  key={index}
                  title={item.title}
                  alt={item.alt}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </>
        }
      />

      {/* Book Appointment */}
      <Section backgroundColor="" content={<>
        
        <div className="py-16 text-center">
        {/* Code Goes Here */}
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Ready to Book Your{" "}
            <span className="font-bold">Next Appointment?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust ChairShare for their
            beauty needs
          </p>

          {/* CTA Buttons */}
          <div className="flex w-full justify-center gap-3">
            <Link
              className="bg-linear-to-br from-amber-500 to-[#BF4E30] px-6 py-2 text-white rounded-full"
              to="/register"
            >
              Get Started
            </Link>
            <Link
              className="border border-gray-200 bg-white px-6 py-2 text-gray-500 rounded-full"
              to="/faqs"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
        </>} />
    </div>
  );
};
