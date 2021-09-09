import styled from 'styled-components'


export const SliderContainerDesktop = styled.div`
    width: 100%;
    max-width:1120px;

    img {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        display: flex;
        height: 50vh;
        margin-top: 4rem;
        img {
            height: 50vh;
            object-fit: cover;
           
        }
    }


    `


export const Container = styled.div`
        margin-top: 6rem;

        width: 100%;
        max-width:1920px;
        display: flex;
        justify-content:center;
@media only screen and (max-width: 900px) {
        margin-top: 0;

        }




`

export const Slide = styled.div`
    height: 60vh;
    background: url('/img/slider/slide02.png');
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content:center;
    padding: 3rem;
    @media only screen and (max-width: 900px) {
            height: 100%;
            width: 100%;
            }

    .description {
        width: 100%;
        max-width: 1120px;
        border-radius: 10px;
        padding-left: 1rem;
        padding-top: 2rem;
        -webkit-animation: bounceInRight 4s ease-in-out;
        -moz-animation: bounceInRight 4s ease-in-out;
        -o-animation: bounceInRight 4s ease-in-out;
        animation: bounceInRight 4s ease-in-out;

        @media only screen and (max-width: 900px) {
                padding: 1rem;
            }
        
       
        .text {
            max-width:1000px;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            cursor: default;
            justify-content: center;
            nav {
                color: var(--secondary);
                list-style: none;
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease-in-out;

                span {
                    display: flex;
                    align-items: center;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        transform: scale(1.05);
                    }
                    img {
                        max-width:20px;
                    }
                }
                @media only screen and (max-width: 900px) {
                    padding: 1rem;
                    }
                a {
                    font-size: 1.2rem;
                    font-weight: 600;
                    line-height: 2rem;
                    border-bottom: 1px solid transparent;
                    @media only screen and (max-width: 900px) {
                        font-size: 0.8rem;
                    }

                    &:hover {
                        border-bottom: 1px solid var(--secondary);
                    }
                }
            }

            h2 {
                margin-bottom: 2rem;
                color: var(--secondary);
                font-weight: 400;

                @media only screen and (max-width: 900px) {
                    
                    margin-bottom: 0rem;
                    font-size: 1.1rem;
                    }
            }

            h1 {
            font-size: 5rem;
            color: var(--secondary);
            font-weight: 600;

            @media only screen and (max-width: 900px) {
                    font-size: 2.1rem;
                    }
        }

        span {
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--secondary);
            
            @media only screen and (max-width: 900px) {
                    font-size: 0.7rem;
                    max-width: 250px;
                    display: none;
                    }

            strong {
                color: #fbc531;
            }
        }
        }
        
    }

`

export const SlideTwo = styled.div`

  
    height: 60vh;
    background: url('/img/slider/slide04.png');
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content:center;
    padding: 3rem;

    @media only screen and (max-width: 900px) {
            height: 100%;
            width: 100%;
            }

    .description {
        width: 100%;
        max-width: 1120px;
        border-radius: 10px;
        padding-left: 1rem;

        -webkit-animation: bounceInRight 4s ease-in-out;
        -moz-animation: bounceInRight 4s ease-in-out;
        -o-animation: bounceInRight 4s ease-in-out;
        animation: bounceInRight 4s ease-in-out;

        @media only screen and (max-width: 900px) {
                padding: 1rem;
            }
        
       
            .text {
            max-width:1000px;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            cursor: default;
            justify-content: center;
          
            nav {
                
                color: var(--secondary);
                list-style: none;
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease-in-out;

                span {
                    display: flex;
                    align-items: center;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        transform: scale(1.05);
                    }
                    img {
                        max-width:20px;
                    }
                }
                @media only screen and (max-width: 900px) {
                    padding: 1rem;
                    }
                a {
                    font-size: 1.2rem;
                    font-weight: 600;
                    line-height: 2rem;
                    border-bottom: 1px solid transparent;
                    @media only screen and (max-width: 900px) {
                        font-size: 0.8rem;
                    }

                    &:hover {
                        border-bottom: 1px solid var(--secondary);
                    }
                }
            }

            h2 {
                margin-bottom: 2rem;
                color: var(--secondary);
                font-weight: 400;

                @media only screen and (max-width: 900px) {
                    
                    margin-bottom: 0rem;
                    font-size: 1.1rem;
                    }
            }

            h1 {
            font-size: 5rem;
            color: var(--secondary);
            font-weight: 600;

            @media only screen and (max-width: 900px) {
                    font-size: 2.1rem;
                    }
        }

        span {
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--secondary);
            
            @media only screen and (max-width: 900px) {
                    font-size: 0.7rem;
                    max-width: 250px;
                    display: none;
                    }

            strong {
                color: #fbc531;
            }
        }
        }
        
    }

`



export const ButtonSaibaMais = styled.button`
     margin-top: 2rem;
    outline: none;
    border: none;
    padding: 0.5rem;
    

    color: var(--primary);
    font-weight: 600;
    font-size: 1.2rem;
    max-width: 200px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);

    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        max-width: 30px;
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        filter: brightness(0.9);

    }


    @media only screen and (max-width: 900px) {
            font-size: 0.8rem;
            margin-top: 0;
            max-width: 10rem;
            justify-content: space-evenly;
            max-width: 8rem;
            img {
               max-width: 1rem;
               max-height: 1rem;
            }
            }

`