import { Camera, Check, Copy, ExternalLink, Image as ImageIcon, User } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import AiLearningCard from '../ui/learningcard';

const PromptShowcase = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | string | null>(null);

  const basePrompt = `Use the provided reference image as the identity source.
Preserve exact facial features, hairstyle, body proportions, and outfit.
Do not change clothing, do not redesign.

Young Asian male, soft handsome face, clean skin, styled brown hair, natural look.
Wearing a brown hoodie layered under a beige long coat, black pants.
Holding a plastic cup of iced coffee with straw.

Outdoor urban street scene, soft daylight, natural lighting, shallow depth of field, cinematic look.
Highly realistic, ultra-detailed, 85mm lens look.

Maintain identity consistency, no face distortion, no body deformation, no extra fingers, no blur, no cropping head.`;

  const footerInstruction = "Keep full head visible, no cropping, no distortion, consistent identity across all angles";

  const angles = [
    { id: 1, title: "Front View (Full Body)", prompt: "Front view, full body centered, facing camera, holding coffee naturally, relaxed expression" },
    { id: 2, title: "Left 45°", prompt: "Left 45-degree angle, body slightly turned, looking off-camera, casual street style pose" },
    { id: 3, title: "Right 45°", prompt: "Right 45-degree angle, relaxed posture, holding coffee near chest, soft natural expression" },
    { id: 4, title: "Left Side Profile", prompt: "Left side profile, clean facial contour, looking into distance, calm mood, natural posture" },
    { id: 5, title: "Right Side Profile", prompt: "Right side profile, soft lighting on face, holding drink, urban lifestyle feeling" },
    { id: 6, title: "Back View (Over Shoulder)", prompt: "Back view, camera behind subject, over-shoulder angle, head slightly turned back, subtle expression" },
    { id: 7, title: "Full Back (No Face)", prompt: "Full back view, walking forward, holding coffee down, no face visible, natural street movement" },
    { id: 8, title: "Top Down Angle", prompt: "Top-down angle, camera slightly above, looking down, full body visible, urban street composition" },
    { id: 9, title: "Low Angle (Hero Shot)", prompt: "Low angle shot from below, cinematic perspective, confident posture, city background blurred" },
    { id: 10, title: "Close-up Face", prompt: "Close-up portrait, face only, natural skin texture, soft lighting, blurred urban background" },
    { id: 11, title: "Medium Shot (Waist Up)", prompt: "Medium shot, waist up, holding coffee near chest, relaxed confident expression" },
    { id: 12, title: "Walking Shot", prompt: "Walking toward camera, casual movement, holding coffee, slight motion in coat, lifestyle vibe" },
  ];

  const copyToClipboard = (text: string, id: number | string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyFullPrompt = (anglePrompt: string, id: number) => {
    const fullText = `${basePrompt}\n\n${anglePrompt}\n\n${footerInstruction}`;
    copyToClipboard(fullText, id);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Tạo Ảnh AI <span className="text-orange-600">12 Góc Độ</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hướng dẫn tạo nhân vật nhất quán với Nano Banana Pro. Sử dụng bộ prompt chuẩn để duy trì nhận diện khuôn mặt và trang phục.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Base Prompt & Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
            <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold">
              <ImageIcon size={20} />
              <span>HÌNH THAM CHIẾU & BASE</span>
            </div>

            <Image src="/promt.jpg" alt="QR Code" width={400} height={400} className="w-full h-full object-cover" />

          </div>

          {/* Contact/Ad Card */}
        <AiLearningCard />
        </div>

        {/* Right Column: 12 Angles Grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6 font-bold text-gray-800">
            <Camera size={24} className="text-orange-600" />
            <h2>12 GÓC ĐỘ NANO BANANA PRO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {angles.map((angle) => (
              <div key={angle.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative">
                <span className="absolute top-4 right-4 text-gray-200 font-black text-2xl group-hover:text-orange-100 transition-colors">
                  {angle.id.toString().padStart(2, '0')}
                </span>
                <h4 className="font-bold text-gray-900 mb-2 pr-8">{angle.title}</h4>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {angle.prompt}
                </p>
                <button
                  onClick={() => copyFullPrompt(angle.prompt, angle.id)}
                  className="flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider transition-colors"
                >
                  {copiedIndex === angle.id ? (
                    <><Check size={14} /> Đã Copy Full Prompt</>
                  ) : (
                    <><Copy size={14} /> Copy Full Prompt</>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
            <p className="text-sm text-blue-800 font-medium">
              💡 <strong>Lưu ý:</strong> Nút "Copy Full Prompt" sẽ tự động ghép <b>Base + Góc độ + Footer</b> để bạn có kết quả tốt nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptShowcase;