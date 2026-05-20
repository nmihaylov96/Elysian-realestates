import { motion } from "framer-motion"
import { useState } from "react"
import NavBar from "../components/NavBar"


function Contact() {

  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Purchase",
    message: ""
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
        >
          <p className="text-[#C6A87A] uppercase tracking-[0.3em] text-sm">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1F3A2E] mt-4 leading-tight">
            Let's Find Your<br />Perfect Property
          </h1>
        </motion.div>
      </section>

      {/* MAIN GRID */}
      <section className="px-6 md:px-16 lg:px-24 pb-24 grid lg:grid-cols-5 gap-16">

        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col gap-10"
        >
          {[
            {
              label: "Office",
              lines: ["12 Mayfair Place", "London, W1K 6DT", "United Kingdom"]
            },
            {
              label: "Contact",
              lines: ["+44 20 7946 0321", "hello@elysian.com"]
            },
            {
              label: "Hours",
              lines: ["Monday – Friday: 9am – 7pm", "Saturday: 10am – 5pm", "Sunday: By appointment"]
            }
          ].map((block, i) => (
            <div key={i}>
              <p className="text-[#C6A87A] uppercase tracking-[0.25em] text-xs">
                {block.label}
              </p>
              {block.lines.map((line, j) => (
                <p key={j} className="mt-2 text-[#1F3A2E] text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-auto">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=700&auto=format&fit=crop"
              className="w-full h-[260px] object-cover shadow-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 bg-white p-10 shadow-xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="text-5xl mb-6">✦</div>
              <h3 className="text-3xl font-serif text-[#1F3A2E]">
                Thank you
              </h3>
              <p className="mt-4 text-[#5f5a52] max-w-sm">
                Your enquiry has been received. One of our advisors will be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h2 className="text-2xl font-serif text-[#1F3A2E]">
                Send an Enquiry
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#5f5a52]">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-[#d8d1c7] bg-transparent py-3 outline-none text-[#1F3A2E] focus:border-[#1F3A2E] transition"
                    placeholder="Alexandra Voss"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#5f5a52]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-[#d8d1c7] bg-transparent py-3 outline-none text-[#1F3A2E] focus:border-[#1F3A2E] transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#5f5a52]">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-[#d8d1c7] bg-transparent py-3 outline-none text-[#1F3A2E] focus:border-[#1F3A2E] transition"
                    placeholder="+44 7700 000000"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#5f5a52]">
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-[#d8d1c7] bg-transparent py-3 outline-none text-[#1F3A2E] focus:border-[#1F3A2E] transition"
                  >
                    <option>Purchase</option>
                    <option>Investment</option>
                    <option>Valuation</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-[#5f5a52]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full border-b border-[#d8d1c7] bg-transparent py-3 outline-none text-[#1F3A2E] focus:border-[#1F3A2E] transition resize-none"
                  placeholder="Tell us about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#1F3A2E] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#2D4A3A] transition"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </motion.div>

      </section>

    </motion.div>
  )
}

export default Contact