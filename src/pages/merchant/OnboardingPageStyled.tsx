import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BusinessInfoStep } from './onboarding/BusinessInfoStep';
import { CertificationStep, type Certification } from './onboarding/CertificationStep';
import { ReviewStep } from './onboarding/ReviewStep';
import type { MerchantProfile } from '../../types/merchant';

const steps = ['Business Info', 'Certifications', 'Review'];

const defaultWorkingHours = {
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
  const [submitted, setSubmitted] = useState(false);
  const [merchantData, setMerchantData] = useState<Partial<MerchantProfile>>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: '',
    description: '',
    certifications: [],
    services: [],
    workingHours: defaultWorkingHours,
    portfolio: [],
    status: 'pending',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const updateBusinessInfo = (data: Partial<MerchantProfile>) => {
    setMerchantData((prev) => ({ ...prev, ...data }));
  };

  const updateCertifications = (certifications: Certification[]) => {
    setMerchantData((prev) => ({ ...prev, certifications }));
  };

  const handleSubmit = () => {
    // Here you would send the data to your backend
    console.log('Submitting merchant profile:', merchantData);
    setSubmitted(true);
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
          <CertificationStep
            certifications={merchantData.certifications || []}
            onUpdate={updateCertifications}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
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

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for applying to become a merchant on Chair Share. Your application is now under review.
          </p>

          {/* Info Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Our team will review your application within 1-2 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>You'll receive an email notification once approved</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Someone from our team may contact you for additional information</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <p className="text-gray-600 mb-6">
            Questions? Contact us at{' '}
            <a href="mailto:support@chairshare.com" className="text-amber-600 hover:text-amber-700 font-semibold">
              support@chairshare.com
            </a>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-gradient-to-br from-amber-500 to-[#BF4E30] hover:from-amber-600 hover:to-[#A0432A] text-white font-semibold rounded-lg transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src="/imgs/HorizontalLogo.png" alt="Chair Share" className="h-10" />
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium"
          >
            ← Back to website
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      index < activeStep
                        ? 'bg-green-500 text-white'
                        : index === activeStep
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index < activeStep ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  {/* Step Label */}
                  <span className={`text-xs mt-2 text-center hidden sm:block ${
                    index <= activeStep ? 'text-gray-900 font-semibold' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded transition-all ${
                      index < activeStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {getStepContent(activeStep)}
        </div>
      </div>
    </div>
  );
};
