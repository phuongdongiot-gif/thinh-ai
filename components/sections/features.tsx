'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Lightbulb, Code2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link' // 1. Import Link từ Next.js

const features = [
  {
    icon: Zap,
    title: 'Case thực tế',
    description: 'Những gì mình đã làm được với AI (video, ảnh, content…)',
    gradient: 'from-purple-500 to-pink-500',
    href: '/tools' // Cập nhật lại đúng đường dẫn trang prompt mình vừa tạo
  },
  {
    icon: Users,
    title: 'Tool & workflow',
    description: 'Các tool AI mình đang dùng + cách mình kết hợp chúng',
    gradient: 'from-blue-500 to-indigo-500',
    href: '/promt' 
  },
  {
    icon: Lightbulb,
    title: 'Thử & sai',
    description: 'Những cái không hiệu quả để bạn không mất thời gian test lại',
    gradient: 'from-orange-400 to-yellow-500',
    href: '/fails'
  },
  {
    icon: Code2,
    title: 'Ứng dụng kiếm tiền',
    description: 'Cách mình áp dụng AI vào content, affiliate, kiếm thu nhập',
    gradient: 'from-emerald-400 to-cyan-500',
    href: '/money'
  },
]

export default function FeaturesSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {features.map((feature, index) => {
        const Icon = feature.icon
        const isLast = index === 3;

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`group relative ${isLast ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            {/* 2. Bọc toàn bộ Card bằng Link */}
            <Link href={feature.href} className="block h-full">
              <div className="h-full p-5 rounded-2xl bg-white/5 border border-white/10 
                            hover:border-cyan-500/50 hover:bg-white/10 transition-all 
                            duration-300 backdrop-blur-sm flex flex-col group-hover:-translate-y-1">
                
                {/* Icon Box & Nút Mũi tên nhỏ ở góc */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} p-2 flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Text Content */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Hiệu ứng tia sáng nhỏ dưới chân card khi hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}