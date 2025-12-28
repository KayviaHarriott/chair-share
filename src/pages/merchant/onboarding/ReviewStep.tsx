import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  Divider,
  Chip,
  Card,
  CardMedia,
} from '@mui/material';
import { MerchantProfile } from '../../../types/merchant';

interface ReviewStepProps {
  data: MerchantProfile;
  onBack: () => void;
  onSubmit: () => void;
}

const dayLabels: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export const ReviewStep = ({ data, onBack, onSubmit }: ReviewStepProps) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review Your Information
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Please review all information before submitting your application
      </Typography>

      {/* Business Information */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Business Information
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              Business Name
            </Typography>
            <Typography variant="body1">{data.businessName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              Owner Name
            </Typography>
            <Typography variant="body1">{data.ownerName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">{data.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body1">{data.phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary">
              Address
            </Typography>
            <Typography variant="body1">
              {data.address}, {data.city}, {data.state} {data.zipCode}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              Business Type
            </Typography>
            <Typography variant="body1">{data.businessType}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary">
              Description
            </Typography>
            <Typography variant="body1">{data.description}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Services */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Services & Pricing
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {data.services && data.services.length > 0 ? (
          <Grid container spacing={2}>
            {data.services.map((service) => (
              <Grid item xs={12} key={service.id}>
                <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {service.name}
                    </Typography>
                    <Chip label={service.category} size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Price:</strong> ${service.price.toFixed(2)} |{' '}
                    <strong>Duration:</strong> {service.duration} minutes
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No services added
          </Typography>
        )}
      </Paper>

      {/* Working Hours */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Working Hours
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {data.workingHours && (
          <Grid container spacing={1}>
            {Object.entries(data.workingHours).map(([day, schedule]) => (
              <Grid item xs={12} key={day}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                  <Typography variant="body2" fontWeight="medium">
                    {dayLabels[day]}
                  </Typography>
                  {schedule.isOpen ? (
                    <Typography variant="body2">
                      {schedule.openTime} - {schedule.closeTime}
                    </Typography>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Closed
                    </Typography>
                  )}
                </Box>
                {day !== 'sunday' && <Divider />}
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>

      {/* Portfolio */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Portfolio
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {data.portfolio && data.portfolio.length > 0 ? (
          <Grid container spacing={2}>
            {data.portfolio.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="150"
                    image={image.url}
                    alt={image.caption || 'Portfolio image'}
                    sx={{ objectFit: 'cover' }}
                  />
                  {image.caption && (
                    <Box sx={{ p: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {image.caption}
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No portfolio images added
          </Typography>
        )}
      </Paper>

      <Box sx={{ p: 2, bgcolor: 'warning.lighter', borderRadius: 1, mb: 3 }}>
        <Typography variant="body2">
          <strong>Important:</strong> Your application will be reviewed by our team. You will receive
          an email notification once your merchant account is approved. This typically takes 1-2
          business days.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={onSubmit} size="large">
          Submit Application
        </Button>
      </Box>
    </Box>
  );
};
