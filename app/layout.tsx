import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forjavia.clebertow.workers.dev'),
  title: 'Forjavia — Control Plane para agentes de IA governados por especificação',
  description:
    'Forjavia orquestra agentes de IA com Spec-Driven Development, roteamento por risco, contexto compilado e evidência verificável. Open source, independente de provider.',
  keywords: [
    'agentes de IA',
    'orquestração de agentes',
    'Spec-Driven Development',
    'SDD',
    'Claude Code',
    'Codex',
    'governança de IA',
    'Spec Kit',
  ],
  openGraph: {
    title: 'Forjavia — Forjando software confiável com agentes de IA',
    description:
      'Um único Control Plane para orquestrar agentes com especificação, risco, contexto e evidência.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Forjavia — Control Plane para agentes de IA' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#07080a',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${plexSans.variable} ${jetbrains.variable} bg-background`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
