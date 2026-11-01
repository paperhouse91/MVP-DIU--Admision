import { useState } from 'react'
import { GraduationCap, Mail, Phone, X } from 'lucide-react'

export default function SiteHeader ({ onHome }) {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <button
          type="button"
          onClick={onHome}
          className="flex cursor-pointer items-center gap-2 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">USM</span>
            <span className="text-xs text-muted-foreground">Portal de Admisión</span>
          </span>
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setContactOpen((prev) => !prev)}
            aria-expanded={contactOpen}
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-border px-3.5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            Contacto Admisión
          </button>

          {contactOpen && (
            <div
              role="dialog"
              aria-label="Información de contacto Admisión USM"
              className="absolute right-0 mt-2 w-72 rounded-xl border border-border bg-card p-4 shadow-lg"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">Mesa de Ayuda Postulantes</p>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  aria-label="Cerrar contacto"
                  className="cursor-pointer rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a href="tel:+56322654000" className="font-medium text-foreground underline">
                    +56 32 265 4000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a href="mailto:admision@usm.cl" className="font-medium text-foreground underline">
                    admision@usm.cl
                  </a>
                </li>
                <li className="pt-1 text-xs text-muted-foreground">
                  Atención lunes a viernes de 09:00 a 18:00 hrs.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
