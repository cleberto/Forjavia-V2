import { ArrowRight, Heart } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card px-6 py-16 text-center md:px-16">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div aria-hidden="true" className="absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
            <div className="relative flex flex-col items-center gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Open source</p>
              <h2 id="cta-title" className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Forje software confiável com os agentes que você já usa.
              </h2>
              <p className="max-w-xl text-pretty text-muted-foreground">
                Acompanhe o desenvolvimento, abra issues, contribua com código ou apoie o projeto.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-shadow duration-200 hover:shadow-[0_0_32px] hover:shadow-primary/40"
                >
                  <GithubIcon className="size-4" />
                  Dar uma estrela no GitHub
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a
                  href={site.supportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground/30"
                >
                  <Heart className="size-4 text-primary" aria-hidden="true" />
                  Apoiar o projeto
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
