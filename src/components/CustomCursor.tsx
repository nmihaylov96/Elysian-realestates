import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function CustomCursor() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const rafRef = useRef<number>(0)

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 }
  const blobX = useSpring(cursorX, springConfig)
  const blobY = useSpring(cursorY, springConfig)

  const dotX = useSpring(cursorX, { damping: 10, stiffness: 800, mass: 0.1 })
  const dotY = useSpring(cursorY, { damping: 10, stiffness: 800, mass: 0.1 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      })
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.closest("a, button, [role='button'], input, select, textarea") !== null
      setHovering(isClickable)
    }

    const handleDown = () => setClicking(true)
    const handleUp = () => setClicking(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", handleOver)
    window.addEventListener("mousedown", handleDown)
    window.addEventListener("mouseup", handleUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", handleOver)
      window.removeEventListener("mousedown", handleDown)
      window.removeEventListener("mouseup", handleUp)
    }
  }, [])

  return (
    <>
      {/* BLOB */}
      <motion.div
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: clicking ? 28 : hovering ? 48 : 36,
          height: clicking ? 28 : hovering ? 48 : 36,
          opacity: hovering ? 0.85 : 0.6,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
      />

      {/* DOT */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.5 : 1,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  )
}

export default CustomCursor