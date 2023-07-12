import React, { useContext } from 'react'

import GridIcon from '@/icons/grid'
import HoroscopesContext from '@/store/horoscopes-context'
import ListIcon from '@/icons/list'

export default function SelectFilter({ setIsGrid, setSearchString }) {
  const { sortAphabetically, sortByDate } = useContext(HoroscopesContext)

  const handleChangeInput = (event) => {
    setSearchString((prev) => event.target.value)
  }

  const handleChangeLayout = (layout) => {
    setIsGrid(layout === 'grid')
  }

  const handleChangeOrdering = (event) => {
    if (event.target.value === 'alpha') {
      sortAphabetically()
    }

    if (event.target.value === 'date') {
      sortByDate()
    }
  }

  return (
    <section className="flex justify-between w-full">
      <div className="w-full">
        <label htmlFor="select-ordering">Ver como</label>
        <select
          id="select-ordering"
          onChange={handleChangeOrdering}
          className="bg-white p-4 rounded mt-2 mb-8 shadow-md w-4/12"
        >
          <option value="alpha">alphabetic</option>
          <option value="date">date</option>
        </select>
      </div>
      <input
        id="searchBar"
        role="searchBar"
        className="p-4 pl-6 rounded mt-2 mb-8 shadow-md w-5/12"
        placeholder="Search for a horoscope"
        onChange={handleChangeInput}
      />
      <div className="flex align-baseline">
        <button onClick={() => handleChangeLayout('list')}>
          <ListIcon className="fill-slate-400 h-8 m-2" />
        </button>
        <button onClick={() => handleChangeLayout('grid')}>
          <GridIcon className="fill-slate-400 w-8 m-2" />
        </button>
      </div>
    </section>
  )
}
