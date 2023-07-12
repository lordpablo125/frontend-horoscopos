export const useFilter = (searchString) => {
  function filterHoroscopes(arrayHoroscopes) {
    const newArrayHoroscopes = arrayHoroscopes.filter((horos) => {
      return (
        searchString === '' ||
        horos.name.toUpperCase().includes(searchString.toUpperCase())
      )
    })

    return newArrayHoroscopes
  }

  return { filterHoroscopes }
}
