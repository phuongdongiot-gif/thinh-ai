'use client'

import Header from '@/components/header'
import PromptHub from '@/components/promt'
import CTABanner from '@/components/sections/ctaBanner'
import Footer from '@/components/sections/footer'
import PromptShowcase from '@/components/sections/taoanh12gocdo'
import BioPage from '@/components/ui/biot'
import AiLearningCard from '@/components/ui/learningcard'

export default function PromptHubPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Progress Indicator */}
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 pt-16">
       
    
        <PromptHub />

 <AiLearningCard />
        <section id="cta">
          <CTABanner />
        </section>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
    </main>
  )
}
