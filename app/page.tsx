import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { InvariantsMarquee } from '@/components/invariants-marquee'
import { ProblemSection } from '@/components/problem-section'
import { PlanesSection } from '@/components/planes-section'
import { FlowSection } from '@/components/flow-section'
import { RiskRouterSection } from '@/components/risk-router-section'
import { EngineeringGraphSection } from '@/components/engineering-graph-section'
import { SkepticSection } from '@/components/skeptic-section'
import { ContractsSection } from '@/components/contracts-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <InvariantsMarquee />
        <ProblemSection />
        <PlanesSection />
        <FlowSection />
        <RiskRouterSection />
        <EngineeringGraphSection />
        <SkepticSection />
        <ContractsSection />
        <RoadmapSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
