import styled from 'styled-components';




export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1120px;
    border-top-right-radius: 50rem;
    padding: 2rem;
    margin-bottom: 2rem;

    -webkit-animation: bounceInRight 4s ease-in-out;
        -moz-animation: bounceInRight 4s ease-in-out;
        -o-animation: bounceInRight 4s ease-in-out;
        animation: bounceInRight 4s ease-in-out;

`


export const Content = styled.section`

       
        width: 100%;
        max-width: 1120px;


        .segmentos {
            display: flex;
            flex-direction: column;

            h3 {
                color: var(--primary);
                font-size: 2rem;
                padding-top: 3rem;
                padding-bottom: 3rem;
                text-align:center;
            }

            .containerSegmentos {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;

                .cardap {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;
                    background-image: url('/img/topics/topics/autopecas.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }


                .cardca {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/centroautomotivo.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }


                .cardmt {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/construcao.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }


                .cardda {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/distribuidora.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }

                .cardmp {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }


                .cardcm {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }

                .cardlf {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }

                .cardlr {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;
                  
                    span {
                        font-size: 0.9rem;
                        margin-top: 1.4rem;
                        text-align: left;
                        background: var(--primary);
                        padding: 0.5rem;
                        color: var(--secondary);
                        
                    }
                    img {
                        object-fit: contain;
                       
                    }
                }
            }
        }


        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: default;
            padding: 1rem;

            h1 {
                font-size: 5rem;
                font-weight: 500;
                color: var(--primary);
                background: var(--secondary);
                box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
                border-radius: 10px;
                border: 1px solid var(--primary);
               
                padding: 1rem;
                @media only screen and (max-width: 900px) {
                    font-size: 2rem;
                   
                }
            }
            h4 {
                font-weight: 400;
                max-width:850px;
                background: var(--primary);
                color: var(--secondary);
                border-radius: 10px;
                margin-top: -1.5rem;
                padding: 1rem;
                box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
                @media only screen and (max-width: 900px) {
                    text-align: justify;
                }
            }
        }
        

        .topics{
            width: 100%;
            margin-top: 2rem;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 900px) {
                grid-template-columns: repeat(1, 1fr);
                }
        }
        
    

`


export const Topic = styled.div`
    display: flex;
    background: var(--secondary);
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.13);
    border-left: 4px solid var(--primary);
    border-radius: 5px;
    margin-top: 2rem;

    .description {
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding-right: 1rem;
        padding-bottom: 1rem;
        h3 {
        color: var(--primary);
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
    }

    p {
        text-align:justify;
        line-height: 1.5rem;
        font-size: 0.85rem;
        padding-bottom: 1rem;
    }
    }
    
    img {
        margin-right: 1rem;
        max-width: 60px;
        max-height: 60px;
        
       
    }

    @media only screen and (max-width: 900px) {
        img {
            max-width: 4.2rem;
            max-height: 4.2rem;
        }

        h3 {
            font-size: 0.93rem;
        }
    }

    padding: 0.5rem;
    
`


export const ButtonSaibaMais = styled.button`
   
    outline: none;
    border: none;
    padding: 0.2rem;
    padding-right: 0.6rem;
    padding-left: 0.6rem;
    max-width:10rem;
    color: var(--primary);
    background: var(--secondary);
    border: 1px solid var(--primary);
    font-weight: 600;
    font-size: 0.95rem;
    align-self: flex-end;
    transition: all 0.3s ease-in-out;

    border-radius: 5px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--primary);
        color: var(--secondary);
    }

`