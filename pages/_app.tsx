import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Copyright from '../components/Sections/Footer'
import Header from '../components/Sections/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Copyright />
    </>
  )
}

export default MyApp
