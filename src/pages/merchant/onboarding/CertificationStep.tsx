import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  TextField,
  Card,
  CardContent,
  CardActions,
  MenuItem,
  Alert,
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

  const handleNext = () => {
    if (certs.length === 0) {
      setUploadError('Please upload at least one certification document');
      return;
    }
    onUpdate(certs);
    onNext();
  };

  const handleSkip = () => {
    onUpdate([]);
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Certifications & Documents
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Upload your professional certifications and identification documents
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block' }}>
        Accepted formats: JPG, PNG, PDF • Maximum file size: 5MB per document
      </Typography>

      {/* Upload Section */}
      <Paper sx={{ p: 3, mb: 3, bgcolor: 'grey.50' }}>
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
                  {type}
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
          <Alert severity="error" sx={{ mt: 2 }}>
            {uploadError}
          </Alert>
        )}
      </Paper>

      {/* Uploaded Certifications */}
      {certs.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50' }}>
          <DescriptionIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography color="text.secondary" gutterBottom>
            No documents uploaded yet
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Upload at least one certification or identification document to verify your business
          </Typography>
        </Paper>
      ) : (
        <>
          <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
            Uploaded Documents ({certs.length})
          </Typography>
          <Grid container spacing={2}>
            {certs.map((cert) => (
              <Grid item xs={12} key={cert.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {cert.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {cert.fileName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatFileSize(cert.fileSize)} • Uploaded {new Date(cert.uploadedAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(cert.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      <Box sx={{ mt: 3, p: 2, bgcolor: 'info.lighter', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Why do we need this?</strong> We verify all merchants to ensure a safe and trusted platform for our clients. 
          Your documents are securely stored and only used for verification purposes.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>
          Back
        </Button>
        <Box>
          {certs.length === 0 && (
            <Button onClick={handleSkip} sx={{ mr: 1 }}>
              Skip for Now
            </Button>
          )}
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
