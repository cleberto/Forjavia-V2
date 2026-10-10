'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const LEVELS = {
  LIGHT: {
    example: 'Ajustar o texto de um botão',
    context: 18,
    rows: [
      ['Modelo', 'haiku · effort=low'],
      ['Contexto', 'arquivo alvo + 1 vizinho'],
      ['Spec Kit', 'dispensado'],
      ['Sensores', 'lint + typecheck'],
      ['Verificação', 'sensores determinísticos'],
      ['Owner Gate', 'nunca'],
    ],
  },
  STANDARD: {
    example: 'Nova tela de inventário',
    context: 55,
    rows: [
      ['Modelo', 'sonnet · effort=medium'],
      ['Contexto', 'vizinhança no grafo + lições'],
      ['Spec Kit', 'specify → plan → tasks'],
      ['Sensores', 'testes + lint + typecheck'],
      ['Verificação', 'Verifier independente'],
      ['Owner Gate', 'apenas em Stop Reason'],
    ],
  },
  CRITICAL: {
    example: 'Market com impacto na economia',
    context: 92,
    rows: [
      ['Modelo', 'opus · effort=high'],
      ['Contexto', 'grafo + domínio + invariantes'],
      ['Spec Kit', 'completo + Engineering Skeptic'],
      ['Sensores', 'testes de domínio obrigatórios'],
      ['Verificação', 'Verifier + revisão adversarial'],
      ['Owner Gate', 'em decisões irreversíveis'],
    ],
  },
} as const

type Level = keyof typeof LEVELS

export function RiskRouterSection() {
  const [level, setLevel] = useState<Level>('STANDARD')
  const data = LEVELS[level]

  return (
    <section id="risco" aria-labelledby="risco-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="risco-title"
          index="04"
          eyebrow="Risk Router"
          title="Rigor proporcional ao risco. Nem mais, nem menos."
          description="Mudar um texto não deveria custar o mesmo que mexer na economia do produto. O Risk Router escolhe modelo, contexto e verificação para cada missão."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div role="radiogroup" aria-label="Nível de risco" className="grid grid-cols-3 border-b border-border">
              {(Object.keys(LEVELS) as Level[]).map((key) => {
                const selected = key === level
                return (
                  <button
                    key={key}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setLevel(key)}
                    className={cn(
                      'relative px-4 py-5 font-mono text-xs font-semibold tracking-wider transition-colors duration-200 md:text-sm',
                      selected ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'size-2 rounded-full',
                          key === 'LIGHT' && 'bg-success',
                          key === 'STANDARD' && 'bg-foreground/60',
                          key === 'CRITICAL' && 'bg-primary',
                        )}
                      />
                      {key}
                    </span>
                    {selected ? (
                      <motion.span
                        layoutId="risk-indicator"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    ) : null}
                  </button>
                )
              })}
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:p-9">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Exemplo de missão</p>
                  <motion.p
                    key={data.example}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xl font-semibold"
                  >
                    {`"${data.example}"`}
                  </motion.p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Rigor aplicado</p>
                    <p className="font-mono text-sm text-primary">{data.context}%</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-success via-primary/80 to-primary"
                      animate={{ width: `${data.context}%` }}
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A classificação usa sinais objetivos — arquivos tocados, domínios sensíveis e invariantes — e não a
                  opinião do agente sobre o próprio trabalho.
                </p>
              </div>

              <dl className="grid gap-2 sm:grid-cols-2">
                {data.rows.map(([label, value], i) => (
                  <motion.div
                    key={`${level}-${label}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-lg border border-border bg-background/60 p-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm font-medium">{value}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
