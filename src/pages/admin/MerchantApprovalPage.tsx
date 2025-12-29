import { useState } from "react";
import {
  CheckCircleRounded,
  CancelRounded,
  PauseCircleRounded,
  ArchiveRounded,
  VisibilityRounded,
  PersonRounded,
  EmailRounded,
  PhoneRounded,
  LocationOnRounded,
  BusinessRounded,
  DescriptionRounded,
} from "@mui/icons-material";

// Temporary merchant applications data
const MERCHANT_APPLICATIONS = [
  {
    id: 1,
    businessName: "Glamour by Lisa",
    ownerName: "Lisa Thompson",
    email: "glamourbylisa@example.com",
    phone: "(876) 555-0123",
    address: "123 Main Street, Kingston",
    country: "Jamaica",
    parish: "Kingston",
    businessType: "Salon & Spa",
    description: "Specializing in protective styles and natural hair care for over 10 years.",
    status: "pending",
    appliedDate: "2024-12-15",
    certifications: [
      {
        type: "Driver's License",
        fileName: "drivers_license.pdf",
        uploadedAt: "2024-12-15"
      },
      {
        type: "Cosmetology License",
        fileName: "cosmetology_cert.pdf",
        uploadedAt: "2024-12-15"
      },
      {
        type: "Business Registration Certificate",
        fileName: "business_reg.pdf",
        uploadedAt: "2024-12-15"
      }
    ]
  },
  {
    id: 2,
    businessName: "Braids by Keisha",
    ownerName: "Keisha Brown",
    email: "keisha.braids@example.com",
    phone: "(876) 555-0456",
    address: "456 Market Street, Montego Bay",
    country: "Jamaica",
    parish: "St. James",
    businessType: "Beauty Services",
    description: "Expert braiding services with 8+ years of experience.",
    status: "pending",
    appliedDate: "2024-12-16",
    certifications: [
      {
        type: "Driver's License",
        fileName: "dl_keisha.pdf",
        uploadedAt: "2024-12-16"
      },
      {
        type: "Barber License",
        fileName: "barber_license.pdf",
        uploadedAt: "2024-12-16"
      }
    ]
  },
  {
    id: 3,
    businessName: "Natural Roots Salon",
    ownerName: "Marcus Johnson",
    email: "naturalroots@example.com",
    phone: "(876) 555-0789",
    address: "789 Ocean Drive, Ocho Rios",
    country: "Jamaica",
    parish: "St. Ann",
    businessType: "Salon & Spa",
    description: "Full-service salon specializing in natural hair care and locs.",
    status: "approved",
    appliedDate: "2024-12-10",
    approvedDate: "2024-12-12",
    certifications: [
      {
        type: "Driver's License",
        fileName: "marcus_dl.pdf",
        uploadedAt: "2024-12-10"
      },
      {
        type: "Cosmetology License",
        fileName: "cosmetology.pdf",
        uploadedAt: "2024-12-10"
      },
      {
        type: "Health & Safety Certificate",
        fileName: "health_cert.pdf",
        uploadedAt: "2024-12-10"
      }
    ]
  },
  {
    id: 4,
    businessName: "Elite Cuts Barbershop",
    ownerName: "Trevor Williams",
    email: "elitecuts@example.com",
    phone: "(876) 555-0321",
    address: "321 High Street, Spanish Town",
    country: "Jamaica",
    parish: "St. Catherine",
    businessType: "Barbershop",
    description: "Premium barbershop offering modern cuts and traditional grooming.",
    status: "paused",
    appliedDate: "2024-12-08",
    pausedDate: "2024-12-14",
    certifications: [
      {
        type: "Driver's License",
        fileName: "trevor_dl.pdf",
        uploadedAt: "2024-12-08"
      },
      {
        type: "Barber License",
        fileName: "barber_cert.pdf",
        uploadedAt: "2024-12-08"
      }
    ]
  }
];

