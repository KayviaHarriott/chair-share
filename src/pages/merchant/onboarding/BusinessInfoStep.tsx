import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
;
import type { MerchantProfile } from '../../../types/merchant';

interface BusinessInfoStepProps {
  data: Partial<MerchantProfile>;
  onUpdate: (data: Partial<MerchantProfile>) => void;
  onNext: () => void;
}

const businessTypes = [
  'Salon & Spa',
  'Barbershop',
  'Beauty Services',
  'Fitness & Wellness',
  'Photography',
  'Event Planning',
  'Consulting',
  'Home Services',
  'Auto Services',
  'Pet Services',
  'Other',
];

export const BusinessInfoStep = ({ data, onUpdate, onNext }: BusinessInfoStepProps) => {
  const [formData, setFormData] = useState({
    businessName: data.businessName || '',
    ownerName: data.ownerName || '',
    email: data.email || '',
    phone: data.phone || '',
    address: data.address || '',
    city: data.city || '',
    state: data.state || '',
    zipCode: data.zipCode || '',
    businessType: data.businessType || '',
    description: data.description || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Owner name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required';
    }
    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onUpdate(formData);
      onNext();
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Business Information
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Tell us about your business
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Business Name"
            value={formData.businessName}
            onChange={handleChange('businessName')}
            error={!!errors.businessName}
            helperText={errors.businessName}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Owner Name"
            value={formData.ownerName}
            onChange={handleChange('ownerName')}
            error={!!errors.ownerName}
            helperText={errors.ownerName}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone"
            value={formData.phone}
            onChange={handleChange('phone')}
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Business Address"
            value={formData.address}
            onChange={handleChange('address')}
            error={!!errors.address}
            helperText={errors.address}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="City"
            value={formData.city}
            onChange={handleChange('city')}
            error={!!errors.city}
            helperText={errors.city}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="State"
            value={formData.state}
            onChange={handleChange('state')}
            error={!!errors.state}
            helperText={errors.state}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Zip Code"
            value={formData.zipCode}
            onChange={handleChange('zipCode')}
            error={!!errors.zipCode}
            helperText={errors.zipCode}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Business Type"
            value={formData.businessType}
            onChange={handleChange('businessType')}
            error={!!errors.businessType}
            helperText={errors.businessType}
            required
          >
            {businessTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Business Description"
            value={formData.description}
            onChange={handleChange('description')}
            error={!!errors.description}
            helperText={errors.description || 'Describe your services and what makes your business unique'}
            required
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
