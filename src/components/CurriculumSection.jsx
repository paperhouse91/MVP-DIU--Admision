import { useState } from 'react'
import { Check, Download, Layers } from 'lucide-react'
import { downloadCurriculumPdf } from '../utils/pdf'

export default function CurriculumSection ({ career }) {
  const [downloaded, setDownloaded] = useState(false)

  const curriculum = career.curriculum || []
  const totalCourses = curriculum.reduce((acc, sem) => acc + sem.courses.length, 0)

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

      {/* Grilla completa y limpia de semestres */}
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {curriculum.map((sem) => (
          <li
            key={sem.semester}
            className="flex flex-col gap-3 rounded-xl border border-border bg-muted/35 p-4 shadow-2xs"
          >
            <div className="border-b border-border/80 pb-2.5">
              <span className="text-base font-bold text-foreground">{sem.semester}</span>
            </div>

            <ul className="flex flex-col gap-1.5">
              {sem.courses.map((course) => (
                <li
                  key={course}
                  className="flex items-start gap-2 rounded-md border border-border/60 bg-card px-2.5 py-1.5 text-sm font-medium text-foreground shadow-2xs"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="leading-snug">{course.trim()}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
