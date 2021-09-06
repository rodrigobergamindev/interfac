import styled from 'styled-components';


export const Container = styled.div`

        width: 100%;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content:center;
        .title {
            padding: 1rem;
            max-width: 1120px;
            width: 100%;
            h2 {
                font-size: 2.1rem;
                width: 100%;
                padding: 1rem;
                background: var(--primary);
                color: var(--secondary);
                border-radius: 4px;

                @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                    
        }
            }
        }
        

        -webkit-animation: scaleZ 4s ease-in-out;
        -moz-animation: scaleZ 4s ease-in-out;
        -o-animation: scaleZ 4s ease-in-out;
        animation: scaleZ 4s ease-in-out;
`

export const ContainerAsks = styled.div`
    width: 100%;
    max-width:1120px;
    margin-bottom: 2rem;

    @media only screen and (max-width: 900px) {
        padding: 1rem;
        }
`