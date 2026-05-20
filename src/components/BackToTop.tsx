import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-[#1F3A2E] text-white w-12 h-12 flex items-center justify-center shadow-xl hover:bg-[#C6A87A] transition duration-300"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop