import { useState } from "react";

export const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for the dashboard
  const merchantProfile = {
    name: "Sarah's Beauty Studio",
    image: "https://via.placeholder.com/150",
    phone: "+1 (234) 567-8900",
    email: "sarah@beautystudio.com",
    address: "123 Main St, Downtown, City, State 12345",
    joinDate: "Joined: January 2023",
    credits: "1,234 Credits",
    verified: true,
  };

  const paymentStats = [
    { label: "Successful Contacts", value: "1,234", change: "+12.5%" },
    { label: "Attempted Contacts", value: "1,450", change: "+8.3%" },
    { label: "Failed Contacts", value: "15", change: "-2.1%" },
    { label: "Avg. Response Rate", value: "85%", change: "+5.2%" },
    { label: "Positive Reviews", value: "567", change: "+15.3%" },
    { label: "Avg. Credit/Order", value: "$45", change: "+3.8%" },
  ];

  const bookings = [
    {
      id: 1,
      client: "Alice Johnson",
      avatar: "A",
      service: "Haircut",
      date: "2024-12-15",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      client: "Bob Smith",
      avatar: "B",
      service: "Manicure",
      date: "2024-12-15",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      client: "Carol White",
      avatar: "C",
      service: "Makeup",
      date: "2024-12-15",
      time: "02:00 PM",
      status: "Confirmed",
    },
    {
      id: 4,
      client: "David Brown",
      avatar: "D",
      service: "Hair Styling",
      date: "2024-12-16",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 5,
      client: "Emma Davis",
      avatar: "E",
      service: "Facial",
      date: "2024-12-16",
      time: "03:30 PM",
      status: "Pending",
    },
    {
      id: 6,
      client: "Frank Miller",
      avatar: "F",
      service: "Beard Trim",
      date: "2024-12-17",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1595475884562-073c5f128d17?w=300&h=300&fit=crop",
  ];

  const appointments = [
    {
      id: 1,
      client: "Emily Thompson",
      avatar: "E",
      service: "Haircut & Style",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      client: "John Carter",
      avatar: "J",
      service: "Beard Grooming",
      date: "Dec 15, 2024",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      client: "Samantha Williams",
      avatar: "S",
      service: "Manicure",
      date: "Dec 15, 2024",
      time: "02:00 PM",
      status: "Confirmed",
    },
  ];

  const metrics = [
    { icon: "📅", label: "Total Bookings", value: "287", color: "bg-blue-50 text-blue-600" },
    { icon: "👥", label: "Active Clients", value: "156", color: "bg-purple-50 text-purple-600" },
    { icon: "⭐", label: "Avg. Rating", value: "4.8", color: "bg-amber-50 text-amber-600" },
    { icon: "💰", label: "Revenue", value: "$12,450", color: "bg-green-50 text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-bold text-xl">ChairShare</span>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "dashboard"
                ? "bg-amber-50 text-amber-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>📊</span>
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "bookings"
                ? "bg-amber-50 text-amber-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>📅</span>
            <span className="font-medium">Bookings</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "profile"
                ? "bg-amber-50 text-amber-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>👤</span>
            <span className="font-medium">Profile</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Merchant Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Sarah! Here's your overview.</p>
          </div>
          <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition-colors">
            + Add New Service
          </button>
        </div>

        {/* Merchant Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Merchant Profile</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={merchantProfile.image}
                alt={merchantProfile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-amber-100"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-gray-900">{merchantProfile.name}</h3>
                {merchantProfile.verified && (
                  <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Contact Number</p>
                  <p className="font-medium text-gray-900">{merchantProfile.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Email Address</p>
                  <p className="font-medium text-gray-900">{merchantProfile.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Service Address</p>
                  <p className="font-medium text-gray-900">{merchantProfile.address}</p>
                </div>
                <div>
                  <p className="text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-900">{merchantProfile.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-amber-500 font-bold text-lg">{merchantProfile.credits}</span>
                <span className="text-gray-500 text-sm">(Available for bookings)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Pricing Stats */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Payment Pricing</h2>
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors">
              View Statistics
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm text-gray-500 font-medium">{stat.label}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      stat.change.startsWith("+")
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Status & Availability */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Booking Status & Availability</h2>
            <button className="text-amber-500 hover:text-amber-600 text-sm font-semibold">
              Edit Schedule
            </button>
          </div>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    {booking.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{booking.client}</h3>
                    <p className="text-sm text-gray-500">{booking.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="text-sm">
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium text-gray-900">{booking.date}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium text-gray-900">{booking.time}</p>
                  </div>
                  <div className="text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-50 text-green-600"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <button className="text-amber-500 hover:text-amber-600">→</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Portfolio Gallery</h2>
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors">
              + Add Photos
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img src={image} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Appointments and Requests */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Appointments and Requests</h2>
            <button className="text-amber-500 hover:text-amber-600 text-sm font-semibold">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {appointment.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{appointment.client}</h3>
                    <p className="text-sm text-gray-500">{appointment.service}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      appointment.status === "Confirmed"
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {appointment.status}
                  </span>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className={`w-12 h-12 ${metric.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}>
                {metric.icon}
              </div>
              <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}