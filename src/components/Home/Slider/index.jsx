
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderContainerDesktop,SliderContainerMobile, Container, Slide} from './styles'

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
          speed={2000}
          >
     

    <SwiperSlide>
      <Slide>
        <div className="description">
          <span>Conheça a aplicação mais robusta e ágil para o seu negócio</span>
          <h1>Sistema INterfac</h1>

          <h2>Conheça agora mesmo a aplicação ideal para alavancar o seu negócio</h2>

          
        </div>
        
      </Slide>
      </SwiperSlide>
      
    <SwiperSlide>
      <Slide>
      <div className="description">
          <h2>SLIDE</h2>
        </div>
      </Slide>
    </SwiperSlide>

    <SwiperSlide>
      <Slide>
      <div className="description">
          <h2>SLIDE</h2>
        </div>
      </Slide>
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