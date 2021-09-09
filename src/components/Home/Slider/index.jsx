
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
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/autopecas"> AUTO PEÇAS</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/centroautomotivo">CENTRO AUTOMOTIVO</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/materialdeconstrucao">MATERIAL DE CONSTRUÇÃO</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/distribuidora_de_autopecas">DISTRIBUIDORA DE AUTO PEÇAS</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/motopecas">MOTO PEÇAS</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/comercio_de_aviamentos">COMERCIO DE AVIAMENTOS</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/loja_de_ferragens">LOJA DE FERRAGENS</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/loja_de_racao">LOJA DE RAÇÃO</Link></span>
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
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/servidores"> SERVIDORES LINUX</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/virtualizacao">VIRTUALIZAÇÃO DE SERVIDORES</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/backup">SERVIDOR BACKUP BACULA</Link></span>
            <span><img src="/img/slider/arrow.png" alt="" srcset="" /><Link href="/manutencao_em_rede">MANUTENÇÃO EM REDE</Link></span>
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