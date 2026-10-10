import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const FAQ = [
  {
    q: 'O Forjavia substitui o Claude Code ou o Codex?',
    a: 'Não. Eles continuam sendo os executores. O Forjavia é o Control Plane que decide rigor, contexto e verificação — e pode trocar de provider sem mudar o fluxo.',
  },
  {
    q: 'Funciona em um projeto que já existe?',
    a: 'Sim. A etapa de Legacy Reconciliation mapeia o código existente com o Understand Anything e reconstrói o Structured State sem exigir reescrita.',
  },
  {
    q: 'Onde ficam os dados e as decisões?',
    a: 'No seu repositório. Requirements, decisões, lições e evidências são arquivos versionados. Não há cloud obrigatória nem lock-in.',
  },
  {
    q: 'O que é Spec-Driven Development aqui?',
    a: 'A especificação vem antes do código e é a referência da verificação. O Spec Kit gera spec, plano e tarefas; o TLC organiza a execução em waves paralelas.',
  },
  {
    q: 'Quando o Owner é acionado?',
    a: 'Só quando um Stop Reason determinístico exige: ambiguidade de requisito, ação irreversível ou divergência do Verifier. Fora isso, a missão segue sozinha.',
  },
  {
    q: 'É pago?',
    a: 'O Forjavia é open source e gratuito. Você pode apoiar o projeto contribuindo com código ou com doações.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <SectionHeading id="faq-title" index="09" eyebrow="FAQ" title="Perguntas frequentes" />
        <Reveal>
          <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
            {FAQ.map((item) => (
              <details key={item.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-4 text-left font-medium">
                  {item.q}
                  <Plus
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-primary"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
