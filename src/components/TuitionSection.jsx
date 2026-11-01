import { CheckCircle2, Wallet } from 'lucide-react'
import { formatCLP } from '../utils/format'

export default function TuitionSection ({ tuition, financing }) {
  const monthly = Math.round(tuition.annual / 10)

  return (
    <section
      aria-labelledby="arancel"
      className="flex flex-col gap-5 rounded-xl border-2 border-accent bg-card p-5 shadow-md md:p-6"
    >
      <div className="flex flex-col gap-1">
        <h2 id="arancel" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Wallet className="size-5 text-primary" aria-hidden="true" />
          Arancel y Financiamiento
        </h2>
        <p className="text-sm text-muted-foreground">Valores referenciales para el proceso de admisión 2027.</p>
      </div>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col gap-1 rounded-lg bg-primary p-4 text-primary-foreground">
          <dt className="text-sm text-primary-foreground/80">Arancel anual</dt>
          <dd className="text-2xl font-bold">{formatCLP(tuition.annual)}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-muted p-4">
          <dt className="text-sm text-muted-foreground">Matrícula anual</dt>
          <dd className="text-2xl font-bold text-foreground">{formatCLP(tuition.enrollment)}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-muted p-4">
          <dt className="text-sm text-muted-foreground">10 cuotas mensuales de</dt>
          <dd className="text-2xl font-bold text-foreground">{formatCLP(monthly)}</dd>
        </div>
      </dl>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-foreground">Becas, beneficios y gratuidad disponibles</h3>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {financing.map((option) => (
            <li key={option.name} className="flex gap-3 rounded-lg border border-border p-4">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-foreground">{option.name}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
