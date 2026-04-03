'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const LazyYouTube = ({ videoId }: { videoId: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
      <div className="pt-[56.25%]" />
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video player"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Youtube Thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-all">
              <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M5 3v18l15-9z"/></svg>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const LazyTikTok = ({ url }: { url: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full overflow-hidden bg-black group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
      <div className="pt-[177.78%]" />
      {isPlaying ? (
        <iframe
          src={url}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="TikTok video player"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-colors">
           <svg className="w-12 h-12 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
           </svg>
           <span className="text-white/70 text-sm font-semibold">Nhấn để xem</span>
        </div>
      )}
    </div>
  )
}


export default function FeaturedVideoSection() {
  const tiktokVideos = [
    {
      url: "https://www.tiktok.com/embed/7619202782263790866",
      title: "Cách Dùng Motion Control Trên Kling AI",
    },
    {
      url: "https://www.tiktok.com/embed/7611533821938486548",
      title: "Biến Hình Henshin Trên App Jimeng",
    },
    {
      url: "https://www.tiktok.com/embed/7613042802401774868",
      title: "Tạo Ảnh Sản Phẩm Bằng AI",
    },
    {
      url: "https://www.tiktok.com/embed/7612695531520838933",
      title: "Đi dạo Hong Kong trong 30 giây cùng AI",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Video Mình Chia Sẻ Miễn Phí
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Những gì mình đang làm với AI, mình đều chia sẻ miễn phí tại đây
          </p>
        </div>

        {/* 🔥 VIDEO CHÍNH (YOUTUBE) */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <LazyYouTube videoId="lAzqcmHY8pY" />
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-white text-center">
            Hướng Dẫn Dùng Seedance2.0 A-Z Trên Jimeng
          </h3>
        </div>

        {/* 🔥 VIDEO LIÊN QUAN (TIKTOK) */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Video Liên Quan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tiktokVideos.map((video, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex flex-col"
              >
                <LazyTikTok url={video.url} />
                <div className="p-3 mt-auto">
                  <p className="text-xs md:text-sm text-gray-300 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}