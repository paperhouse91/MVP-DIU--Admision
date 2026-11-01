import { Layers } from 'lucide-react'

export default function CurriculumSection ({ curriculum }) {
  return (
    <section aria-labelledby="malla" className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 md:p-6">
      <h2 id="malla" className="flex items-center gap-2 text-xl font-bold text-foreground">
        <Layers className="size-5 text-primary" aria-hidden="true" />
        Malla Curricular
      </h2>
      <ol className="flex flex-col gap-3">
        {curriculum.map((year, index) => (
          <li key={year.label}>
            <details className="group rounded-lg border border-border bg-muted/50 open:bg-card" open={index === 0}>
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <span>{year.label}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {year.courses.length} asignaturas
                  <span aria-hidden="true" className="ml-2 inline-block transition-transform group-open:rotate-90">
                    {'›'}
                  </span>
                </span>
              </summary>
              <ul className="flex flex-col gap-2 px-4 pb-4">
                {year.courses.map((course) => (
                  <li key={course} className="flex items-start gap-2 text-base text-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {course}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ol>
    </section>
  )
}
