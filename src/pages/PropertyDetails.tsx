import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { properties } from "../data/properties"
import ImageModal from "../components/ImageModal"

function PropertyDetails() {

  const { id } = useParams()
  const property = properties.find(p => p.id === Number(id))

  const [imageIndex, setImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!property) {
    return <div className="p-10">Property not found</div>
  }

  const images = property.images

  const similar = properties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, 3)

  function nextImage() {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  function prevImage() {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F5F0]"
    >
      <NavBar />

      {/* BACK */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <Link to="/properties" className="text-sm text-[#5f5a52] hover:text-[#1F3A2E] transition uppercase tracking-widest">
          ← Back to listings
        </Link>
      </div>

      {/* GALLERY */}
      <div className="px-6 md:px-16 lg:px-24 mt-8 grid md:grid-cols-3 gap-4">

        {/* MAIN IMAGE */}
        <div className="relative md:col-span-2">
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-[500px] w-full object-cover shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(images[imageIndex])}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 hover:bg-black/60 transition"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 hover:bg-black/60 transition"
          >
            →
          </button>
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 tracking-widest">
            {imageIndex + 1} / {images.length}
          </div>
        </div>

        {/* THUMBNAILS */}
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setImageIndex(i)}
              className={`
                h-[160px] md:h-[240px] w-full object-cover cursor-pointer border-2 transition
                ${i === imageIndex ? "border-[#C6A87A]" : "border-transparent opacity-70 hover:opacity-100"}
              `}
            />
          ))}
        </div>

      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-16 lg:px-24 py-16 grid lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2">
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            {property.location}
          </p>
          <h1 className="text-5xl font-serif text-[#1F3A2E] mt-4">
            {property.title}
          </h1>
          <p className="mt-6 text-[#5f5a52] leading-relaxed">
            {property.description}
          </p>

          {/* FEATURES */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#d8d1c7] pt-10">
            {[
              { label: "Bedrooms", value: property.beds ?? "5" },
              { label: "Bathrooms", value: property.baths ?? "4" },
              { label: "Area", value: property.sqm ? `${property.sqm} m²` : "480 m²" },
            ].map((feat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-serif text-[#1F3A2E]">{feat.value}</p>
                <p className="text-xs uppercase tracking-widest text-[#5f5a52] mt-2">{feat.label}</p>
              </div>
            ))}
          </div>

          {/* DETAILS LIST */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { label: "Property Type", value: property.type },
              { label: "Location", value: property.location },
              { label: "Status", value: "Available" },
              { label: "Reference", value: `ELY-${String(property.id).padStart(4, "0")}` },
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-[#d8d1c7] py-3">
                <span className="text-xs uppercase tracking-widest text-[#5f5a52]">{item.label}</span>
                <span className="text-sm text-[#1F3A2E] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white p-8 shadow-xl h-fit sticky top-10">
          <p className="text-2xl font-serif text-[#1F3A2E]">
            {property.price}
          </p>
          <p className="mt-2 text-sm text-[#5f5a52]">
            Luxury property · {property.type}
          </p>

          <div className="mt-6 border-t border-[#d8d1c7] pt-6 flex flex-col gap-2 text-sm text-[#5f5a52]">
            <div className="flex justify-between">
              <span>Reference</span>
              <span className="text-[#1F3A2E]">ELY-{String(property.id).padStart(4, "0")}</span>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-emerald-700 font-medium">Available</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-[#1F3A2E] text-white py-4 hover:bg-[#2D4A3A] transition uppercase tracking-widest text-sm">
            Book Viewing
          </button>
          <button className="mt-3 w-full border border-[#1F3A2E] py-4 hover:bg-[#1F3A2E] hover:text-white transition uppercase tracking-widest text-sm">
            Contact Agent
          </button>

          <p className="mt-6 text-center text-xs text-[#5f5a52]">
            Response within 24 hours
          </p>
        </div>

      </div>

      {/* SIMILAR PROPERTIES */}
      {similar.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 pb-24">
          <div className="border-t border-[#d8d1c7] pt-16">
            <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">You May Also Like</p>
            <h2 className="text-3xl font-serif text-[#1F3A2E] mt-3">Similar Properties</h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {similar.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link to={`/properties/${p.id}`} className="block bg-white shadow-lg overflow-hidden group">
                    <img
                      src={p.images[0]}
                      className="h-[280px] w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="p-5">
                      <p className="text-xs text-[#C6A87A] uppercase tracking-widest">{p.location}</p>
                      <h3 className="text-lg font-serif text-[#1F3A2E] mt-1">{p.title}</h3>
                      <p className="mt-3 text-[#1F3A2E] font-medium">{p.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MODAL */}
      {selectedImage && (
        <ImageModal
          images={images}
          index={imageIndex}
          setIndex={setImageIndex}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <Footer />
    </motion.section>
  )
}

export default PropertyDetails