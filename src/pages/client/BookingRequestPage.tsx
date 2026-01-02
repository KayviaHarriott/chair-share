import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AccessTimeRounded,
  CalendarMonthRounded,
  CheckCircleRounded,
  PendingRounded,
  CancelRounded,
  VisibilityRounded,
  HomeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";

// Temporary booking data
const TEMP_BOOKINGS = [
  {
    id: "BK001",
    merchantId: "1",
    merchantName: "Glamour by Lisa",
    merchantAvatar: "https://i.pravatar.cc/150?img=1",
    merchantAddress: "123 Main Street, Kingston",
    service: "Knotless Braids",
    duration: "5-6 hours",
    addOns: [
      { name: "Curled Ends", price: 1500 },
      { name: "Color (Full)", price: 2500 },
    ],
    date: "2026-01-03",
    time: "14:00",
    notes: "Please use medium-sized braids",
    total: 14000,
    deposit: 4200,
    depositPercentage: 30,
    status: "pending",
    requestDate: "2025-12-28",
  },
  {
    id: "BK002",
    merchantId: "1",
    merchantName: "Glamour by Lisa",
    merchantAvatar: "https://i.pravatar.cc/150?img=1",
    merchantAddress: "123 Main Street, Kingston",
    service: "Box Braids",
    duration: "4-5 hours",
    addOns: [
      { name: "Beads/Accessories", price: 800 },
    ],
    date: "2026-01-10",
    time: "10:00",
    notes: "",
    total: 8800,
    deposit: 2640,
    depositPercentage: 30,
    status: "confirmed",
    requestDate: "2025-12-27",
    confirmedDate: "2025-12-27",
  },
  {
    id: "BK003",
    merchantId: "2",
    merchantName: "Braids & Beauty",
    merchantAvatar: "https://i.pravatar.cc/150?img=5",
    merchantAddress: "456 Park Avenue, Montego Bay",
    service: "Silk Press",
    duration: "2-3 hours",
    addOns: [],
    date: "2025-12-30",
    time: "09:00",
    notes: "First-time silk press",
    total: 7500,
    deposit: 2250,
    depositPercentage: 30,
    status: "completed",
    requestDate: "2025-12-20",
    confirmedDate: "2025-12-21",
    completedDate: "2025-12-30",
  },
  {
    id: "BK004",
    merchantId: "3",
    merchantName: "Natural Essence Salon",
    merchantAvatar: "https://i.pravatar.cc/150?img=9",
    merchantAddress: "789 Beach Road, Ocho Rios",
    service: "Cornrows",
    duration: "2-3 hours",
    addOns: [],
    date: "2025-12-25",
    time: "15:00",
    notes: "",
    total: 5000,
    deposit: 1500,
    depositPercentage: 30,
    status: "cancelled",
    requestDate: "2025-12-20",
    cancelledDate: "2025-12-23",
    cancelReason: "Scheduling conflict",
  },
];

const STATUS_CONFIG = {
  pending: {
    label: "Pending",
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: PendingRounded,
    description: "Awaiting merchant confirmation",
  },
  confirmed: {
    label: "Confirmed",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    icon: CheckCircleRounded,
    description: "Appointment confirmed by merchant",
  },
  completed: {
    label: "Completed",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: CheckCircleRounded,
    description: "Service completed",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: CancelRounded,
    description: "Appointment cancelled",
  },
};

