import styled from 'styled-components';



export const Container = styled.div`

        width: 100%;
        padding:3rem;
        display: flex;
        justify-content:center;
        align-items: center;
        
        @media only screen and (max-width: 900px) {
               padding: 0.76rem;
            }
       

        .clientesContainer {
            width: 100%;
            max-width: 1120px;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            justify-items: center;
            align-items: center;


            @media only screen and (max-width: 900px) {
                grid-template-rows: repeat(1, 1fr);
                gap: 0;
                justify-items: center;
                align-items: center;
               
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
                    text-align: center;
                    font-size: 1.8rem;

                    strong {
                        color: #4abfcf;

                    }
                }


                @media only screen and (max-width: 900px) {
                    
                    margin-top: 3rem;
                    text-align: center;
                    align-items: center;
                    justify-content: center;    
                    h1 {
                        font-size: 2.5rem;
                    }

                    span {
                        text-align: center;
                        font-size: 1.1rem;
                    }

                    
               
                }
                }


        
        }


        @media only screen and (max-width: 900px) {
                
                height:auto;
            }


       
`