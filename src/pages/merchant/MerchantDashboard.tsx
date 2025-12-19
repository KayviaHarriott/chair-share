import { useState } from "react";
import {
  DashboardRounded,
  CalendarMonthRounded,
  MessageRounded,
  SettingsRounded,
  NotificationsRounded,
  PersonRounded,
  StarRounded,
  CheckCircleRounded,
  CancelRounded,
  AccessTimeRounded,
  AttachMoneyRounded,
  TrendingUpRounded,
  ImageRounded,
  AddPhotoAlternateRounded,
  EditRounded,
  DeleteRounded,
  SendRounded,
} from "@mui/icons-material";

// Temporary merchant data
const MERCHANT_DATA = {
  id: "1",
  name: "Glamour by Lisa",
  email: "glamourbylisa@example.com",
  phone: "(876) 555-0123",
  avatar: "https://i.pravatar.cc/150?img=1",
  specialty: "Hair Braiding & Natural Hair Specialist",
  address: "123 Main Street, Kingston",
  city: "Kingston",
  parish: "Kingston",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  bio: "Specializing in protective styles and natural hair care for over 10 years. Your hair is my passion!",
  rating: 4.8,
  totalReviews: 127,
  totalEarnings: 45600,
  thisMonthEarnings: 8900,
  totalAppointments: 234,
  pendingAppointments: 8,
};

const APPOINTMENTS_DATA = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientAvatar: "https://i.pravatar.cc/80?img=5",
    service: "Knotless Braids",
    addOns: ["Curled Ends", "Color (Highlights)"],
    date: "2024-12-20",
    time: "09:00",
    duration: "5-6 hours",
    total: 13300,
    deposit: 3990,
    status: "pending",
    notes: "Please use medium-sized braids",
    requestDate: "2024-12-16",
  },
  {
    id: 2,
    clientName: "Michelle Brown",
    clientAvatar: "https://i.pravatar.cc/80?img=9",
    service: "Silk Press",
    addOns: ["Deep Conditioning Treatment"],
    date: "2024-12-21",
    time: "10:00",
    duration: "2-3 hours",
    total: 9000,
    deposit: 2700,
    status: "confirmed",
    notes: "",
    requestDate: "2024-12-15",
  },
  {
    id: 3,
    clientName: "Tamara Williams",
    clientAvatar: "https://i.pravatar.cc/80?img=10",
    service: "Box Braids",
    addOns: ["Beads/Accessories"],
    date: "2024-12-22",
    time: "14:00",
    duration: "4-5 hours",
    total: 8800,
    deposit: 2640,
    status: "confirmed",
    notes: "I want waist-length braids",
    requestDate: "2024-12-14",
  },
  {
    id: 4,
    clientName: "Kelly Anderson",
    clientAvatar: "https://i.pravatar.cc/80?img=12",
    service: "Feed-in Braids",
    addOns: [],
    date: "2024-12-23",
    time: "09:00",
    duration: "3-4 hours",
    total: 7000,
    deposit: 2100,
    status: "pending",
    notes: "",
    requestDate: "2024-12-16",
  },
  {
    id: 5,
    clientName: "Jessica Davis",
    clientAvatar: "https://i.pravatar.cc/80?img=8",
    service: "Locs Retwist",
    addOns: ["Deep Conditioning"],
    date: "2024-12-20",
    time: "14:00",
    duration: "2-3 hours",
    total: 7000,
    deposit: 2100,
    status: "completed",
    notes: "Regular maintenance",
    requestDate: "2024-12-13",
  },
];

const MESSAGES_DATA = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientAvatar: "https://i.pravatar.cc/80?img=5",
    message: "Hi! I'd like to know if you have availability for box braids next week?",
    timestamp: "2024-12-16 10:30 AM",
    unread: true,
  },
  {
    id: 2,
    clientName: "Michelle Brown",
    clientAvatar: "https://i.pravatar.cc/80?img=9",
    message: "Thank you so much for the amazing silk press! My hair feels great!",
    timestamp: "2024-12-15 03:45 PM",
    unread: true,
  },
  {
    id: 3,
    clientName: "Tamara Williams",
    clientAvatar: "https://i.pravatar.cc/80?img=10",
    message: "Can I reschedule my appointment to a later time?",
    timestamp: "2024-12-14 11:20 AM",
    unread: false,
  },
  {
    id: 4,
    clientName: "Kelly Anderson",
    clientAvatar: "https://i.pravatar.cc/80?img=12",
    message: "Do you offer any discounts for referrals?",
    timestamp: "2024-12-13 02:15 PM",
    unread: false,
  },
];

