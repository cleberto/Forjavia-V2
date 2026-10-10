'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const LENSES = [
  { code: 'DOMAIN_RISK', body: 'A mudança fere alguma regra de negócio ou invariante?' },
  { code: 'DATA_INTEGRITY', body: 'Existe caminho para corromper ou duplicar dados?' },
  { code: 'SECURITY_SURFACE', body: 'Abre superfície nova para abuso ou vazamento?' },
  { code: 'REVERSIBILITY', body: 'Se der errado, dá para desfazer sem dano?' },
  { code: 'LESSON_MATCH', body: 'Alguma lição registrada já previu esse erro?' },
]

const PROMOTION = [
  { stage: 'Julgamento', value: '"Market fora da safe zone permite exploit"' },
  { stage: 'Regra', value: 'MARKET_ACCESS_REQUIRES_SAFE_ZONE' },
  { stage: 'Validator', value: 'validators/market-access.ts' },
  { stage: 'Testes', value: '4 casos determinísticos' },
]

const TESTS = [
  'bloqueia acesso fora da safe zone',
  'permite acesso dentro da safe zone',
  'rejeita bypass via cliente',
  'registra tentativa negada',
]

export function SkepticSection() {
  return (
    <section id="cetico" aria-labelledby="cetico-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="cetico-title"
          index="06"
          eyebrow="Engineering Skeptic"
          title={
            <>
              Um cético na equipe que{' '}
              <span className="text-primary">transforma dúvidas em testes.</span>
            </>
          }
          description="Antes de executar, o Cético examina a missão por lentes de risco. Quando um julgamento se prova útil, ele é promovido: vira regra, validator e teste — e deixa de depender de opinião."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ul className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
              <li className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Lentes de risco</li>
              {LENSES.map((lens, i) => (
                <motion.li
                  key={lens.code}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex flex-col gap-1 rounded-lg border border-border bg-background/60 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="font-mono text-xs font-semibold text-primary">{lens.code}</span>
                  <span className="text-sm text-muted-foreground">{lens.body}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Promoção determinística
              </p>
              <ol className="relative flex flex-col gap-3">
                {PROMOTION.map((step, i) => (
                  <motion.li
                    key={step.stage}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.25 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <span className="text-xs text-muted-foreground">{step.stage}</span>
                      <span className="truncate font-mono text-sm">{step.value}</span>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-xs">
                <p className="mb-3 text-muted-foreground">market-access.spec.ts</p>
                <ul className="flex flex-col gap-2">
                  {TESTS.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 + i * 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="size-3.5 text-success" aria-hidden="true" />
                      <span className="text-success">PASS</span>
                      <span className="text-foreground/80">{t}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
