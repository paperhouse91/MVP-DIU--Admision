import { ArrowLeft, Award, BookOpen, Clock, GraduationCap, MapPin } from 'lucide-react'
import CurriculumSection from '../components/CurriculumSection'
import TuitionSection from '../components/TuitionSection'

export default function CareerDetailView ({ career, onBack }) {
  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 md:py-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-12 w-fit cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-4 text-base font-semibold text-foreground shadow-sm hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
        Volver a carreras
      </button>

      <header className="flex flex-col gap-4 rounded-xl bg-primary p-5 text-primary-foreground md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-fit rounded-md bg-primary-foreground/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide">
            {career.area}
          </span>
          {career.regime && (
            <span className="w-fit rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
              {career.regime}
            </span>
          )}
        </div>
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

      {/* Descripción y Perfil */}
      <section aria-labelledby="descripcion" className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 md:p-6">
        <h2 id="descripcion" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <BookOpen className="size-5 text-primary" aria-hidden="true" />
          Descripción de la Carrera
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">{career.description}</p>
      </section>

      {/* Puntaje de Corte y Ponderaciones PAES (Hipótesis 1 del Informe) */}
      <section aria-labelledby="admision-paes" className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 md:p-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <h2 id="admision-paes" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Award className="size-5 text-primary" aria-hidden="true" />
              Puntaje de Corte y Ponderaciones PAES
            </h2>
            <p className="text-sm text-muted-foreground">
              Requisitos de postulación vía Admisión Centralizada (DEMRE).
            </p>
          </div>
          {career.requiresM2 && (
            <span className="w-fit rounded-lg border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Exige rendición PAES M2
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1 rounded-lg bg-primary p-4 text-primary-foreground">
            <span className="text-sm text-primary-foreground/80">Puntaje de corte (último seleccionado)</span>
            <span className="text-2xl font-bold">{career.cutoffScore} puntos</span>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-muted p-4">
            <span className="text-sm text-muted-foreground">Puntaje mínimo de postulación</span>
            <span className="text-2xl font-bold text-foreground">{career.minPaesScore} puntos</span>
          </div>
        </div>

        {career.paesWeights && (
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Ponderaciones PAES
            </h3>
            <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
              {career.paesWeights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col justify-between rounded-lg border border-border bg-muted/40 p-3"
                >
                  <dt className="text-xs font-medium text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>

      {/* Arancel y Financiamiento unificado en la ficha (Tarea 3) */}
      <TuitionSection tuition={career.tuition} financing={career.financing} />

      {/* Malla Curricular por semestres con descarga PDF */}
      <CurriculumSection career={career} />
    </article>
  )
}
