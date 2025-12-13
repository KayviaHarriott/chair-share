import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BannerIconCard } from "../components/BannerIconCard";
import { Section } from "../components/Section";

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
    <div className="min-h-screen bg-[#eff1f3] ">
      {/* Header/CTA */}
      <Section backgroundColor="" content={<></>} />

      {/* Styling Images * How to Section */}
      <Section backgroundColor="" content={<></>} />

      {/* Banner */}
      <Section backgroundColor="#272727" content={<>
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
        </>} />

      {/* Book Appointment */}
      <Section backgroundColor="" content={<></>} />
    </div>
  );
};
