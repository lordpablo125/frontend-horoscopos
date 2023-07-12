import { createContext, useEffect, useState } from 'react'

import { requestAllHoroscopes } from '@/services/horoscopeRequest'

const HoroscopesContext = createContext()

export function HoroscopeContextProvider({ children }) {
  const [horoscopes, setHoroscopes] = useState([])
  const [horoscopeOfDay, setHoroscopeOfDay] = useState({})
  function findHoroscope(idHoroscope) {
    const foundHoroscope = horoscopes.find(
      (horoscope) => horoscope.id === idHoroscope
    )
    return foundHoroscope[0]
  }

  function sortAphabetically(horos = null) {
    if (!horos) {
      horos = horoscopes
    }

    const orderedHoroscopes = horos.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    setHoroscopes(orderedHoroscopes)
  }

  function sortByDate() {
    console.log('🚀 ~ sortByDate:')
    const orderedHoroscopes = horoscopes.sort((a, b) => {
      const endMonthA = a.end_date.split('-')[1]
      const endMonthB = b.end_date.split('-')[1]
      if (endMonthA < endMonthB) {
        return -1
      }
      if (endMonthA > endMonthB) {
        return 1
      }
      return 0
    })
    console.log('🚀 ~ orderedHoroscopes:', orderedHoroscopes)
    setHoroscopes(orderedHoroscopes)
  }

  function transformToCompleteDate(propDate) {
    const splitdData = propDate.split('-')
    const transformedDate = `${new Date().getFullYear()}/${splitdData[1]}/${
      splitdData[0]
    }`

    return transformedDate
  }

  function isDateBetween(dateA, dateB) {
    const currentDate = new Date()
    let formatedDataA = transformToCompleteDate(dateA)
    let formatedDatab = transformToCompleteDate(dateB)

    formatedDataA = new Date(formatedDataA)
    formatedDatab = new Date(formatedDatab)

    const isDateBetween =
      currentDate >= formatedDataA && currentDate <= formatedDatab

    return isDateBetween
  }

  function findHoroscopeOfDay(horos) {
    const foundHoros = horos.find(({ init_date, end_date }) =>
      isDateBetween(init_date, end_date)
    )
    setHoroscopeOfDay(foundHoros)
  }

  async function getAllHoroscopes() {
    const horos = await requestAllHoroscopes()
    sortAphabetically(horos)
    setHoroscopes(horos)
  }

  const context = {
    horoscopes: horoscopes ?? [],
    findHoroscope,
    getAllHoroscopes,
    sortAphabetically,
    horoscopeOfDay,
    sortByDate
  }

  useEffect(() => {
    getAllHoroscopes()
  }, [])

  useEffect(() => {
    findHoroscopeOfDay(horoscopes)
  }, [horoscopes])
  return (
    <HoroscopesContext.Provider value={context}>
      {children}
    </HoroscopesContext.Provider>
  )
}

export default HoroscopesContext
