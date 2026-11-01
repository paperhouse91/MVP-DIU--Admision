import { Search, X } from 'lucide-react'

const QUICK_TERMS = [
  { label: 'Todas', value: '' },
  { label: 'Química / Procesos', value: 'Química' },
  { label: 'Informática / Computación', value: 'Computación' },
  { label: 'Negocios / Comercial', value: 'Negocios' },
  { label: 'Valparaíso', value: 'Valparaíso' },
  { label: 'Santiago', value: 'Santiago' }
]

export default function CareerSearch ({ value, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      <div role="search" className="relative">
        <label htmlFor="buscar-carrera" className="sr-only">
          Buscar carrera por nombre, sinónimo, área o sede
        </label>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="buscar-carrera"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Busca por carrera, tema o sede (ej. Química, Computación, Negocios, Valparaíso)..."
          autoComplete="off"
          className="h-14 w-full rounded-xl border border-border bg-card pl-12 pr-12 text-base text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 [&::-webkit-search-cancel-button]:hidden"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2" aria-label="Filtros rápidos">
        <span className="text-xs font-medium text-muted-foreground">Búsqueda rápida:</span>
        {QUICK_TERMS.map((item) => {
          const isSelected = value.toLowerCase() === item.value.toLowerCase()
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onChange(item.value)}
              aria-pressed={isSelected}
              className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                isSelected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
