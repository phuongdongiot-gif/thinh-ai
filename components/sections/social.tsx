'use client'

import { motion } from 'framer-motion'
import {
  Youtube,
  Facebook,
  ArrowRight
} from 'lucide-react'

// Tạo Custom TikTok Icon đồng nhất với style của Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const socialChannels = [
  {
    name: 'YouTube',
    description: 'Xem các video hướng dẫn AI chi tiết',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    accentColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    hoverColor: 'hover:shadow-red-500/50',
    url: 'https://www.youtube.com/@thinhhoc.ai9999',
  },
  {
    name: 'TikTok',
    description: 'Những mẹo AI nhanh gọn và hữu ích',
    icon: TikTokIcon, // Đã thay đổi ở đây
    color: 'from-slate-800 to-black', // TikTok thường dùng tone đen/tối sẽ sang hơn
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    hoverColor: 'hover:shadow-cyan-500/50',
    url: 'https://www.tiktok.com/@thinhhoc.ai',
  },
  {
    name: 'Facebook',
    description: 'Cộng đồng học AI và hỗ trợ',
    icon: Facebook,
    color: 'from-blue-500 to-blue-600',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    hoverColor: 'hover:shadow-blue-500/50',
    url: 'https://www.facebook.com/groups/752022753955881',
  },
]

export default function SocialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Kết Nối Với Thịnh
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Hãy theo dõi các kênh của mình để cập nhật những nội dung AI mới nhất
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {socialChannels.map((channel) => {
              const Icon = channel.icon

              return (
                <motion.div
                  key={channel.name}
                  variants={itemVariants}
                  onClick={() => handleOpen(channel.url)}
                  className={`relative p-8 rounded-2xl backdrop-blur-sm border ${channel.borderColor} bg-white/5 transition-all duration-300 ${channel.hoverColor} hover:shadow-lg cursor-pointer group hover:-translate-y-[5px]`}
                >
                  {/* Gradient BG */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-4 inline-block p-3 rounded-lg bg-white/5 border ${channel.borderColor}`}>
                      <Icon className={`w-6 h-6 ${channel.accentColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2">
                      {channel.name}
                    </h3>

                    {/* Desc */}
                    <p className="text-gray-400 mb-6 text-sm">
                      {channel.description}
                    </p>

                    {/* Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpen(channel.url)
                      }}
                      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-10 px-4 py-2 w-full bg-gradient-to-r ${channel.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all`}
                    >
                      Theo dõi
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}