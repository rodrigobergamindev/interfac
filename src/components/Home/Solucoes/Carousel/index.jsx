import {carouselItems} from './assets/carouselItems'
import {CarouselContainer, CardProduct} from './styles'


import Link from 'next/link'


export function CarouselProducts() {

    
    return(
          <CarouselContainer>

      {carouselItems.map((item, index) =>{
                return (

                          <a href={item.url} key={index}>
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
                          </a>
                 
                )
      })}

    
       
        </CarouselContainer>
    
    )
    
}