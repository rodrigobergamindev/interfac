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
                color: var(--secondary);
                font-size: 2.8rem;
                text-align:center;
                padding: 1rem;
                background: var(--primary);
                margin-top: 3rem;
                margin-bottom: 3rem;
                border-radius: 4px;

                @media only screen and (max-width: 900px) {
                    font-size: 1.5rem;
                }
            }

            .containerSegmentos {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;

                @media only screen and (max-width: 900px) {
                    grid-template-columns: repeat(1, 1fr);
                }

                .cardap {

                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

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

                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }


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

                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

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

                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

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


                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/motopecas.jpg');
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


                .cardcm {


                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/aviamentos.jpg');
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

                .cardlf {


                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/ferragens.jpg');
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

                .cardlr {

                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        transform: scale(1.05);
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content:flex-end;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 250px;

                    background-image: url('/img/topics/topics/racao.png');
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
                font-size: 5.5rem;
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
                
                background: var(--primary);
                color: var(--secondary);
                border-radius: 10px;
                margin-top: -1.5rem;
                padding: 1rem;
                font-size: 1.3rem;
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


export const HeaderModal = styled.div`
    
    padding: 1rem;
    display: flex;
    justify-content: space-between;
 
   
    h2{
        color: #333;
        font-weight: 400;
        border-bottom: 1px solid var(--primary);
        padding: 0.75rem;
        @media only screen and (max-width: 900px) {
          
        }
        
        strong {
            font-weight: 600;
            color: var(--primary);
        }
        margin-right: 3rem;
        font-size: 2.5rem;
        
    }
    img {
        cursor:pointer;
        align-self: flex-start;
        top:5px;
        right: 5px;
        position:absolute;
        padding: 0.4rem;
        background-color: var(--primary);
        max-width: 40px;
        max-height: 40px;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`

export const BodyModal = styled.div`
    padding-left: 2rem;
    nav {
        list-style: none;
        display: flex;
        flex-direction: column;
        a{
            font-size: 1.3rem;
            line-height: 2.9rem;
            transition: 0.2s ease-in-out;
            cursor: pointer;
            font-weight: 500;
            &:hover {
                opacity: 0.5;
            }
        }
    }
`

export const ContainerModal = styled.div`
    
    display: flex;
    flex-direction: column;
`