import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Avatar,
  Chip,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
} from '@mui/material';
import { Grid } from '../../components/Grid';
;
import EditIcon from '@mui/icons-material/Edit';
import type { MerchantProfile } from '../../types/merchant';

// Mock data - replace with actual data from your backend
const mockMerchantData: MerchantProfile = {
  id: '1',
  businessName: 'Elegant Styles Salon',
  ownerName: 'Jane Smith',
  email: 'jane@elegantstyles.com',
  phone: '(555) 123-4567',
  address: '123 Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  businessType: 'Salon & Spa',
  description: 'Premium hair and beauty services with over 10 years of experience.',
  portfolio: [
    { id: '1', url: 'https://via.placeholder.com/300', caption: 'Haircut & Style', order: 0 },
    { id: '2', url: 'https://via.placeholder.com/300', caption: 'Color Treatment', order: 1 },
    { id: '3', url: 'https://via.placeholder.com/300', caption: 'Bridal Makeup', order: 2 },
  ],
  services: [
    { id: '1', name: 'Haircut', description: 'Professional haircut with styling', price: 50, duration: 60, category: 'Hair Services' },
    { id: '2', name: 'Hair Coloring', description: 'Full hair coloring service', price: 120, duration: 120, category: 'Hair Services' },
  ],
  workingHours: {
    monday: { isOpen: true, openTime: '09:00', closeTime: '18:00' },
    tuesday: { isOpen: true, openTime: '09:00', closeTime: '18:00' },
    wednesday: { isOpen: true, openTime: '09:00', closeTime: '18:00' },
    thursday: { isOpen: true, openTime: '09:00', closeTime: '18:00' },
    friday: { isOpen: true, openTime: '09:00', closeTime: '20:00' },
    saturday: { isOpen: true, openTime: '10:00', closeTime: '17:00' },
    sunday: { isOpen: false, openTime: '09:00', closeTime: '17:00' },
  },
  status: 'approved',
  createdAt: new Date(),
};

const dayLabels: Record<string, string> = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
  sunday: 'Sun',
};

export const MerchantProfilePage = () => {
  const [merchant] = useState<MerchantProfile>(mockMerchantData);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 100, height: 100, bgcolor: 'primary.main', fontSize: '2rem' }}
            >
              {merchant.businessName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h4">{merchant.businessName}</Typography>
              <Chip
                label={merchant.status}
                color={merchant.status === 'approved' ? 'success' : 'warning'}
                size="small"
              />
            </Box>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {merchant.businessType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {merchant.address}, {merchant.city}, {merchant.state} {merchant.zipCode}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Overview" />
          <Tab label="Services" />
          <Tab label="Portfolio" />
          <Tab label="Hours" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1">{merchant.description}</Typography>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">
                    Owner
                  </Typography>
                  <Typography variant="body1">{merchant.ownerName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">{merchant.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">{merchant.phone}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Quick Stats
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Typography variant="h3" color="primary">
                  {merchant.services.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Services Offered
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h3" color="primary">
                  {merchant.portfolio.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Portfolio Images
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" color="primary">
                  {Object.values(merchant.workingHours).filter((d) => d.isOpen).length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Days Open
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Services & Pricing
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={2}>
            {merchant.services.map((service) => (
              <Grid item xs={12} md={6} key={service.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6">{service.name}</Typography>
                      <Chip label={service.category} size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">
                        <strong>${service.price.toFixed(2)}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.duration} min
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}

      {tabValue === 2 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Portfolio
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {merchant.portfolio.length > 0 ? (
            <Grid container spacing={2}>
              {merchant.portfolio.map((image) => (
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={image.url}
                      alt={image.caption}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="body2">{image.caption}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No portfolio images available
            </Typography>
          )}
        </Paper>
      )}

      {tabValue === 3 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Working Hours
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={2}>
            {Object.entries(merchant.workingHours).map(([day, schedule]) => (
              <Grid item xs={12} sm={6} key={day}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                    bgcolor: schedule.isOpen ? 'success.lighter' : 'grey.100',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight="medium">
                    {dayLabels[day]}
                  </Typography>
                  {schedule.isOpen ? (
                    <Typography variant="body1">
                      {schedule.openTime} - {schedule.closeTime}
                    </Typography>
                  ) : (
                    <Typography variant="body1" color="text.secondary">
                      Closed
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Container>
  );
};
