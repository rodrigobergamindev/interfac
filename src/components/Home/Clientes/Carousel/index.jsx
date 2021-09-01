import {carouselItems} from './assets/carouselItems'
import {CarouselContainer, CardProduct} from './styles'

import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export function CarouselProducts() {

    
    return(
          <CarouselContainer>

    <Swiper
      style={{'--swiper-navigation-color': '#051e3c','--swiper-pagination-color': '#051e3c', zIndex: 0}}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true }}
      autoplay={{delay: 2000,  disableOnInteraction: false}}
      speed={1200}
      className="carousel-clients"
    >
      {carouselItems.map((item, index) =>{
                return (

                        <SwiperSlide key={index}>
                          <a href={item.url} target="_blank">
                          <CardProduct>
                          
                              <img src={item.icon} alt="" />
                      
                            
                          </CardProduct>
                          </a>
                          </SwiperSlide>
                 
                )
      })}
    </Swiper>
    
       
        </CarouselContainer>
    
    )
    
}