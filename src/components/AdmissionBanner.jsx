import { CalendarDays, ArrowRight, Megaphone } from 'lucide-react'
import { specialAdmission } from '../data/careers'

export default function AdmissionBanner () {
  return (
    <section aria-labelledby="admision-especial" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8">
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
        </div>

        <div className="flex flex-col gap-4 md:min-w-80">
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
          <a
            href="#carreras"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Postular ahora
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
