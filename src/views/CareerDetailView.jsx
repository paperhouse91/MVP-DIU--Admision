import { ArrowLeft, BookOpen, Clock, GraduationCap, MapPin } from 'lucide-react'
import CurriculumSection from '../components/CurriculumSection'
import TuitionSection from '../components/TuitionSection'

export default function CareerDetailView ({ career, onBack }) {
  return (
    <article className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6 md:py-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-12 w-fit items-center gap-2 rounded-lg border border-border bg-card px-4 text-base font-semibold text-foreground shadow-sm hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
        Volver a carreras
      </button>

      <header className="flex flex-col gap-4 rounded-xl bg-primary p-5 text-primary-foreground md:p-8">
        <span className="w-fit rounded-md bg-primary-foreground/15 px-2 py-1 text-xs font-semibold uppercase tracking-wide">
          {career.area}
        </span>
        <h1 className="text-3xl font-bold leading-tight text-balance md:text-4xl">{career.name}</h1>
        <ul className="flex flex-col gap-2 text-base text-primary-foreground/90 md:flex-row md:flex-wrap md:gap-x-6">
          <li className="flex items-start gap-2">
            <GraduationCap className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            {career.degree}
          </li>
          <li className="flex items-start gap-2">
            <Clock className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            {career.duration}
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span className="break-words">{career.campus}</span>
          </li>
        </ul>
      </header>

      <section aria-labelledby="descripcion" className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 md:p-6">
        <h2 id="descripcion" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <BookOpen className="size-5 text-primary" aria-hidden="true" />
          Descripción
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">{career.description}</p>
      </section>

      <CurriculumSection curriculum={career.curriculum} />

      <TuitionSection tuition={career.tuition} financing={career.financing} />
    </article>
  )
}
