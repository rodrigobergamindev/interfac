import '../styles/globals.scss'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'
import { GlobalStyle } from '../global'
import Link from 'next/link'
import { NavbarMobile } from '../components/NavbarMobile'


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
    <NavbarMobile/>
    <GlobalStyle/>
    <Component {...pageProps} />
    <Link href="https://api.whatsapp.com/send?phone=5511976789680&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20para%20minha%20empresa."><img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/></Link>
    <Footer/>
  </>
  
  )
  
}

export default App