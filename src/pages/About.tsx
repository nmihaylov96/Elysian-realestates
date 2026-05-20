import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"


const team = [
  {
    name: "Alexandra Voss",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "James Hartley",
    role: "Head of Acquisitions",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sofia Renaud",
    role: "Senior Estate Agent",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
]

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F5F0]"
    >
      <NavBar />

      {/* HERO */}
      <section className="px-6 md:px-16 lg:px-24 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            Our Story
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#1F3A2E] mt-4 leading-tight">
            Built on Trust,<br />Defined by Excellence
          </h1>

          <p className="mt-8 text-[#5f5a52] leading-relaxed max-w-lg">
            Founded in 2009, Elysian has grown from a boutique agency into one of the
            most respected names in luxury real estate. We operate at the intersection
            of architecture, lifestyle, and investment — guiding discerning clients
            toward properties that transcend the ordinary.
          </p>

          <p className="mt-4 text-[#5f5a52] leading-relaxed max-w-lg">
            Our philosophy is simple: every home has a story, and every client deserves
            a residence that reflects theirs. We don't just sell properties — we curate
            life experiences.
          </p>

          <Link
            to="/properties"
            className="inline-block mt-10 bg-[#1F3A2E] text-white px-8 py-4 tracking-wide hover:bg-[#2D4A3A] transition"
          >
            Explore Properties
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop"
            className="w-full h-[520px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#1F3A2E] text-white px-8 py-6 shadow-xl">
            <p className="text-3xl font-serif">15+</p>
            <p className="text-xs uppercase tracking-widest text-[#C6A87A] mt-1">Years of Excellence</p>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-[#1F3A2E] px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            What Drives Us
          </p>
          <h2 className="text-4xl font-serif text-white mt-4">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Discretion",
              text: "Every transaction is handled with absolute confidentiality. Our clients' privacy is paramount in everything we do."
            },
            {
              title: "Precision",
              text: "From the first consultation to the final handover, we operate with meticulous attention to every detail."
            },
            {
              title: "Legacy",
              text: "We think beyond transactions. Our goal is to match clients with homes that will hold meaning for generations."
            }
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="border border-[#3d5747] p-10"
            >
              <p className="text-[#C6A87A] text-4xl font-serif">0{i + 1}</p>
              <h3 className="text-white text-xl font-serif mt-4">{v.title}</h3>
              <p className="mt-4 text-[#a09890] text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            The People Behind Elysian
          </p>
          <h2 className="text-4xl font-serif text-[#1F3A2E] mt-4">
            Meet the Team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-serif text-[#1F3A2E]">{member.name}</h3>
                <p className="text-sm text-[#C6A87A] uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default About