export const BookingRequestPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const filteredBookings = selectedStatus === "all" 
    ? TEMP_BOOKINGS 
    : TEMP_BOOKINGS.filter(b => b.status === selectedStatus);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusCounts = () => {
    return {
      all: TEMP_BOOKINGS.length,
      pending: TEMP_BOOKINGS.filter(b => b.status === "pending").length,
      confirmed: TEMP_BOOKINGS.filter(b => b.status === "confirmed").length,
      completed: TEMP_BOOKINGS.filter(b => b.status === "completed").length,
      cancelled: TEMP_BOOKINGS.filter(b => b.status === "cancelled").length,
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-amber-600 transition-colors">
              <HomeRounded fontSize="small" />
            </Link>
            <NavigateNextRounded fontSize="small" className="text-gray-400" />
            <span className="text-gray-900 font-medium">My Appointments</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600 mt-2">View and manage your booking requests</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <button
            onClick={() => setSelectedStatus("all")}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStatus === "all"
                ? "border-amber-500 bg-amber-50"
                : "border-gray-200 bg-white hover:border-amber-300"
            }`}
          >
            <div className="text-2xl font-bold text-gray-900">{statusCounts.all}</div>
            <div className="text-sm text-gray-600 mt-1">Total</div>
          </button>

          <button
            onClick={() => setSelectedStatus("pending")}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStatus === "pending"
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-200 bg-white hover:border-yellow-300"
            }`}
          >
            <div className="text-2xl font-bold text-yellow-700">{statusCounts.pending}</div>
            <div className="text-sm text-gray-600 mt-1">Pending</div>
          </button>

          <button
            onClick={() => setSelectedStatus("confirmed")}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStatus === "confirmed"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white hover:border-green-300"
            }`}
          >
            <div className="text-2xl font-bold text-green-700">{statusCounts.confirmed}</div>
            <div className="text-sm text-gray-600 mt-1">Confirmed</div>
          </button>

          <button
            onClick={() => setSelectedStatus("completed")}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStatus === "completed"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
          >
            <div className="text-2xl font-bold text-blue-700">{statusCounts.completed}</div>
            <div className="text-sm text-gray-600 mt-1">Completed</div>
          </button>

          <button
            onClick={() => setSelectedStatus("cancelled")}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedStatus === "cancelled"
                ? "border-red-500 bg-red-50"
                : "border-gray-200 bg-white hover:border-red-300"
            }`}
          >
            <div className="text-2xl font-bold text-red-700">{statusCounts.cancelled}</div>
            <div className="text-sm text-gray-600 mt-1">Cancelled</div>
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <CalendarMonthRounded className="text-gray-300 mx-auto mb-4" style={{ fontSize: 64 }} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-6">
                {selectedStatus === "all" 
                  ? "You haven't made any booking requests yet."
                  : `No ${selectedStatus} appointments.`}
              </p>
              <Link
                to="/browse"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
              >
                Browse Merchants
              </Link>
            </div>
          ) : (
            filteredBookings.map((booking) => {
              const statusConfig = STATUS_CONFIG[booking.status as keyof typeof STATUS_CONFIG];
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left: Merchant Info */}
                      <div className="flex items-start gap-4 md:w-1/3">
                        <img
                          src={booking.merchantAvatar}
                          alt={booking.merchantName}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <Link
                            to={`/merchant/${booking.merchantId}`}
                            className="font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                          >
                            {booking.merchantName}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{booking.merchantAddress}</p>
                          <div className={`inline-flex items-center gap-1 mt-3 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.color} ${statusConfig.border} border`}>
                            <StatusIcon fontSize="small" style={{ fontSize: 16 }} />
                            {statusConfig.label}
                          </div>
                        </div>
                      </div>

                      {/* Middle: Service Details */}
                      <div className="md:w-1/3">
                        <div className="mb-3">
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Service</p>
                          <p className="font-semibold text-gray-900">{booking.service}</p>
                          <p className="text-sm text-gray-600">{booking.duration}</p>
                        </div>
                        {booking.addOns.length > 0 && (
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Add-ons:</p>
                            <ul className="text-sm text-gray-700 space-y-0.5">
                              {booking.addOns.map((addOn, idx) => (
                                <li key={idx}>• {addOn.name}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Right: Date/Time/Price */}
                      <div className="md:w-1/3">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <CalendarMonthRounded fontSize="small" className="text-gray-400" />
                            <span className="font-medium">{formatDate(booking.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <AccessTimeRounded fontSize="small" className="text-gray-400" />
                            <span className="font-medium">{formatTime(booking.time)}</span>
                          </div>
                          <div className="pt-3 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-600">Total:</span>
                              <span className="text-lg font-bold text-gray-900">${booking.total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">Deposit ({booking.depositPercentage}%):</span>
                              <span className="text-sm font-semibold text-amber-600">${booking.deposit.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Actions */}
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Requested: {formatDate(booking.requestDate)}
                      </div>
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="flex items-center gap-2 px-4 py-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors font-medium"
                      >
                        <VisibilityRounded fontSize="small" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[10000]">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
                  <p className="text-gray-600 mt-1">Booking ID: {selectedBooking.id}</p>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Status */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Status</p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${STATUS_CONFIG[selectedBooking.status as keyof typeof STATUS_CONFIG].bg} ${STATUS_CONFIG[selectedBooking.status as keyof typeof STATUS_CONFIG].color}`}>
                  {(() => {
                    const StatusIcon = STATUS_CONFIG[selectedBooking.status as keyof typeof STATUS_CONFIG].icon;
                    return <StatusIcon />;
                  })()}
                  <div>
                    <p className="font-semibold">{STATUS_CONFIG[selectedBooking.status as keyof typeof STATUS_CONFIG].label}</p>
                    <p className="text-sm">{STATUS_CONFIG[selectedBooking.status as keyof typeof STATUS_CONFIG].description}</p>
                  </div>
                </div>
              </div>

              {/* Merchant */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Merchant</p>
                <div className="flex items-center gap-3">
                  <img
                    src={selectedBooking.merchantAvatar}
                    alt={selectedBooking.merchantName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{selectedBooking.merchantName}</p>
                    <p className="text-sm text-gray-600">{selectedBooking.merchantAddress}</p>
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Service</p>
                <p className="font-semibold text-gray-900">{selectedBooking.service}</p>
                <p className="text-sm text-gray-600 mt-1">{selectedBooking.duration}</p>
                {selectedBooking.addOns.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-medium text-gray-500 mb-2">Add-ons:</p>
                    <ul className="space-y-1.5">
                      {selectedBooking.addOns.map((addOn: any, idx: number) => (
                        <li key={idx} className="text-sm text-gray-700 flex justify-between">
                          <span>{addOn.name}</span>
                          <span className="text-gray-600 font-medium">+${addOn.price.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Date</p>
                  <p className="font-semibold text-gray-900">{formatDate(selectedBooking.date)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Time</p>
                  <p className="font-semibold text-gray-900">{formatTime(selectedBooking.time)}</p>
                </div>
              </div>

              {/* Notes */}
              {selectedBooking.notes && (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Notes</p>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{selectedBooking.notes}</p>
                </div>
              )}

              {/* Cancel Reason */}
              {selectedBooking.status === "cancelled" && selectedBooking.cancelReason && (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Cancellation Reason</p>
                  <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg border border-red-200">{selectedBooking.cancelReason}</p>
                </div>
              )}

              {/* Pricing */}
              <div className="pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Service Total</span>
                  <span className="text-xl font-bold text-gray-900">${selectedBooking.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deposit Required ({selectedBooking.depositPercentage}%)</span>
                  <span className="text-lg font-bold text-amber-600">${selectedBooking.deposit.toLocaleString()}</span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Timeline</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Requested:</span>
                    <span className="font-medium text-gray-900">{formatDate(selectedBooking.requestDate)}</span>
                  </div>
                  {selectedBooking.confirmedDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Confirmed:</span>
                      <span className="font-medium text-green-700">{formatDate(selectedBooking.confirmedDate)}</span>
                    </div>
                  )}
                  {selectedBooking.completedDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-medium text-blue-700">{formatDate(selectedBooking.completedDate)}</span>
                    </div>
                  )}
                  {selectedBooking.cancelledDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cancelled:</span>
                      <span className="font-medium text-red-700">{formatDate(selectedBooking.cancelledDate)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={() => setSelectedBooking(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
