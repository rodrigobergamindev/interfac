import styled from 'styled-components';



export const Container = styled.footer`

        width:100%;
        border-top: 1px solid #ccc;
        display: flex;
        flex-direction: column;

        align-items:center;


        .footer {
            color: var(--grey-100);
            font-weight: 600;
            margin-bottom: 0.5rem;

            @media only screen and (max-width: 900px) {
               font-size: 0.7rem;
               padding: 0.5rem;
            }
        }

`





export const StyledFooter = styled.div`


        cursor: default;
        width: 100%;
        max-width: 1120px;
        display: flex;

        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 4rem;
        padding-bottom: 3rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 900px) {
                flex-direction: column;
                border-bottom: 1px solid #ccc;
                margin-top: 1rem;
                padding-bottom: 0;
                margin-bottom: 0.5rem;
            }

        .mapa{

            @media only screen and (max-width: 900px) {
                margin-bottom: 2rem;
            }

            h4 {
                font-weight: 700;
                font-size: 1.5rem;
                color: var(--primary);
            }
            nav {
                display: flex;
                flex-direction: column;

                a {
                    
                    color: var(--grey-100);
                    font-size: 1.1rem;
                    transition: all 0.3s ease-in-out;
                    margin-top: 0.5rem;

                    &:hover {
                    color: var(--primary);
                }
                }

            }
        }

        .description {
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 900px) {
                margin-bottom: 3rem;
            }
            
            span {
                font-size: 1.1rem;
                color: var(--primary);
            }
            

            img {
                cursor: pointer;
                margin-bottom: 2rem;
                max-width: 350px;

               
            }
        }

        .contatos{
            @media only screen and (max-width: 900px) {
                    margin-bottom: 2rem;
                
       
            }

            h4 {
                font-weight: 700;
                font-size: 1.5rem;
                color: var(--primary);
            }
            nav {
                display: flex;
                flex-direction: column;

                div {
                    font-size: 1.1rem;
                    color: var(--grey-100);
                    cursor: pointer;
                    display: flex;
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 0.3rem;
                        max-width:20px;
                    }
                }
            }
        }



        
    

    
`