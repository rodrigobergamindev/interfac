import styled from 'styled-components';


export const ContainerTabs = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    width:100%;
    max-width: 1120px;
    margin-bottom: 7rem;
    margin-top: 2rem;
    

    @media only screen and (max-width: 900px) {
           grid-template-columns: (1,1fr);
           gap: 1.5rem;
             }
`


export const Tab = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: 900px) {
           margin-top: 2rem;
             }
    
    
    

    .containerTab {
        cursor: default;
        

        width:100%;
        max-width: 1120px;
        border: 1px solid var(--grey-100);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        padding: 1rem;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content:center;
       

            li {
                font-size: 1.1rem;
                display: flex;
                align-items: center;
                
                strong {
                    color: red;
                    padding-right: 0.5rem;
                }

                .green {
                    color: #25D366;
                }

                @media only screen and (max-width: 900px) {
                   font-size: 0.8rem;
                   margin-top: 1rem;
             }

             &:first-child {
                 margin-top: 0;
             }
               
                img {
                    padding: 0.5rem;
                    width: 35px;
                }
            }
        }


        .title {

            .zero {
                color: red;
            }
           
            text-align:center;
            h2 {
                
                font-weight: 600;
                font-size: 4rem;
               

                @media only screen and (max-width: 900px) {
                   font-size: 3rem;
                   
             }
            }

            .limite {
                font-size: 4rem;
                color: #25D366;
                @media only screen and (max-width: 900px) {
                   font-size: 2rem;

                   
                   
             }

           
            }

        }

    }
   


`





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
        padding: 1rem;

        @media only screen and (max-width: 900px) {
               margin-bottom: 1rem;
             }
            
        h1 {
            font-size: 2.1rem;
            color: var(--secondary);
            padding: 1rem;
            background: var(--primary);
            border-radius: 5px;
            font-weight: 600;
            width: 100%;

            @media only screen and (max-width: 900px) {
                font-size: 1.6rem;
                margin-left: 1rem;
             }
        }

        div {
        width: 90px;
        height: 2px;
        background: var(--primary);

        @media only screen and (max-width: 900px) {
                width: 50px;
                margin-left: 1rem;
             }
    }

    }

        p {
            text-align:justify;
            line-height: 1.9rem;
            padding-right: 2rem;
            padding-left: 2rem;
            padding-bottom: 1rem;
            }
            img {
                width: 100%;

                
                
            }

    
    section {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 1.8rem;
            color: var(--secondary);
            padding: 0.65rem;
            background: var(--primary);
            border-radius: 5px;
            font-weight: 500;
        }
    }

`


export const Header = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
        max-width: 1120px;
       background: url("/img/topics/centroautomotivo.png");
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
                margin-top: 3rem;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderAutoPecas = styled.header`

       
        margin-top: 6rem;
       width: 100%;
       max-width: 1120px;
       height: calc(60vh - 5rem);

       background: url("/img/topics/autopecas.jpg");
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
                    margin-top: 3rem;
                }

                div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderConstrucao = styled.header`

    margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);

       background: url("/img/topics/construcao.jpg");
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
                margin-top: 3rem;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   




`

export const HeaderDistribuidora = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/topics/distribuidoraheader.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: contain;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                padding: 2rem;
                margin-top: 3rem;
                background-size: cover;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderRacao = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/topics/racaoheader.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: contain;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                padding: 2rem;
                margin-top: 3rem;
                background-size: cover;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderFerragens = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/topics/ferragensheader.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: contain;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                padding: 2rem;
                margin-top: 3rem;
                background-size: cover;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderAviamentos = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/topics/aviamentosheader.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: contain;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                padding: 2rem;
                margin-top: 3rem;
                background-size: cover;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
             }
       }
   



`

export const HeaderMotopecas = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/topics/motopecasheader.png");
       background-attachment: fixed;
       background-position: center;
       background-repeat: no-repeat;
       background-size: contain;

       padding: 5rem;
       display: flex;
       align-items: center;
       justify-content: center;

       @media only screen and (max-width: 900px) {
                padding: 2rem;
                margin-top: 3rem;
                background-size: cover;
             }

             div {
           padding: 2rem;
           width: 100%;
           max-width: 1120px;

           h4 {
               color: var(--primary);
               background-color: var(--secondary);
               max-width: 95px;
               border-radius: 5px;
               padding: 0.2rem;
               font-weight: 600;
           }

           h1 {
               color: var(--secondary);
               font-size: 3rem;
               cursor: default;
               transition: all 0.3s ease-in-out;
               font-weight: 500;
               
               @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                   
             }
           
           }

           h3 {
                font-weight: 300;
                 color: var(--secondary);
                 
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


export const Card = styled.div`

    display: flex;
    border: 1px solid var(--grey-100);
    border-radius: 2px;
    padding: 2rem;
    margin-top: 3rem;

    .icon {
        border-radius: 100%;
        border: 1px solid var(--grey-100);
        margin-right: 2rem;
        padding: 0.5rem;
        max-width: 90px;
    }

    .description{
        
        h3 {
            color: var(--primary);
            font-size: 1.7rem;
            margin-bottom: 0.5rem;
        }

        h4{
            display: flex;
            align-items: center;
            
            img{
                margin-left: 0.4rem;
                max-width: 25px;
            }
        }



    }


    transition: 0.3s ease-in-out;
            &:hover{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transform: scale(1.05)
    }
`


export const ButtonSaibaMais = styled.button`
    
    outline: none;
    border: none;
    padding: 0.5rem;
    

    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
    width: 150px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    background: var(--secondary);

    display: flex;
    align-items: center;
    justify-content: space-around;

`