import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExpandMoreRounded,
  SearchRounded,
  HomeRounded,
  PersonRounded,
  StorefrontRounded,
  PaymentRounded,
  SecurityRounded,
  SupportAgentRounded,
  CalendarMonthRounded,
  HelpOutlineRounded,
} from "@mui/icons-material";

// FAQ Categories and Questions
const FAQ_DATA = [
  {
    category: "General",
    icon: HelpOutlineRounded,
    color: "blue",
    questions: [
      {
        question: "What is Chair Share?",
        answer:
          "Chair Share is a platform that connects beauty and grooming service providers (merchants) with clients. Whether you're looking for hair braiding, barbering, nails, lashes, or makeup services, Chair Share makes it easy to discover, book, and pay for appointments with skilled professionals in your area.",
      },
      {
        question: "How does Chair Share work?",
        answer:
          "It's simple! Clients browse through our merchant profiles, view services and pricing, select their desired service, choose a date and time, and book an appointment. Merchants receive booking requests, can accept or reject them, and manage their schedule through their dashboard. Payments are handled securely through bank transfers to the merchant's registered account.",
      },
      {
        question: "Is Chair Share available in my area?",
        answer:
          "Chair Share is currently available across Jamaica, with merchants in all major parishes including Kingston, St. Andrew, St. James (Montego Bay), St. Catherine, St. Ann, and more. Use our Browse page to search for merchants in your specific location.",
      },
      {
        question: "Do I need an account to use Chair Share?",
        answer:
          "Yes, you need to create a free account to book appointments. This allows you to manage your bookings, view your appointment history, message merchants, and receive notifications. Creating an account is quick and only takes a minute!",
      },
    ],
  },
  {
    category: "For Clients",
    icon: PersonRounded,
    color: "purple",
    questions: [
      {
        question: "How do I book an appointment?",
        answer:
          "1. Browse merchants or search for specific services\n2. Click on a merchant profile to view their services\n3. Select your desired service and any add-ons\n4. Click 'Book Appointment' and choose your preferred date and time\n5. Add any special notes or requests\n6. Confirm your booking and make the required deposit payment\n7. Wait for the merchant to confirm your appointment",
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer:
          "Yes, you can cancel or request to reschedule your appointment from your booking dashboard. However, please note that cancellation policies vary by merchant. Some merchants may require 24-48 hours notice for cancellations to receive a deposit refund. Always check the merchant's cancellation policy before booking.",
      },
      {
        question: "What if I need to contact the merchant before booking?",
        answer:
          "Every merchant profile has a 'Message Stylist' button that allows you to send direct messages to the merchant. You can ask questions about services, availability, pricing, or any special requests before making a booking. Merchants typically respond within a few hours during business hours.",
      },
      {
        question: "How do I know if a merchant is reliable?",
        answer:
          "All merchants on Chair Share display their rating (out of 5 stars), total number of reviews, and verified status. You can read detailed client reviews at the bottom of each merchant profile to see feedback about service quality, punctuality, and professionalism. Look for merchants with high ratings and verified badges for the best experience.",
      },
      {
        question: "What happens after I book an appointment?",
        answer:
          "After booking, you'll receive a confirmation notification. The merchant will review your request and either confirm or suggest an alternative time. Once confirmed, you'll receive appointment details including the service, date, time, location, and deposit information. You can view all your bookings in your client dashboard.",
      },
    ],
  },
  {
    category: "For Merchants",
    icon: StorefrontRounded,
    color: "amber",
    questions: [
      {
        question: "How do I become a merchant on Chair Share?",
        answer:
          "Click on 'Become a Merchant' in the top navigation bar and complete the registration form. You'll need to provide:\n• Business information (name, specialty, location)\n• Contact details (email, phone, address)\n• Service offerings and pricing\n• Portfolio images (optional but recommended)\n• Bank account information for payments\n\nOnce submitted, our team will review your application, typically within 24-48 hours.",
      },
      {
        question: "Is there a fee to join Chair Share?",
        answer:
          "Creating a merchant account is completely free! Chair Share operates on a commission-based model where we take a small percentage from each completed booking. This means you only pay when you earn. There are no monthly fees, listing fees, or hidden charges.",
      },
      {
        question: "How do I set my availability?",
        answer:
          "In your Merchant Dashboard, you can set your available time slots for each day of the week. You can specify your operating hours, block out times when you're unavailable, and set the duration between appointments. This helps clients see only the times you're actually available when booking.",
      },
      {
        question: "Can I manage multiple bank accounts?",
        answer:
          "Yes! Chair Share allows you to add and manage multiple bank accounts from different banks (Scotiabank, NCB, JN Bank, etc.). This gives you flexibility in how you receive payments. You can set one account as your primary account, and clients will see this as the preferred payment method.",
      },
      {
        question: "How do I handle booking requests?",
        answer:
          "You'll receive notifications for new booking requests in your Merchant Dashboard under the 'Appointments' tab. For each request, you can:\n• Accept the booking to confirm the appointment\n• Reject the booking with a reason\n• Suggest an alternative time if the requested slot doesn't work\n\nAlways respond promptly to maintain a high response rate and good reputation.",
      },
      {
        question: "How can I improve my profile visibility?",
        answer:
          "To attract more clients:\n• Upload high-quality portfolio images showcasing your work\n• Provide detailed service descriptions\n• Respond quickly to messages and booking requests\n• Maintain competitive pricing\n• Encourage satisfied clients to leave reviews\n• Keep your availability calendar up to date\n• Complete your profile 100% including bio and specialties",
      },
    ],
  },
  {
    category: "Payments & Deposits",
    icon: PaymentRounded,
    color: "green",
    questions: [
      {
        question: "How do payments work?",
        answer:
          "Chair Share uses bank transfer as the payment method. When a client books an appointment, they make a deposit payment (typically 30% of the total service cost) directly to the merchant's registered bank account. The remaining balance is paid to the merchant on the day of the appointment, either in cash or via bank transfer.",
      },
      {
        question: "Why do I need to pay a deposit?",
        answer:
          "Deposits ensure commitment from both parties. For merchants, it reduces no-shows and last-minute cancellations. For clients, it secures your appointment slot. The deposit amount varies by merchant and service but is typically 30% of the total service cost. This amount is deducted from your final payment.",
      },
      {
        question: "Are my payment details secure?",
        answer:
          "Yes! Chair Share does not store or process your full bank account details. When making a deposit, you'll see the merchant's bank account information and make the transfer through your own bank's mobile app or online banking. We never ask for your banking passwords or PIN numbers.",
      },
      {
        question: "What if I need a refund?",
        answer:
          "Refund policies are set by individual merchants. Generally:\n• Cancellations with 48+ hours notice: Full deposit refund\n• Cancellations within 24-48 hours: Partial deposit refund (50%)\n• Cancellations within 24 hours: No refund\n• Merchant cancellations: Full deposit refund\n\nAlways check the specific merchant's cancellation policy before booking.",
      },
      {
        question: "When do merchants receive payment?",
        answer:
          "Merchants receive the deposit payment directly from clients at the time of booking. The remaining balance is paid by the client on the day of service. Chair Share's commission is calculated from completed bookings and processed on a monthly basis.",
      },
    ],
  },
  {
    category: "Appointments & Bookings",
    icon: CalendarMonthRounded,
    color: "pink",
    questions: [
      {
        question: "Can I book multiple services at once?",
        answer:
          "Yes! When booking with a merchant, you can select a primary service and then add multiple add-ons. For example, you can book 'Box Braids' as your main service and add 'Curled Ends' and 'Color Highlights' as add-ons. The total price and estimated duration will be calculated automatically.",
      },
      {
        question: "How far in advance can I book?",
        answer:
          "You can typically book appointments up to 3 months in advance, depending on the merchant's availability settings. However, we recommend booking at least 3-7 days in advance for popular merchants and services to ensure you get your preferred time slot.",
      },
      {
        question: "What if the merchant is late or doesn't show up?",
        answer:
          "If a merchant is more than 15 minutes late without communication, please contact them through the messaging system. If they don't show up or cancel last minute, you're entitled to a full refund of your deposit. Please report the issue through the 'Report a Problem' feature in your booking details.",
      },
      {
        question: "Can I bring someone with me to my appointment?",
        answer:
          "This depends on the merchant's policy and the location of the service. Many merchants allow clients to bring one guest, but some may have space limitations. It's best to message the merchant before your appointment to ask about their guest policy.",
      },
      {
        question: "What should I do to prepare for my appointment?",
        answer:
          "Preparation varies by service type:\n• Hair Services: Arrive with clean, detangled hair (unless wash is included)\n• Nails: Remove old polish if getting a new set\n• Makeup: Arrive with a clean, moisturized face\n• Lashes: Avoid eye makeup on appointment day\n\nAlways check the merchant's profile or message them for specific preparation instructions.",
      },
    ],
  },
  {
    category: "Account & Security",
    icon: SecurityRounded,
    color: "red",
    questions: [
      {
        question: "How do I reset my password?",
        answer:
          "Click on 'Sign In' in the top navigation, then click 'Forgot Password?' below the login form. Enter your registered email address and we'll send you a password reset link. Follow the instructions in the email to create a new password. The reset link is valid for 24 hours.",
      },
      {
        question: "Can I change my email address?",
        answer:
          "Yes, you can update your email address from your account settings. For security purposes, you'll need to verify your new email address by clicking a confirmation link we'll send to the new email. Your old email will remain active until you confirm the new one.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "To delete your account, go to Settings > Account Settings > Delete Account. Please note that deleting your account is permanent and will:\n• Remove all your personal information\n• Cancel all upcoming appointments\n• Delete your booking history\n• Remove any merchant profiles (if applicable)\n\nIf you have active bookings or pending payments, these must be resolved before account deletion.",
      },
      {
        question: "Is my personal information safe?",
        answer:
          "Absolutely! Chair Share takes data security seriously. We use industry-standard encryption to protect your personal information, payment details, and communications. We never share your information with third parties without your consent. Read our Privacy Policy for more details.",
      },
    ],
  },
  {
    category: "Support",
    icon: SupportAgentRounded,
    color: "teal",
    questions: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach our support team through:\n• Email: support@chairshare.com\n• Phone: (876) 555-CHAIR (2424)\n• Live Chat: Available on our website Mon-Fri, 9 AM - 6 PM\n• Contact Form: Click 'Contact Us' in the top navigation\n\nOur support team typically responds within 24 hours on business days.",
      },
      {
        question: "How do I report a problem?",
        answer:
          "If you experience an issue with a booking, merchant, or the platform, you can report it through:\n1. Your booking details page - click 'Report a Problem'\n2. The merchant profile - click the report icon\n3. Contact our support team directly with details\n\nPlease provide as much information as possible including screenshots, booking IDs, and a description of the issue.",
      },
      {
        question: "Can I leave a review for a merchant?",
        answer:
          "Yes! After your appointment is completed, you'll be able to leave a review and rating (1-5 stars) for the merchant. Your honest feedback helps other clients make informed decisions and helps merchants improve their services. You can also upload photos of your results to your review.",
      },
      {
        question: "What if I have a suggestion for Chair Share?",
        answer:
          "We love hearing from our community! You can send suggestions, feature requests, or feedback to feedback@chairshare.com or through our Contact Us page. We regularly review suggestions and implement the most requested features in our updates.",
      },
    ],
  },
];

