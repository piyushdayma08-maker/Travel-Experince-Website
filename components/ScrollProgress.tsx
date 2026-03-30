"use client"
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const pct = height > 0 ? (scrolled / height) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 h-1 w-full z-50">
      <div
        style={{ width: `${progress}%` }}
        className="h-1 bg-gradient-to-r from-sky-500 via-lagoon to-sunset shadow-md"
      />
    </div>
  )
}
