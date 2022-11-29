import '../styles/globals.css'
import {FavouriteContextProvider} from '../context/Favourites'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <FavouriteContextProvider>
        <Component {...pageProps} />
      </FavouriteContextProvider>
    </SafeHydrate>
  ) 
}
