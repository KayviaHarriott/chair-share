import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { Grid } from '../Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import type { Appointment } from '../../types/merchant';

// Mock appointments data - replace with actual data from your backend
const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientName: 'John Doe',
    clientEmail: 'john@example.com',
    clientPhone: '(555) 987-6543',
    serviceId: '1',
    serviceName: 'Haircut',
    date: '2024-01-15',
    time: '10:00',
    duration: 60,
    status: 'pending',
    notes: 'First time client, prefers short hair',
    merchantId: '1',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah@example.com',
    clientPhone: '(555) 123-4567',
    serviceId: '2',
    serviceName: 'Hair Coloring',
    date: '2024-01-16',
    time: '14:00',
    duration: 120,
    status: 'pending',
    notes: 'Wants blonde highlights',
    merchantId: '1',
    createdAt: new Date('2024-01-11'),
  },
  {
    id: '3',
    clientName: 'Mike Wilson',
    clientEmail: 'mike@example.com',
    clientPhone: '(555) 234-5678',
    serviceId: '1',
    serviceName: 'Haircut',
    date: '2024-01-14',
    time: '11:00',
    duration: 60,
    status: 'accepted',
    merchantId: '1',
    createdAt: new Date('2024-01-09'),
  },
  {
    id: '4',
    clientName: 'Emily Brown',
    clientEmail: 'emily@example.com',
    clientPhone: '(555) 345-6789',
    serviceId: '2',
    serviceName: 'Hair Coloring',
    date: '2024-01-12',
    time: '09:00',
    duration: 120,
    status: 'declined',
    merchantId: '1',
    createdAt: new Date('2024-01-08'),
  },
];

interface AppointmentsManagementProps {
  merchantId?: string;
}

export const AppointmentsManagement = (_props: AppointmentsManagementProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [actionDialog, setActionDialog] = useState<'accept' | 'decline' | null>(null);
  const [declineReason, setDeclineReason] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (appointment: Appointment, action: 'accept' | 'decline') => {
    setSelectedAppointment(appointment);
    setActionDialog(action);
    setDeclineReason('');
  };

  const handleCloseDialog = () => {
    setSelectedAppointment(null);
    setActionDialog(null);
    setDeclineReason('');
  };

  const handleAcceptAppointment = () => {
    if (selectedAppointment) {
      setAppointments(
        appointments.map((apt) =>
          apt.id === selectedAppointment.id ? { ...apt, status: 'accepted' } : apt
        )
      );
      alert('Appointment accepted! Client will be notified via email.');
      handleCloseDialog();
    }
  };

  const handleDeclineAppointment = () => {
    if (selectedAppointment) {
      if (!declineReason.trim()) {
        alert('Please provide a reason for declining');
        return;
      }
      setAppointments(
        appointments.map((apt) =>
          apt.id === selectedAppointment.id
            ? { ...apt, status: 'declined', notes: `Declined: ${declineReason}` }
            : apt
        )
      );
      alert('Appointment declined. Client will be notified via email.');
      handleCloseDialog();
    }
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'accepted':
        return 'success';
      case 'declined':
        return 'error';
      case 'completed':
        return 'info';
      case 'cancelled':
        return 'default';
      default:
        return 'default';
    }
  };

  const filterAppointments = (status?: Appointment['status']) => {
    return appointments.filter((apt) => !status || apt.status === status);
  };

  const getFilteredAppointments = () => {
    switch (tabValue) {
      case 0:
        return filterAppointments('pending');
      case 1:
        return filterAppointments('accepted');
      case 2:
        return filterAppointments().filter(
          (apt) => apt.status === 'declined' || apt.status === 'cancelled'
        );
      default:
        return appointments;
    }
  };

  const renderAppointmentCard = (appointment: Appointment) => (
    <Grid item xs={12} md={6} key={appointment.id}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
            <Typography variant="h6">{appointment.serviceName}</Typography>
            <Chip
              label={appointment.status}
              color={getStatusColor(appointment.status)}
              size="small"
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PersonIcon fontSize="small" color="action" />
            <Typography variant="body2">{appointment.clientName}</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmailIcon fontSize="small" color="action" />
            <Typography variant="body2">{appointment.clientEmail}</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon fontSize="small" color="action" />
            <Typography variant="body2">{appointment.clientPhone}</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2">
              {new Date(appointment.date).toLocaleDateString()} at {appointment.time} ({appointment.duration} min)
            </Typography>
          </Box>

          {appointment.notes && (
            <Box sx={{ p: 1, bgcolor: 'grey.50', borderRadius: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                <strong>Notes:</strong> {appointment.notes}
              </Typography>
            </Box>
          )}
        </CardContent>

        {appointment.status === 'pending' && (
          <CardActions sx={{ justifyContent: 'flex-end', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<CancelIcon />}
              onClick={() => handleOpenDialog(appointment, 'decline')}
            >
              Decline
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              startIcon={<CheckCircleIcon />}
              onClick={() => handleOpenDialog(appointment, 'accept')}
            >
              Accept
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );

  const filteredAppointments = getFilteredAppointments();
  const pendingCount = filterAppointments('pending').length;
  const acceptedCount = filterAppointments('accepted').length;

  return (
    <Box>
      <Paper sx={{ mb: 3 }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Appointments</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Chip label={`${pendingCount} Pending`} color="warning" />
            <Chip label={`${acceptedCount} Accepted`} color="success" />
          </Box>
        </Box>
        <Divider />
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label={`Pending (${pendingCount})`} />
          <Tab label={`Accepted (${acceptedCount})`} />
          <Tab label="History" />
          <Tab label="All" />
        </Tabs>
      </Paper>

      <Grid container spacing={2}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map(renderAppointmentCard)
        ) : (
          <Grid item xs={12}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                No appointments found
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>

      {/* Accept Dialog */}
      <Dialog open={actionDialog === 'accept'} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Accept Appointment</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Are you sure you want to accept this appointment?
          </Typography>
          {selectedAppointment && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="body2">
                <strong>Client:</strong> {selectedAppointment.clientName}
              </Typography>
              <Typography variant="body2">
                <strong>Service:</strong> {selectedAppointment.serviceName}
              </Typography>
              <Typography variant="body2">
                <strong>Date & Time:</strong>{' '}
                {new Date(selectedAppointment.date).toLocaleDateString()} at {selectedAppointment.time}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAcceptAppointment} variant="contained" color="success">
            Confirm Accept
          </Button>
        </DialogActions>
      </Dialog>

      {/* Decline Dialog */}
      <Dialog open={actionDialog === 'decline'} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Decline Appointment</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Please provide a reason for declining this appointment:
          </Typography>
          {selectedAppointment && (
            <Box sx={{ mt: 2, mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="body2">
                <strong>Client:</strong> {selectedAppointment.clientName}
              </Typography>
              <Typography variant="body2">
                <strong>Service:</strong> {selectedAppointment.serviceName}
              </Typography>
              <Typography variant="body2">
                <strong>Date & Time:</strong>{' '}
                {new Date(selectedAppointment.date).toLocaleDateString()} at {selectedAppointment.time}
              </Typography>
            </Box>
          )}
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Reason for declining"
            value={declineReason}
            onChange={(e) => setDeclineReason(e.target.value)}
            placeholder="e.g., Fully booked on that day, time slot no longer available..."
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeclineAppointment} variant="contained" color="error">
            Confirm Decline
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
