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




export const Description = styled.section`


    width: 100%;
    max-width:1120px;
    margin-top: 3rem;
    margin-bottom: 4rem;

    @media only screen and (max-width: 900px) {
               margin-bottom: 2rem;
             }

            
             header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        

        @media only screen and (max-width: 900px) {
               margin-bottom: 1rem;
             }
            
        h1 {
            font-size: 2.1rem;
            color: var(--secondary);
            padding: 0.65rem;
            background: var(--primary);
            border-radius: 5px;
            font-weight: 500;
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
            padding-bottom: 3rem;
            @media only screen and (max-width: 900px) {
                
                margin-bottom: 2rem;
             }
            
            }
            img {
                width: 100%;

                
                
            }

    
    section {
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 900px) {
                padding: 1rem;
            }

        .containerCards {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 2rem;

            @media only screen and (max-width: 900px) {
                
                grid-template-columns: repeat(1,1fr);
             }
        }
        h1 {
            font-size: 1.8rem;
            color: var(--secondary);
            padding: 0.65rem;
            background: var(--primary);
            border-radius: 5px;
            font-weight: 500;
            width: 100%;
            @media only screen and (max-width: 900px) {
                
             }
        }
    }

`


export const Header = styled.header`

       
       margin-top: 6rem;
       width: 100%;
       height: calc(60vh - 5rem);
       max-width: 1120px;
       background: url("/img/headersistema.png");
       background-attachment: fixed;
       background-position: end;
       background-repeat: no-repeat;
       background-size: auto;
       
       

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

           h1 {
               color: var(--secondary);
               font-size: 5rem;
               text-align: center;
               margin-bottom: 1.5rem;
               letter-spacing: 2px;
               border: 1px solid var(--secondary);
               cursor: default;
               transition: all 0.3s ease-in-out;

               @media only screen and (max-width: 900px) {
                    font-size: 2.8rem;
             }

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


export const Card = styled.div`

    display: flex;
    border: 1px solid var(--grey-100);
    border-radius: 2px;
    padding: 2rem;
    width: 100%;
  

    .icon {
        border-radius: 100%;
        border: 1px solid var(--grey-100);
        margin-right: 2rem;
        padding: 0.5rem;
        max-width: 90px;

        @media only screen and (max-width: 900px) {
            max-width: 60px;
            max-height: 60px;
             }
    }

    .description{
        
        h3 {
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 0.5rem;

            @media only screen and (max-width: 900px) {
                font-size: 1.3rem;
             }
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