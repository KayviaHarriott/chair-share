import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SearchRounded,
  // FilterListRounded,
  StarRounded,
  LocationOnRounded,
  TuneRounded,
  CloseRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  SortRounded,
} from "@mui/icons-material";

// Temporary merchants data
const MERCHANTS_DATA = [
  {
    id: "1",
    name: "Glamour by Lisa",
    specialty: "Hair Braiding & Natural Hair",
    avatar: "https://i.pravatar.cc/150?img=1",
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
    rating: 4.8,
    reviewCount: 127,
    location: "Kingston",
    parish: "Kingston",
    priceRange: "$$",
    minPrice: 3500,
    maxPrice: 10000,
    categories: ["Braids", "Natural Hair", "Weaves"],
    featured: true,
  },
  {
    id: "2",
    name: "Beauty Bar Studio",
    specialty: "Makeup & Lashes",
    avatar: "https://i.pravatar.cc/150?img=2",
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
    rating: 4.9,
    reviewCount: 203,
    location: "Montego Bay",
    parish: "St. James",
    priceRange: "$$$",
    minPrice: 5000,
    maxPrice: 15000,
    categories: ["Makeup", "Lashes"],
    featured: true,
  },
  {
    id: "3",
    name: "The Cut Shop",
    specialty: "Barbering & Grooming",
    avatar: "https://i.pravatar.cc/150?img=3",
    coverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400",
    rating: 4.7,
    reviewCount: 89,
    location: "Portmore",
    parish: "St. Catherine",
    priceRange: "$",
    minPrice: 1500,
    maxPrice: 5000,
    categories: ["Barbering"],
    featured: false,
  },
  {
    id: "4",
    name: "Nail Artistry",
    specialty: "Nails & Nail Art",
    avatar: "https://i.pravatar.cc/150?img=4",
    coverImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    rating: 4.6,
    reviewCount: 156,
    location: "Kingston",
    parish: "Kingston",
    priceRange: "$$",
    minPrice: 3000,
    maxPrice: 8000,
    categories: ["Nails"],
    featured: true,
  },
  {
    id: "5",
    name: "Elite Hair Studio",
    specialty: "All Hair Services",
    avatar: "https://i.pravatar.cc/150?img=5",
    coverImage: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400",
    rating: 4.5,
    reviewCount: 92,
    location: "Spanish Town",
    parish: "St. Catherine",
    priceRange: "$$",
    minPrice: 4000,
    maxPrice: 12000,
    categories: ["Natural Hair", "Weaves", "Braids"],
    featured: false,
  },
  {
    id: "6",
    name: "Glow Up Studio",
    specialty: "Makeup Artist",
    avatar: "https://i.pravatar.cc/150?img=6",
    coverImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
    rating: 4.9,
    reviewCount: 178,
    location: "Kingston",
    parish: "Kingston",
    priceRange: "$$$",
    minPrice: 6000,
    maxPrice: 20000,
    categories: ["Makeup"],
    featured: true,
  },
  {
    id: "7",
    name: "Lash Lounge",
    specialty: "Lash Extensions",
    avatar: "https://i.pravatar.cc/150?img=7",
    coverImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400",
    rating: 4.8,
    reviewCount: 134,
    location: "Ocho Rios",
    parish: "St. Ann",
    priceRange: "$$",
    minPrice: 4500,
    maxPrice: 9000,
    categories: ["Lashes"],
    featured: false,
  },
  {
    id: "8",
    name: "Braid Haven",
    specialty: "Protective Styles",
    avatar: "https://i.pravatar.cc/150?img=8",
    coverImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
    rating: 4.7,
    reviewCount: 167,
    location: "Mandeville",
    parish: "Manchester",
    priceRange: "$$",
    minPrice: 5000,
    maxPrice: 11000,
    categories: ["Braids"],
    featured: true,
  },
  {
    id: "9",
    name: "Fresh Cuts Barbershop",
    specialty: "Men's Grooming",
    avatar: "https://i.pravatar.cc/150?img=9",
    coverImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400",
    rating: 4.6,
    reviewCount: 98,
    location: "Kingston",
    parish: "Kingston",
    priceRange: "$",
    minPrice: 2000,
    maxPrice: 4500,
    categories: ["Barbering"],
    featured: false,
  },
  {
    id: "10",
    name: "Natural Beauty Co",
    specialty: "Natural Hair Care",
    avatar: "https://i.pravatar.cc/150?img=10",
    coverImage: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400",
    rating: 4.8,
    reviewCount: 145,
    location: "Montego Bay",
    parish: "St. James",
    priceRange: "$$",
    minPrice: 3500,
    maxPrice: 9000,
    categories: ["Natural Hair"],
    featured: true,
  },
  {
    id: "11",
    name: "Luxe Nails & Spa",
    specialty: "Full Nail Services",
    avatar: "https://i.pravatar.cc/150?img=11",
    coverImage: "https://images.unsplash.com/photo-1610992015762-45dca7e6e5e8?w=400",
    rating: 4.7,
    reviewCount: 112,
    location: "Kingston",
    parish: "Kingston",
    priceRange: "$$$",
    minPrice: 5000,
    maxPrice: 12000,
    categories: ["Nails"],
    featured: false,
  },
  {
    id: "12",
    name: "Style Masters",
    specialty: "Hair Styling",
    avatar: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
    rating: 4.5,
    reviewCount: 87,
    location: "Portmore",
    parish: "St. Catherine",
    priceRange: "$$",
    minPrice: 4000,
    maxPrice: 10000,
    categories: ["Weaves", "Natural Hair"],
    featured: false,
  },
];

