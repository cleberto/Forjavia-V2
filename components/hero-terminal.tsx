'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Line = { stage: string; detail: string; tone?: 'ok' | 'warn' | 'accent' }

const LINES: Line[] = [
  { stage: 'Structured State', detail: 'carregado · 42 requirements · 0 drift' },
  { stage: 'Risk Router', detail: 'CRITICAL · economy_impact, data_integrity', tone: 'warn' },
  { stage: 'Context Compiler', detail: '14.2 KB · graph neighborhood + 3 lessons' },
  { stage: 'Cético', detail: 'DOMAIN_RISK → MARKET_ACCESS_REQUIRES_SAFE_ZONE', tone: 'accent' },
  { stage: 'Spec Kit', detail: 'specify → plan → tasks · 3 waves' },
  { stage: 'Executor', detail: 'claude/sonnet · effort=medium · isolated tree' },
  { stage: 'Sensors', detail: '4/4 testes PASS', tone: 'ok' },
  { stage: 'Verifier', detail: 'instância independente · PASS', tone: 'ok' },
  { stage: 'Evidence', detail: 'persistida · commit a1f9c2e', tone: 'ok' },
]

const STEP_MS = 650

export function HeroTerminal() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const done = visible > LINES.length
    const timer = setTimeout(
      () => setVisible((v) => (v > LINES.length ? 0 : v + 1)),
      done ? 3200 : visible === 0 ? 900 : STEP_MS,
    )
    return () => clearTimeout(timer)
  }, [visible])

  const finished = visible > LINES.length

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/50 via-border to-border opacity-70" />
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <p className="font-mono text-xs text-muted-foreground">forjavia · governed mission</p>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-success">
            <span className="size-1.5 animate-pulse rounded-full bg-success" />
            live
          </span>
        </div>

        <div className="min-h-[360px] p-5 font-mono text-[13px] leading-relaxed" role="log" aria-live="off" aria-label="Exemplo de execução governada">
          <p className="text-foreground">
            <span className="text-primary">{'❯'}</span> forjavia{' '}
            <span className="text-success">{'"Adicionar Market com safe zone"'}</span>
          </p>

          <ul className="mt-4 flex flex-col gap-1.5">
            <AnimatePresence initial={false}>
              {LINES.slice(0, Math.min(visible, LINES.length)).map((line) => (
                <motion.li
                  key={line.stage}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-[1rem_8.5rem_1fr] gap-2"
                >
                  <span className="text-muted-foreground">{'›'}</span>
                  <span className="truncate text-muted-foreground">{line.stage}</span>
                  <span
                    className={cn(
                      'truncate',
                      line.tone === 'ok' && 'text-success',
                      line.tone === 'warn' && 'text-primary',
                      line.tone === 'accent' && 'text-foreground',
                      !line.tone && 'text-foreground/80',
                    )}
                  >
                    {line.detail}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          <AnimatePresence>
            {finished ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center justify-between rounded-lg border border-success/30 bg-success/10 px-3 py-2.5"
              >
                <span className="text-success">{'✓ CONTINUE'}</span>
                <span className="text-xs text-muted-foreground">Owner não foi acionado</span>
              </motion.div>
            ) : (
              <p className="mt-4 text-muted-foreground">
                <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" aria-hidden="true" />
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
