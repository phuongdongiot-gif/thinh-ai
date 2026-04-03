'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTABanner() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background elements */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 blur-2xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="relative glass-effect rounded-2xl p-8 sm:p-12 lg:p-16 border border-cyan-500/20 text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Bắt Đầu Miễn Phí</span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bắt Đầu Với AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Theo Cách</span> Đơn Giản Nhất
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Mình đã làm được, bạn cũng có thể làm được
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm h-10 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 gap-2"
              >
                Xem cách mình làm AI
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm h-10 transition-all font-medium border-2 border-purple-400 text-purple-300 hover:bg-purple-500/10 rounded-full px-8"
              >
                Tìm Hiểu Thêm
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Xem miễn phí
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Làm lại được ngay
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                Cập nhật mỗi ngày
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
