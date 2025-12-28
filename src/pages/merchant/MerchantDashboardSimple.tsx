import { Container, Box, Typography, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppointmentsManagement } from '../../components/merchant/AppointmentsManagement';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export const MerchantDashboardSimple = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Merchant Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your business and appointments
        </Typography>
      </Box>

      {/* Quick Actions */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Paper sx={{ p: 3, textAlign: 'center', cursor: 'pointer', flex: 1 }} onClick={() => navigate('/merchant/profile')}>
          <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6">View Profile</Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your business information
          </Typography>
        </Paper>
        <Paper sx={{ p: 3, textAlign: 'center', flex: 1 }}>
          <DashboardIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6">Analytics</Typography>
          <Typography variant="body2" color="text.secondary">
            View your business metrics
          </Typography>
        </Paper>
        <Paper sx={{ p: 3, textAlign: 'center', flex: 1 }}>
          <SettingsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6">Settings</Typography>
          <Typography variant="body2" color="text.secondary">
            Configure your preferences
          </Typography>
        </Paper>
      </Stack>

      {/* Appointments Management */}
      <AppointmentsManagement />
    </Container>
  );
};

// Export for backward compatibility
export { MerchantDashboardSimple as MerchantDashboard };
