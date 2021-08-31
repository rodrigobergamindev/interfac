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
    <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20pedido!" target="_blank"><img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/></a>
    <Footer/>
  </>
  
  )
  
}

export default App