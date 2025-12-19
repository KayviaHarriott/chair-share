import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LocationOnRounded,
  StarRounded,
  AccessTimeRounded,
  PhoneRounded,
  EmailRounded,
  CheckCircleRounded,
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
  services: [
    {
      category: "Braids",
      items: [
        { name: "Box Braids", price: 8000, duration: "4-5 hours", description: "Classic box braids, any length" },
        { name: "Knotless Braids", price: 10000, duration: "5-6 hours", description: "Pain-free knotless technique" },
        { name: "Feed-in Braids", price: 7000, duration: "3-4 hours", description: "Natural-looking cornrows" },
        { name: "Cornrows", price: 5000, duration: "2-3 hours", description: "Traditional cornrow styles" },
        { name: "Locs Retwist", price: 6000, duration: "2-3 hours", description: "Maintenance for existing locs" },
      ],
    },
    {
      category: "Natural Hair",
      items: [
        { name: "Silk Press", price: 7500, duration: "2-3 hours", description: "Straightening with heat protection" },
        { name: "Wash & Style", price: 4000, duration: "1-2 hours", description: "Deep cleanse and styling" },
        { name: "Deep Conditioning", price: 3500, duration: "1 hour", description: "Intensive moisture treatment" },
        { name: "Twist Out", price: 5500, duration: "2 hours", description: "Two-strand twist styling" },
      ],
    },
    {
      category: "Weaves & Wigs",
      items: [
        { name: "Sew-in Weave", price: 9000, duration: "4-5 hours", description: "Full sew-in installation" },
        { name: "Wig Install", price: 7000, duration: "2-3 hours", description: "Custom wig installation" },
        { name: "Quick Weave", price: 6500, duration: "2-3 hours", description: "Glue-in weave method" },
      ],
    },
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
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
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");

  const merchant = TEMP_MERCHANT_DATA;
  const currentServices = merchant.services.find(
    (s) => s.category === selectedCategory
  )?.items || [];

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
  };

  const handleBookAppointment = () => {
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      merchantId,
      service: selectedService,
      date: bookingDate,
      time: bookingTime,
      notes: bookingNotes,
    });
    alert("Booking request submitted! (This is temporary - API integration pending)");
    setShowBookingModal(false);
    setSelectedService(null);
    setBookingDate("");
    setBookingTime("");
    setBookingNotes("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-amber-400 to-amber-600">
        <img
          src={merchant.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 pb-12">
        {/* Merchant Header Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={merchant.avatar}
                alt={merchant.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {merchant.name}
                  </h1>
                  <p className="text-amber-600 font-medium mb-3">
                    {merchant.specialty}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <StarRounded className="text-amber-500" />
                      <span className="font-bold text-lg ml-1">
                        {merchant.rating}
                      </span>
                      <span className="text-gray-600 ml-1">
                        ({merchant.totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 max-w-2xl">{merchant.bio}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <LocationOnRounded className="text-amber-600" fontSize="small" />
                      <span>{merchant.location.address}, {merchant.location.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneRounded className="text-amber-600" fontSize="small" />
                      <span>{merchant.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EmailRounded className="text-amber-600" fontSize="small" />
                      <span>{merchant.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AccessTimeRounded className="text-amber-600" fontSize="small" />
                      <span>{merchant.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={handleBookAppointment}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap h-fit"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Deposit Info */}
          {merchant.depositPreference.required && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <CheckCircleRounded className="text-amber-600 mt-0.5" fontSize="small" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900 mb-1">
                    Deposit Required: {merchant.depositPreference.percentage}%
                  </p>
                  <p className="text-gray-700">{merchant.depositPreference.notes}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Services */}
          <div className="lg:col-span-2">
            {/* Services Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Services & Pricing
              </h2>

              {/* Category Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {merchant.services.map((service) => (
                  <button
                    key={service.category}
                    onClick={() => setSelectedCategory(service.category)}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                      selectedCategory === service.category
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {service.category}
                  </button>
                ))}
              </div>

              {/* Service Items */}
              <div className="space-y-3">
                {currentServices.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => handleServiceSelect(item)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                        <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                          <AccessTimeRounded fontSize="small" />
                          {item.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-600">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Client Reviews
              </h2>

              <div className="space-y-6">
                {merchant.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex gap-4">
                      <img
                        src={review.avatar}
                        alt={review.clientName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.clientName}
                            </p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarRounded
                                key={i}
                                className={
                                  i < review.rating
                                    ? "text-amber-500"
                                    : "text-gray-300"
                                }
                                fontSize="small"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-amber-600 font-medium mb-2">
                          {review.service}
                        </p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Portfolio */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Portfolio
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {merchant.portfolio.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
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
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
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

              <form onSubmit={handleSubmitBooking} className="space-y-4">
                {/* Selected Service */}
                {selectedService && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-gray-600 mb-1">Selected Service</p>
                    <p className="font-semibold text-gray-900">{selectedService.name}</p>
                    <p className="text-amber-600 font-bold text-lg">
                      ${selectedService.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Duration: {selectedService.duration}
                    </p>
                  </div>
                )}

                {!selectedService && (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-600">
                      Please select a service from the list above
                    </p>
                  </div>
                )}

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
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
                      A {merchant.depositPreference.percentage}% deposit will be required
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
                    disabled={!selectedService}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
