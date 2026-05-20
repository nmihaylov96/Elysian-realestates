import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function PageTransition() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
  const show = setTimeout(() => setVisible(true), 0)
  const hide = setTimeout(() => setVisible(false), 700)
  return () => {
    clearTimeout(show)
    clearTimeout(hide)
  }
}, [location.pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] bg-[#1F3A2E] flex items-center justify-center pointer-events-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-serif tracking-[0.3em] text-[#C6A87A]"
          >
            ELYSIAN
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageTransition