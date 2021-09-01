import styled from 'styled-components';



export const Container = styled.section`
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    -webkit-animation: bounceInRight 5s ease;
        -moz-animation: bounceInRight 5s ease;
        -o-animation: bounceInRight 5s ease;
        animation: bounceInRight 5s ease;
    
`

export const ContainerContato = styled.section`
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 10rem;
    
`



export const SectionMap = styled.section `

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    

    iframe {
        border: 0;
        width: 100%;
        height: 60vh;
    }
`