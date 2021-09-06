import styled from 'styled-components'


export const CarouselContainer = styled.div`

    @media only screen and (max-width: 900px) {
            height: auto;
            padding: 1rem;
            width: 300px;
            justify-self: center;
        }
   
    `

export const CardProduct = styled.div`
    cursor: pointer;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    img {
        width: 170px;
    }

    
`