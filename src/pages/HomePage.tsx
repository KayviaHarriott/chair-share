import { useState, useEffect } from "react";

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
    <div className="min-h-screen bg-[#eff1f3]">
      <div className="max-w-[1200px] container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6">
            <span className="text-slate-900">Book Your</span>
            <br />
            <span className="text-[#E5B819]">Perfect Chair</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
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
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                Search
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-slate-600 ">Popular searches:</span>
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
        {/* Design Images */}
        <div className="flex gap-2 py-14">
          <div className="h-full w-1/3 flex flex-col gap-2">
            {/* <img className=" h-[300px] w-1/3" src="./imgs/image_1.png"/> */}
            <div className="h-[300px] bg-cover grayscale rounded-2xl bg-[url(./imgs/image_1.png)]"></div>
            <div className="h-[200px] bg-center bg-cover grayscale rounded-2xl bg-no-repeat bg-[url(./imgs/image_6.png)]"></div>
          </div>

          <div className="h-full w-1/3 flex flex-col gap-2">
            <div className="h-[200px] bg-cover grayscale bg-center rounded-2xl bg-no-repeat bg-[url(./imgs/image_5.png)]"></div>
            <div className="h-[300px] bg-cover grayscale rounded-2xl bg-no-repeat bg-[url(./imgs/image_4.png)]"></div>
          </div>

          <div className="h-full w-1/3">
            <div className="h-[508px] bg-cover grayscale rounded-2xl bg-no-repeat bg-[url(./imgs/image_2.png)]"></div>
          </div>
        </div>

        {/* How it Works */}
        <div className="-mt-64 relative z-10 ">
          <h2 className="bg-linear-to-t from-[#eff1f3] pb-4 pt-34 to-transparent text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 text-center">
            How it Works
          </h2>
        </div>
      </div>
    </div>
  );
};
