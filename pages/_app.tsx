import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
