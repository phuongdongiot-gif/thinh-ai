'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, AlertCircle } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 800)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradient cards */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 blur-xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative glass-effect rounded-2xl p-8 sm:p-12 lg:p-16 border border-cyan-500/20">
            <motion.div className="space-y-8" variants={containerVariants}>
              {/* Header */}
              <motion.div className="text-center space-y-4" variants={itemVariants}>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Bắt Đầu Hành Trình AI Của Bạn
                  </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Nhận cập nhật hàng tuần về AI, chiến lược kiếm tiền, và các công cụ độc quyền giành cho cộng đồng của chúng tôi
                </p>
              </motion.div>

              {/* Newsletter Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto w-full"
                variants={itemVariants}
              >
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Nhập email của bạn..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status !== 'idle' && status !== 'error'}
                      className="w-full px-4 py-3 rounded-full bg-white/5 border border-cyan-500/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
                      required
                    />
                    {status === 'success' && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status !== 'idle' && status !== 'error'}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-10 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-full px-8 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {status === 'loading' && 'Đang gửi...'}
                    {status === 'success' && 'Đã gửi!'}
                    {status === 'idle' || status === 'error' ? 'Đăng ký' : ''}
                  </button>
                </div>

                {/* Status Messages */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: status !== 'idle' ? 1 : 0,
                    y: status !== 'idle' ? 0 : -10,
                  }}
                  className="text-center text-sm"
                >
                  {status === 'success' && (
                    <p className="text-green-400">
                      ✓ Cảm ơn! Hãy kiểm tra email để xác nhận
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 flex items-center gap-2 justify-center">
                      <AlertCircle className="w-4 h-4" />
                      Có lỗi xảy ra. Vui lòng thử lại
                    </p>
                  )}
                </motion.div>
              </motion.form>

              {/* Privacy Note */}
              <motion.p
                className="text-center text-xs text-gray-400"
                variants={itemVariants}
              >
                Chúng tôi sẽ không bao giờ spam bạn. Bỏ đăng ký bất kỳ lúc nào.
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-cyan-500/30 animate-[spin_20s_linear_infinite]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"
            aria-hidden="true"
          ></div>
        </motion.div>
      </div>
    </section>
  )
}
