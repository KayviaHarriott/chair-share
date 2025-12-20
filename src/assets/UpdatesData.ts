export const UPDATES = [
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
