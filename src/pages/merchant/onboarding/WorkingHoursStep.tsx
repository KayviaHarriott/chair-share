import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
;
import type { WorkingHours } from '../../../types/merchant';

interface WorkingHoursStepProps {
  workingHours: WorkingHours;
  onUpdate: (workingHours: WorkingHours) => void;
  onNext: () => void;
  onBack: () => void;
}

const daysOfWeek: (keyof WorkingHours)[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const dayLabels: Record<keyof WorkingHours, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export const WorkingHoursStep = ({ workingHours, onUpdate, onNext, onBack }: WorkingHoursStepProps) => {
  const [schedule, setSchedule] = useState<WorkingHours>(workingHours);

  const handleToggleDay = (day: keyof WorkingHours) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        isOpen: !schedule[day].isOpen,
      },
    });
  };

  const handleTimeChange = (day: keyof WorkingHours, field: 'openTime' | 'closeTime', value: string) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [field]: value,
      },
    });
  };

  const handleCopyToAll = () => {
    const mondaySchedule = schedule.monday;
    const newSchedule: WorkingHours = {} as WorkingHours;
    
    daysOfWeek.forEach((day) => {
      newSchedule[day] = {
        isOpen: mondaySchedule.isOpen,
        openTime: mondaySchedule.openTime,
        closeTime: mondaySchedule.closeTime,
      };
    });
    
    setSchedule(newSchedule);
  };

  const handleNext = () => {
    // Validate that at least one day is open
    const hasOpenDay = daysOfWeek.some((day) => schedule[day].isOpen);
    
    if (!hasOpenDay) {
      alert('Please select at least one working day');
      return;
    }

    // Validate times for open days
    for (const day of daysOfWeek) {
      if (schedule[day].isOpen) {
        const openTime = schedule[day].openTime;
        const closeTime = schedule[day].closeTime;
        
        if (!openTime || !closeTime) {
          alert(`Please set both open and close times for ${dayLabels[day]}`);
          return;
        }
        
        if (openTime >= closeTime) {
          alert(`Close time must be after open time for ${dayLabels[day]}`);
          return;
        }
      }
    }

    onUpdate(schedule);
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Working Hours & Availability
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Set your business hours for each day of the week
      </Typography>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" size="small" onClick={handleCopyToAll}>
          Copy Monday to All Days
        </Button>
      </Box>

      <Grid container spacing={2}>
        {daysOfWeek.map((day) => (
          <Grid item xs={12} key={day}>
            <Paper sx={{ p: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={schedule[day].isOpen}
                        onChange={() => handleToggleDay(day)}
                      />
                    }
                    label={
                      <Typography variant="body1" fontWeight="medium">
                        {dayLabels[day]}
                      </Typography>
                    }
                  />
                </Grid>
                {schedule[day].isOpen ? (
                  <>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Open Time"
                        type="time"
                        value={schedule[day].openTime}
                        onChange={(e) => handleTimeChange(day, 'openTime', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 900 }} // 15 min intervals
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Close Time"
                        type="time"
                        value={schedule[day].closeTime}
                        onChange={(e) => handleTimeChange(day, 'closeTime', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 900 }} // 15 min intervals
                      />
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12} sm={8}>
                    <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                      Closed
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'info.lighter', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> You can adjust availability for specific dates later in your dashboard.
          These are your default weekly hours.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