export const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search
  const filteredFAQs = FAQ_DATA.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      amber: "from-amber-500 to-orange-500",
      green: "from-green-500 to-green-600",
      pink: "from-pink-500 to-pink-600",
      red: "from-red-500 to-red-600",
      teal: "from-teal-500 to-teal-600",
    };
    return colors[color] || colors.blue;
  };

  const currentCategoryData = searchQuery
    ? filteredFAQs.find((cat) => cat.category === activeCategory)
    : FAQ_DATA.find((cat) => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-amber-100 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              <HomeRounded sx={{ fontSize: 18 }} />
            </Link>
            <span>›</span>
            <span className="font-semibold text-white">FAQs</span>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Find answers to common questions about Chair Share
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <SearchRounded className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
              <h3 className="font-bold text-gray-800 mb-4 px-2">Categories</h3>
              <div className="space-y-2">
                {(searchQuery ? filteredFAQs : FAQ_DATA).map((category) => {
                  const IconComponent = category.icon;
                  const isActive = activeCategory === category.category;
                  return (
                    <button
                      key={category.category}
                      onClick={() => {
                        setActiveCategory(category.category);
                        setExpandedQuestion(null);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? `bg-gradient-to-r ${getCategoryColor(
                              category.color
                            )} text-white shadow-md`
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <IconComponent sx={{ fontSize: 20 }} />
                      <span className="font-medium text-sm">
                        {category.category}
                      </span>
                      <span
                        className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          isActive
                            ? "bg-white/20"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category.questions.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Contact Support Card */}
              <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <SupportAgentRounded className="text-amber-600" />
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Need More Help?
                  </h4>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Can't find what you're looking for? Our support team is here
                  to help!
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Questions & Answers */}
          <div className="lg:col-span-3">
            {currentCategoryData && currentCategoryData.questions.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const IconComponent = currentCategoryData.icon;
                    return <IconComponent className="text-gray-600" />;
                  })()}
                  <h2 className="text-2xl font-bold text-gray-800">
                    {currentCategoryData.category}
                  </h2>
                  <span className="text-sm text-gray-500">
                    ({currentCategoryData.questions.length} questions)
                  </span>
                </div>

                {currentCategoryData.questions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-amber-300 transition-colors"
                  >
                    <button
                      onClick={() =>
                        setExpandedQuestion(
                          expandedQuestion === index ? null : index
                        )
                      }
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-800 pr-4">
                        {item.question}
                      </h3>
                      <ExpandMoreRounded
                        className={`text-amber-600 transition-transform flex-shrink-0 ${
                          expandedQuestion === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedQuestion === index && (
                      <div className="px-6 pb-6 pt-2">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <SearchRounded
                  sx={{ fontSize: 64 }}
                  className="text-gray-300 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  Try searching with different keywords or browse our categories
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Our friendly support team is always ready to help. Reach out to us
            via email, phone, or live chat during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="mailto:support@chairshare.com"
              className="px-8 py-3 bg-white/10 border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
