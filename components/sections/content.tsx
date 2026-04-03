'use client'

import { motion } from 'framer-motion'
import { 
  Lightbulb,
  TrendingUp,
  Zap,
} from 'lucide-react'

const contentCategories = [
  {
    title: 'Học AI cơ bản',
    description: 'Nắm vững những kiến thức nền tảng về AI, Machine Learning và Deep Learning',
    icon: Lightbulb,
    color: 'from-cyan-400 to-cyan-600',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
  },
  {
    title: 'Kiếm tiền với AI',
    description: 'Khám phá cách sử dụng AI để tạo thu nhập và xây dựng sự nghiệp',
    icon: TrendingUp,
    color: 'from-emerald-400 to-emerald-600',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
  },
  {
    title: 'Công cụ AI hay',
    description: 'Tìm hiểu và sử dụng những công cụ AI tốt nhất hiện có',
    icon: Zap,
    color: 'from-purple-400 to-purple-600',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
]

export default function ContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nội dung chính
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ba lĩnh vực kiến thức chính giúp bạn thành thạo AI
            </p>
          </motion.div>

          {/* Content Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {contentCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className={`relative p-8 rounded-2xl backdrop-blur-sm border ${category.borderColor} bg-white/5 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]`}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Glowing top border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with glow */}
                    <div className="mb-6 inline-block">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Animated accent line */}
                    <div
                      className={`mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r ${category.color} rounded-full transition-all duration-300`}
                    ></div>
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
