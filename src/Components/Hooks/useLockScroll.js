import { useEffect } from 'react'

const useLockScroll = (isLocked) => {
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault()
    }

    if (isLocked) {
      document.body.style.overflow = 'hidden'
      document.body.addEventListener('touchmove', preventScroll, {
        passive: false,
      })
    } else {
      document.body.style.overflow = 'unset'
      document.body.removeEventListener('touchmove', preventScroll)
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.removeEventListener('touchmove', preventScroll)
    }
  }, [isLocked])
}

export default useLockScroll
