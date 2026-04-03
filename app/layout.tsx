import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Thịnh Học AI - Bắt Đầu Hành Trình Cùng AI',
  description: 'Thịnh Học AI - Kênh chia sẻ kiến thức Trí Tuệ Nhân Tạo (AI) dễ hiểu nhất dành cho người mới. Khám phá cách ứng dụng AI vào cuộc sống và công việc.',
  metadataBase: new URL('https://thinhhocai.com'),
  generator: 'Next.js',
  keywords: ['AI', 'Học AI', 'Trí tuệ nhân tạo', 'Thịnh Học AI', 'Nano Banana Pro', 'Cách dùng AI'],
  authors: [{ name: 'Nguyễn Việt Thịnh' }],
  creator: 'Nguyễn Việt Thịnh',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://thinhhocai.com',
    title: 'Thịnh Học AI - Học AI Từ Con Số 0',
    description: 'Chia sẻ kiến thức AI thực chiến, dễ hiểu từ một người đang khám phá AI mỗi ngày.',
    siteName: 'Thịnh Học AI',
    images: [
      {
        url: '/banner-thinh-hoc-ai.webp',
        width: 1200,
        height: 630,
        alt: 'Thịnh Học AI Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thịnh Học AI - Học AI từ con số 0',
    description: 'Cùng nhau học AI từ con số 0 an toàn và thực chiến.',
    images: ['/banner-thinh-hoc-ai.webp'],
  },
  icons: {
    icon: [
      {
        url: '/thinh-hoc-ai-anh-dai-dien.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/thinh-hoc-ai-anh-dai-dien.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/thinh-hoc-ai-anh-dai-dien.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/thinh-hoc-ai-anh-dai-dien.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nguyễn Việt Thịnh",
    "url": "https://thinhhocai.com",
    "image": "https://thinhhocai.com/thinh-hoc-ai-anh-dai-dien.webp",
    "sameAs": [
      "https://facebook.com/thinhhocai"
    ],
    "jobTitle": "AI Creator",
    "worksFor": {
      "@type": "Organization",
      "name": "Thịnh Học AI"
    }
  };

  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-KNPTN63FTS" />
      </body>
    </html>
  )
}