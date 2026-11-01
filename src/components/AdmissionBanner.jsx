import { useState } from 'react'
import { CalendarDays, CheckCircle2, ChevronDown, ChevronUp, Megaphone } from 'lucide-react'
import { specialAdmission } from '../data/careers'

export default function AdmissionBanner () {
  const [showRequirements, setShowRequirements] = useState(false)

  return (
    <section aria-labelledby="admision-especial" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
              <Megaphone className="size-4" aria-hidden="true" />
              Postulaciones abiertas
            </span>
            <h2 id="admision-especial" className="text-2xl font-bold leading-tight text-balance md:text-3xl">
              {specialAdmission.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 text-pretty">
              {specialAdmission.description}
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowRequirements((prev) => !prev)}
                aria-expanded={showRequirements}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {showRequirements ? 'Ocultar requisitos de postulación' : 'Ver requisitos de Admisión Especial'}
                {showRequirements
                  ? <ChevronUp className="size-4" aria-hidden="true" />
                  : <ChevronDown className="size-4" aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:min-w-80">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/75">
              Calendario Admisión Especial
            </h3>
            <ul className="flex flex-col gap-2">
              {specialAdmission.dates.map((date) => (
                <li
                  key={date.label}
                  className="flex items-center justify-between gap-3 rounded-lg bg-primary-foreground/10 px-4 py-3"
                >
                  <span className="flex items-center gap-2 text-sm text-primary-foreground/85">
                    <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                    {date.label}
                  </span>
                  <span className="text-right text-base font-semibold">{date.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {showRequirements && (
          <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 md:p-5">
            <h3 className="mb-3 text-base font-bold text-primary-foreground">
              Requisitos generales de postulación — Admisión Especial
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
              {specialAdmission.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-2.5 rounded-lg bg-primary-foreground/10 p-3 text-sm leading-relaxed text-primary-foreground/95"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
