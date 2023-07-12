import '@/styles/globals.css'

import { HoroscopeContextProvider } from '@/store/horoscopes-context'

export default function App({ Component, pageProps }) {
  return (
    <HoroscopeContextProvider>
      <Component {...pageProps} />
    </HoroscopeContextProvider>
  )
}
