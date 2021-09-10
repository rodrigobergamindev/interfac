import styled from 'styled-components';



export const Container = styled.div`

        width: 100%;
        padding:7rem;
        display: flex;
        justify-content:center;

        background-image: url("/img/background.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        @media only screen and (max-width: 900px) {
            padding: 1rem;
            padding-top: 3rem;
            padding-bottom: 5.5rem;
            }

        .servicesContainer {
            width: 100%;
            max-width: 1120px;

            

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 3rem;

            @media only screen and (max-width: 900px) {
                
                grid-template-columns: repeat(1, 1fr);
                gap: 2rem;
                padding: 0rem;
            }


            .description {
                display: flex;
                flex-direction: column;
                padding: 2rem;
               
                border-left: 5px solid var(--secondary);
                color: var(--secondary);


                h2 {
                    font-weight: 400;
                    font-size: 2.5rem;
                    strong {
                        font-weight: 600;
                    }
                    margin-bottom: 1rem;
                }
                }

                @media only screen and (max-width: 900px) {
                    padding: 0;

        
        }


        @media only screen and (max-width: 900px) {
                
                height:auto;
            }


        }   
`