import { useMemo, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import HomeView from './views/HomeView'
import CareerDetailView from './views/CareerDetailView'
import { careers } from './data/careers'
import { normalize } from './utils/format'

export default function App () {
  const [selectedId, setSelectedId] = useState(null)
  const [query, setQuery] = useState('')

  const filteredCareers = useMemo(() => {
    const rawTerm = normalize(query.trim())
    if (!rawTerm) return careers

    const tokens = rawTerm.split(/\s+/).filter(Boolean)

    return careers.filter((career) => {
      const searchableText = normalize(
        [
          career.name,
          career.area,
          career.regime || '',
          career.campus,
          career.degree,
          career.summary,
          ...(career.synonyms || [])
        ].join(' ')
      )
      return tokens.every((token) => searchableText.includes(token))
    })
  }, [query])

  const selectedCareer = careers.find((career) => career.id === selectedId)

  const openCareer = (id) => {
    setSelectedId(id)
    window.scrollTo({ top: 0 })
  }

  const goHome = () => {
    setSelectedId(null)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <SiteHeader onHome={goHome} />
      <main>
        {selectedCareer
          ? <CareerDetailView career={selectedCareer} onBack={goHome} />
          : (
            <HomeView
              careers={filteredCareers}
              query={query}
              onQueryChange={setQuery}
              onSelect={openCareer}
            />
            )}
      </main>
    </>
  )
}
