import { Box } from '@mui/material';
import type { MerchantProfile } from '../../../types/merchant';

interface ReviewStepProps {
  data: MerchantProfile;
  onBack: () => void;
  onSubmit: () => void;
}

export const ReviewStep = ({ data, onBack, onSubmit }: ReviewStepProps) => {
  return (
    <Box>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Your Information</h2>
        <p className="text-gray-600">
          Please review all information before submitting your application
        </p>
      </div>

      {/* Business Information */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-amber-600">📋</span>
          Business Information
        </h3>
        <div className="border-t border-gray-200 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Business Name</p>
            <p className="text-gray-900 font-medium">{data.businessName}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Owner Name</p>
            <p className="text-gray-900 font-medium">{data.ownerName}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
            <p className="text-gray-900 font-medium">{data.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</p>
            <p className="text-gray-900 font-medium">{data.phone}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Country</p>
            <p className="text-gray-900 font-medium">{data.country}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</p>
            <p className="text-gray-900 font-medium">
              {data.address}, {data.city}, {data.state}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Business Type</p>
            <p className="text-gray-900 font-medium">{data.businessType}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Description</p>
            <p className="text-gray-900">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-amber-600">📄</span>
          Certifications & Documents
        </h3>
        <div className="border-t border-gray-200 mb-4" />
        {data.certifications && data.certifications.length > 0 ? (
          <div className="space-y-3">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">{cert.type}</p>
                <p className="text-sm text-gray-600">{cert.fileName}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No certifications uploaded</p>
        )}
      </div>



      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          <strong className="text-amber-800">Important:</strong> Your application will be reviewed by our team. You will receive
          an email notification once your merchant account is approved. This typically takes 1-2
          business days.
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onSubmit}
          className="px-8 py-3 bg-gradient-to-br from-amber-500 to-[#BF4E30] hover:from-amber-600 hover:to-[#A0432A] text-white font-semibold rounded-lg shadow-lg transition-all"
        >
          Submit Application →
        </button>
      </div>
    </Box>
  );
};
