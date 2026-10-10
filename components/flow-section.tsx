'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { tag: 'intake', title: 'Pedido do Owner', body: 'Uma frase em linguagem natural. O Owner define intenção, não implementação.' },
  { tag: 'state', title: 'Structured State', body: 'Requirements, decisões e lições são carregados do repositório — a única fonte da verdade.' },
  { tag: 'route', title: 'Risk Router', body: 'Classifica o risco e escolhe o rigor: modelo, esforço, sensores e nível de verificação.' },
  { tag: 'compile', title: 'Context Compiler', body: 'Monta um pacote mínimo: vizinhança no Engineering Graph, regras e lições relevantes.' },
  { tag: 'skeptic', title: 'Engineering Skeptic', body: 'Questiona a missão por lentes de risco antes de qualquer linha de código.' },
  { tag: 'spec', title: 'Spec Kit + TLC', body: 'Especificação, plano e tarefas em waves paralelas com dependências explícitas.' },
  { tag: 'execute', title: 'Execução isolada', body: 'O provider executa em uma árvore isolada. Sensores rodam a cada entrega.' },
  { tag: 'verify', title: 'Verifier independente', body: 'Outra instância verifica. O autor nunca aprova o próprio trabalho.' },
  { tag: 'evidence', title: 'Evidence + Decisão', body: 'Evidência persistida e ligada ao commit. CONTINUE, ou um Stop Reason determinístico.' },
]

export function FlowSection() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="fluxo" aria-labelledby="fluxo-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="fluxo-title"
            index="03"
            eyebrow="Fluxo governado"
            title="Do pedido ao commit, cada etapa deixa rastro."
            description="Uma missão percorre um pipeline determinístico. Quem decide é o Control Plane; o agente executa dentro dos limites que recebeu."
          />
        </div>

        <ol ref={ref} className="relative flex flex-col gap-4 pl-10">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-px bg-border" />
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[15px] w-px origin-top bg-primary shadow-[0_0_12px] shadow-primary"
            style={{ scaleY: progress }}
          />
          {STEPS.map((step, i) => (
            <motion.li
              key={step.tag}
              initial={{ opacity: 0.25, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: '-45% 0px -45% 0px' }}
              transition={{ duration: 0.4 }}
              className="relative rounded-xl border border-border bg-card p-5"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[33px] flex size-[18px] items-center justify-center rounded-full border border-primary/60 bg-background"
              >
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold">{step.title}</h3>
                <span className="ml-auto rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {step.tag}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
