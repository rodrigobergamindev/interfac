
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderContainerDesktop,SliderContainerMobile, Container, Slide, SlideTwo, ButtonSaibaMais} from './styles'

import Link from 'next/link'

export function Slider() {

  

    return (
        <Container>

        
        <SliderContainerDesktop>
        <Swiper
          style={{'--swiper-navigation-color': 'white','--swiper-pagination-color': 'white', zIndex:0}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          autoplay={{delay: 10000,  disableOnInteraction: false}}
          speed={2200}
          >
     

    <SwiperSlide>
      <Slide>


      <div className="description">
          <div className="text">
          <span>Conheça a aplicação mais robusta e <strong>ágil</strong> para o seu negócio</span>
          <h1>SISTEMA INterfac</h1>

          <h2>Atuamos nos seguintes segmentos:</h2>

          <nav>
          <Link href="/autopecas"><span> ▸ AUTO PEÇAS</span></Link>
          <Link href="/centroautomotivo"><span> ▸ CENTRO AUTOMOTIVO</span></Link>
          <Link href="/material_de_construcao"><span> ▸ MATERIAL DE CONSTRUÇÃO</span></Link>
          <Link href="/distribuidora_de_autopecas"><span> ▸ DISTRIBUIDORA DE AUTO PEÇAS</span></Link>
          <Link href="/loja_de_racao"><span> ▸ LOJA DE RAÇÃO</span></Link>
          <Link href="/loja_de_ferragens"><span> ▸ LOJA DE FERRAGENS</span></Link>
          <Link href="/comercio_de_aviamentos"><span> ▸ COMÉRCIO DE AVIAMENTOS</span></Link>
          <Link href="/motopecas"><span> ▸ MOTOPEÇAS</span></Link>
          </nav>
          </div>
          
        </div>

        
      </Slide>
      </SwiperSlide>
      
    <SwiperSlide>
      <SlideTwo>
      <div className="description">
          <div className="text">
          <span>Contamos com uma gama de <strong>produtos</strong> para atender as necessidades da sua empresa</span>
          <h1>SOLUÇÕES</h1>

          <h2>Conheça nossos serviços:</h2>

          <nav>
            <Link href="/servidores"><span> ▸ SERVIDORES LINUX</span></Link>
            <Link href="/backup"><span> ▸ BACULA (BACKUP)</span></Link>
            <Link href="/virtualizacao"><span> ▸ VIRTUALIZAÇÃO</span></Link>
            <Link href="/manutencao_em_rede"><span> ▸ MANUTENÇÃO EM REDE</span></Link>
          </nav>
          </div>
          
        </div>
      </SlideTwo>
    </SwiperSlide>
    
    
    </Swiper>
    </SliderContainerDesktop>


    




    </Container>
    )
}