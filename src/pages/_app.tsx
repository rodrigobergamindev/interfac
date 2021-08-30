import '../styles/globals.scss'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'
import { GlobalStyle } from '../global'


const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
  <>
    <Navbar/>
    <GlobalStyle/>
    <Component {...pageProps} />
    <Footer/>
  </>
  
  )
  
}

export default App