import { ChevronRight, Clock, MapPin } from 'lucide-react'

export default function CareerCard ({ career, onSelect }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="w-fit rounded-md bg-muted px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {career.area}
          </span>
          {career.regime && (
            <span className="w-fit rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {career.regime}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold leading-snug text-foreground text-balance">{career.name}</h3>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">{career.summary}</p>
      </div>

      <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
        <li className="flex items-start gap-2">
          <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{career.duration}</span>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="break-words">{career.campus}</span>
        </li>
      </ul>

      <button
        type="button"
        onClick={() => onSelect(career.id)}
        className="mt-auto inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Ver ficha
        <span className="sr-only">de {career.name}</span>
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
    </article>
  )
}
