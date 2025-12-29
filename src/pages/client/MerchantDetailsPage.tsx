import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  LocationOnRounded,
  StarRounded,
  AccessTimeRounded,
  PhoneRounded,
  EmailRounded,
  CheckCircleRounded,
  CloseRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  CalendarMonthRounded,
  MessageRounded,
  HomeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";

// Temporary merchant data
const TEMP_MERCHANT_DATA = {
  id: "1",
  name: "Glamour by Lisa",
  rating: 4.8,
  totalReviews: 127,
  specialty: "Hair Braiding & Natural Hair Specialist",
  avatar: "https://i.pravatar.cc/150?img=1",
  coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200",
  location: {
    address: "123 Main Street, Kingston",
    city: "Kingston",
    parish: "Kingston",
  },
  contact: {
    phone: "(876) 555-0123",
    email: "glamourbylisa@example.com",
  },
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  depositPreference: {
    required: true,
    percentage: 30,
    refundable: false,
    notes: "Deposit required to secure appointment. Non-refundable for cancellations within 24 hours.",
  },
  bio: "Specializing in protective styles and natural hair care for over 10 years. Your hair is my passion!",
  availableSlots: {
    // Format: "YYYY-MM-DD": ["HH:MM", ...]
    // Updated to current dates (Dec 2025 - Jan 2026)
    "2025-12-30": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    "2025-12-31": ["09:00", "10:00", "13:00", "14:00", "15:00", "16:00"],
    "2026-01-02": ["10:00", "11:00", "14:00", "15:00"],
    "2026-01-03": ["09:00", "11:00", "13:00", "15:00", "16:00"],
    "2026-01-05": ["09:00", "10:00", "11:00", "13:00", "14:00"],
    "2026-01-06": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
    "2026-01-07": ["09:00", "10:00", "13:00", "14:00", "15:00"],
    "2026-01-08": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    "2026-01-09": ["10:00", "11:00", "14:00", "15:00"],
    "2026-01-10": ["09:00", "11:00", "13:00", "15:00", "16:00"],
    "2026-01-12": ["09:00", "10:00", "13:00", "14:00", "15:00", "16:00"],
    "2026-01-13": ["09:00", "11:00", "13:00", "15:00"],
    "2026-01-14": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
    "2026-01-15": ["09:00", "10:00", "13:00", "14:00"],
    "2026-01-16": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    "2026-01-17": ["10:00", "11:00", "14:00", "15:00"],
  },
  services: [
    {
      category: "Braids",
      items: [
        { 
          name: "Box Braids", 
          price: 8000, 
          duration: "4-5 hours", 
          description: "Classic box braids, any length",
          addOns: [
            { name: "Curled Ends", price: 1500 },
            { name: "Color (Full)", price: 2500 },
            { name: "Color (Highlights)", price: 1800 },
            { name: "Beads/Accessories", price: 800 },
            { name: "Extra Length (30+ inches)", price: 2000 },
          ]
        },
        { 
          name: "Knotless Braids", 
          price: 10000, 
          duration: "5-6 hours", 
          description: "Pain-free knotless technique",
          addOns: [
            { name: "Curled Ends", price: 1500 },
            { name: "Color (Full)", price: 2500 },
            { name: "Color (Highlights)", price: 1800 },
            { name: "Beads/Accessories", price: 800 },
          ]
        },
        { 
          name: "Feed-in Braids", 
          price: 7000, 
          duration: "3-4 hours", 
          description: "Natural-looking cornrows",
          addOns: [
            { name: "Curled Ends", price: 1200 },
            { name: "Color (Highlights)", price: 1500 },
            { name: "Beads/Accessories", price: 600 },
          ]
        },
        { 
          name: "Cornrows", 
          price: 5000, 
          duration: "2-3 hours", 
          description: "Traditional cornrow styles",
          addOns: [
            { name: "Beads/Accessories", price: 500 },
            { name: "Edge Control Treatment", price: 300 },
          ]
        },
        { 
          name: "Locs Retwist", 
          price: 6000, 
          duration: "2-3 hours", 
          description: "Maintenance for existing locs",
          addOns: [
            { name: "Deep Conditioning", price: 1000 },
            { name: "Color Touch-up", price: 2000 },
            { name: "Loc Extensions", price: 3000 },
          ]
        },
      ],
    },
    {
      category: "Natural Hair",
      items: [
        { 
          name: "Silk Press", 
          price: 7500, 
          duration: "2-3 hours", 
          description: "Straightening with heat protection",
          addOns: [
            { name: "Deep Conditioning Treatment", price: 1500 },
            { name: "Trim", price: 800 },
            { name: "Scalp Treatment", price: 1000 },
          ]
        },
        { 
          name: "Wash & Style", 
          price: 4000, 
          duration: "1-2 hours", 
          description: "Deep cleanse and styling",
          addOns: [
            { name: "Deep Conditioning", price: 1200 },
            { name: "Hot Oil Treatment", price: 900 },
          ]
        },
        { 
          name: "Deep Conditioning", 
          price: 3500, 
          duration: "1 hour", 
          description: "Intensive moisture treatment",
          addOns: [
            { name: "Protein Treatment", price: 1500 },
            { name: "Scalp Massage", price: 800 },
          ]
        },
        { 
          name: "Twist Out", 
          price: 5500, 
          duration: "2 hours", 
          description: "Two-strand twist styling",
          addOns: [
            { name: "Edge Styling", price: 500 },
            { name: "Hair Jewelry", price: 700 },
          ]
        },
      ],
    },
    {
      category: "Weaves & Wigs",
      items: [
        { 
          name: "Sew-in Weave", 
          price: 9000, 
          duration: "4-5 hours", 
          description: "Full sew-in installation",
          addOns: [
            { name: "Closure/Frontal", price: 3000 },
            { name: "Extra Bundles", price: 2500 },
            { name: "Color/Bleach", price: 2000 },
          ]
        },
        { 
          name: "Wig Install", 
          price: 7000, 
          duration: "2-3 hours", 
          description: "Custom wig installation",
          addOns: [
            { name: "Wig Customization", price: 2500 },
            { name: "Lace Tinting", price: 1200 },
            { name: "Plucking/Styling", price: 1500 },
          ]
        },
        { 
          name: "Quick Weave", 
          price: 6500, 
          duration: "2-3 hours", 
          description: "Glue-in weave method",
          addOns: [
            { name: "Styling/Curls", price: 1500 },
            { name: "Color", price: 1800 },
          ]
        },
      ],
    },
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800",
  ],
  reviews: [
    {
      id: 1,
      clientName: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/80?img=5",
      rating: 5,
      date: "2 weeks ago",
      comment: "Lisa is amazing! My knotless braids lasted for 8 weeks and looked fresh the entire time. Very professional and her space is always clean.",
      service: "Knotless Braids",
    },
    {
      id: 2,
      clientName: "Michelle Brown",
      avatar: "https://i.pravatar.cc/80?img=9",
      rating: 5,
      date: "1 month ago",
      comment: "Best silk press I've ever gotten! My hair was so healthy and bouncy. Will definitely be returning!",
      service: "Silk Press",
    },
    {
      id: 3,
      clientName: "Tamara Williams",
      avatar: "https://i.pravatar.cc/80?img=10",
      rating: 4,
      date: "1 month ago",
      comment: "Great experience overall. The braids are beautiful and Lisa is very skilled. Took a bit longer than expected but worth the wait.",
      service: "Box Braids",
    },
    {
      id: 4,
      clientName: "Kelly Anderson",
      avatar: "https://i.pravatar.cc/80?img=12",
      rating: 5,
      date: "2 months ago",
      comment: "Lisa really knows what she's doing! My natural hair has never looked better. She gave me great tips on maintenance too.",
      service: "Wash & Style",
    },
    {
      id: 5,
      clientName: "Jessica Davis",
      avatar: "https://i.pravatar.cc/80?img=8",
      rating: 5,
      date: "2 months ago",
      comment: "Absolutely love my feed-in braids! So natural looking and Lisa was so sweet and accommodating. Highly recommend!",
      service: "Feed-in Braids",
    },
  ],
};

