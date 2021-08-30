import styled from 'styled-components';



export const Container = styled.div`

        width: 100%;
        padding:3rem;
        display: flex;
        justify-content:center;
       

        .clientesContainer {
            width: 100%;
            max-width: 1120px;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 1rem;

            @media only screen and (max-width: 900px) {
                
                grid-template-columns: repeat(1, 1fr);
                gap: 3rem;
                padding: 2rem;
            }


            .description {
                display: flex;
                flex-direction: column;
                color: var(--primary);

                h1 {
                    font-weight: 600;
                    font-size: 5rem;
                    
                }

                span {
                    text-align: right;
                    font-size: 1.5rem;

                    strong {
                        color: #4abfcf;

                    }
                }
                }

        
        }


        @media only screen and (max-width: 900px) {
                
                height:auto;
            }


       
`