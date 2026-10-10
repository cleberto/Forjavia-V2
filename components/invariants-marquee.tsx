const INVARIANTS = [
  'author != verifier',
  'repo é a fonte da verdade',
  'markdown é view, não estado',
  'evidência antes de CONTINUE',
  'stop reasons determinísticos',
  'contexto mínimo suficiente',
  'provider é substituível',
  'lições viram testes',
  'sem cloud obrigatória',
]

export function InvariantsMarquee() {
  const items = [...INVARIANTS, ...INVARIANTS]
  return (
    <section aria-label="Invariantes do Forjavia" className="relative overflow-hidden border-y border-border bg-card py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />
      <ul className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= INVARIANTS.length}
            className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted-foreground"
          >
            <span>{item}</span>
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-primary" />
          </li>
        ))}
      </ul>
    </section>
  )
}
