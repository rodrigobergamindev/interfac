import styled from 'styled-components';




export const Description = styled.section`

    
    width: 100%;
    max-width:1120px;
    margin-top: 3rem;
    margin-bottom: 4rem;

    @media only screen and (max-width: 900px) {
                 margin-top: 2rem;
                 margin-bottom: 0;
                }
    

    header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        @media only screen and (max-width: 900px) {
                 display: none;
                }

        h1 {
            font-weight: 400;
            margin-left: 2rem;
            font-size: 3rem;

        }

        div {
        width: 90px;
        height: 2px;
        background: var(--primary);
    }

    }

    article {
            display: flex;
            flex-direction: column;

            p{
                text-align: justify;
                padding: 0.25rem;

                @media only screen and (max-width: 900px) {
                   padding: 1.5rem;
           }
            }

            h2 {
                text-align:justify;
                padding: 0.75rem;
                font-size: 1.8rem;
                background-color: var(--primary);
                color: var(--secondary);
                border-radius: 5px;

                @media only screen and (max-width: 900px) {
                    border-radius: 0;
                }
            }
            
            ul {
                padding: 3rem;

                li {
                    padding: 0.25rem;
                }
            }

    }

`


export const Header = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);

       background-image: url("/img/server.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: cover;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                  padding: 2rem;
                }

       div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           @media only screen and (max-width: 900px) {
                  padding: 0;
                }

           h1 {
               color: var(--secondary);
               font-size: 5rem;
               text-align: center;
               margin-bottom: 1.5rem;
               letter-spacing: 2px;
               border: 1px solid var(--secondary);
               cursor: default;

               @media only screen and (max-width: 900px) {
                   font-size: 3.5rem;
                   padding: 1rem;
                   margin-bottom: 0;
                }

           }

           .servidores {
            @media only screen and (max-width: 900px) {
                
                   font-size: 2.8rem;
                }
           }
       }
   



`



export const Container = styled.section`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    
       
`


export const ButtonContato = styled.button`
  
    padding: 0.5rem;
    width: 350px;
    display: flex;
    color: var(--primary);
    font-weight: 600;
    font-size: 1.5rem;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    border: none;
    outline: 0;
    transition: all 0.3s ease-in-out;

    img {
        
        width: 30px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`