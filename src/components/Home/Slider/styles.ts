import styled from 'styled-components'


export const SliderContainerDesktop = styled.div`
    width: 100%;
    max-width:1920px;

    img {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }


    `


export const SliderContainerMobile = styled.div`
    width: 100%;
    display: none;
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


@media only screen and (max-width: 900px) {
        margin-top: 0
           
        }




`

export const Slide = styled.div`
    height: 100vh;
    background: url('/img/slider/slide02.png');
 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content:center;

    .description {
        width: 100%;
        max-width: 1120px;
        border-radius: 10px;
        padding-left: 1rem;

        -webkit-animation: bounceInRight 4s ease-in-out;
        -moz-animation: bounceInRight 4s ease-in-out;
        -o-animation: bounceInRight 4s ease-in-out;
        animation: bounceInRight 4s ease-in-out;
        
       
        .text {
            max-width:1000px;
            display: flex;
            flex-direction: column;
            
            padding: 1rem;
            cursor: default;

            h3 {
                background: var(--secondary);
                margin-top: 0.7rem;
                max-width: 200px;
                font-size: 1.2rem;
                font-weight: 600;
                color: black;
                padding: 0.5rem;
                border-radius: 5px;
                text-align:center;
            }

            ul {
                padding: 2rem;
                color: var(--secondary);

                li {
                    font-size: 1.2rem;
                }
            }

            h2 {
                margin-bottom: 2rem;
                color: var(--secondary);
                font-weight: 400;
            }

            h1 {
            font-size: 7rem;
            color: var(--secondary);
            font-weight: 600;
        }

        span {
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--secondary);

            strong {
                color: #fbc531;
            }
        }
        }
        
    }

`

export const SlideTwo = styled.div`



    height: 100vh;
    background: url('/img/slider/slide04.png');
 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content:center;

    .description {

 

        width: 100%;
        max-width: 1120px;
        border-radius: 10px;
        padding-left: 1rem;
        
       
        .text {
            max-width:700px;
            display: flex;
            flex-direction: column;
            
            padding: 1rem;
            cursor: default;

            ul {
                padding: 2rem;
                color: var(--secondary);

                li {
                    font-size: 1.2rem;
                }
            }

            h3 {
                background: var(--secondary);
                margin-top: 0.7rem;
                max-width: 320px;
                font-size: 1.2rem;
                font-weight: 600;
                color: black;
                padding: 0.5rem;
                border-radius: 5px;
                text-align:center;
            }

            h2 {
                margin-bottom: 2rem;
                color: var(--secondary);
                font-weight: 400;
            }

            h1 {
            font-size: 7rem;
            color: var(--secondary);
            font-weight: 600;
        }

        span {
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--secondary);

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

`