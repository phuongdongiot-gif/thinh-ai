import { ExternalLink, User } from 'lucide-react';


const SupportCard = () => {

  return (
    <div className="flex items-center justify-center p-6">
    <div className="relative group max-w-md w-full">
      {/* Lớp nền đổ bóng mờ ảo (Glow effect) */}
      
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl">
    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
      <User size={20} className="text-orange-400" />
      Dịch Vụ AI Tài Khoản
    </h3>
    <ul className="space-y-3 text-sm text-gray-300 mb-6">
      <li className="flex justify-between"><span>ChatGPT / Gemini:</span> <span className="text-white font-semibold text-orange-400">Từ 50K</span></li>
      <li className="flex justify-between"><span>Veo3 / Kling / CapCut:</span> <span className="text-white">Giá Rẻ</span></li>
      <li className="flex justify-between"><span>Adobe / Canva:</span> <span className="text-white text-green-400">Full Option</span></li>
    </ul>
    <button
      onClick={() => window.open('https://zalo.me/0325377044', '_blank')}
      className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
    >
      Liên Hệ Ngay (Support 1:1) <ExternalLink size={16} />
    </button>
  </div>
    
    </div>
  </div>
   
  );
};

export default SupportCard;