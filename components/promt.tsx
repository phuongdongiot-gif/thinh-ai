"use client";

import React from 'react';
import Link from 'next/link';
import { LayoutGrid, Video, ImageIcon, ArrowRight, Sparkles } from 'lucide-react';

const PROMPT_CATEGORIES = [
  {
    id: 'taoanh12gocdo',
    title: "Tạo ảnh với 12 góc độ chuyên nghiệp",
    description: "Hướng dẫn cách sử dụng prompt để điều khiển camera AI tạo ra các góc chụp Cinematic.",
    icon: <LayoutGrid className="w-6 h-6 text-blue-500" />,
    path: "/promt/taoanh12gocdo",
    tag: "Hình ảnh"
  },
  {
    id: 'taovideobangai',
    title: "Sáng tạo Video bằng AI từ văn bản",
    description: "Quy trình kết hợp các công cụ AI để tạo video chất lượng cao từ câu lệnh.",
    icon: <Video className="w-6 h-6 text-purple-500" />,
    path: "/promt/taovideobangai",
    tag: "Video"
  },
  {
    id: 'taoanhbangaichatgpt',
    title: "Vẽ hình bằng ChatGPT (DALL-E 3)",
    description: "Bộ prompt tối ưu để ChatGPT hiểu và vẽ ra những bức tranh đúng ý bạn nhất.",
    icon: <ImageIcon className="w-6 h-6 text-green-500" />,
    path: "/promt/taoanhbangaichatgpt",
    tag: "ChatGPT"
  }
];

export default function PromptHub() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950 transition-colors">
      {/* Header Section */}
      <header className="py-20 px-4 bg-white dark:bg-slate-900 border-b dark:border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Thư viện <span className="text-blue-600">AI Prompt</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tổng hợp những bộ câu lệnh miễn phí giúp bạn làm chủ AI. Click vào từng chuyên mục để xem hướng dẫn chi tiết từ thinhhocai.com.
          </p>
        </div>
      </header>

      {/* Grid Danh sách */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROMPT_CATEGORIES.map((item) => (
            <Link key={item.id} href={item.path} className="group">
              <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">
                    {item.tag}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center text-blue-600 font-semibold text-sm">
                  Xem hướng dẫn chi tiết 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

    
      </main>
    </div>
  );
}