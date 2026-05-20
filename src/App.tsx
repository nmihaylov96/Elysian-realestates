import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import MyApp from "./pages/MyApp"
import MyProperties from "./pages/MyProperties"
import PropertyDetails from "./pages/PropertyDetails"
import Favorites from "./pages/Favorites"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

import CustomCursor from "./components/CustomCursor"
import PageTransition from "./components/PageTransition"
import BackToTop from "./components/BackToTop"

function App() {
  const location = useLocation()

  return (
    <div className="bg-[#F8F5F0] min-h-screen **:cursor-none cursor-none">

      <CustomCursor />
      <PageTransition />
      <BackToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<MyApp />} />
            <Route path="/properties" element={<MyProperties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default App