const CATEGORIES = ["All", "Braids", "Natural Hair", "Weaves", "Nails", "Lashes", "Makeup", "Barbering"];
const PARISHES = ["All Locations", "Kingston", "St. James", "St. Catherine", "St. Ann", "Manchester"];
const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "$ (Under $3,000)", value: "$", max: 3000 },
  { label: "$$ ($3,000 - $8,000)", value: "$$", min: 3000, max: 8000 },
  { label: "$$$ ($8,000+)", value: "$$$", min: 8000 },
];

export const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedParish, setSelectedParish] = useState("All Locations");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle URL search params
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Filter merchants
  const filteredMerchants = MERCHANTS_DATA.filter((merchant) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      merchant.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      merchant.categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Category filter
    const matchesCategory =
      selectedCategory === "All" ||
      merchant.categories.includes(selectedCategory);

    // Parish filter
    const matchesParish =
      selectedParish === "All Locations" ||
      merchant.parish === selectedParish;

    // Price range filter
    let matchesPrice = true;
    if (selectedPriceRange !== "all") {
      const priceRange = PRICE_RANGES.find((p) => p.value === selectedPriceRange);
      if (priceRange) {
        if (priceRange.min && priceRange.max) {
          matchesPrice =
            merchant.maxPrice >= priceRange.min &&
            merchant.minPrice <= priceRange.max;
        } else if (priceRange.max) {
          matchesPrice = merchant.minPrice <= priceRange.max;
        } else if (priceRange.min) {
          matchesPrice = merchant.maxPrice >= priceRange.min;
        }
      }
    }

    return matchesSearch && matchesCategory && matchesParish && matchesPrice;
  });

  // Sort merchants
  const sortedMerchants = [...filteredMerchants].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      case "rating-high":
        return b.rating - a.rating;
      case "rating-low":
        return a.rating - b.rating;
      case "price-low":
        return a.minPrice - b.minPrice;
      case "price-high":
        return b.maxPrice - a.maxPrice;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedMerchants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMerchants = sortedMerchants.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedParish("All Locations");
    setSelectedPriceRange("all");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const activeFiltersCount = [
    selectedCategory !== "All",
    selectedParish !== "All Locations",
    selectedPriceRange !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <SearchRounded className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search merchants, services, or categories..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-amber-500 transition-colors relative"
            >
              <TuneRounded />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-amber-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Sidebar/Panel */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setShowFilters(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 bg-white w-full max-w-md shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <CloseRounded />
                </button>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <select
                  value={selectedParish}
                  onChange={(e) => {
                    setSelectedParish(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {PARISHES.map((parish) => (
                    <option key={parish} value={parish}>
                      {parish}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label
                      key={range.value}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-amber-300 cursor-pointer transition-all"
                    >
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={(e) => {
                          setSelectedPriceRange(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-900">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="rating-high">Rating: High to Low</option>
                  <option value="rating-low">Rating: Low to High</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  clearFilters();
                  setShowFilters(false);
                }}
                className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Merchants" : selectedCategory}
            </h1>
            <p className="text-gray-600">
              {sortedMerchants.length} merchant{sortedMerchants.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Mobile Sort */}
          <div className="flex items-center gap-2">
            <SortRounded className="text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            >
              <option value="featured">Featured</option>
              <option value="rating-high">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                Category: {selectedCategory}
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setCurrentPage(1);
                  }}
                  className="hover:bg-amber-200 rounded-full"
                >
                  <CloseRounded sx={{ fontSize: 16 }} />
                </button>
              </span>
            )}
            {selectedParish !== "All Locations" && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                Location: {selectedParish}
                <button
                  onClick={() => {
                    setSelectedParish("All Locations");
                    setCurrentPage(1);
                  }}
                  className="hover:bg-amber-200 rounded-full"
                >
                  <CloseRounded sx={{ fontSize: 16 }} />
                </button>
              </span>
            )}
            {selectedPriceRange !== "all" && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                Price: {PRICE_RANGES.find((p) => p.value === selectedPriceRange)?.label}
                <button
                  onClick={() => {
                    setSelectedPriceRange("all");
                    setCurrentPage(1);
                  }}
                  className="hover:bg-amber-200 rounded-full"
                >
                  <CloseRounded sx={{ fontSize: 16 }} />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Merchant Grid */}
        {currentMerchants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentMerchants.map((merchant) => (
              <Link
                key={merchant.id}
                to={`/merchant/${merchant.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={merchant.coverImage}
                    alt={merchant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {merchant.featured && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={merchant.avatar}
                        alt={merchant.name}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div>
                        <h3 className="font-bold text-white">{merchant.name}</h3>
                        <p className="text-xs text-gray-200">{merchant.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <StarRounded className="text-amber-500" fontSize="small" />
                      <span className="font-bold">{merchant.rating}</span>
                      <span className="text-sm text-gray-600">
                        ({merchant.reviewCount})
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {merchant.priceRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <LocationOnRounded fontSize="small" className="text-gray-400" />
                    {merchant.location}, {merchant.parish}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {merchant.categories.slice(0, 3).map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <SearchRounded style={{ fontSize: 80 }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No merchants found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftRounded />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              // Show first, last, current, and adjacent pages
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-amber-500 text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="px-2">
                    ...
                  </span>
                );
              }
              return null;
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRightRounded />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
