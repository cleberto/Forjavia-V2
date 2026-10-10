'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FILES = {
  'mission.yaml': `mission: M-118
intent: "Adicionar Market com safe zone"
risk: CRITICAL
signals:
  - economy_impact
  - data_integrity
provider_profile: claude/opus
effort: high
context_budget_kb: 16
requirements:
  - REQ-042
rules:
  - MARKET_ACCESS_REQUIRES_SAFE_ZONE
verification: independent
owner_gate: irreversible_only`,
  'result.json': `{
  "mission": "M-118",
  "status": "CONTINUE",
  "author": "executor-a7",
  "verifier": "verifier-c2",
  "sensors": { "tests": "4/4", "lint": "pass", "types": "pass" },
  "lessons_applied": ["L-009", "L-021"],
  "evidence": "evidence/M-118.json",
  "commit": "a1f9c2e",
  "stop_reason": null
}`,
  'stop-reasons': `SPEC_AMBIGUOUS        # requisito com duas leituras
INVARIANT_VIOLATED    # regra promovida foi quebrada
VERIFIER_DISAGREES    # verifier reprova a entrega
CONTEXT_OVERFLOW      # pacote excede o orçamento
IRREVERSIBLE_ACTION   # exige decisão do Owner
PROVIDER_DEGRADED     # eval abaixo do limiar`,
} as const

type FileName = keyof typeof FILES

function highlight(line: string, file: FileName) {
  if (file === 'stop-reasons') {
    const [code, comment] = line.split('#')
    return (
      <>
        <span className="text-primary">{code}</span>
        {comment ? <span className="text-muted-foreground">#{comment}</span> : null}
      </>
    )
  }
  const match = file === 'result.json' ? line.match(/^(\s*)("[^"]+")(:)(.*)$/) : line.match(/^(\s*-?\s*)([\w_]+)(:)(.*)$/)
  if (!match) return <span className="text-foreground/85">{line}</span>
  const [, indent, key, colon, rest] = match
  return (
    <>
      {indent}
      <span className="text-primary">{key}</span>
      <span className="text-muted-foreground">{colon}</span>
      <span className="text-success">{rest}</span>
    </>
  )
}

export function ContractsSection() {
  const [file, setFile] = useState<FileName>('mission.yaml')
  const lines = FILES[file].split('\n')

  return (
    <section aria-labelledby="contratos-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="contratos-title"
            index="07"
            eyebrow="Contratos"
            title="Missões são contratos, não conversas."
            description="Cada missão nasce como um contrato versionado e termina com um resultado verificável. Quando algo sai do esperado, o sistema para com um motivo explícito — nunca com um palpite."
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-3">
              {[
                ['Entrada', 'mission.yaml'],
                ['Saída', 'result.json'],
                ['Parada', 'Stop Reasons'],
              ].map(([k, v]) => (
                <li key={k} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 text-sm font-medium">{v}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div role="tablist" aria-label="Arquivos de contrato" className="flex overflow-x-auto border-b border-border">
              {(Object.keys(FILES) as FileName[]).map((name) => (
                <button
                  key={name}
                  role="tab"
                  aria-selected={file === name}
                  onClick={() => setFile(name)}
                  className={cn(
                    'relative px-5 py-3 font-mono text-xs whitespace-nowrap transition-colors',
                    file === name ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {name}
                  {file === name ? (
                    <motion.span layoutId="contract-tab" className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
                  ) : null}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.pre
                key={file}
                role="tabpanel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="min-h-[380px] overflow-x-auto p-5 font-mono text-[13px] leading-relaxed"
              >
                <code>
                  {lines.map((line, i) => (
                    <span key={i} className="flex">
                      <span aria-hidden="true" className="mr-5 w-5 shrink-0 text-right text-muted-foreground/50 select-none">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">{highlight(line, file)}</span>
                    </span>
                  ))}
                </code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
