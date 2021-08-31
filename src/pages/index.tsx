
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home'


export default function App() {



  return (
    <>
      <Head>
            <title>INterfac - Tecnologia e Informática</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      
      <Home/>
      
      


      <GlobalStyle/>
    </>
  )
}
