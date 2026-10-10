import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Status = 'done' | 'active' | 'planned'

const ROADMAP: { step: string; title: string; body: string; status: Status }[] = [
  { step: '00', title: 'Cutover', body: 'Arquitetura v1.3 integrada como base oficial.', status: 'done' },
  { step: '01', title: 'Structured State', body: 'Requirements, decisions e lessons versionados no repo.', status: 'done' },
  { step: '02', title: 'Legacy Reconciliation', body: 'Adoção em projetos existentes sem reescrever nada.', status: 'active' },
  { step: '03', title: 'Risk Router', body: 'Classificação LIGHT, STANDARD e CRITICAL por sinais.', status: 'planned' },
  { step: '04', title: 'Context Compiler', body: 'Pacotes mínimos a partir do Engineering Graph.', status: 'planned' },
  { step: '05', title: 'Provider Profiles', body: 'Claude Code e Codex com perfis declarativos.', status: 'planned' },
  { step: '06', title: 'Engineering Skeptic', body: 'Lentes de risco e promoção de lições em testes.', status: 'planned' },
  { step: '07', title: 'Independent Verifier', body: 'Verificação separada do autor por padrão.', status: 'planned' },
  { step: '08', title: 'Evidence Ledger', body: 'Trilha auditável do requisito ao commit.', status: 'planned' },
  { step: '09', title: 'Eval Routing', body: 'Escolha de modelo baseada em evals reais.', status: 'planned' },
  { step: '10', title: 'Métricas', body: 'Hit-rate de contexto, promoções e eficiência paralela.', status: 'planned' },
]

const STATUS_LABEL: Record<Status, string> = {
  done: 'Concluído',
  active: 'Em andamento',
  planned: 'Planejado',
}

export function RoadmapSection() {
  return (
    <section id="roadmap" aria-labelledby="roadmap-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="roadmap-title"
          index="08"
          eyebrow="Roadmap"
          title="Construído em público, etapa por etapa."
          description="Cada etapa só começa quando a anterior tem evidência. O mesmo rigor que o Forjavia aplica aos seus agentes."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((item, i) => (
            <li key={item.step}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <div
                  className={cn(
                    'relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border p-5 transition-colors duration-300',
                    item.status === 'active'
                      ? 'border-primary/50 bg-primary/5'
                      : 'border-border bg-card hover:border-foreground/20',
                  )}
                >
                  {item.status === 'active' ? (
                    <span aria-hidden="true" className="flow-line animate-flow absolute inset-x-0 top-0 h-px" />
                  ) : null}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">etapa {item.step}</span>
                    <span
                      className={cn(
                        'flex items-center gap-1.5 font-mono text-[11px]',
                        item.status === 'done' && 'text-success',
                        item.status === 'active' && 'text-primary',
                        item.status === 'planned' && 'text-muted-foreground',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'size-1.5 rounded-full',
                          item.status === 'done' && 'bg-success',
                          item.status === 'active' && 'animate-pulse bg-primary',
                          item.status === 'planned' && 'bg-muted-foreground/50',
                        )}
                      />
                      {STATUS_LABEL[item.status]}
                    </span>
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
