'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { label: 'Trang chủ', href: '/' }, // Thay #home thành /
  { label: 'Học tập', href: '/#content' }, // Thêm / trước # để chạy được từ các trang con
  { label: 'Công cụ AI', href: '/#tools' },
  { label: 'Về Tôi', href: '/#about' },
  { label: 'Liên hệ', href: '/#footer' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMounted && isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-cyan-500/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/"> 
          <motion.div
            className="flex flex-col gap-0.5 cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
             
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm">
                Thịnh Học AI
              </span>
            </div>
            {/* <span className="text-xs text-gray-400 ml-1">AI Expert & Educator</span> */}
          </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                variants={itemVariants}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <Button
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Bắt đầu?
            </Button> */}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden absolute top-[72px] left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden p-2 z-50 origin-top"
            >
              <motion.nav
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col flex-1"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
                    }}
                    className="flex items-center justify-between block w-full p-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </motion.a>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
                  }}
                  className="mt-2 p-2 pt-4 border-t border-cyan-500/10"
                >
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm h-11 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] gap-2"
                  >
                    Bắt đầu khám phá
                  </button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
