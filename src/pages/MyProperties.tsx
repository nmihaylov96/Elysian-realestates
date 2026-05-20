import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Search, SlidersHorizontal, X } from "lucide-react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { properties } from "../data/properties"
import { getFavorites, toggleFavorite } from "../utils/favorites"

const TYPES = ["All", "Villa", "Penthouse", "Modern", "Residence"]

function MyProperties() {
  const [favorites, setFavorites] = useState<number[]>(() => getFavorites())
  const [selectedType, setSelectedType] = useState("All")
  const [search, setSearch] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("default")

  function handleFav(id: number) {
    setFavorites(toggleFavorite(id))
  }

  const filtered = useMemo(() => {
    let result = properties

    if (selectedType !== "All") {
      result = result.filter(p => p.type === selectedType)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      )
    }

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) =>
        parseFloat(a.price.replace(/[^0-9.]/g, "")) -
        parseFloat(b.price.replace(/[^0-9.]/g, ""))
      )
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) =>
        parseFloat(b.price.replace(/[^0-9.]/g, "")) -
        parseFloat(a.price.replace(/[^0-9.]/g, ""))
      )
    }

    return result
  }, [selectedType, search, sortBy])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F5F0]"
    >
      <NavBar />

      {/* HERO */}
      <div className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3A2E]/60" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            Curated Collection
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-4">
            Our Properties
          </h1>
          <p className="mt-4 text-white/70 max-w-md">
            Discover {properties.length} exceptional residences across the world's most coveted destinations.
          </p>
        </motion.div>
      </div>

      {/* SEARCH + FILTERS BAR */}
      <div className="px-6 md:px-16 lg:px-24 py-8 border-b border-[#d8d1c7]">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-80">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5f5a52]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full bg-white border border-[#d8d1c7] pl-10 pr-10 py-3 text-sm text-[#1F3A2E] outline-none focus:border-[#1F3A2E] transition placeholder:text-[#b0a898]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5f5a52] hover:text-[#1F3A2E]"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex gap-3 flex-wrap items-center">
            {/* TYPE FILTERS */}
            {TYPES.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 border text-xs uppercase tracking-wide transition
                  ${selectedType === type
                    ? "bg-[#1F3A2E] text-white border-[#1F3A2E]"
                    : "border-[#d8d1c7] text-[#1F3A2E] hover:bg-[#1F3A2E] hover:text-white hover:border-[#1F3A2E]"
                  }
                `}
              >
                {type}
              </button>
            ))}

            {/* SORT */}
            <button
              onClick={() => setShowFilters(p => !p)}
              className={`flex items-center gap-2 px-4 py-2 border text-xs uppercase tracking-wide transition
                ${showFilters
                  ? "bg-[#1F3A2E] text-white border-[#1F3A2E]"
                  : "border-[#d8d1c7] text-[#1F3A2E] hover:bg-[#1F3A2E] hover:text-white"
                }
              `}
            >
              <SlidersHorizontal size={13} />
              Sort
            </button>
          </div>
        </div>

        {/* SORT PANEL */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-5 flex gap-3 flex-wrap">
                {[
                  { value: "default", label: "Default" },
                  { value: "price-asc", label: "Price: Low to High" },
                  { value: "price-desc", label: "Price: High to Low" },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className={`px-4 py-2 border text-xs uppercase tracking-wide transition
                      ${sortBy === opt.value
                        ? "bg-[#C6A87A] text-white border-[#C6A87A]"
                        : "border-[#d8d1c7] text-[#1F3A2E] hover:border-[#C6A87A] hover:text-[#C6A87A]"
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RESULTS COUNT */}
      <div className="px-6 md:px-16 lg:px-24 pt-8 pb-2">
        <p className="text-sm text-[#5f5a52]">
          Showing <span className="text-[#1F3A2E] font-medium">{filtered.length}</span> residences
          {search && (
            <span> for <span className="text-[#1F3A2E] font-medium">"{search}"</span></span>
          )}
        </p>
      </div>

      {/* CARDS */}
      <div className="px-6 md:px-16 lg:px-24 grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 pb-24">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-3 text-center py-20"
            >
              <p className="text-3xl font-serif text-[#d8d1c7]">No properties found</p>
              <p className="text-sm text-[#5f5a52] mt-3">Try adjusting your search or filters</p>
              <button
                onClick={() => { setSearch(""); setSelectedType("All") }}
                className="mt-6 border border-[#1F3A2E] text-[#1F3A2E] px-6 py-2 text-sm uppercase tracking-wide hover:bg-[#1F3A2E] hover:text-white transition"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            filtered.map((p, index) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleFav(p.id)
                  }}
                  whileTap={{ scale: 0.8 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <Heart
                    className={`w-5 h-5 transition
                      ${favorites.includes(p.id)
                        ? "fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                        : "text-white/60 hover:text-white"
                      }
                    `}
                  />
                </motion.button>

                <Link
                  to={`/properties/${p.id}`}
                  className="block bg-white shadow-lg overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.images[0]}
                      className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#1F3A2E] text-white text-xs uppercase tracking-widest px-3 py-1">
                      {p.type}
                    </div>
                                    
                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#1F3A2E]/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center gap-3">
                      <p className="text-white font-serif text-xl">{p.title}</p>
                      <p className="text-[#C6A87A] text-xs uppercase tracking-widest">{p.location}</p>
                      <div className="flex gap-6 mt-2 text-white/80 text-sm">
                        <span>🛏 {p.beds ?? 5}</span>
                        <span>🚿 {p.baths ?? 4}</span>
                        <span>📐 {p.sqm ?? 480}m²</span>
                      </div>
                      <p className="mt-2 text-[#C6A87A] font-serif text-lg">{p.price}</p>
                      <span className="mt-3 border border-white text-white text-xs uppercase tracking-widest px-5 py-2">
                        View Property
                      </span>
                    </div>
                  </div>
                                    
                  <div className="p-6">
                    <p className="text-xs text-[#C6A87A] uppercase tracking-widest">{p.location}</p>
                    <h2 className="text-xl font-serif text-[#1F3A2E] mt-2">{p.title}</h2>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-[#1F3A2E] font-medium">{p.price}</p>
                      <span className="text-xs text-[#C6A87A] uppercase tracking-widest">View →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </motion.section>
  )
}

export default MyProperties