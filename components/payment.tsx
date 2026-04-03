'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Payment() {

  const bankInfo = {
    name: 'NGUYEN VIET THINH',
    bank: 'MB Bank',
    account: '7020103436008',
    amount: 5000000,
    note: `Thanh toán khóa học - ghi rõ: Tên + SĐT (VD: Nguyen Van A 0909123456)`
  }

  const vietQR = 'maqr.png'

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bankInfo.account)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenZalo = () => {
    window.open('https://zalo.me/0325377044', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl text-center">
      
        
        {/* Avatar */}
       

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-1">
          Thanh toán khóa học
        </h1>
        <p className="text-gray-400 text-sm mb-4">
          Quét QR hoặc chuyển khoản theo thông tin bên dưới
        </p>


        {/* QR */}
        <div className="bg-white p-4 rounded-2xl inline-block mb-4 shadow-lg">
          <Image src={`/${vietQR}`} alt="QR Code" width={224} height={224} className="w-56 h-56" />
        </div>

        {/* Note */}
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
          📌 Nội dung chuyển khoản:
          <br />
          <span className="text-white">
          (VD : NGUYEN VAN A Chuyen tien)
          </span>
        </p>

        {/* Bank info */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left mb-4">
          <p className="text-white text-sm mb-1">
            <span className="text-gray-400">Ngân hàng:</span> {bankInfo.bank}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="text-gray-400">Chủ TK:</span> {bankInfo.name}
          </p>
          <p className="text-white text-sm flex justify-between items-center">
            <span>
              <span className="text-gray-400">STK:</span> {bankInfo.account}
            </span>
            <button
              onClick={handleCopy}
              className="text-xs bg-cyan-500 hover:bg-cyan-400 text-black px-2 py-1 rounded-md transition"
            >
              {copied ? 'Đã copy' : 'Copy'}
            </button>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleOpenZalo}
          className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          Tôi đã thanh toán (Gửi bill qua Zalo)
        </button>


        <p className="text-xs text-gray-600 mt-2">
          Powered by Thịnh Học AI 🚀
        </p>
      </div>
    </div>
  )
}