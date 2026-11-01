import { GraduationCap } from 'lucide-react'

export default function SiteHeader ({ onHome }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-2 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">USM</span>
            <span className="text-xs text-muted-foreground">Portal de Admisión</span>
          </span>
        </button>
        <a
          href="tel:+56322654000"
          className="inline-flex min-h-10 items-center rounded-lg border border-border px-3 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Contacto
        </a>
      </div>
    </header>
  )
}
