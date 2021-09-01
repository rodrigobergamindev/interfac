import styled from 'styled-components';



export const Grade = styled.section`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 2rem;
    border-left: 2px solid var(--primary);
    padding: 2rem;

    -webkit-animation: translateX 3s ease-in-out;
        -moz-animation: translateX 3s ease-in-out;
        -o-animation: translateX 3s ease-in-out;
        animation: translateX 3s ease-in-out;

`

export const SectionDesc = styled.section`

    -webkit-animation: translateX 3s ease-in-out;
        -moz-animation: translateX 3s ease-in-out;
        -o-animation: translateX 3s ease-in-out;
        animation: translateX 3s ease-in-out;

    text-align:right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
        font-size: 4rem;
        color: var(--primary);
    }
    
    h3 {
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    p {
        margin-top: 1rem;
        margin-bottom: 2.5rem;
    }
    

`


export const Description = styled.section`

   

    width: 100%;
    max-width:1120px;
    margin-top: 3rem;
    margin-bottom: 4rem;
    

    display: grid;
    grid-template-columns: repeat(2, 1fr);
 
    align-items: center;
    gap: 3rem;

   

`


export const ButtonContato = styled.button`

    margin-top: 1rem;
    padding: 0.5rem;
    width: 350px;
    display: flex;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.2rem;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    border: none;
    outline: 0;
    transition: all 0.3s ease-in-out;
    background-color: #25D366;

    img {
        
        width: 30px;
    }

    &:hover {
        filter: brightness(0.9);
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
               background: var(--primary);
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


export const CardProduct = styled.div`
    cursor: pointer;
    display:flex;
  
    width: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;



  
    border: 1px solid var(--primary);
    display: flex;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
    }

    .title {
            text-align: left;
            padding: 1rem;
            color: var(--primary);
            
            h3{
                font-size: 1.1rem;
                text-align: center;
            }

        }
        
        

    img {
        align-self: center;
        width: 80px;
        height: 80px;
    }


    button {
        outline: none;
        border: none;
        padding: 0.2rem;
        padding-right: 0.6rem;
        padding-left: 0.6rem;
        margin-top: 0.5rem;
        color: var(--secondary);
        border: 1px solid var(--secondary);
        background: var(--primary);
        font-weight: 600;
        font-size: 0.95rem;

        border-radius: 5px;
        width: 145px;

        display: flex;
        justify-content:space-around;
        transition: all 0.3s ease-in-out;
        img {
            max-width: 20px;
            max-height: 20px;
            
        }

        &:hover {
            filter: brightness(0.9);
        }
    }
    
`

export const Sistema = styled.section`

    width: 100%;
    
    background: var(--primary);

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;


    .containerSistema {
        
        width: 100%;
        max-width: 1120px;
       
       padding-top: 4rem;
       padding-bottom: 4rem;
       
        header {
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            align-items: center;

            div {
                text-align:right;
                color: var(--secondary);
                border-right: 2px solid var(--secondary);
                padding-right: 1rem;
      
                

                h2 {
                    font-size: 4rem;
                    font-weight: 400;
                   
                }

                h4 {
                    font-size: 2rem;
                    font-weight: 600;


                }
                
                :nth-child(2n) {
                    text-align: left;
                    border-right: none;
                    padding-right: 0;


                    h2 {
                        font-size: 2rem;
                        font-weight: 400;
                    }
                    
                    h4 {
                        font-weight: 400;
                        font-size: 1.4rem;
                        strong {
                            font-weight: 700;
                            
                        }
                    }
                }
            }
        }


    .description {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        align-items: center;
        justify-items: center;
        padding: 1rem;

        .topics {
            
            display: flex;
            flex-direction: column;
            align-items: space-around;
            justify-content:space-around;
    

            button {
                outline: none;
                border: none;
                padding: 0.2rem;
                padding-right: 0.6rem;
                padding-left: 0.6rem;
                margin-top: 0.5rem;
                color: var(--primary);
                border: 1px solid var(--secondary);

                font-weight: 600;
                font-size: 1.5rem;

                border-radius: 5px;
                width: 250px;

                display: flex;
                align-items: center;
                justify-content:space-evenly;
                transition: all 0.3s ease-in-out;


                img {
                    max-width: 40px;
                    max-height: 40px;
                    
                }

                &:hover {
                    filter: brightness(0.9);
                }
        }

            ul {
            list-style: none;
            margin: 0;
            li {
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                margin-bottom:1rem;
                color: var(--secondary);

                :last-child {
                    
                    margin-bottom: 3rem;
                }

                img {
                    margin-right: 0.5rem;
                    width: 40px;
                }
            }
        }

        }

        

    }

    .imgSistema {
     
        width: 450px;
        object-fit: cover;
        box-shadow: 20px  20px  var(--secondary);
        
    }

    }

`