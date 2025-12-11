// Update History - Add new updates to the top of this array
import { UPDATES } from "../assets/UpdatesData";

export const Updates = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "bugfix":
        return "bg-red-100 text-red-800 border-red-200";
      case "improvement":
        return "bg-green-100 text-green-800 border-green-200";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Project Updates
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed about the latest features, improvements, and fixes to our system.
          </p>
        </div>

        {/* Updates Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300" />

          {/* Updates List */}
          <div className="space-y-8">
            {UPDATES.map((update, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute -left-8 top-8 w-16 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Date and Type Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <time className="text-sm font-medium text-slate-500">
                        {formatDate(update.date)}
                      </time>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                        update.type
                      )} w-fit`}
                    >
                      {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {update.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {update.description}
                  </p>
                </div>

                {/* Decorative accent */}
                <div className={`h-1 ${
                  update.type === "feature"
                    ? "bg-blue-500"
                    : update.type === "bugfix"
                    ? "bg-red-500"
                    : update.type === "improvement"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Empty State (when no updates) */}
        {UPDATES.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-16 w-16 text-slate-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No updates yet
            </h3>
            <p className="text-slate-600">Check back soon for project updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}