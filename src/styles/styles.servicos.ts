import styled from 'styled-components';


export const Contato = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: center;
    margin-bottom: 5rem;
    

    .containerContato {
        
        box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
        background-image: url("/img/solucoes/contato.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width:100%;
        max-width: 1120px;
        background-color: var(--primary);
        border-radius: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 1rem;
        padding: 2rem;


        .title {
            display: flex;
            flex-direction: column;
            padding: 1rem;

            
            

            h2 {
                font-weight: 600;
                color:var(--secondary);
                font-size: 3rem;
            }

            h4 {
                font-weight: 400;
                color: var(--secondary);
                margin-bottom: 1rem;
            }


            nav {
                max-width: 150px;
                display: flex;
                justify-content:space-evenly;
                align-items: flex-end;
                
                a {
                    img {
                        transform: scale(1.0);
                        transition: all 0.2s ease-in-out;
                        &:hover {
                            transform: scale(1.2);
                        }
                        width:25px;
                    }
                }
            }
        }
    }
   



`


export const Description = styled.section`


    width: 100%;
    max-width:1120px;
    margin-top: 3rem;
    margin-bottom: 4rem;

    header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

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
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 3rem;

            p {
                text-align:justify;
                line-height: 1.9rem;
                padding: 2rem;
            }
            img {
                width: 100%;

                
                
            }

    }

`


export const Header = styled.header`

       
       margin-top: 6.7rem;
       width: 100%;
       height: calc(60vh - 5rem);

       background-image: url("/img/headersistema.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: cover;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h1 {
               color: var(--secondary);
               font-size: 5rem;
               text-align: center;
               margin-bottom: 1.5rem;
               letter-spacing: 2px;
           }
           h3 {
               color: var(--secondary);
               font-weight: 400;
               border: 1px solid var(--secondary);
               padding: 1rem;
               text-align: center;
               box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
               cursor: pointer;
               transition: all 0.3s ease-in-out;

               &:hover{
                
                   transform: scale(1.04);
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