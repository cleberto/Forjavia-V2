'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const NODES = [
  { id: 'REQ', label: 'Requirement', detail: 'REQ-042 · Market acessível apenas na safe zone' },
  { id: 'DEC', label: 'Decision', detail: 'ADR-017 · Validação no servidor, nunca no cliente' },
  { id: 'SPEC', label: 'Spec', detail: 'specs/market/spec.md · gerada pelo Spec Kit' },
  { id: 'TASK', label: 'Task', detail: 'T-3.2 · wave 2 · depende de T-3.1' },
  { id: 'CODE', label: 'Code', detail: 'src/market/access.ts · mapeado pelo Understand Anything' },
  { id: 'TEST', label: 'Test', detail: 'market-access.spec.ts · 4 casos de domínio' },
  { id: 'EVD', label: 'Evidence', detail: 'evidence/M-118.json · commit a1f9c2e' },
]

export function EngineeringGraphSection() {
  const [hovered, setHovered] = useState<string | null>('CODE')
  const active = NODES.find((n) => n.id === hovered)

  return (
    <section aria-labelledby="grafo-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="grafo-title"
          index="05"
          eyebrow="Engineering Graph"
          title="Todo código sabe por que existe."
          description="Requirements, decisões, specs, tarefas, código, testes e evidências formam um grafo navegável. O Context Compiler usa essa vizinhança para entregar ao agente só o que importa."
          align="center"
        />

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-5 py-12 md:px-10">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
            <ol className="relative flex flex-wrap items-center justify-center gap-y-6">
              {NODES.map((node, i) => {
                const isActive = node.id === hovered
                return (
                  <li key={node.id} className="flex items-center">
                    <button
                      type="button"
                      onMouseEnter={() => setHovered(node.id)}
                      onFocus={() => setHovered(node.id)}
                      onClick={() => setHovered(node.id)}
                      aria-pressed={isActive}
                      className={cn(
                        'flex flex-col items-center gap-1 rounded-xl border px-4 py-3 transition-all duration-300',
                        isActive
                          ? 'border-primary/60 bg-primary/10 shadow-[0_0_28px] shadow-primary/25'
                          : 'border-border bg-background hover:border-foreground/30',
                      )}
                    >
                      <span className={cn('font-mono text-xs font-semibold', isActive ? 'text-primary' : 'text-foreground')}>
                        {node.id}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{node.label}</span>
                    </button>
                    {i < NODES.length - 1 ? (
                      <span aria-hidden="true" className="relative mx-1.5 block h-px w-6 overflow-hidden bg-border md:w-10">
                        <span className="flow-line animate-flow absolute inset-0" style={{ animationDelay: `${i * 0.3}s` }} />
                      </span>
                    ) : null}
                  </li>
                )
              })}
            </ol>

            <div className="relative mx-auto mt-10 max-w-xl" aria-live="polite">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg border border-border bg-background/80 px-4 py-3 text-center font-mono text-sm"
                  >
                    <span className="text-primary">{active.label}</span>
                    <span className="text-muted-foreground">{' → '}</span>
                    {active.detail}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