export const MerchantApprovalPage = () => {
  const [applications, setApplications] = useState<any[]>(MERCHANT_APPLICATIONS);
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showDetails, setShowDetails] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "approved":
        return "bg-green-100 text-green-800 border-green-300";
      case "paused":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "archived":
        return "bg-gray-100 text-gray-800 border-gray-300";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const handleApprove = (merchant: any) => {
    if (window.confirm(`Approve ${merchant.businessName}?`)) {
      setApplications(applications.map(app => 
        app.id === merchant.id 
          ? { ...app, status: "approved", approvedDate: new Date().toISOString().split('T')[0] }
          : app
      ));
      alert(`${merchant.businessName} has been approved!`);
      setShowDetails(false);
    }
  };

  const handleReject = (merchant: any) => {
    const reason = window.prompt(`Reason for rejecting ${merchant.businessName}?`);
    if (reason) {
      setApplications(applications.map(app => 
        app.id === merchant.id 
          ? { ...app, status: "rejected", rejectedDate: new Date().toISOString().split('T')[0], rejectionReason: reason }
          : app
      ));
      alert(`${merchant.businessName} has been rejected.`);
      setShowDetails(false);
    }
  };

  const handlePause = (merchant: any) => {
    if (window.confirm(`Pause ${merchant.businessName}?`)) {
      setApplications(applications.map(app => 
        app.id === merchant.id 
          ? { ...app, status: "paused", pausedDate: new Date().toISOString().split('T')[0] }
          : app
      ));
      alert(`${merchant.businessName} has been paused.`);
    }
  };

  const handleArchive = (merchant: any) => {
    if (window.confirm(`Archive ${merchant.businessName}? This cannot be undone.`)) {
      setApplications(applications.map(app => 
        app.id === merchant.id 
          ? { ...app, status: "archived", archivedDate: new Date().toISOString().split('T')[0] }
          : app
      ));
      alert(`${merchant.businessName} has been archived.`);
      setShowDetails(false);
    }
  };

  const filteredApplications = filterStatus === "all" 
    ? applications 
    : applications.filter(app => app.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Merchant Applications
          </h1>
          <p className="text-gray-600">
            Review and manage merchant applications for Chair Share
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-yellow-500">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-gray-900">
              {applications.filter(a => a.status === "pending").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
            <p className="text-sm text-gray-600">Approved</p>
            <p className="text-2xl font-bold text-gray-900">
              {applications.filter(a => a.status === "approved").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-orange-500">
            <p className="text-sm text-gray-600">Paused</p>
            <p className="text-2xl font-bold text-gray-900">
              {applications.filter(a => a.status === "paused").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-gray-500">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-gray-900">
              {applications.length}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            {["all", "pending", "approved", "paused", "archived", "rejected"].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filterStatus === status
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="font-medium text-gray-900">{merchant.businessName}</div>
                        <div className="text-sm text-gray-500">{merchant.businessType}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{merchant.ownerName}</div>
                      <div className="text-xs text-gray-500">{merchant.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{merchant.parish}</div>
                      <div className="text-xs text-gray-500">{merchant.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(merchant.appliedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(merchant.status)}`}>
                        {merchant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedMerchant(merchant);
                            setShowDetails(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <VisibilityRounded fontSize="small" />
                        </button>
                        {merchant.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleApprove(merchant)}
                              className="text-green-600 hover:text-green-900"
                              title="Approve"
                            >
                              <CheckCircleRounded fontSize="small" />
                            </button>
                            <button
                              onClick={() => handleReject(merchant)}
                              className="text-red-600 hover:text-red-900"
                              title="Reject"
                            >
                              <CancelRounded fontSize="small" />
                            </button>
                          </>
                        )}
                        {(merchant.status === "approved" || merchant.status === "pending") && (
                          <button
                            onClick={() => handlePause(merchant)}
                            className="text-orange-600 hover:text-orange-900"
                            title="Pause"
                          >
                            <PauseCircleRounded fontSize="small" />
                          </button>
                        )}
                        {merchant.status !== "archived" && (
                          <button
                            onClick={() => handleArchive(merchant)}
                            className="text-gray-600 hover:text-gray-900"
                            title="Archive"
                          >
                            <ArchiveRounded fontSize="small" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && selectedMerchant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[10000]">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedMerchant.businessName}
                  </h2>
                  <span className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(selectedMerchant.status)}`}>
                    {selectedMerchant.status}
                  </span>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <CancelRounded />
                </button>
              </div>

              {/* Business Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BusinessRounded className="text-amber-600" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Owner Name</p>
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <PersonRounded fontSize="small" className="text-gray-600" />
                      {selectedMerchant.ownerName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Type</p>
                    <p className="font-medium text-gray-900">{selectedMerchant.businessType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <EmailRounded fontSize="small" className="text-gray-600" />
                      {selectedMerchant.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <PhoneRounded fontSize="small" className="text-gray-600" />
                      {selectedMerchant.phone}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <LocationOnRounded fontSize="small" className="text-gray-600" />
                      {selectedMerchant.address}, {selectedMerchant.parish}, {selectedMerchant.country}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="text-gray-900">{selectedMerchant.description}</p>
                  </div>
                </div>
              </div>

              {/* Certifications & Documents */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <DescriptionRounded className="text-amber-600" />
                  Certifications & Documents ({selectedMerchant.certifications.length})
                </h3>
                <div className="space-y-3">
                  {selectedMerchant.certifications.map((cert: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">{cert.type}</p>
                          <p className="text-sm text-gray-600">{cert.fileName}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Uploaded: {new Date(cert.uploadedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                          View Document
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Timeline */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Timeline</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-medium text-gray-600">Applied:</span>
                    <span className="text-gray-900">{new Date(selectedMerchant.appliedDate).toLocaleString()}</span>
                  </div>
                  {selectedMerchant.approvedDate && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-gray-600">Approved:</span>
                      <span className="text-green-600">{new Date(selectedMerchant.approvedDate).toLocaleString()}</span>
                    </div>
                  )}
                  {selectedMerchant.pausedDate && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-gray-600">Paused:</span>
                      <span className="text-orange-600">{new Date(selectedMerchant.pausedDate).toLocaleString()}</span>
                    </div>
                  )}
                  {selectedMerchant.archivedDate && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-gray-600">Archived:</span>
                      <span className="text-gray-600">{new Date(selectedMerchant.archivedDate).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {selectedMerchant.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(selectedMerchant)}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      <CheckCircleRounded />
                      Approve Application
                    </button>
                    <button
                      onClick={() => handleReject(selectedMerchant)}
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      <CancelRounded />
                      Reject Application
                    </button>
                  </>
                )}
                {(selectedMerchant.status === "approved" || selectedMerchant.status === "pending") && (
                  <button
                    onClick={() => handlePause(selectedMerchant)}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    <PauseCircleRounded />
                    Pause Merchant
                  </button>
                )}
                {selectedMerchant.status !== "archived" && (
                  <button
                    onClick={() => handleArchive(selectedMerchant)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    <ArchiveRounded />
                    Archive
                  </button>
                )}
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
