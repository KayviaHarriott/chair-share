import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
;
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import type { Service } from '../../../types/merchant';

interface ServicesStepProps {
  services: Service[];
  onUpdate: (services: Service[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const serviceCategories = [
  'Hair Services',
  'Nail Services',
  'Skin Care',
  'Massage',
  'Makeup',
  'Barber Services',
  'Consultation',
  'Other',
];

export const ServicesStep = ({ services, onUpdate, onNext, onBack }: ServicesStepProps) => {
  const [open, setOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    category: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOpen = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        description: service.description,
        price: service.price.toString(),
        duration: service.duration.toString(),
        category: service.category,
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        duration: '',
        category: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingService(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      duration: '',
      category: '',
    });
    setErrors({});
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Service name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.duration || parseInt(formData.duration) <= 0) {
      newErrors.duration = 'Valid duration is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveService = () => {
    if (validate()) {
      const newService: Service = {
        id: editingService?.id || Date.now().toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        duration: parseInt(formData.duration),
        category: formData.category,
      };

      if (editingService) {
        // Update existing service
        onUpdate(services.map((s) => (s.id === editingService.id ? newService : s)));
      } else {
        // Add new service
        onUpdate([...services, newService]);
      }
      handleClose();
    }
  };

  const handleDeleteService = (id: string) => {
    onUpdate(services.filter((s) => s.id !== id));
  };

  const handleNext = () => {
    if (services.length === 0) {
      alert('Please add at least one service');
      return;
    }
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Services & Pricing
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Add the services you offer with pricing and duration
      </Typography>

      {services.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'grey.50' }}>
          <Typography color="text.secondary" gutterBottom>
            No services added yet
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
            sx={{ mt: 2 }}
          >
            Add First Service
          </Button>
        </Paper>
      ) : (
        <>
          <List>
            {services.map((service) => (
              <Paper key={service.id} sx={{ mb: 2 }}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6">{service.name}</Typography>
                        <Chip label={service.category} size="small" />
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          <strong>Price:</strong> ${service.price.toFixed(2)} |{' '}
                          <strong>Duration:</strong> {service.duration} minutes
                        </Typography>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleOpen(service)} sx={{ mr: 1 }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDeleteService(service.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Paper>
            ))}
          </List>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
            fullWidth
          >
            Add Another Service
          </Button>
        </>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>

      {/* Service Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingService ? 'Edit Service' : 'Add New Service'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Service Name"
                value={formData.name}
                onChange={handleChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Category"
                value={formData.category}
                onChange={handleChange('category')}
                error={!!errors.category}
                helperText={errors.category}
                required
                SelectProps={{ native: true }}
              >
                <option value=""></option>
                {serviceCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                value={formData.description}
                onChange={handleChange('description')}
                error={!!errors.description}
                helperText={errors.description}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price ($)"
                type="number"
                value={formData.price}
                onChange={handleChange('price')}
                error={!!errors.price}
                helperText={errors.price}
                required
                inputProps={{ min: 0, step: 0.01 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration (minutes)"
                type="number"
                value={formData.duration}
                onChange={handleChange('duration')}
                error={!!errors.duration}
                helperText={errors.duration}
                required
                inputProps={{ min: 1, step: 1 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveService} variant="contained">
            {editingService ? 'Update' : 'Add'} Service
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
