'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Users, BookOpen } from 'lucide-react'
import FeaturesSection from './features'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-white/5 backdrop-blur-sm text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl" // Giữ nguyên chiều rộng hẹp như ảnh
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-5xl font-bold mb-8">Về Thịnh</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Mình bắt đầu tìm hiểu AI như một người mới và đến giờ vẫn đang học mỗi ngày. 
                Những gì mình chia sẻ ở đây đều là thứ mình đã tự thử, tự làm và thấy hiệu quả trong thực tế. 
                Mục tiêu của mình rất đơn giản: Giúp bạn tiếp cận AI theo cách dễ hiểu, làm được ngay và tạo ra kết quả thật.
              </p>
              <p className="text-gray-400 text-base">
                Mình tin rằng AI không phải là tương lai xa tưởng, mà là công cụ mà bạn có thể sử dụng ngay hôm nay. 
                Hãy cùng mình khám phá những cách thực tế để tận dụng sức mạnh của công nghệ này.
              </p>
            </div>
          </motion.div>

          {/* Tag Chips */}
          <motion.div className="flex flex-wrap gap-3 mb-12" variants={itemVariants}>
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Building with AI
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 flex items-center gap-2">
              <Users className="w-4 h-4" /> AI Marketing Studio
            </div>
            <div className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> AI Experiments
            </div>
          </motion.div>

          {/* Grid Features - Đã được làm gọn lại */}
          <FeaturesSection />

          {/* Bottom CTA Box */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-start gap-4 shadow-2xl"
          >
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">
                Bắt đầu từ một video miễn phí
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Xem cách mình làm và thử lại ngay, không cần biết gì về AI trước đó
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}