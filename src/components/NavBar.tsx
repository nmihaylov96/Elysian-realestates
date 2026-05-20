import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getFavorites } from "../utils/favorites"

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const favCount = getFavorites().length

  const links = [
    { to: "/properties", label: "Properties" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F5F0]/80 border-b border-[#d8d1c7]">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-5">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-serif tracking-wide text-[#1F3A2E]">
          ELYSIAN
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide uppercase text-[#1F3A2E]">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition hover:text-[#C6A87A] ${
                location.pathname === link.to ? "text-[#C6A87A]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* FAVORITES WITH BADGE */}
          <Link
            to="/favorites"
            className={`relative transition hover:text-[#C6A87A] ${
              location.pathname === "/favorites" ? "text-[#C6A87A]" : ""
            }`}
          >
            Favorites
            <AnimatePresence>
              {favCount > 0 && (
                <motion.span
                  key={favCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-4 bg-[#C6A87A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {favCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </nav>

        {/* CTA + BURGER */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-[#1F3A2E] text-white px-6 py-2 text-sm tracking-wide hover:bg-[#2D4A3A] transition"
          >
            Book Viewing
          </Link>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden text-[#1F3A2E]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#F8F5F0] border-t border-[#d8d1c7]"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {[...links, { to: "/favorites", label: `Favorites${favCount > 0 ? ` (${favCount})` : ""}` }].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-widest transition hover:text-[#C6A87A] ${
                    location.pathname === link.to ? "text-[#C6A87A]" : "text-[#1F3A2E]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#1F3A2E] text-white text-center py-3 text-sm uppercase tracking-widest hover:bg-[#2D4A3A] transition"
              >
                Book Viewing
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar