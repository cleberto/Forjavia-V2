import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left', id }: SectionHeadingProps) {
  return (
    <Reveal className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center')}>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
