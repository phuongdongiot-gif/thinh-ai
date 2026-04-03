'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const aiTools = [
  { name: 'Veo 3', description: 'AI tạo video chất lượng cao từ Google, hướng tới điện ảnh và storytelling', category: 'Video', color: 'from-red-400 to-red-600' },
  { name: 'Seedance 2.0', description: 'Công cụ AI tạo video và animation tự động cho content ngắn', category: 'Video', color: 'from-fuchsia-400 to-fuchsia-600' },
  { name: 'Gemini', description: 'AI đa phương thức của Google, hỗ trợ text, hình ảnh và phân tích dữ liệu', category: 'Chatbot', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Freepik AI', description: 'Nền tảng thiết kế tích hợp AI tạo ảnh, mockup và tài nguyên đồ họa', category: 'Thiết kế', color: 'from-sky-400 to-sky-600' },
  { name: 'Higgfield AI', description: 'Công cụ AI tạo nội dung sáng tạo, hình ảnh và video marketing', category: 'Sáng tạo', color: 'from-emerald-400 to-emerald-600' },
  { name: 'ChatGPT', description: 'Mô hình ngôn ngữ mạnh mẽ cho viết lách, lập trình và sáng tạo', category: 'Chatbot', color: 'from-green-400 to-green-600' },
  { name: 'Midjourney', description: 'Công cụ tạo hình ảnh từ mô tả văn bản với chất lượng nghệ thuật cao', category: 'Hình ảnh', color: 'from-purple-400 to-purple-600' },
  { name: 'Runway', description: 'Công cụ chỉnh sửa video và tạo nội dung video AI chuyên nghiệp', category: 'Video', color: 'from-pink-400 to-pink-600' },
  { name: 'Kling AI', description: 'AI tạo video từ text với chuyển động mượt và chân thực', category: 'Video', color: 'from-orange-400 to-orange-600' },
  { name: 'Claude', description: 'Trợ lý AI thông minh với khả năng phân tích sâu và xử lý tài liệu dài', category: 'Chatbot', color: 'from-amber-400 to-amber-600' },
  { name: 'Stable Diffusion', description: 'Mô hình tạo ảnh mã nguồn mở, linh hoạt và dễ tùy chỉnh', category: 'Hình ảnh', color: 'from-blue-400 to-blue-600' },
 
  { name: 'Copilot', description: 'Trợ thủ lập trình AI từ GitHub, hỗ trợ viết code nhanh và chính xác', category: 'Lập trình', color: 'from-cyan-400 to-cyan-600' },
]

export default function ToolsSection() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [showAll, setShowAll] = useState(false)

  const categories = ['Tất cả', ...new Set(aiTools.map(t => t.category))]

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase())

      const matchCategory =
        activeCategory === 'Tất cả' || tool.category === activeCategory

      return matchSearch && matchCategory
    })
  }, [search, activeCategory])

  const displayedTools = showAll ? filteredTools : filteredTools.slice(0, 6)

  const track = (event: string) => {
    console.log('TRACK:', event)
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold mb-4" variants={itemVariants}>
            Công cụ AI phổ biến
          </motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
            Khám phá các công cụ AI hàng đầu và tìm công cụ phù hợp với bạn
          </motion.p>
        </motion.div>

        <div className="mb-6 max-w-md mx-auto">
          <input
            placeholder="Tìm kiếm công cụ AI..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white/5 border-cyan-500/30 focus:border-cyan-400"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold border-cyan-400'
                  : 'border-cyan-500/30 text-gray-300 hover:border-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {displayedTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="relative group h-full transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.color} opacity-20 blur-2xl group-hover:opacity-50 transition duration-500`} />

              <div className="rounded-xl shadow relative h-full flex flex-col justify-between border border-cyan-500/30 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/60 transition-all duration-300">

                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${tool.color} mb-4 flex items-center justify-center text-white font-bold`}>
                  {tool.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none border-cyan-400/50 text-cyan-300 text-xs">
                    {tool.category}
                  </div>

                  <div className="text-cyan-400 font-semibold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Xem thêm */}
        {filteredTools.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                track('click_show_more')
                setShowAll(!showAll)
              }}
              className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              {showAll ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        )}

        {/* CTA bán */}
        <div className="mt-16 text-center">
          <div className="max-w-xl mx-auto p-6 rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-sm relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">
              🚀 Tài khoản AI & Phần mềm giá rẻ
              </h3>

              <p className="text-gray-400 mb-4">
              ChatGPT, Veo3, Kling, Gemini, Capcut, Canva, Adobe,...setup dễ dàng, support 1:1
              </p>

              <div className="text-cyan-400 text-xl font-semibold mb-2">
                Chỉ từ 50K / tháng
              </div>

              <p className="text-xs text-gray-500 mb-4">
                🔥 11 người đã mua hôm nay
              </p>

              <button
  onClick={() => {
    track('click_buy_cta')
    window.open('https://zalo.me/0325377044', '_blank')
  }}
  className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
>
  Mua tài khoản ngay
</button>
            </div>
          </div>
        </div>

        {/* Empty */}
        {filteredTools.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            Không tìm thấy công cụ phù hợp
          </p>
        )}
      </div>

  
    </section>
  )
}