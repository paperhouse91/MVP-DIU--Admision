import { SearchX } from 'lucide-react'
import AdmissionBanner from '../components/AdmissionBanner'
import CareerSearch from '../components/CareerSearch'
import CareerCard from '../components/CareerCard'

export default function HomeView ({ careers, query, onQueryChange, onSelect }) {
  return (
    <>
      <AdmissionBanner />
      <section id="carreras" aria-labelledby="titulo-carreras" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 id="titulo-carreras" className="text-2xl font-bold text-foreground md:text-3xl">
            Explora nuestras carreras de Pregrado Diurno
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Toda la información unificada en cada carrera: puntaje de corte, arancel, becas y malla curricular por semestres.
          </p>
        </div>

        <CareerSearch value={query} onChange={onQueryChange} />

        <p className="text-sm text-muted-foreground" aria-live="polite">
          {careers.length === 1 ? '1 carrera encontrada' : `${careers.length} carreras encontradas`}
        </p>

        {careers.length > 0
          ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {careers.map((career) => (
                <li key={career.id} className="min-w-0">
                  <CareerCard career={career} onSelect={onSelect} />
                </li>
              ))}
            </ul>
            )
          : (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
              <SearchX className="size-10 text-muted-foreground" aria-hidden="true" />
              <p className="text-lg font-semibold text-foreground">No encontramos carreras para “{query}”</p>
              <p className="text-base text-muted-foreground">
                Prueba buscando por sinónimos como “Computación”, “Procesos”, “Negocios” o “Santiago”.
              </p>
              <button
                type="button"
                onClick={() => onQueryChange('')}
                className="mt-2 inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Mostrar todas las carreras
              </button>
            </div>
            )}
      </section>
    </>
  )
}
