'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 z-50 shadow-lg shadow-cyan-500/50"
      style={{ width: `${progress}%` }}
      initial={{ width: '0%' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  )
}
