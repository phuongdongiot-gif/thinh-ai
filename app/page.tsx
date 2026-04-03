import dynamic from 'next/dynamic'
import Header from '@/components/header'
import ScrollProgress from '@/components/scroll-progress'
import HeroSection from '@/components/sections/hero'

const SocialSection = dynamic(() => import('@/components/sections/social'))
const StatsSection = dynamic(() => import('@/components/sections/stats'))
const ContentSection = dynamic(() => import('@/components/sections/content'))
const BioPage = dynamic(() => import('@/components/ui/biot'))
const FeaturedVideoSection = dynamic(() => import('@/components/sections/featured-video'))
const ToolsSection = dynamic(() => import('@/components/sections/tools'))
const AboutSection = dynamic(() => import('@/components/sections/about'))
const CTABanner = dynamic(() => import('@/components/sections/ctaBanner'))
const Footer = dynamic(() => import('@/components/sections/footer'))

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 pt-16">
        <div id="home">
          <HeroSection />
        </div>
        <div id="social">
          <SocialSection />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <div id="content">
          <ContentSection />
        </div>

        <div id="bio">
          <BioPage />
        </div>
       
        <div id="featured">
          <FeaturedVideoSection />
        </div>
        <div id="tools">
          <ToolsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="cta">
          <CTABanner />
        </div>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
    </main>
  )
}
