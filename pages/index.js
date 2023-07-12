import { useContext, useEffect, useState } from 'react'

import Card from '@/components/Card'
import HoroscopesContext from '@/store/horoscopes-context'
import { Inter } from 'next/font/google'
import SelectFilter from '@/components/SelectFilter'
import { useFilter } from '@/hooks/useFilter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { horoscopes, horoscopeOfDay } = useContext(HoroscopesContext)
  const [isGrid, setIsGrid] = useState(true) // comment why
  const [searchString, setSearchString] = useState('')
  const { filterHoroscopes } = useFilter(searchString)
  const filteredHoroscopes = filterHoroscopes(horoscopes)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-60 ${inter.className}`}
    >
      <header className="flex justify-between w-full flex-col align-middle">
        <section className="flex justify-center mb-6">
          <h1 className="text-6xl font-bold">Horoscopo</h1>
        </section>
        <SelectFilter setIsGrid={setIsGrid} setSearchString={setSearchString} />
      </header>
      {horoscopes.length > 0 && (
        <Card
          horoscopes={filteredHoroscopes}
          isGrid={isGrid}
          horoscopeOfDay={horoscopeOfDay}
        />
      )}
    </main>
  )
}
