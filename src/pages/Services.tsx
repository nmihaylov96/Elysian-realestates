import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

const services = [
  {
    number: "01",
    title: "Property Acquisition",
    description:
      "We source and present exclusive off-market and listed properties aligned with your specific criteria — location, architecture, investment potential and lifestyle.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Portfolio Management",
    description:
      "For investors managing multiple assets, our team provides ongoing oversight, market analysis and strategic guidance to maximise long-term value.",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Interior Consultancy",
    description:
      "Through our network of award-winning designers, we offer tailored interior consultancy services to transform a property into a true reflection of your vision.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Relocation Services",
    description:
      "Moving internationally? We coordinate every aspect of your relocation — from legal guidance and school searches to staff placement and lifestyle setup.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop"
  },
]

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F5F0]"
    >
      <NavBar />

      {/* HERO */}
      <section className="px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            What We Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1F3A2E] mt-4 leading-tight">
            Services Tailored<br />to Your Standard
          </h1>
          <p className="mt-8 text-[#5f5a52] leading-relaxed">
            From first acquisition to long-term portfolio management, Elysian provides
            a full spectrum of services built around the needs of discerning individuals
            and serious investors.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section className="px-6 md:px-16 lg:px-24 pb-24 flex flex-col gap-0">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`grid lg:grid-cols-2 gap-0 border-t border-[#d8d1c7] py-16 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
          >
            <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""} pr-0 lg:pr-16`}>
              <p className="text-[#C6A87A] text-5xl font-serif">{s.number}</p>
              <h3 className="text-3xl font-serif text-[#1F3A2E] mt-4">{s.title}</h3>
              <p className="mt-6 text-[#5f5a52] leading-relaxed">{s.description}</p>
              <Link
                to="/contact"
                className="inline-block mt-8 border border-[#1F3A2E] text-[#1F3A2E] px-7 py-3 text-sm uppercase tracking-wide hover:bg-[#1F3A2E] hover:text-white transition"
              >
                Enquire
              </Link>
            </div>

            <div className={`${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""} mt-8 lg:mt-0`}>
              <img
                src={s.img}
                className="w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#1F3A2E] px-6 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-serif text-white">Ready to begin?</h2>
          <p className="text-[#a09890] mt-3 max-w-md">
            Speak with one of our advisors and take the first step toward your ideal property.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-[#C6A87A] text-[#1F3A2E] px-10 py-4 font-medium tracking-wide hover:bg-[#d8bc93] transition whitespace-nowrap"
        >
          Get in Touch
        </Link>
      </section>

    </motion.div>
  )
}

export default Services