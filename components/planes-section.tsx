'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Cpu, Database, Network } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const PLANES = [
  {
    id: 'control',
    icon: Network,
    name: 'Control Plane',
    owner: 'Forjavia',
    summary: 'Decide o que fazer, com quanto rigor e quando parar.',
    items: [
      'Risk Router: LIGHT, STANDARD ou CRITICAL',
      'Context Compiler: só o contexto necessário',
      'Engineering Skeptic: lentes de risco e lições',
      'Stop Reasons e Owner Gate determinísticos',
      'Provider Profiles e roteamento por eval',
    ],
  },
  {
    id: 'execution',
    icon: Cpu,
    name: 'Execution Plane',
    owner: 'Providers',
    summary: 'Executa em árvores isoladas, sem decidir a própria aprovação.',
    items: [
      'Claude Code e Codex como executores',
      'Spec Kit: specify → plan → tasks',
      'TLC: waves paralelas com dependências',
      'Sensores: testes, lint, typecheck',
      'Verifier sempre independente do autor',
    ],
  },
  {
    id: 'state',
    icon: Database,
    name: 'State Plane',
    owner: 'Repositório',
    summary: 'A verdade vive no repo — versionada, auditável, portátil.',
    items: [
      'Structured State: requirements, decisions, lessons',
      'Engineering Graph via Understand Anything',
      'Evidence por missão, ligada ao commit',
      'Markdown como view, nunca como fonte',
      'Sem cloud obrigatória, sem lock-in',
    ],
  },
]

export function PlanesSection() {
  const [active, setActive] = useState(PLANES[0].id)
  const current = PLANES.find((p) => p.id === active) ?? PLANES[0]

  return (
    <section id="arquitetura" aria-labelledby="arquitetura-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="arquitetura-title"
          index="02"
          eyebrow="Arquitetura"
          title="Três planos. Responsabilidades que não se misturam."
          description="O Forjavia não substitui seus agentes — ele separa quem decide, quem executa e onde a verdade é guardada."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <div role="tablist" aria-label="Planos da arquitetura" className="flex flex-col gap-3">
              {PLANES.map((plane, i) => {
                const selected = plane.id === active
                return (
                  <button
                    key={plane.id}
                    role="tab"
                    id={`tab-${plane.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${plane.id}`}
                    onClick={() => setActive(plane.id)}
                    onMouseEnter={() => setActive(plane.id)}
                    className={cn(
                      'relative flex items-center gap-4 rounded-xl border p-5 text-left transition-colors duration-300',
                      selected ? 'border-primary/50 bg-card' : 'border-border bg-background hover:bg-card/60',
                    )}
                    style={{ marginLeft: `${i * 16}px` }}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="plane-glow"
                        className="absolute inset-0 rounded-xl bg-primary/5"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    ) : null}
                    <span
                      className={cn(
                        'relative flex size-11 shrink-0 items-center justify-center rounded-lg border transition-colors',
                        selected ? 'border-primary/40 bg-primary/10 text-primary' : 'border-border text-muted-foreground',
                      )}
                    >
                      <plane.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="relative flex flex-col gap-0.5">
                      <span className="font-semibold">{plane.name}</span>
                      <span className="text-sm text-muted-foreground">{plane.summary}</span>
                    </span>
                    <span className="relative ml-auto hidden font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:block">
                      {plane.owner}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-9">
              <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  id={`panel-${current.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${current.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{current.name}</h3>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                      owner: {current.owner}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {current.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="flex items-start gap-3 rounded-lg border border-border bg-background/60 px-4 py-3 text-sm"
                      >
                        <span className="mt-0.5 font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
