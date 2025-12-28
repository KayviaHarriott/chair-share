import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { BusinessInfoStep } from './onboarding/BusinessInfoStep';
import { ServicesStep } from './onboarding/ServicesStep';
import { WorkingHoursStep } from './onboarding/WorkingHoursStep';
import { PortfolioStep } from './onboarding/PortfolioStep';
import { ReviewStep } from './onboarding/ReviewStep';
import { MerchantProfile, Service, WorkingHours, PortfolioImage } from '../../types/merchant';

const steps = ['Business Info', 'Services & Pricing', 'Working Hours', 'Portfolio', 'Review'];

const defaultWorkingHours: WorkingHours = {
  monday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
  tuesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
  wednesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
  thursday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
  friday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
  saturday: { isOpen: false, openTime: '09:00', closeTime: '17:00' },
  sunday: { isOpen: false, openTime: '09:00', closeTime: '17:00' },
};

export const OnboardingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [merchantData, setMerchantData] = useState<Partial<MerchantProfile>>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: '',
    description: '',
    services: [],
    workingHours: defaultWorkingHours,
    portfolio: [],
    status: 'pending',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateBusinessInfo = (data: Partial<MerchantProfile>) => {
    setMerchantData((prev) => ({ ...prev, ...data }));
  };

  const updateServices = (services: Service[]) => {
    setMerchantData((prev) => ({ ...prev, services }));
  };

  const updateWorkingHours = (workingHours: WorkingHours) => {
    setMerchantData((prev) => ({ ...prev, workingHours }));
  };

  const updatePortfolio = (portfolio: PortfolioImage[]) => {
    setMerchantData((prev) => ({ ...prev, portfolio }));
  };

  const handleSubmit = () => {
    // Here you would send the data to your backend
    console.log('Submitting merchant profile:', merchantData);
    // Navigate to success page or dashboard
    alert('Application submitted successfully! You will be notified once approved.');
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <BusinessInfoStep
            data={merchantData}
            onUpdate={updateBusinessInfo}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <ServicesStep
            services={merchantData.services || []}
            onUpdate={updateServices}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <WorkingHoursStep
            workingHours={merchantData.workingHours || defaultWorkingHours}
            onUpdate={updateWorkingHours}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <PortfolioStep
            portfolio={merchantData.portfolio || []}
            onUpdate={updatePortfolio}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <ReviewStep
            data={merchantData as MerchantProfile}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Merchant Onboarding
        </Typography>
        <Typography variant="body1" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          Complete the following steps to set up your merchant profile
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2 }}>
          {getStepContent(activeStep)}
        </Box>
      </Paper>
    </Container>
  );
};
