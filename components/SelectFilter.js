import {
  GRID,
  LIST,
  SORTED_ALPHABETICALLY,
  SORTED_BY_DATE
} from '@/services/conts'
import React, { useContext } from 'react'

import DateIcon from '@/icons/date-icon'
import GridIcon from '@/icons/grid'
import HoroscopesContext from '@/store/horoscopes-context'
import ListIcon from '@/icons/list'
import SortAlpha from '@/icons/sort-alpha'

export default function SelectFilter({ layout, setLayout, setSearchString }) {
  const { sortedBy, sortAphabetically, sortByDate } =
    useContext(HoroscopesContext)

  const handleChangeInput = (event) => {
    setSearchString((prev) => event.target.value)
  }

  const handleChangeLayout = (layout) => {
    setLayout(layout)
  }

  const handleChangeOrdering = (sorting) => {
    if (sorting === SORTED_ALPHABETICALLY) {
      sortAphabetically()
    }

    if (sorting === SORTED_BY_DATE) {
      sortByDate()
    }
  }

  return (
    <section className="flex justify-evenly w-full mt-2 mb-8">
      <div role="search" className="w-5/12 mx-8">
        <input
          id="searchBar"
          role="searchBar"
          className="p-4 pl-6 rounded   shadow-md w-full"
          placeholder="Buscar horoscopo"
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex">
        {sortedBy === SORTED_ALPHABETICALLY && (
          <button
            onClick={() => handleChangeOrdering(SORTED_BY_DATE)}
            className="flex align-baseline"
          >
            <SortAlpha className="fill-slate-400 h-8 m-2" />
          </button>
        )}
        {sortedBy === SORTED_BY_DATE && (
          <button
            onClick={() => handleChangeOrdering(SORTED_ALPHABETICALLY)}
            className="flex align-baseline"
          >
            <DateIcon />
          </button>
        )}
        {layout === LIST && (
          <button
            className="flex align-baseline"
            onClick={() => handleChangeLayout(GRID)}
          >
            <ListIcon className="fill-slate-400 h-8 m-2" />
          </button>
        )}
        {layout === GRID && (
          <button
            className="flex align-baseline"
            onClick={() => handleChangeLayout(LIST)}
          >
            <GridIcon className="fill-slate-400 w-8 m-2" />
          </button>
        )}
      </div>
    </section>
  )
}
