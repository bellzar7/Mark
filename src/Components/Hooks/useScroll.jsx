import { useCallback, useRef, useState } from 'react'

const useScroll = () => {
  const lineRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = useCallback((e) => {
    if (lineRef.current) {
      setIsDown(true)
      setStartX(e.pageX - lineRef.current.offsetLeft)
      setScrollLeft(lineRef.current.scrollLeft)
    }
  }, [])

  const handleMouseLeave = useCallback(() => setIsDown(false), [])
  const handleMouseUp = useCallback(() => setIsDown(false), [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - lineRef.current.offsetLeft
      const walk = (x - startX) * 2 // multiplier can be adjusted for faster/slower scroll
      if (lineRef.current) {
        lineRef.current.scrollLeft = scrollLeft - walk
      }
    },
    [isDown, startX, scrollLeft],
  )
  return {
    lineRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  }
}

export { useScroll }
