import axios from 'axios'

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI
const NEXT_PUBLIC_HOROSCOPES_URI = process.env.NEXT_PUBLIC_HOROSCOPES_URI
const CONFIG = {
  headers: { Authorization: 'qazwsx' }
}

export async function requestAllHoroscopes() {
  const response = await axios.get(NEXT_PUBLIC_HOROSCOPES_URI, CONFIG)
  const data = await response.data
  for (const horos of data) {
    horos.urlImage = BASE_URI + horos.image
  }
  return data
}
