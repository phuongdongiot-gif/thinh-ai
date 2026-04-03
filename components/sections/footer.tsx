'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Youtube, Heart, MessageCircle } from 'lucide-react'

// --- CÁC ICON SVG ---
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H76.5v-37H108V99.8c0-31.07 18.41-48.25 46.805-48.25 13.595 0 27.82 2.425 27.82 2.425V84.8h-15.73c-15.364 0-20.145 9.535-20.145 19.305V128h34.675l-5.542 37H146.75v89.445C209.192 244.843 256 191.888 256 128z" fill="#0866FF"/>
    <path d="M175.808 165l5.542-37h-34.675v-23.895c0-9.77 4.781-19.305 20.145-19.305h15.73V54.975s-14.225-2.425-27.82-2.425c-28.395 0-46.805 17.18-46.805 48.25V128H76.5v37H108v89.445c6.643 1.041 13.435 1.555 20.375 1.555 6.635 0 13.136-.474 19.5-1.385V165h27.933z" fill="#fff"/>
  </svg>
)

const MessengerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="messGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0695FF" />
        <stop offset="50%" stopColor="#A334FA" />
        <stop offset="100%" stopColor="#FF6968" />
      </linearGradient>
    </defs>
    <path d="M128 0C55.438 0 0 52.828 0 121.5c0 35.187 14.406 66.75 38.031 88.938.188 1.938.063 7.844-1.969 18.281-.563 2.938.656 5.875 3.094 7.438a7.85 7.85 0 003.875 1.031c1.375 0 2.75-.344 4-.969l24.469-12.719c2.813-.938 5.688-.875 8.438-.125 15.188 4.656 31.313 7.156 48.063 7.156 72.563 0 128-52.828 128-121.5S200.563 0 128 0z" fill="url(#messGradient)"/>
    <path d="M49.625 158.062l42.344-67.437a12.63 12.63 0 0118.219-3.563l33.438 25.094a4.64 4.64 0 005.594 0l42.188-31.844c5.094-3.844 11.594 2 8.281 7.281l-42.344 67.438a12.63 12.63 0 01-18.219 3.563L105.7 133.5a4.64 4.64 0 00-5.594 0l-42.188 31.844c-5.125 3.844-11.625-2-8.293-7.282z" fill="#fff"/>
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.22-1.01-.19-.08-.38-.17-.56-.27l-.01 5.38c.06 1.48-.3 3-1.22 4.17-.92 1.17-2.3 1.95-3.79 2.22-1.49.27-3.13.1-4.5-.47-1.37-.57-2.55-1.63-3.23-2.96-1.02-2.03-.78-4.66.62-6.49 1.4-1.83 3.86-2.73 6.13-2.26v4.03c-1.16-.36-2.51-.12-3.46.66-.95.78-1.29 2.1-1.06 3.28.23 1.18 1.25 2.13 2.43 2.37 1.18.24 2.52-.16 3.32-1.06.8-.9 1.11-2.21 1.05-3.44l.01-13.13z"/>
  </svg>
)

const ZaloImageIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center`}>
    <Image 
      src="/zalo-icon.png" 
      alt="Zalo Icon" 
      width={24} 
      height={24} 
      className="object-contain"
    />
  </div>
)

// --- DỮ LIỆU CHIA NHÓM ---

const contactLinks = [
  { 
    icon: MessengerIcon, 
    label: 'Messenger', 
    color: 'hover:bg-[#A334FA]/20 border-[#A334FA]/30', 
    url: 'https://m.me/thinh.hocai' 
  },
  { 
    icon: ZaloImageIcon, 
    label: 'Zalo', 
    color: 'hover:bg-[#0068FF]/20 border-[#0068FF]/30', 
    url: 'https://zalo.me/0325377044' 
  },
]

const followLinks = [
  { 
    icon: Youtube, 
    label: 'YouTube', 
    color: 'hover:bg-red-500/20 text-red-500 border-red-500/30', 
    url: 'https://www.youtube.com/@thinhhoc.ai9999' 
  },
  { 
    icon: TikTokIcon, 
    label: 'TikTok', 
    color: 'hover:bg-white/10 text-white border-white/20', 
    url: 'https://www.tiktok.com/@thinhhoc.ai' 
  },
  { 
    icon: FacebookIcon, 
    label: 'Facebook', 
    color: 'hover:bg-[#0866FF]/20 border-[#0866FF]/30', 
    url: 'https://www.facebook.com/thinh.hocai' 
  },
]

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer id="footer" className="relative border-t border-cyan-500/20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Brand - 5 columns */}
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Thịnh Học AI
              </h3>
              <p className="text-gray-400 text-base max-w-sm leading-relaxed">
                Cùng nhau khám phá sức mạnh của Trí tuệ nhân tạo, tối ưu hóa công việc và kiến tạo tương lai số.
              </p>
            </div>

            {/* Liên hệ - 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
               Liên hệ
              </h4>
              <div className="flex gap-4">
                {contactLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.9 }}
                      className={`${social.color} transition-all duration-300 p-3 rounded-2xl bg-white/5 border flex items-center justify-center hover:scale-110 hover:-translate-y-1`}
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Theo dõi - 4 columns */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-6">Theo dõi</h4>
              <div className="flex gap-4">
                {followLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.9 }}
                      className={`${social.color} transition-all duration-300 p-3 rounded-2xl bg-white/5 border flex items-center justify-center hover:scale-110 hover:-translate-y-1`}
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© {currentYear} thinhhocai.com. Tất cả quyền được bảo lưu.</p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Bảo mật</a>
              <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span>Làm với</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
                <span>bởi Thịnh</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}