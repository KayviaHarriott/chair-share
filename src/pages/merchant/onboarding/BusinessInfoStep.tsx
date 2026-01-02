import { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
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

const countries = [
  'Jamaica',
  'United States',
  'Canada',
  'United Kingdom',
  'Other',
];

// Jamaica parishes
const jamaicaParishes = [
  'Kingston',
  'St. Andrew',
  'St. Thomas',
  'Portland',
  'St. Mary',
  'St. Ann',
  'Trelawny',
  'St. James',
  'Hanover',
  'Westmoreland',
  'St. Elizabeth',
  'Manchester',
  'Clarendon',
  'St. Catherine',
];

export const BusinessInfoStep = ({ data, onUpdate, onNext }: BusinessInfoStepProps) => {
  const [formData, setFormData] = useState({
    businessName: data.businessName || '',
    ownerName: data.ownerName || '',
    email: data.email || '',
    phone: data.phone || '',
    country: data.country || '',
    address: data.address || '',
    city: data.city || '',
    state: data.state || '',
    zipCode: data.zipCode || '',
    businessType: data.businessType || '',
    description: data.description || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // If changing country, reset address fields
    if (field === 'country') {
      setFormData({
        ...formData,
        country: value,
        address: '',
        city: '',
        state: '',
        zipCode: '',
      });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    
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
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    
    // Only validate address fields if country is Jamaica
    if (formData.country === 'Jamaica') {
      if (!formData.address.trim()) {
        newErrors.address = 'Address is required';
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City/Town is required';
      }
      if (!formData.state.trim()) {
        newErrors.state = 'Parish is required';
      }
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

  const isJamaica = formData.country === 'Jamaica';
  const isCountrySelected = formData.country !== '';
  const isUnsupportedCountry = isCountrySelected && !isJamaica;

  return (
    <Box>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">
          Tell us about your business
        </p>
      </div>

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
            placeholder="e.g., (876) 555-1234"
            required
          />
        </Grid>

        {/* Country Selection */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Country"
            value={formData.country}
            onChange={handleChange('country')}
            error={!!errors.country}
            helperText={errors.country || 'Select your business location'}
            required
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Show message if country not supported */}
        {isUnsupportedCountry && (
          <Grid item xs={12}>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-2">
                We're currently not operating in {formData.country}.
              </p>
              <p className="text-sm text-gray-700">
                Chair Share is currently only available in Jamaica. We're working hard to expand to other countries soon! 
                Please check back later or select Jamaica if you operate there.
              </p>
            </div>
          </Grid>
        )}

        {/* Address fields - Only show if Jamaica is selected */}
        {isJamaica && (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Address"
                value={formData.address}
                onChange={handleChange('address')}
                error={!!errors.address}
                helperText={errors.address || 'Street address, building name, etc.'}
                placeholder="e.g., 123 Main Street"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="City/Town"
                value={formData.city}
                onChange={handleChange('city')}
                error={!!errors.city}
                helperText={errors.city}
                placeholder="e.g., Montego Bay"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Parish"
                value={formData.state}
                onChange={handleChange('state')}
                error={!!errors.state}
                helperText={errors.state}
                required
              >
                {jamaicaParishes.map((parish) => (
                  <MenuItem key={parish} value={parish}>
                    {parish}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </>
        )}

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

      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          disabled={isUnsupportedCountry}
          className="px-8 py-3 bg-gradient-to-br from-amber-500 to-[#BF4E30] hover:from-amber-600 hover:to-[#A0432A] text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </Box>
  );
};
