import { ForjaviaMark, GithubIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <ForjaviaMark className="size-7" />
            <span className="font-mono text-sm font-semibold">forjavia</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Control Plane open source para orquestração de agentes de IA com Spec-Driven Development.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-5 font-mono text-xs text-muted-foreground md:px-8">
          {`© ${new Date().getFullYear()} Forjavia · author != verifier`}
        </p>
      </div>
    </footer>
  )
}
