
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
          autoplay={{delay: 4000,  disableOnInteraction: false}}
          speed={5000}
          >
     

    <SwiperSlide>
      <Slide>


      <div className="description">
          <div className="text">
          <span>Conheça a aplicação mais robusta e <strong>ágil</strong> para o seu negócio</span>
          <h1>Sistema INterfac</h1>

          <h2>Atuamos nos seguintes segmentos:</h2>

          <ul>
            <li>AUTO PEÇAS</li>
            <li>CENTRO AUTOMOTIVO</li>
            <li>CONSTRUÇÃO</li>
          </ul>

          <Link href="/sistema">
          <ButtonSaibaMais>Saiba Mais <img src="/img/icons/right.png" alt=""/> </ButtonSaibaMais>
          </Link>
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

          <ul>
            <li>SERVIDOR LINUX (DEBIAN)</li>
            <li>SERVIDOR DE BACKUP BACULA</li>
          </ul>

          <Link href="/solucoes">

        
          <ButtonSaibaMais>Saiba Mais <img src="/img/icons/right.png" alt=""/> </ButtonSaibaMais>

          </Link>
          </div>
          
        </div>
      </SlideTwo>
    </SwiperSlide>
    
    
    </Swiper>
    </SliderContainerDesktop>


    <SliderContainerMobile>
        <Swiper
          style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', zIndex:0}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          autoplay={{delay: 4000,  disableOnInteraction: false}}
          speed={2000}
          >
     

    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/mobileslider01.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><img src="/img/slider/mobileslider02.png"/></SwiperSlide>
    <SwiperSlide style={{height: '100%'}}><a href="https://t.me/joinchat/KeCpRayleIc5MGMx" target="_blank"><img src="/img/slider/mobileslider03.png"/></a></SwiperSlide>
    
    </Swiper>
    </SliderContainerMobile>




    </Container>
    )
}