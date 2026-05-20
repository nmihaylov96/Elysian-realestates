import { motion } from "framer-motion"
import { useEffect } from "react"
import type { Dispatch, SetStateAction } from "react"

type ImageModalProps = {
  images: string[]
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  onClose: () => void
}

function ImageModal({ images, index, setIndex, onClose }: ImageModalProps) {

  function next() {
    setIndex((prev) => (prev + 1) % images.length)
  }

  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-4xl"
      >
        ←
      </button>

      {/* IMAGE */}
      <motion.img
        key={index}
        src={images[index]}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      {/* RIGHT */}
      <button
        onClick={next}
        className="absolute right-6 text-white text-4xl"
      >
        →
      </button>

    </div>
  )
}

export default ImageModal