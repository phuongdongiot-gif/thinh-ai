"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ProAICard = () => {
  const cardRef = useRef(null);

  // 1. Logic xử lý 3D Tilt (Nghiêng card theo chuột)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!cardRef.current) return;
    const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
    const width = rect.width || 1;
    const height = rect.height || 1;
    const mouseX = Math.max(0, Math.min(e.clientX - rect.left, width));
    const mouseY = Math.max(0, Math.min(e.clientY - rect.top, height));

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="perspective-1000 w-full flex justify-center items-center py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[500px] w-full max-w-[400px] rounded-[30px] bg-slate-900 group"
      >
        {/* --- LỚP NỀN GLOW (PHÍA SAU) --- */}
        <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* --- VIỀN CHẠY NEON --- */}
        <div className="absolute inset-0 rounded-[30px] p-[2px] overflow-hidden">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#000_0%,#000_40%,#06b6d4_50%,#000_60%,#000_100%)] animate-[spin_4s_linear_infinite]" />
        </div>

        {/* --- CONTAINER CHÍNH --- */}
        <div className="absolute inset-[2px] rounded-[28px] bg-[#050505] overflow-hidden z-10">

          {/* 1. Hiệu ứng Grid (Lưới kỹ thuật số) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* 2. Ảnh nhân vật với hiệu ứng Zoom */}
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="relative w-full h-full transition-transform duration-500 group-hover:scale-110"
          >
            <Image
              src="/thinh-hoc-ai-anh-dai-dien.webp"
              alt="AI Teacher"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />

            {/* Overlay màu tối cho chuyên nghiệp */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-cyan-500/10" />
          </motion.div>

          {/* 3. Thanh quét (Scanning Bar) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] absolute top-0 animate-[scan_3s_ease-in-out_infinite]" />
          </div>

          {/* 4. Holographic Shine (Vệt sáng theo chuột) */}
          <motion.div
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 80%)",
              x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
              y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
            }}
            className="absolute inset-0 pointer-events-none z-30"
          />

          {/* 5. Cyber Overlays (Thông tin HUD) */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-40 pointer-events-none">
            {/* Top UI */}
            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="font-mono text-[10px] text-cyan-400/70 border-l-2 border-cyan-500 pl-2">
              </div>
              <div className="h-8 w-8 border border-cyan-500/30 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="h-1 w-1 bg-cyan-400 rounded-full" />
              </div>
            </div>

            {/* Bottom UI */}

          </div>
        </div>
      </motion.div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          50% { top: 50%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProAICard;