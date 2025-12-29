import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DescriptionIcon from '@mui/icons-material/Description';

interface CertificationStepProps {
  certifications: Certification[];
  onUpdate: (certifications: Certification[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Certification {
  id: string;
  type: string;
  file: string; // Base64 or URL
  fileName: string;
  fileSize: number;
  uploadedAt: Date;
}

const certificationType = [
  "Driver's License",
  "National ID",
  "Passport",
  "Cosmetology License",
  "Barber License",
  "Esthetician License",
  "Nail Technician License",
  "Massage Therapy License",
  "Business Registration Certificate",
  "Health & Safety Certificate",
  "Other Professional Certification",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

export const CertificationStep = ({ certifications, onUpdate, onNext, onBack }: CertificationStepProps) => {
  const [certs, setCerts] = useState<Certification[]>(certifications);
  const [selectedType, setSelectedType] = useState('');
  const [uploadError, setUploadError] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError('');

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError('Only JPG, PNG, and PDF files are allowed');
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    // Validate certification type is selected
    if (!selectedType) {
      setUploadError('Please select a certification type first');
      return;
    }

    // Read file as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      const newCert: Certification = {
        id: Date.now().toString(),
        type: selectedType,
        file: e.target?.result as string,
        fileName: file.name,
        fileSize: file.size,
        uploadedAt: new Date(),
      };

      const updatedCerts = [...certs, newCert];
      setCerts(updatedCerts);
      setSelectedType(''); // Reset selection after upload
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    const updatedCerts = certs.filter((cert) => cert.id !== id);
    setCerts(updatedCerts);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const hasDriversLicense = certs.some(cert => cert.type === "Driver's License");

  const handleNext = () => {
    if (certs.length === 0) {
      setUploadError('Please upload at least one certification document');
      return;
    }
    if (!hasDriversLicense) {
      setUploadError("Driver's License is required. Please upload your driver's license.");
      return;
    }
    onUpdate(certs);
    onNext();
  };

  return (
    <Box>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Certifications & Documents</h2>
        <p className="text-gray-600 mb-1">
          Upload your professional certifications and identification documents
        </p>
        <p className="text-sm text-gray-500">
          <span className="text-amber-600 font-semibold">*Required:</span> Driver's License • Accepted formats: JPG, PNG, PDF • Maximum file size: 5MB per document
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Certification Type"
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setUploadError('');
              }}
              helperText="Select the type of document you want to upload"
            >
              {certificationType.map((type) => (
                <MenuItem key={type} value={type}>
                  {type === "Driver's License" ? `${type} *` : type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              startIcon={<UploadFileIcon />}
              disabled={!selectedType}
              sx={{ height: '56px' }}
            >
              Upload Document
              <input
                type="file"
                hidden
                accept="image/jpeg,image/png,image/jpg,application/pdf"
                onChange={handleFileUpload}
              />
            </Button>
          </Grid>
        </Grid>

        {uploadError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{uploadError}</p>
          </div>
        )}
      </div>

      {/* Uploaded Certifications */}
      {certs.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <DescriptionIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <p className="text-gray-600 mb-2 font-medium">No documents uploaded yet</p>
          <p className="text-sm text-gray-500">
            Upload your driver's license and any professional certifications to verify your business
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Uploaded Documents ({certs.length})
            </h3>
            {hasDriversLicense ? (
              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Driver's License Uploaded
              </span>
            ) : (
              <span className="text-sm text-amber-600 font-medium flex items-center gap-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Driver's License Required
              </span>
            )}
          </div>
          <div className="space-y-3">
            {certs.map((cert) => {
              const isDriversLicense = cert.type === "Driver's License";
              return (
                <div key={cert.id} className={`bg-white border rounded-lg p-4 shadow-sm ${
                  isDriversLicense ? 'border-green-300 bg-green-50' : 'border-gray-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      isDriversLicense ? 'bg-green-100' : 'bg-amber-100'
                    }`}>
                      <DescriptionIcon sx={{ fontSize: 32, color: isDriversLicense ? '#16a34a' : '#f59e0b' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{cert.type}</p>
                        {isDriversLicense && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{cert.fileName}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatFileSize(cert.fileSize)} • Uploaded {new Date(cert.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(cert.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="text-blue-800">Why do we need this?</strong> We verify all merchants to ensure a safe and trusted platform for our clients. 
          Your documents are securely stored and only used for verification purposes.
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
          onClick={handleNext}
          className="px-8 py-3 bg-gradient-to-br from-amber-500 to-[#BF4E30] hover:from-amber-600 hover:to-[#A0432A] text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={certs.length === 0 || !hasDriversLicense}
        >
          Next →
        </button>
      </div>
    </Box>
  );
};
