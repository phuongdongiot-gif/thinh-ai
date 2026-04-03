import React from 'react';
import { BrainCircuit, ArrowUpRight, Sparkles } from 'lucide-react';

const AiLearningCard = () => {
  const shopeeLink = "https://s.shopee.vn/LiqeX0AaL";

  return (
    <div className="relative bg-white dark:bg-slate-900 ring-1 ring-gray-200 dark:ring-slate-800 rounded-2xl p-6 shadow-xl">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Lộ trình học tập
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight mb-2">
          Mình đã bắt đầu học AI từ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">con số 0</span> ở đây
        </h3>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Chia sẻ tài liệu và những bước đi đầu tiên giúp mình chinh phục trí tuệ nhân tạo.
        </p>
      </div>
    </div>

    <a 
      href={shopeeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-50 transition-colors duration-300 group/btn"
    >
      <span>Khám phá ngay</span>
      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
    </a>

    <div className="mt-4 flex items-center justify-center gap-1">
      <Sparkles className="w-3 h-3 text-amber-500" />
      <span className="text-[10px] text-slate-400 uppercase tracking-widest">Highly Recommended</span>
    </div>
  </div>
  );
};

export default AiLearningCard;