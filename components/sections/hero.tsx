'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'
import ProAICard from './avatartEffect'

export default function HeroSection() {
  // Removed framer-motion variants for LCP optimization

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-[fade-in-up_0.8s_ease-out]">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Building With AI</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            >
              Ứng Dụng <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">AI Thực Tế</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              AI cho người mới. Chia sẻ miễn phí, dễ hiểu, thực chiến từ góc nhìn của người đang tự học và khám phá AI mỗi ngày.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-10 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Bắt đầu thôi 
              </button>
              <button
                className="inline-flex items-center justify-center text-sm h-10 transition-all font-medium border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 rounded-full px-8 gap-2"
              >
                <Play className="w-4 h-4" />
                Xem video miễn phí
              </button>
            </div>
          </div>

          {/* Right: Profile Image */}
        <ProAICard />
        </div>
      </div>

      {/* Animated elements */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex items-center justify-center p-2"
        style={{ animationDuration: '3s' }}
      >
        <div className="text-cyan-400 text-2xl">↓</div>
      </div>
    </section>
  )
}
