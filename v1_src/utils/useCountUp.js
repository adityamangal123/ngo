import { useEffect, useRef, useState } from 'react'

export default function useCountUp(target = 0, duration = 1500) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration])

  return value
}