import styled from 'styled-components'


export const CarouselContainer = styled.div`

    display: flex;
    width: 100%;
    max-width: 620px;
    justify-content: center;
    align-items: center;
    


    @media only screen and (max-width: 900px) {
            height: auto;
            padding: 1rem;
            width: 300px;
            justify-self: center;
            grid-area:item2;
        }
   
    `

export const CardProduct = styled.div`
    cursor: pointer;
    width: 90%;
    display:flex;
  
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;



  
    border: 1px solid var(--secondary);
    display: flex;
    border-radius: 5px;

    .title {
            text-align: left;
            padding: 1rem;
            color: var(--secondary);
            
            h3{
                font-size: 1.3rem;
            }

        }
        
        

    img {
        align-self: center;
        width: 90px;
        height: 90px;
    }


    button {
        outline: none;
        border: none;
        padding: 0.2rem;
        padding-right: 0.6rem;
        padding-left: 0.6rem;
        margin-top: 0.5rem;
        color: var(--primary);
        border: 1px solid var(--secondary);
        font-weight: 600;
        font-size: 0.95rem;

        border-radius: 5px;
        width: 145px;

        display: flex;
        justify-content:space-around;
        transition: all 0.3s ease-in-out;
        img {
            max-width: 20px;
            max-height: 20px;
            
        }

        &:hover {
            filter: brightness(0.9);
        }
    }
    
`