export const MerchantDetailsPage = () => {
  const { merchantId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Braids");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");
  const [messageText, setMessageText] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [portfolioScrollIndex, setPortfolioScrollIndex] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookingConfirmationData, setBookingConfirmationData] = useState<any>(null);

  const merchant = TEMP_MERCHANT_DATA;
  const currentServices = merchant.services.find(
    (s) => s.category === selectedCategory
  )?.items || [];

  const handleServiceSelect = (service: any, index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
      setSelectedService(service);
      setSelectedAddOns([]);
    }
  };

  const handleAddOnToggle = (addOn: any) => {
    setSelectedAddOns((prev) => {
      const exists = prev.find((a) => a.name === addOn.name);
      if (exists) {
        return prev.filter((a) => a.name !== addOn.name);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    return selectedService.price + addOnsTotal;
  };

  const handleBookAppointment = () => {
    if (!selectedService) {
      alert("Please select a service first!");
      return;
    }
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time slot!");
      return;
    }
    
    // Store booking data for confirmation modal
    const bookingData = {
      merchantId,
      merchantName: merchant.name,
      service: selectedService,
      addOns: selectedAddOns,
      total: calculateTotal(),
      deposit: Math.round(calculateTotal() * merchant.depositPreference.percentage / 100),
      date: selectedDate,
      time: selectedTime,
      notes: bookingNotes,
    };
    
    console.log("Booking submitted:", bookingData);
    
    // Close booking modal and show confirmation
    setShowBookingModal(false);
    setBookingConfirmationData(bookingData);
    setShowConfirmationModal(true);
    
    // Reset form
    setSelectedService(null);
    setSelectedAddOns([]);
    setSelectedDate("");
    setSelectedTime("");
    setBookingNotes("");
    setExpandedService(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", messageText);
    alert("Message sent! (This is temporary - API integration pending)");
    setShowMessageModal(false);
    setMessageText("");
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % merchant.portfolio.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? merchant.portfolio.length - 1 : prev - 1
    );
  };

  // Portfolio scroll functions
  const scrollPortfolioNext = () => {
    if (portfolioScrollIndex < merchant.portfolio.length - 3) {
      setPortfolioScrollIndex(portfolioScrollIndex + 1);
    }
  };

  const scrollPortfolioPrev = () => {
    if (portfolioScrollIndex > 0) {
      setPortfolioScrollIndex(portfolioScrollIndex - 1);
    }
  };

  // Calendar functions
  const getWeekDays = () => {
    const days = [];
    const start = new Date(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const nextWeek = () => {
    const next = new Date(currentWeekStart);
    next.setDate(next.getDate() + 7);
    setCurrentWeekStart(next);
    setSelectedDate("");
    setSelectedTime("");
  };

  const prevWeek = () => {
    const prev = new Date(currentWeekStart);
    prev.setDate(prev.getDate() - 7);
    setCurrentWeekStart(prev);
    setSelectedDate("");
    setSelectedTime("");
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  type DateKey = keyof typeof merchant.availableSlots;

const getAvailableSlots = (date: Date): string[] => {
  const dateKey = formatDateKey(date) as DateKey;
  return merchant.availableSlots[dateKey] ?? [];
};


  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image as Background */}
      <div className="relative">
        <div className="absolute inset-0 h-48 overflow-hidden">
          <img
            src={merchant.coverImage}
            alt="Cover"
            className="w-full h-full object-cover blur-sm opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-4 pb-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-amber-600 transition-colors">
              <HomeRounded fontSize="small" />
            </Link>
            <NavigateNextRounded fontSize="small" className="text-gray-400" />
            <Link to="/browse" className="text-gray-600 hover:text-amber-600 transition-colors">
              Browse Merchants
            </Link>
            <NavigateNextRounded fontSize="small" className="text-gray-400" />
            <span className="text-gray-900 font-medium">{merchant.name}</span>
          </nav>

          {/* Profile Section - Left Column (1/3 width) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 sticky top-4">
                {/* Avatar */}
                <div className="flex justify-center mb-3">
                  <img
                    src={merchant.avatar}
                    alt={merchant.name}
                    className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Name & Specialty */}
                <div className="text-center mb-3">
                  <h1 className="text-xl font-bold text-gray-900 mb-1">
                    {merchant.name}
                  </h1>
                  <p className="text-amber-600 font-medium text-sm mb-2">
                    {merchant.specialty}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <StarRounded className="text-amber-500" fontSize="small" />
                    <span className="font-bold text-base">
                      {merchant.rating}
                    </span>
                    <span className="text-gray-600 text-xs">
                      ({merchant.totalReviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 text-xs mb-4 text-center">
                  {merchant.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <LocationOnRounded className="text-amber-600 flex-shrink-0" sx={{ fontSize: 16 }} />
                    <span className="text-xs text-gray-700">{merchant.location.address}, {merchant.location.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneRounded className="text-amber-600" sx={{ fontSize: 16 }} />
                    <span className="text-xs text-gray-700">{merchant.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EmailRounded className="text-amber-600" sx={{ fontSize: 16 }} />
                    <span className="text-xs text-gray-700">{merchant.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AccessTimeRounded className="text-amber-600 flex-shrink-0" sx={{ fontSize: 16 }} />
                    <span className="text-xs text-gray-700">{merchant.hours}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 mb-4">
                  <button
                    onClick={handleBookAppointment}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2.5 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
                  >
                    <CalendarMonthRounded fontSize="small" />
                    Book Appointment
                  </button>
                  
                  <button
                    onClick={() => setShowMessageModal(true)}
                    className="w-full bg-white border-2 border-amber-500 text-amber-600 px-4 py-2.5 rounded-full font-semibold hover:bg-amber-50 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageRounded fontSize="small" />
                    Message Stylist
                  </button>
                </div>

                {/* Deposit Info */}
                {merchant.depositPreference.required && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircleRounded className="text-amber-600 mt-0.5 flex-shrink-0" sx={{ fontSize: 16 }} />
                      <div className="text-xs">
                        <p className="font-semibold text-gray-900 mb-1">
                          Deposit: {merchant.depositPreference.percentage}%
                        </p>
                        <p className="text-gray-700">{merchant.depositPreference.notes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column (2/3 width) */}
            <div className="lg:col-span-2">
              {/* Portfolio Gallery with Horizontal Scroll */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Portfolio
                </h2>
                <div className="relative">
                  {/* Scroll Buttons */}
                  {portfolioScrollIndex > 0 && (
                    <button
                      onClick={scrollPortfolioPrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1 shadow-lg transition-all"
                    >
                      <ChevronLeftRounded className="text-amber-600" />
                    </button>
                  )}
                  
                  {portfolioScrollIndex < merchant.portfolio.length - 3 && (
                    <button
                      onClick={scrollPortfolioNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1 shadow-lg transition-all"
                    >
                      <ChevronRightRounded className="text-amber-600" />
                    </button>
                  )}

                  {/* Images Container */}
                  <div className="overflow-hidden">
                    <div 
                      className="flex gap-2 transition-transform duration-300"
                      style={{ transform: `translateX(-${portfolioScrollIndex * 33.33}%)` }}
                    >
                      {merchant.portfolio.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => openLightbox(index)}
                          className="flex-shrink-0 w-[calc(33.33%-0.5rem)] aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`Work ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Services & Pricing
                </h2>

                {/* Category Tabs */}
                <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                  {merchant.services.map((service) => (
                    <button
                      key={service.category}
                      onClick={() => {
                        setSelectedCategory(service.category);
                        setExpandedService(null);
                        setSelectedService(null);
                        setSelectedAddOns([]);
                      }}
                      className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all text-sm ${
                        selectedCategory === service.category
                          ? "bg-amber-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {service.category}
                    </button>
                  ))}
                </div>

                {/* Service Items with Add-ons */}
                <div className="space-y-2">
                  {currentServices.map((item, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg transition-all ${
                        expandedService === index
                          ? "border-amber-400 shadow-lg"
                          : "border-gray-200 hover:border-amber-300 hover:shadow-md"
                      }`}
                    >
                      <div
                        className="p-3 cursor-pointer"
                        onClick={() => handleServiceSelect(item, index)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-base">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-xs mt-1">
                              {item.description}
                            </p>
                            <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                              <AccessTimeRounded sx={{ fontSize: 14 }} />
                              {item.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-amber-600">
                              ${item.price.toLocaleString()}
                            </p>
                            {item.addOns && item.addOns.length > 0 && (
                              <p className="text-xs text-gray-500 mt-1">
                                + add-ons
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Add-ons Section */}
                      {expandedService === index && (
                        <div className="px-3 pb-3 border-t border-gray-200">
                          {item.addOns && item.addOns.length > 0 && (
                            <>
                              <h4 className="font-semibold text-gray-900 mt-3 mb-2 text-sm">
                                Available Add-ons:
                              </h4>
                              <div className="space-y-2">
                                {item.addOns.map((addOn, addOnIndex) => (
                                  <label
                                    key={addOnIndex}
                                    className="flex items-center justify-between p-2 border border-gray-200 rounded-lg hover:border-amber-300 cursor-pointer transition-all"
                                  >
                                    <div className="flex items-center gap-2">
                                      <input
                                        type="checkbox"
                                        checked={selectedAddOns.some((a) => a.name === addOn.name)}
                                        onChange={() => handleAddOnToggle(addOn)}
                                        className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                                      />
                                      <span className="text-gray-900 text-sm">{addOn.name}</span>
                                    </div>
                                    <span className="font-semibold text-amber-600 text-sm">
                                      +${addOn.price.toLocaleString()}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </>
                          )}
                          
                          {/* Total and Book Button */}
                          <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-semibold text-gray-900 text-sm">Total:</span>
                              <span className="text-xl font-bold text-amber-600">
                                ${calculateTotal().toLocaleString()}
                              </span>
                            </div>
                            <button
                              onClick={handleBookAppointment}
                              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                              <CalendarMonthRounded fontSize="small" />
                              Book Now
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section - Full Width */}
          <div className="bg-white rounded-xl shadow-lg p-4 mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Client Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {merchant.reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex gap-3">
                    <img
                      src={review.avatar}
                      alt={review.clientName}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {review.clientName}
                          </p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <StarRounded
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-amber-500"
                                  : "text-gray-300"
                              }
                              sx={{ fontSize: 16 }}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-amber-600 font-medium mb-1">
                        {review.service}
                      </p>
                      <p className="text-xs text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Message {merchant.name}
                </h2>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={6}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowMessageModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <CloseRounded style={{ fontSize: 40 }} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeftRounded style={{ fontSize: 60 }} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRightRounded style={{ fontSize: 60 }} />
          </button>

          <div 
            className="max-w-5xl max-h-[90vh] w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={merchant.portfolio[currentImageIndex]}
              alt={`Portfolio ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4">
              {currentImageIndex + 1} / {merchant.portfolio.length}
            </p>
          </div>
        </div>
      )}

      {/* Booking Modal with Calendar - (Same as before, no changes needed) */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Book Appointment
                </h2>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-6">
                {/* Selected Service */}
                {selectedService && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-gray-600 mb-1">Selected Service</p>
                    <p className="font-semibold text-gray-900">{selectedService.name}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Duration: {selectedService.duration}
                    </p>
                    
                    {/* Add-ons Summary */}
                    {selectedAddOns.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-amber-300">
                        <p className="text-sm text-gray-600 mb-2">Add-ons:</p>
                        <ul className="space-y-1">
                          {selectedAddOns.map((addOn, index) => (
                            <li key={index} className="text-sm flex justify-between">
                              <span>{addOn.name}</span>
                              <span className="font-medium">+${addOn.price.toLocaleString()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-3 pt-3 border-t border-amber-300 flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-amber-600">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Calendar View */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Date & Time
                  </label>
                  
                  {/* Week Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={prevWeek}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronLeftRounded />
                    </button>
                    <span className="font-semibold text-gray-900">
                      {getWeekDays()[0].toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                    <button
                      type="button"
                      onClick={nextWeek}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronRightRounded />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {getWeekDays().map((day, index) => {
                      const dateKey = formatDateKey(day);
                      const slots = getAvailableSlots(day);
                      const isSelected = selectedDate === dateKey;
                      const isPast = day < new Date(new Date().setHours(0, 0, 0, 0));
                      
                      return (
                        <div key={index} className="text-center">
                          <div className="text-xs text-gray-600 mb-2">
                            {day.toLocaleDateString("en-US", { weekday: "short" })}
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              if (!isPast && slots.length > 0) {
                                setSelectedDate(dateKey);
                                setSelectedTime("");
                              }
                            }}
                            disabled={isPast || slots.length === 0}
                            className={`w-full aspect-square rounded-lg font-semibold text-sm transition-all ${
                              isSelected
                                ? "bg-amber-500 text-white shadow-md"
                                : slots.length > 0 && !isPast
                                ? "bg-white border-2 border-gray-300 hover:border-amber-400 text-gray-900"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                          <div className="text-xs text-gray-500 mt-1">
                            {slots.length > 0 && !isPast ? `${slots.length} slots` : "N/A"}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        Available Times:
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {getAvailableSlots(new Date(selectedDate)).map((time, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                              selectedTime === time
                                ? "bg-amber-500 text-white shadow-md"
                                : "bg-white border border-gray-300 hover:border-amber-400 text-gray-900"
                            }`}
                          >
                            {formatTime(time)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    rows={3}
                    placeholder="Any special requests or requirements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Deposit Info */}
                {merchant.depositPreference.required && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-900 font-medium mb-1">
                      📌 Deposit Required
                    </p>
                    <p className="text-sm text-blue-800">
                      A {merchant.depositPreference.percentage}% deposit (${Math.round(calculateTotal() * merchant.depositPreference.percentage / 100).toLocaleString()}) will be required
                      to confirm this booking.
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showConfirmationModal && bookingConfirmationData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <CheckCircleRounded className="text-green-500" style={{ fontSize: 48 }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-green-50 text-sm">
                Your appointment request has been submitted
              </p>
            </div>

            {/* Booking Details */}
            <div className="p-6 space-y-4">
              {/* Merchant Info */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <img
                  src={merchant.avatar}
                  alt={merchant.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{bookingConfirmationData.merchantName}</p>
                  <p className="text-sm text-gray-600">{merchant.location.address}</p>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Service</p>
                <p className="font-semibold text-gray-900">{bookingConfirmationData.service.name}</p>
                <p className="text-sm text-gray-600">{bookingConfirmationData.service.duration}</p>
                
                {bookingConfirmationData.addOns.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Add-ons:</p>
                    <ul className="space-y-1">
                      {bookingConfirmationData.addOns.map((addOn: any, idx: number) => (
                        <li key={idx} className="text-sm text-gray-700 flex justify-between">
                          <span>{addOn.name}</span>
                          <span className="text-gray-500">+${addOn.price.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Date & Time */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(bookingConfirmationData.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Time</p>
                  <p className="font-semibold text-gray-900">{formatTime(bookingConfirmationData.time)}</p>
                </div>
              </div>

              {/* Notes */}
              {bookingConfirmationData.notes && (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Notes</p>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{bookingConfirmationData.notes}</p>
                </div>
              )}

              {/* Pricing */}
              <div className="pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Service Total</span>
                  <span className="font-semibold text-gray-900">${bookingConfirmationData.total.toLocaleString()}</span>
                </div>
                {merchant.depositPreference.required && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">
                      Deposit Required ({merchant.depositPreference.percentage}%)
                    </span>
                    <span className="font-semibold text-amber-600">
                      ${bookingConfirmationData.deposit.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-900 mb-2">📋 Next Steps:</p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• The merchant will review your request</li>
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Check your dashboard for booking status</li>
                  {merchant.depositPreference.required && (
                    <li>• Payment link will be sent upon approval</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
