'use client'

import { motion } from 'framer-motion'
import { Users, Play, TrendingUp, Award } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: string
  label: string
  suffix?: string
}

const statsData: Omit<StatItem, 'icon'>[] = [
  { value: '11K+', label: 'Người theo dõi' },
  { value: '50+', label: 'Video' },
  { value: '10M+', label: 'Views' },
  { value: '3+', label: 'Năm kinh nghiệm' },
]

const iconMap = [Users, Play, TrendingUp, Award]

export default function StatsSection() {
  const stats = statsData.map((stat, index) => ({
    ...stat,
    icon: iconMap[index],
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[index]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative glass-effect rounded-xl p-6 text-center border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <div
                    className="flex justify-center mb-4 text-cyan-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-[10deg]"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