const STATS_DATA = [
  {
    label: "Total Earnings",
    value: `$${MERCHANT_DATA.totalEarnings.toLocaleString()}`,
    change: "+12.5%",
    icon: AttachMoneyRounded,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    label: "This Month",
    value: `$${MERCHANT_DATA.thisMonthEarnings.toLocaleString()}`,
    change: "+8.3%",
    icon: TrendingUpRounded,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Total Bookings",
    value: MERCHANT_DATA.totalAppointments,
    change: "+15.3%",
    icon: CalendarMonthRounded,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    label: "Pending",
    value: MERCHANT_DATA.pendingAppointments,
    change: "",
    icon: AccessTimeRounded,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(MERCHANT_DATA);

  const handleAppointmentAction = (appointment: any, action: "confirm" | "reject") => {
    console.log(`${action} appointment:`, appointment);
    alert(`Appointment ${action}ed! (API integration pending)`);
    setShowAppointmentModal(false);
    setSelectedAppointment(null);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reply sent:", replyText);
    alert("Message sent! (API integration pending)");
    setReplyText("");
    setShowMessageModal(false);
    setSelectedMessage(null);
  };

  const handleSaveProfile = () => {
    console.log("Profile updated:", profileData);
    alert("Profile updated! (API integration pending)");
    setEditMode(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-12 h-12 rounded-full border-2 border-amber-500"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-sm text-gray-600">{profileData.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <NotificationsRounded className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <SettingsRounded className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-2 mb-6 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === "dashboard"
                ? "bg-amber-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <DashboardRounded fontSize="small" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === "appointments"
                ? "bg-amber-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <CalendarMonthRounded fontSize="small" />
            Appointments
            {MERCHANT_DATA.pendingAppointments > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {MERCHANT_DATA.pendingAppointments}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === "messages"
                ? "bg-amber-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <MessageRounded fontSize="small" />
            Messages
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {MESSAGES_DATA.filter((m) => m.unread).length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === "profile"
                ? "bg-amber-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <PersonRounded fontSize="small" />
            Profile & Settings
          </button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS_DATA.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={stat.color} />
                    </div>
                    {stat.change && (
                      <span className="text-sm text-green-600 font-medium">
                        {stat.change}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Upcoming Appointments
                </h2>
                <div className="space-y-3">
                  {APPOINTMENTS_DATA.filter(
                    (apt) => apt.status === "confirmed"
                  )
                    .slice(0, 3)
                    .map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-amber-300 transition-all cursor-pointer"
                        onClick={() => {
                          setSelectedAppointment(appointment);
                          setShowAppointmentModal(true);
                        }}
                      >
                        <img
                          src={appointment.clientAvatar}
                          alt={appointment.clientName}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {appointment.clientName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {appointment.service}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(appointment.date).toLocaleDateString()} at{" "}
                            {formatTime(appointment.time)}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Pending Requests */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Pending Requests
                </h2>
                <div className="space-y-3">
                  {APPOINTMENTS_DATA.filter((apt) => apt.status === "pending").map(
                    (appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-amber-300 transition-all"
                      >
                        <img
                          src={appointment.clientAvatar}
                          alt={appointment.clientName}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {appointment.clientName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {appointment.service}
                          </p>
                          <p className="text-xs text-gray-500">
                            Requested: {new Date(appointment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedAppointment(appointment);
                              setShowAppointmentModal(true);
                            }}
                            className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                          >
                            <CheckCircleRounded fontSize="small" />
                          </button>
                          <button
                            onClick={() =>
                              handleAppointmentAction(appointment, "reject")
                            }
                            className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <CancelRounded fontSize="small" />
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              All Appointments
            </h2>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {["all", "pending", "confirmed", "completed", "cancelled"].map(
                (filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                )
              )}
            </div>

            {/* Appointments List */}
            <div className="space-y-3">
              {APPOINTMENTS_DATA.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-amber-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={appointment.clientAvatar}
                      alt={appointment.clientName}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-gray-900 text-lg">
                            {appointment.clientName}
                          </p>
                          <p className="text-amber-600 font-medium">
                            {appointment.service}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </div>

                      {/* Add-ons */}
                      {appointment.addOns.length > 0 && (
                        <div className="mb-2">
                          <p className="text-xs text-gray-600 mb-1">Add-ons:</p>
                          <div className="flex flex-wrap gap-2">
                            {appointment.addOns.map((addOn, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 px-2 py-1 rounded"
                              >
                                {addOn}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="font-medium">
                            {new Date(appointment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Time</p>
                          <p className="font-medium">
                            {formatTime(appointment.time)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Duration</p>
                          <p className="font-medium">{appointment.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total</p>
                          <p className="font-bold text-amber-600">
                            ${appointment.total.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="mb-3 p-2 bg-gray-50 rounded">
                          <p className="text-xs text-gray-600 mb-1">Notes:</p>
                          <p className="text-sm text-gray-800">
                            {appointment.notes}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        {appointment.status === "pending" && (
                          <>
                            <button
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                setShowAppointmentModal(true);
                              }}
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                            >
                              <CheckCircleRounded fontSize="small" />
                              Confirm
                            </button>
                            <button
                              onClick={() =>
                                handleAppointmentAction(appointment, "reject")
                              }
                              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                            >
                              <CancelRounded fontSize="small" />
                              Reject
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => {
                            setSelectedMessage({
                              clientName: appointment.clientName,
                              clientAvatar: appointment.clientAvatar,
                            });
                            setShowMessageModal(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 border border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors text-sm"
                        >
                          <MessageRounded fontSize="small" />
                          Message Client
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
            <div className="space-y-3">
              {MESSAGES_DATA.map((message) => (
                <div
                  key={message.id}
                  className={`border rounded-lg p-4 hover:border-amber-300 transition-all cursor-pointer ${
                    message.unread ? "bg-amber-50 border-amber-200" : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedMessage(message);
                    setShowMessageModal(true);
                  }}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={message.clientAvatar}
                      alt={message.clientName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-gray-900">
                          {message.clientName}
                        </p>
                        <p className="text-xs text-gray-500">{message.timestamp}</p>
                      </div>
                      <p className="text-sm text-gray-700">{message.message}</p>
                      {message.unread && (
                        <span className="inline-block mt-2 text-xs text-amber-600 font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile & Settings Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* Profile Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Profile Information
                </h2>
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <EditRounded fontSize="small" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialty
                  </label>
                  <input
                    type="text"
                    value={profileData.specialty}
                    onChange={(e) =>
                      setProfileData({ ...profileData, specialty: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) =>
                      setProfileData({ ...profileData, address: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={profileData.city}
                    onChange={(e) =>
                      setProfileData({ ...profileData, city: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Hours
                  </label>
                  <input
                    type="text"
                    value={profileData.hours}
                    onChange={(e) =>
                      setProfileData({ ...profileData, hours: e.target.value })
                    }
                    disabled={!editMode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    disabled={!editMode}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-50 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Portfolio Management */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Portfolio Gallery
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                  <AddPhotoAlternateRounded fontSize="small" />
                  Add Photos
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="relative group">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${1522337360788 + i * 1000}-8b13dee7a37e?w=400`}
                        alt={`Portfolio ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <EditRounded fontSize="small" className="text-gray-700" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <DeleteRounded fontSize="small" className="text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Management Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Services & Pricing
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                  Add Service
                </button>
              </div>
              <p className="text-gray-600">
                Manage your services, pricing, and add-ons here. (API integration
                pending)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Detail Modal */}
      {showAppointmentModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Appointment Details
                </h2>
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={selectedAppointment.clientAvatar}
                    alt={selectedAppointment.clientName}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {selectedAppointment.clientName}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        selectedAppointment.status
                      )}`}
                    >
                      {selectedAppointment.status}
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Service Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">
                        {selectedAppointment.service}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">
                        {selectedAppointment.duration}
                      </span>
                    </div>
                    {selectedAppointment.addOns.length > 0 && (
                      <div>
                        <span className="text-gray-600">Add-ons:</span>
                        <div className="mt-1 space-y-1">
                          {selectedAppointment.addOns.map((addOn: string, idx: number) => (
                            <div key={idx} className="text-sm pl-4">
                              • {addOn}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Appointment Time */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Date & Time
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {new Date(selectedAppointment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">
                        {formatTime(selectedAppointment.time)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Payment Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-bold text-lg">
                        ${selectedAppointment.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deposit (30%):</span>
                      <span className="font-medium text-amber-600">
                        ${selectedAppointment.deposit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {selectedAppointment.notes && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Client Notes
                    </h3>
                    <p className="text-gray-700">{selectedAppointment.notes}</p>
                  </div>
                )}

                {/* Actions */}
                {selectedAppointment.status === "pending" && (
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() =>
                        handleAppointmentAction(selectedAppointment, "reject")
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <CancelRounded />
                      Reject
                    </button>
                    <button
                      onClick={() =>
                        handleAppointmentAction(selectedAppointment, "confirm")
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <CheckCircleRounded />
                      Confirm Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedMessage.clientAvatar}
                    alt={selectedMessage.clientName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {selectedMessage.clientName}
                    </h2>
                    {selectedMessage.timestamp && (
                      <p className="text-sm text-gray-500">
                        {selectedMessage.timestamp}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {selectedMessage.message && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{selectedMessage.message}</p>
                </div>
              )}

              <form onSubmit={handleSendReply} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Reply
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
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
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <SendRounded fontSize="small" />
                    Send Message
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
