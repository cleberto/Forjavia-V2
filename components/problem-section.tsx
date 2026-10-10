import { FileWarning, GitBranch, ShieldAlert, Unplug } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PROBLEMS = [
  {
    icon: Unplug,
    title: 'Contexto que se perde',
    body: 'Cada sessão do agente começa do zero. Decisões, lições e regras de domínio somem entre prompts.',
  },
  {
    icon: ShieldAlert,
    title: 'Autor verificando a si mesmo',
    body: 'O mesmo agente que escreve o código declara que funcionou. Sem verificador independente, "PASS" é opinião.',
  },
  {
    icon: FileWarning,
    title: 'Mudanças críticas tratadas como triviais',
    body: 'Uma alteração em economia, auth ou dados recebe o mesmo fluxo que ajustar um botão.',
  },
  {
    icon: GitBranch,
    title: 'Sem rastreabilidade',
    body: 'Do requisito ao commit não há trilha: ninguém sabe por que o código existe nem qual evidência o sustenta.',
  },
]

export function ProblemSection() {
  return (
    <section aria-labelledby="problema-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="problema-title"
          index="01"
          eyebrow="O problema"
          title={
            <>
              Agentes de IA são rápidos.{' '}
              <span className="text-muted-foreground">Sem governança, são rápidos em errar.</span>
            </>
          }
          description="Claude Code, Codex e afins geram código impressionante. O que falta é a camada que decide quanto rigor cada mudança merece, o que o agente precisa saber e como provar que funcionou."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <li key={p.title} className="bg-background">
              <Reveal delay={i * 0.08} className="group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:bg-card">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors duration-300 group-hover:border-destructive/40 group-hover:text-destructive">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
