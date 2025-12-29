export const UPDATES = [
  {
    date: "2025-12-29",
    title: "Merchant Onboarding System Launched",
    description: `Complete merchant onboarding system is now live! Beauty professionals can now register and create their business profiles through a beautiful, step-by-step process.

✨ Features:
• 5-step guided onboarding wizard
• Business information and contact details
• Services and pricing management
• Weekly schedule and availability
• Portfolio image uploads (up to 6 images)
• Application review and submission

📱 New Routes:
• Client Sign Up – /register
• Merchant Onboarding – /merchant/onboarding
• Merchant Profile – /merchant/profile
• Merchant Dashboard – /merchant/dashboard

🎨 Design:
• Custom progress bar with visual step indicators
• Clean, modern interface matching site aesthetics
• Mobile-responsive design
• Success confirmation screen

After submission, applications are reviewed within 1-2 business days, and merchants receive email notifications.`,
    type: "feature",
    links: [
      { label: "Become a Merchant", path: "/merchant/onboarding" },
      { label: "Client Sign Up", path: "/register" },
      { label: "Merchant Profile", path: "/merchant/profile" },
      { label: "Merchant Dashboard", path: "/merchant/dashboard" },
    ],
  },
  {
    date: "2025-12-29",
    title: "Client Authentication Redesigned",
    description: `The client sign-up experience has been completely redesigned with a modern, user-friendly interface.

✨ New Features:
• Google OAuth integration (one-click sign up)
• Beautiful image carousel on desktop
• Clean, minimal form design
• "Become a Merchant" call-to-action
• Seamless navigation between client and merchant sign-up

The new design matches the site's amber/orange color scheme and provides a premium user experience.`,
    type: "improvement",
    links: [
      { label: "Client Sign Up", path: "/register" },
      { label: "Log In", path: "/login" },
      { label: "Become a Merchant", path: "/merchant/onboarding" },
    ],
  },
  {
    date: "2025-12-29",
    title: "Appointment Management System",
    description: `Merchants can now manage client appointments directly from their dashboard.

✨ Features:
• View pending, accepted, and historical appointments
• Accept appointments with confirmation
• Decline appointments with reason (client gets notified)
• Detailed appointment information (client details, service, date/time)
• Color-coded status badges
• Tabbed interface for easy filtering

This system streamlines communication between merchants and clients, making booking management effortless.`,
    type: "feature",
    links: [
      { label: "Merchant Dashboard", path: "/merchant/dashboard" },
      { label: "Merchant Profile", path: "/merchant/profile" },
    ],
  },
  {
    date: "2025-12-20",
    title: "Mobile Navigation Menu Updated",
    description: `The mobile navigation menu has been redesigned to improve usability and visual clarity on smaller screens.

• Improved layout and spacing for mobile devices
• Clearer navigation structure for primary pages
• Smoother interaction and touch-friendly design

This update enhances the overall mobile browsing experience.`,
    type: "improvement",
  },
  {
    date: "2025-12-20",
    title: "Core Application Routes Added",
    description: `New application routes and pages have been created and are now accessible:

• Home Page – /
• Browse Page – /browse
• Merchant Details – /merchant/:merchantId
• Merchant Dashboard – /merchant/dashboard

These routes establish the main navigation structure of the platform.`,

    type: "feature",
    links: [
      { label: "Home", path: "/" },
      { label: "Browse", path: "/browse" },
      { label: "Merchant Details (Test)", path: "/merchant/123" },
      { label: "Merchant Dashboard", path: "/merchant/dashboard" },

      // { label: "FAQs", path: "/faqs" },

      // { label: "Admin Dashboard", path: "/admin/dashboard" },
    ],
  },
  {
    date: "2025-12-11",
    title: "Development Website Launch",
    description: "Initial system launch URL.",
    type: "feature",
  },
];
