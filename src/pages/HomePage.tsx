import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { BannerIconCard } from "../components/BannerIconCard";
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
  // const popularSearches = [
  //   { icon: "✂️", label: "Hair Styling" },
  //   { icon: "💅", label: "Manicure" },
  //   { icon: "💈", label: "Barbershop" },
  //   { icon: "💄", label: "Makeup Artist" },
  // ];

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
    <div className="bg-white">
      {/* Header/CTA */}
      <Section
        backgroundColor=""
        content={
          <>
            {/* Background Images - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex gap-2 pt-14 -mt-8 opacity-12">
              <div className="h-full w-1/3 flex flex-col gap-2">
                <div className="h-[300px] shadow-lg shadow-gray-300 bg-cover grayscale-60 rounded-2xl bg-[url(/imgs/image_1.png)]"></div>
                <div className="h-[200px] bg-cover grayscale-60 rounded-2xl bg-no-repeat bg-[url(/imgs/image_6.png)]"></div>
              </div>

              <div className="h-full w-1/3 flex flex-col gap-2">
                <div className="h-[200px] shadow-lg shadow-gray-300 bg-cover grayscale-60 bg-center rounded-2xl bg-no-repeat bg-[url(/imgs/image_5.png)]"></div>
                <div className="h-[300px] bg-cover grayscale-60 rounded-2xl bg-no-repeat bg-[url(/imgs/image_4.png)]"></div>
              </div>

              <div className="h-full w-1/3">
                <div className="h-[508px] bg-cover grayscale-60 rounded-2xl bg-no-repeat bg-[url(/imgs/image_2.png)]"></div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center pt-8 lg:pt-14 relative lg:-mt-130 z-10 px-4">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-2">
                <span className="text-slate-900">Book Your</span>
                <br />
                <span className="text-[#F67600]">Perfect Chair</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-800 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover and book top-rated beauty professionals in your area.
                Seamless scheduling, premium service, elevated experience.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-xl shadow-[#FCECCD]/40 p-3 lg:p-4 mb-8 max-w-3xl mx-auto">
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
                      className="w-full pl-12 pr-4 py-3 lg:py-4 text-slate-700 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                  <button className="w-full font-serif sm:w-auto px-8 py-3 lg:py-4 bg-[#FF8500] hover:bg-amber-600 text-white rounded-xl shadow-lg/5 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                    Search
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
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
              </div> */}
            </div>
          </>
        }
      />

      {/* Site Benefits */}
      <Section
        content={
          <div className="mt-12 lg:mt-30 pb-8 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-4">
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
                <div key={index} className="flex gap-3 items-start max-w-xs md:max-w-none text-center md:text-left">
                  <img className="h-10 flex-shrink-0" src={item.icon} alt={item.alt} />
                  <div>
                    <p className="font-bold text-sm lg:text-base">{item.title}</p>
                    <p className="text-xs lg:text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <Section
        content={
          <div className="w-full flex items-center justify-center py-6 lg:py-8 px-4">
            <hr className="mt-3 h-0.5 border-t-0 w-16 lg:w-22 bg-black opacity-25 dark:bg-white/10" />
            <img
              className="h-12 lg:h-16 -mb-4 opacity-25 mx-4"
              src="/icons/scissorsIcon.png"
              alt="Scissors"
            />
            <hr className="mt-3 h-0.5 border-t-0 w-16 lg:w-22 bg-black opacity-25 dark:bg-white/10" />
          </div>
        }
      />

      {/* How To */}
      <Section
        backgroundColor=""
        content={
          <>
            <div className="pt-5 pb-12 lg:pb-18 px-4 sm:px-8 lg:px-16">
              <div className="pb-6 lg:pb-4 font-serif flex flex-col items-center justify-center text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl max-w-[500px] px-4">
                  <span>Finding a stylist shouldn't be hard,</span>{" "}
                  <span className="text-[#F67600] font-semibold">
                    we make it easier.
                  </span>
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-4">
                <SectionCard
                  width={3}
                  title="Explore Services"
                  description="From grooming to styling, browse professionals across categories."
                  image="/imgs/exploreServices.png"
                />
                <SectionCard
                  width={3}
                  title="Schedule Easily"
                  description="Pick a pro, select your time, and confirm with one tap."
                  image="/imgs/scheduleEasy.png"
                />
                <SectionCard
                  width={3}
                  title="Enjoy the Results"
                  description="Let your expert handle the rest—simple, smooth, and stress-free."
                  image="/imgs/womenTogether.jpg"
                />
              </div>
              
              <div className="w-full items-center justify-center flex mt-6 lg:mt-8">
                <Link
                  className="bg-gradient-to-br from-amber-500 to-[#BF4E30] px-8 py-3 text-white rounded-full font-semibold hover:from-amber-600 hover:to-[#A0432A] transition-all shadow-lg"
                  to="/register"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </>
        }
      />

      {/* Banner */}
      {/* <Section
        content={
          <>
            <div className="bg-[#272727] rounded-lg text-white flex justify-between w-full gap-6 text-center py-12 px-12">
              <p>Text here</p>
            </div>
          </>
        }
      /> */}

      {/* Book Appointment */}
      {/* <Section
        backgroundColor=""
        content={
          <>
            <div className="py-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
                  Ready to Book Your{" "}
                  <span className="font-bold">Next Appointment?</span>
                </h2>

                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                  Join thousands of satisfied clients who trust ChairShare for
                  their beauty needs
                </p>

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
          </>
        }
      /> */}
    </div>
  );
};
