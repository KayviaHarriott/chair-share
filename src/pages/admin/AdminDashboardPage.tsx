import { useState } from "react";
import {
  DashboardRounded,
  PeopleRounded,
  StorefrontRounded,
  AssessmentRounded,
  SettingsRounded,
  NotificationsRounded,
  CheckCircleRounded,
  PendingRounded,
  // BlockRounded,
  TrendingUpRounded,
  AttachMoneyRounded,
  CalendarMonthRounded,
  SearchRounded,
  // MoreVertRounded,
  EditRounded,
  // DeleteRounded,
  VisibilityRounded,
  EmailRounded,
  // VerifiedRounded,
  ReportProblemRounded,
  // StarRounded,
} from "@mui/icons-material";

// Temporary Admin Data
const ADMIN_STATS = {
  totalUsers: 1247,
  activeUsers: 892,
  totalMerchants: 156,
  activeMerchants: 134,
  pendingApprovals: 12,
  totalBookings: 3458,
  completedBookings: 3201,
  cancelledBookings: 257,
  totalRevenue: 2847650,
  monthlyRevenue: 425300,
  revenueGrowth: 12.5,
  averageRating: 4.6,
  reportedIssues: 8,
};

const RECENT_MERCHANTS = [
  {
    id: 1,
    name: "Glamour by Lisa",
    email: "glamourbylisa@example.com",
    specialty: "Hair Braiding & Natural Hair",
    location: "Kingston",
    status: "pending",
    joinDate: "2024-12-18",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    id: 2,
    name: "Beauty Bar Studio",
    email: "beautybar@example.com",
    specialty: "Makeup & Lashes",
    location: "Montego Bay",
    status: "active",
    joinDate: "2024-12-15",
    avatar: "https://i.pravatar.cc/80?img=2",
  },
  {
    id: 3,
    name: "Elite Barber Lounge",
    email: "elitebarber@example.com",
    specialty: "Barbering",
    location: "Spanish Town",
    status: "active",
    joinDate: "2024-12-14",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    id: 4,
    name: "Nail Haven",
    email: "nailhaven@example.com",
    specialty: "Nails & Spa",
    location: "Ocho Rios",
    status: "pending",
    joinDate: "2024-12-17",
    avatar: "https://i.pravatar.cc/80?img=4",
  },
  {
    id: 5,
    name: "Luxe Lashes",
    email: "luxelashes@example.com",
    specialty: "Lash Extensions",
    location: "Kingston",
    status: "suspended",
    joinDate: "2024-11-20",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

const RECENT_USERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(876) 555-0101",
    joinDate: "2024-12-16",
    totalBookings: 5,
    status: "active",
    avatar: "https://i.pravatar.cc/80?img=10",
  },
  {
    id: 2,
    name: "Michelle Brown",
    email: "michelle.b@example.com",
    phone: "(876) 555-0102",
    joinDate: "2024-12-15",
    totalBookings: 12,
    status: "active",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 3,
    name: "Tamara Williams",
    email: "tamara.w@example.com",
    phone: "(876) 555-0103",
    joinDate: "2024-12-14",
    totalBookings: 8,
    status: "active",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: 4,
    name: "Kelly Anderson",
    email: "kelly.a@example.com",
    phone: "(876) 555-0104",
    joinDate: "2024-12-18",
    totalBookings: 2,
    status: "active",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
];

const REPORTED_ISSUES = [
  {
    id: 1,
    reportedBy: "Sarah Johnson",
    merchantName: "Glamour by Lisa",
    issue: "Late cancellation without notice",
    date: "2024-12-18",
    status: "pending",
    priority: "high",
  },
  {
    id: 2,
    reportedBy: "Michelle Brown",
    merchantName: "Elite Barber Lounge",
    issue: "Service quality concerns",
    date: "2024-12-17",
    status: "investigating",
    priority: "medium",
  },
  {
    id: 3,
    reportedBy: "Kelly Anderson",
    merchantName: "Nail Haven",
    issue: "Pricing discrepancy",
    date: "2024-12-16",
    status: "resolved",
    priority: "low",
  },
];

export const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "resolved":
        return "bg-green-100 text-green-700";
      case "pending":
      case "investigating":
        return "bg-yellow-100 text-yellow-700";
      case "suspended":
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-orange-100 text-orange-700";
      case "low":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-amber-100 mt-1">
                System Overview & Management
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/20 rounded-full transition-colors">
                <NotificationsRounded />
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  8
                </span>
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=30"
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Admin User</p>
                  <p className="text-xs text-amber-100">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-2 flex gap-2 overflow-x-auto">
          {[
            { id: "dashboard", label: "Dashboard", icon: DashboardRounded },
            { id: "merchants", label: "Merchants", icon: StorefrontRounded },
            { id: "users", label: "Users", icon: PeopleRounded },
            { id: "reports", label: "Reports", icon: AssessmentRounded },
            { id: "issues", label: "Issues", icon: ReportProblemRounded },
            { id: "settings", label: "Settings", icon: SettingsRounded },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <tab.icon sx={{ fontSize: 20 }} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Users */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      Total Users
                    </p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                      {ADMIN_STATS.totalUsers.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <TrendingUpRounded sx={{ fontSize: 16 }} />
                      {ADMIN_STATS.activeUsers} active
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <PeopleRounded className="text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Total Merchants */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      Merchants
                    </p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                      {ADMIN_STATS.totalMerchants}
                    </p>
                    <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
                      <PendingRounded sx={{ fontSize: 16 }} />
                      {ADMIN_STATS.pendingApprovals} pending
                    </p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <StorefrontRounded className="text-amber-500" />
                  </div>
                </div>
              </div>

              {/* Total Bookings */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      Total Bookings
                    </p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                      {ADMIN_STATS.totalBookings.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircleRounded sx={{ fontSize: 16 }} />
                      {ADMIN_STATS.completedBookings.toLocaleString()}{" "}
                      completed
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <CalendarMonthRounded className="text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Revenue */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      Monthly Revenue
                    </p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">
                      {formatCurrency(ADMIN_STATS.monthlyRevenue)}
                    </p>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <TrendingUpRounded sx={{ fontSize: 16 }} />
                      +{ADMIN_STATS.revenueGrowth}% growth
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <AttachMoneyRounded className="text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Merchant Applications */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Recent Merchant Applications
                  </h3>
                  <button className="text-amber-600 text-sm font-medium hover:text-amber-700">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {RECENT_MERCHANTS.slice(0, 3).map((merchant) => (
                    <div
                      key={merchant.id}
                      className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <img
                        src={merchant.avatar}
                        alt={merchant.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {merchant.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {merchant.specialty}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          merchant.status
                        )}`}
                      >
                        {merchant.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reported Issues */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <ReportProblemRounded className="text-red-500" />
                    Reported Issues ({ADMIN_STATS.reportedIssues})
                  </h3>
                  <button className="text-amber-600 text-sm font-medium hover:text-amber-700">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {REPORTED_ISSUES.map((issue) => (
                    <div
                      key={issue.id}
                      className="p-3 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-sm text-gray-800">
                          {issue.issue}
                        </p>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            issue.priority
                          )}`}
                        >
                          {issue.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        By: {issue.reportedBy} • {issue.merchantName}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{issue.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Merchants Tab */}
        {activeTab === "merchants" && (
          <div className="space-y-6">
            {/* Search & Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <SearchRounded className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search merchants by name, email, specialty..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>

            {/* Merchants List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Merchant
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Join Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {RECENT_MERCHANTS.map((merchant) => (
                    <tr key={merchant.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={merchant.avatar}
                            alt={merchant.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {merchant.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {merchant.specialty}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-800">{merchant.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-800">
                          {merchant.location}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            merchant.status
                          )}`}
                        >
                          {merchant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">
                          {merchant.joinDate}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <VisibilityRounded
                              sx={{ fontSize: 18 }}
                              className="text-gray-600"
                            />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <EditRounded
                              sx={{ fontSize: 18 }}
                              className="text-amber-600"
                            />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <EmailRounded
                              sx={{ fontSize: 18 }}
                              className="text-blue-600"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="relative">
                <SearchRounded className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name, email, phone..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RECENT_USERS.map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {user.name}
                          </h4>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <p className="text-sm text-gray-500">{user.phone}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                        <span>
                          📅 Joined: {user.joinDate}
                        </span>
                        <span>
                          📋 {user.totalBookings} bookings
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors">
                          <EmailRounded sx={{ fontSize: 18 }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              System Settings
            </h3>
            <div className="space-y-6">
              {/* Platform Settings */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-semibold text-gray-700 mb-4">
                  Platform Settings
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        Allow New Merchant Registrations
                      </p>
                      <p className="text-sm text-gray-500">
                        Enable or disable new merchant sign-ups
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        Maintenance Mode
                      </p>
                      <p className="text-sm text-gray-500">
                        Temporarily disable the platform for maintenance
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Commission Settings */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-semibold text-gray-700 mb-4">
                  Commission & Fees
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Platform Commission (%)
                    </label>
                    <input
                      type="number"
                      defaultValue="15"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Booking Amount ($)
                    </label>
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-md">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
