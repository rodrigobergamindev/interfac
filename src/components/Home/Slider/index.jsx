

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderContainer} from './styles'

export function Slider() {

    return (
        <SliderContainer>
        <Swiper
      style={{'--swiper-navigation-color': '#ff3838','--swiper-pagination-color': '#ff3838', height:473}}
      spaceBetween={0}
      navigation={true}
      slidesPerView={1}
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 4000,  disableOnInteraction: false}}
      speed={2000}
      
    >
     

    <SwiperSlide><img src="/img/slider/canal.png" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/img/slider/implante.png" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/img/slider/protese.png" alt="" /></SwiperSlide>
    
    </Swiper>
    </SliderContainer>
    )
}