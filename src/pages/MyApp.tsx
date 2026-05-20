import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import NavBar from "../components/NavBar"
import { properties } from "../data/properties"
import { useEffect, useRef, useState } from "react"

const featured = properties.slice(0, 3)

function StatCounter({ target, suffix, label, delay }: {
  target: number
  suffix: string
  label: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => {
            const steps = 40
            const increment = target / steps
            let current = 0
            const interval = setInterval(() => {
              current += increment
              if (current >= target) {
                setCount(target)
                clearInterval(interval)
              } else {
                setCount(Math.floor(current))
              }
            }, 1500 / steps)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <p className="text-2xl font-serif text-[#1F3A2E]">
        {count}{suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-[#5f5a52]">{label}</p>
    </motion.div>
  )
}

function MyApp() {
  return (
    <section className="bg-[#F8F5F0] min-h-screen text-[#222222]">
      <NavBar />

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C6A87A] mb-5">
            Luxury Real Estate
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-serif text-[#1F3A2E]">
            Timeless Properties
            <br />
            For Modern Living
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-[#5f5a52] max-w-xl">
            Discover exclusive residences crafted with elegance, privacy and
            architectural excellence in the world's most desirable locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/properties"
              className="bg-[#1F3A2E] text-white px-8 py-4 tracking-wide hover:bg-[#2D4A3A] transition text-center"
            >
              Explore Properties
            </Link>

            <Link
              to="/about"
              className="border border-[#1F3A2E] text-[#1F3A2E] px-8 py-4 tracking-wide hover:bg-[#1F3A2E] hover:text-white transition text-center"
            >
              Learn More
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            {[
              { target: 250, suffix: "+", label: "Properties", delay: 0 },
              { target: 120, suffix: "+", label: "Clients", delay: 150 },
              { target: 15, suffix: "y", label: "Experience", delay: 300 },
            ].map((s, i) => (
              <StatCounter key={i} {...s} />
            ))}
          </div>
        </motion.div>

        {/* RIGHT — IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-5"
        >
          <img
            className="w-52 h-72 object-cover shadow-2xl hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
          />
          <img
            className="w-52 h-96 object-cover mt-10 shadow-2xl hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop"
          />
          <img
            className="w-52 h-96 object-cover -mt-10 shadow-2xl hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
          />
          <img
            className="w-52 h-72 object-cover shadow-2xl hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
          />
        </motion.div>

      </main>

      {/* FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-[#d8d1c7]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">Hand-picked</p>
            <h2 className="text-4xl font-serif text-[#1F3A2E] mt-3">Featured Properties</h2>
          </div>
          <Link
            to="/properties"
            className="hidden md:inline text-sm uppercase tracking-widest text-[#1F3A2E] hover:text-[#C6A87A] transition"
          >
            View All →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to={`/properties/${p.id}`} className="block bg-white shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={p.images[0]}
                    className="h-[320px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#1F3A2E] text-white text-xs uppercase tracking-widest px-3 py-1">
                    {p.type}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#C6A87A] uppercase tracking-widest">{p.location}</p>
                  <h3 className="text-xl font-serif text-[#1F3A2E] mt-2">{p.title}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-[#1F3A2E] font-medium">{p.price}</p>
                    <span className="text-xs text-[#C6A87A] uppercase tracking-widest">View →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/properties"
            className="inline-block border border-[#1F3A2E] text-[#1F3A2E] px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#1F3A2E] hover:text-white transition"
          >
            View All Properties
          </Link>
        </div>
      </section>

      {/* WHY ELYSIAN */}
      <section className="bg-[#1F3A2E] px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-7xl mx-auto"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">Our Difference</p>
          <h2 className="text-4xl font-serif text-white mt-4">Why Choose Elysian</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              icon: "◈",
              title: "Off-Market Access",
              text: "Exclusive properties never listed publicly, available only to our clientele."
            },
            {
              icon: "◉",
              title: "Global Network",
              text: "Connections across London, Dubai, Monaco, New York and beyond."
            },
            {
              icon: "◎",
              title: "Expert Advisors",
              text: "Seasoned professionals with decades of combined luxury real estate experience."
            },
            {
              icon: "◌",
              title: "Total Discretion",
              text: "Every transaction handled with absolute confidentiality and care."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[#3d5747] p-8 hover:border-[#C6A87A] transition duration-300"
            >
              <p className="text-[#C6A87A] text-3xl">{item.icon}</p>
              <h3 className="text-white font-serif text-lg mt-5">{item.title}</h3>
              <p className="text-[#a09890] text-sm mt-3 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">Simple & Refined</p>
          <h2 className="text-4xl font-serif text-[#1F3A2E] mt-4">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {[
            {
              step: "01",
              title: "Initial Consultation",
              text: "We take time to understand your lifestyle, priorities and investment goals in a private, no-obligation meeting."
            },
            {
              step: "02",
              title: "Curated Selection",
              text: "Our team presents a bespoke shortlist — including off-market opportunities — aligned perfectly with your brief."
            },
            {
              step: "03",
              title: "Seamless Acquisition",
              text: "From negotiation to legal completion, we manage every detail so you can focus on what matters."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative border-t-2 border-[#C6A87A] pt-10 pr-12"
            >
              <p className="text-6xl font-serif text-[#ede8e1]">{item.step}</p>
              <h3 className="text-xl font-serif text-[#1F3A2E] mt-4">{item.title}</h3>
              <p className="text-[#5f5a52] text-sm mt-3 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F0EBE3] px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-7xl mx-auto"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">Client Stories</p>
          <h2 className="text-4xl font-serif text-[#1F3A2E] mt-4">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Elysian found us a property we didn't even know existed. The process was effortless from start to finish — truly a class apart.",
              name: "Catherine M.",
              role: "Private Investor, London"
            },
            {
              quote: "I've worked with several agencies across Europe. None come close to the level of discretion and expertise that Elysian brings to every interaction.",
              name: "Raphael S.",
              role: "Entrepreneur, Monaco"
            },
            {
              quote: "From the first call to the keys in my hand, everything was handled with precision and genuine care. I wouldn't go anywhere else.",
              name: "Isabelle T.",
              role: "Creative Director, Paris"
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-white p-8 shadow-sm"
            >
              <p className="text-[#C6A87A] text-4xl font-serif leading-none">"</p>
              <p className="text-[#5f5a52] text-sm leading-relaxed mt-2">{t.quote}</p>
              <div className="mt-8 border-t border-[#d8d1c7] pt-5">
                <p className="text-[#1F3A2E] font-serif">{t.name}</p>
                <p className="text-xs text-[#C6A87A] uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3A2E]/75" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">Begin Your Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 max-w-3xl leading-tight">
            Find the Property You've Always Imagined
          </h2>
          <p className="text-white/70 mt-6 max-w-xl">
            Speak with an Elysian advisor today and take the first step toward your perfect residence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/properties"
              className="bg-[#C6A87A] text-[#1F3A2E] px-10 py-4 font-medium tracking-wide hover:bg-[#d8bc93] transition"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-10 py-4 tracking-wide hover:bg-white hover:text-[#1F3A2E] transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

    </section>
  )
}

export default MyApp