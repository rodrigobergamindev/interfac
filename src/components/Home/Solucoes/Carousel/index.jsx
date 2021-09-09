import {carouselItems} from './assets/carouselItems'
import {CarouselContainer, CardProduct} from './styles'
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


import Link from 'next/link'


export function CarouselProducts() {

    
    return(
      <CarouselContainer>
            <Swiper
      style={{'--swiper-navigation-color': '#051e3c','--swiper-pagination-color': '#051e3c', zIndex: 0}}
      spaceBetween={40}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 2000,  disableOnInteraction: false}}
      speed={1200}
    >
      
      {carouselItems.map((item, index) =>{
                return (

                          <a href={item.url} key={index}>
                          <SwiperSlide key={index}>
                          <CardProduct>
                          
                              <img src={item.iconWhite} alt="" />
                            <div className="title">

                            <h3>
                              {item.title.toUpperCase()}
                            </h3>
                            <Link href={item.url}>
                            <button>Saiba Mais <img src="img/icons/right.png"/></button>
                            </Link>
                            </div>
                        
                      
                            
                          </CardProduct>
                          </SwiperSlide>
                          </a>
                 
                )
      })}

      
       </Swiper>
       </CarouselContainer>
    
    )
    
}