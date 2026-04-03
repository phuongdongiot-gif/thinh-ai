import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Facebook, Instagram, Send, ExternalLink } from 'lucide-react';

const BioPage = () => {
  const affiliateUrl = "https://collshp.com/thinhocai.2026?view=storefront";

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://facebook.com/yourprofile', color: 'bg-[#1877F2]' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com/yourprofile', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { name: 'Telegram', icon: <Send size={20} />, url: 'https://t.me/yourchannel', color: 'bg-[#229ED9]' },
  ];

  return (
    <div className="flex flex-col items-center px-6 py-12 font-sans bg-background text-foreground overflow-x-hidden">


      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
          <Image
            src="/thinh-hoc-ai-anh-dai-dien.webp"
            alt="Avatar"
            width={96}
            height={96}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold ">@thinhocai.2026</h1>

      </div>

      {/* Main Affiliate Link (Nổi bật nhất) */}
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-md bg-[#d23f1f] hover:bg-[#ee4d2d] transition-all transform hover:scale-[1.02] active:scale-[0.98] text-white flex items-center justify-between p-4 rounded-2xl shadow-md mb-6"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl text-[#d23f1f]">
            <ShoppingBag size={24} />
          </div>
          <span className="font-bold text-lg"> Đồ mình đang dùng để làm AI mỗi ngày</span>
        </div>
        <ExternalLink size={20} className="opacity-80" />
      </a>





    </div>

  );
};

export default BioPage;