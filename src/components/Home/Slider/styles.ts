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
margin-top: 6.5rem;

width: 100%;
max-width:1920px;


@media only screen and (max-width: 900px) {
        margin-top: 0
           
        }




`

export const Slide = styled.div`
    height: 100vh;
    background: url('/img/slider/slide.jpg');
 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content:center;

    .description {
        width: 100%;
        max-width: 1120px;
        border: 1px solid red;

        h1 {
            font-size: 5rem;
        }
    }

`