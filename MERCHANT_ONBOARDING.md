# Merchant Onboarding Features

## Overview
This implementation provides a comprehensive merchant onboarding system with full business management capabilities.

## Features Implemented

### 1. Multi-Step Onboarding Process (`/merchant/onboarding`)
A guided 5-step wizard for merchant registration:

#### Step 1: Business Information
- Business name, owner name
- Contact details (email, phone)
- Physical address (street, city, state, zip)
- Business type selection
- Business description
- Full form validation

#### Step 2: Services & Pricing
- Add unlimited services
- Each service includes:
  - Service name and category
  - Description
  - Price (USD)
  - Duration (minutes)
- Edit and delete services
- Service categorization (Hair, Nails, Skin Care, etc.)

#### Step 3: Working Hours & Availability
- Set hours for each day of the week
- Toggle days open/closed
- Customizable open and close times
- "Copy to all days" functionality
- Validation to ensure at least one day is open

#### Step 4: Portfolio Upload
- Upload up to 6 portfolio images
- 5MB max file size per image
- Support for JPG, PNG, WebP
- Add captions to each image
- Image preview and management
- Optional step (can skip)

#### Step 5: Review & Submit
- Comprehensive review of all entered information
- Organized display by sections
- Edit capability (go back to any step)
- Submit application for admin approval

### 2. Merchant Profile Page (`/merchant/profile`)
Professional profile view with tabbed interface:

- **Overview Tab**: Business info, contact details, quick stats
- **Services Tab**: All services with pricing displayed as cards
- **Portfolio Tab**: Grid view of portfolio images
- **Hours Tab**: Visual schedule of working hours
- Avatar with business initial
- Status badge (pending/approved/rejected)
- Edit profile button

### 3. Appointments Management
Complete appointment handling system:

#### Features:
- **Tabbed Views**:
  - Pending appointments (requires action)
  - Accepted appointments (confirmed)
  - History (declined/cancelled)
  - All appointments

- **Appointment Cards Display**:
  - Client information (name, email, phone)
  - Service details
  - Date, time, and duration
  - Client notes
  - Status badges with color coding

- **Actions**:
  - **Accept Appointment**: Confirmation dialog with appointment summary
  - **Decline Appointment**: Required reason field, notifies client
  - Automatic email notifications (simulated)

- **Status Tracking**:
  - Pending (warning - yellow)
  - Accepted (success - green)
  - Declined (error - red)
  - Completed (info - blue)
  - Cancelled (default - gray)

### 4. Dashboard Integration
Simple merchant dashboard (`/merchant/dashboard`) with:
- Quick action cards (Profile, Analytics, Settings)
- Integrated appointments management
- Clean, intuitive interface

## File Structure
```
src/
├── types/
│   └── merchant.ts                          # TypeScript types
├── components/
│   └── merchant/
│       └── AppointmentsManagement.tsx       # Appointment handling
├── pages/
│   └── merchant/
│       ├── OnboardingPage.tsx               # Main onboarding
│       ├── MerchantProfilePage.tsx          # Profile view
│       ├── MerchantDashboardSimple.tsx      # Dashboard
│       ├── index.ts                         # Exports
│       └── onboarding/
│           ├── BusinessInfoStep.tsx         # Step 1
│           ├── ServicesStep.tsx             # Step 2
│           ├── WorkingHoursStep.tsx         # Step 3
│           ├── PortfolioStep.tsx            # Step 4
│           └── ReviewStep.tsx               # Step 5
```

## TypeScript Types

### Main Types:
- `MerchantProfile`: Complete merchant information
- `Service`: Service offerings with pricing
- `WorkingHours`: Weekly schedule
- `DaySchedule`: Daily hours configuration
- `PortfolioImage`: Portfolio image data
- `Appointment`: Booking information and status

## Usage

### Accessing the Features:
1. **Onboarding**: Navigate to `/merchant/onboarding`
2. **Profile**: Navigate to `/merchant/profile`
3. **Dashboard**: Navigate to `/merchant/dashboard`

### Integration Notes:
- All components use Material-UI for consistent design
- Form validation on all input fields
- Responsive design for mobile and desktop
- Mock data included for demonstration
- Ready for backend API integration

## Backend Integration Points

To connect to your backend, update these areas:

1. **Onboarding Submission** (`OnboardingPage.tsx`):
   - Replace `handleSubmit` with API call to save merchant data

2. **Appointments Management** (`AppointmentsManagement.tsx`):
   - Replace `mockAppointments` with API data fetch
   - Implement `handleAcceptAppointment` API call
   - Implement `handleDeclineAppointment` API call
   - Add email notification triggers

3. **Profile Page** (`MerchantProfilePage.tsx`):
   - Replace `mockMerchantData` with API data fetch
   - Implement profile update API call

## Next Steps

1. Connect to backend API endpoints
2. Add image upload to cloud storage (AWS S3, Cloudinary, etc.)
3. Implement email notifications for appointment actions
4. Add calendar view for appointments
5. Implement analytics dashboard
6. Add merchant settings page
7. Implement payment processing for services

## Notes
- All forms include validation
- User-friendly error messages
- Accessibility considerations
- Mobile-responsive design
- Professional UI/UX with Material-UI
