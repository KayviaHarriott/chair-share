import './App.css'
import { Route, Routes, useLocation } from 'react-router'
import { Home } from './pages/HomePage'
import { Updates } from './pages/Updates'
import { NavBar } from './navigation/NavBar'
import { Footer } from './navigation/Footer'

// Admin pages
// import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { BookMonitorPage } from './pages/admin/BookMonitorPage'
import { CategoryManagementPage } from './pages/admin/CategoryManagementPage'
import { MerchantApprovalPage } from './pages/admin/MerchantApprovalPage'

// Auth pages
import { LogInPage } from './pages/auth/LogInPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage'

// Client pages
import { BrowsePage } from './pages/client/BrowsePage'
import { MerchantDetailsPage } from './pages/client/MerchantDetailsPage'
import { BookingRequestPage } from './pages/client/BookingRequestPage'

// Merchant pages
import { MerchantDashboard } from './pages/merchant/MerchantDashboard'
import { MerchantProfilePage } from './pages/merchant/MerchantProfilePage'
import { OnboardingPage } from './pages/merchant/OnboardingPage'

// Errors
import { NotFoundPage } from './pages/errors/NotFoundPage'
// import { FAQsPage } from './pages/general/FAQsPage'


function App() {
   const location = useLocation()

  // Hide NavBar on the /updates page
  const hiddenPaths = ["/updates"] // "/login", "/register"];

const hideNavBar = hiddenPaths.includes(location.pathname);

  return (
    <>
    {!hideNavBar && (
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
      )}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<LogInPage />} />
        {/* <Route path="/faqs" element={<FAQsPage />} /> */}
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

        {/* Client routes */}
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/merchant/:merchantId" element={<MerchantDetailsPage />} />
        <Route path="/booking-request" element={<BookingRequestPage />} />

        {/* Merchant routes */}
        <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
        <Route path="/merchant/profile" element={<MerchantProfilePage />} />
        <Route path="/merchant/onboarding" element={<OnboardingPage />} />

        {/* Admin routes */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboardPage />} /> */}
        <Route path="/admin/book-monitor" element={<BookMonitorPage />} />
        <Route path="/admin/categories" element={<CategoryManagementPage />} />
        <Route path="/admin/merchant-approvals" element={<MerchantApprovalPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!hideNavBar && (
        <div className="sticky top-0 z-50">
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
