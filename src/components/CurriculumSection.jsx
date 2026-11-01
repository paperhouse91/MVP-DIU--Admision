import { useState } from 'react'
import { Check, Download, Layers } from 'lucide-react'
import { downloadCurriculumPdf } from '../utils/pdf'

const CYCLE_META = {
  'plan-comun': {
    label: 'Plan Común',
    badgeClass: 'bg-primary/10 text-primary border-primary/20',
    headerClass: 'border-l-4 border-l-primary'
  },
  especialidad: {
    label: 'Especialidad',
    badgeClass: 'bg-amber-500/15 text-amber-900 border-amber-500/30',
    headerClass: 'border-l-4 border-l-accent'
  },
  titulacion: {
    label: 'Titulación',
    badgeClass: 'bg-emerald-600/12 text-emerald-900 border-emerald-600/25',
    headerClass: 'border-l-4 border-l-emerald-600'
  }
}

const FILTERS = [
  { id: 'all', label: 'Todos los semestres' },
  { id: 'plan-comun', label: 'Plan Común (I–IV)' },
  { id: 'especialidad', label: 'Especialidad (V–VIII)' },
  { id: 'titulacion', label: 'Titulación (IX+)' }
]

export default function CurriculumSection ({ career }) {
  const [activeCycle, setActiveCycle] = useState('all')
  const [downloaded, setDownloaded] = useState(false)

  const curriculum = career.curriculum || []
  const totalCourses = curriculum.reduce((acc, sem) => acc + sem.courses.length, 0)

  const visibleSemesters = activeCycle === 'all'
    ? curriculum
    : curriculum.filter((sem) => sem.cycle === activeCycle)

  const handleDownloadPdf = () => {
    downloadCurriculumPdf(career)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2500)
  }

  return (
    <section aria-labelledby="malla" className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <h2 id="malla" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Layers className="size-5 text-primary" aria-hidden="true" />
            Malla Curricular
          </h2>
          <p className="text-sm text-muted-foreground">
            {curriculum.length} semestres académicos · {totalCourses} asignaturas en total
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownloadPdf}
          className="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {downloaded
            ? (
              <>
                <Check className="size-4" aria-hidden="true" />
                PDF descargado
              </>
              )
            : (
              <>
                <Download className="size-4" aria-hidden="true" />
                Descargar malla en PDF
              </>
              )}
        </button>
      </div>

      {/* Filtro rápido por ciclo formativo (Lean UX: escaneo rápido sin ocultar contenido) */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar semestres por etapa formativa">
        {FILTERS.map((filter) => {
          const isActive = activeCycle === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveCycle(filter.id)}
              aria-pressed={isActive}
              className={`min-h-10 cursor-pointer rounded-lg border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                isActive
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-muted/60 text-foreground hover:bg-muted'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Grilla de semestres siempre visible */}
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleSemesters.map((sem) => {
          const meta = CYCLE_META[sem.cycle] || CYCLE_META['plan-comun']
          return (
            <li
              key={sem.semester}
              className={`flex flex-col gap-3 rounded-xl border border-border bg-muted/35 p-4 shadow-2xs ${meta.headerClass}`}
            >
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-2.5">
                <span className="text-base font-bold text-foreground">{sem.semester}</span>
                <span className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${meta.badgeClass}`}>
                  {meta.label}
                </span>
              </div>

              <ul className="flex flex-col gap-1.5">
                {sem.courses.map((course) => (
                  <li
                    key={course}
                    className="flex items-start gap-2 rounded-md bg-card px-2.5 py-1.5 text-sm font-medium text-foreground shadow-2xs border border-border/60"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="leading-snug">{course.trim()}</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
