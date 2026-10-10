'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { ForgeBackground } from '@/components/forge-background'
import { HeroTerminal } from '@/components/hero-terminal'
import { GithubIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

const PROVIDERS = ['Claude Code', 'Codex', 'Spec Kit', 'TLC', 'Understand Anything']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <ForgeBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-7">
          <motion.a
            href="#arquitetura"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="group flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 py-1 pr-3 pl-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-primary/40"
          >
            <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-primary">v1.3</span>
            Arquitetura integrada: Spec Kit + TLC + Understand Anything
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </motion.a>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Seus agentes escrevem o código.{' '}
            <span className="text-glow text-primary">Forjavia governa a entrega.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Um único Control Plane para orquestrar agentes de IA com Spec-Driven Development: roteamento por risco,
            contexto compilado, verificação independente e evidência rastreável — do requisito ao commit.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-3">
            <a
              href="#arquitetura"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[0_0_32px] hover:shadow-primary/40"
            >
              Explorar a arquitetura
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-foreground/30"
            >
              <GithubIcon className="size-4" />
              Código aberto no GitHub
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="flex flex-col gap-3 pt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Orquestra o que você já usa
            </p>
            <ul className="flex flex-wrap gap-2">
              {PROVIDERS.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  )
}
