import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;


    

`



export const Form = styled.form`

 
    max-width:1120px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 0rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
    background: var(--secondary);
    border: 1px solid var(--primary);
    margin-bottom: 7rem;


    @media only screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
            border-left: 0px;
            box-shadow: none;
            border-radius: 5px;
            background: var(--primary);
            }


    .campos {
        border-left: 1px solid var(--primary);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        
        @media only screen and (max-width: 900px) {
            padding: 1rem;
            max-width: 100%;
            }

        input {
            margin-bottom: 1.2rem;
            border-radius: 2px;
            outline: 0;
            border: 0;
            font-size: 1.05rem;
            padding: 0.5rem;
            border: 2px solid var(--primary);

            
        }
        
        transition: all 0.3s ease-in-out;

        input:focus {
            border: 2px solid #4bcffa;
        }

        button {
            margin-top: 2rem;
            width: 8rem;
            font-size: 1.2rem;
            color: var(--secondary);
            font-weight: 600;
            display: flex;
            justify-content: space-evenly;
            border: 0;
            outline: 0;
            padding: 0.3rem;
            align-items: center;
            border-radius: 5px;
            background: var(--primary);
            img {
                width: 30px;
            }

            transition: all 0.3s ease-in-out;

            &:hover {
                filter: brightness(0.8);
            }

            @media only screen and (max-width: 900px) {
               
                border: 1px solid var(--secondary);
                width: 10rem;
                justify-content: space-around;
                
            }

        }

        textarea {
            resize: none;
            border-radius: 2px;
            font-size: 1.05rem;
            padding: 0.5rem;
            transition: all 0.3s ease-in-out;
            border: 2px solid var(--primary);
        }

        textarea:focus {
            border: 2px solid #4bcffa;
        }

        label {
            color: var(--primary);

            @media only screen and (max-width: 900px) {
                color: var(--secondary);
            }
        }
        header {
            margin-bottom: 2rem;
            
            h2 {
                color: var(--primary);
                font-size: 2.5rem;
                font-weight: 600;

                @media only screen and (max-width: 900px) {
                    font-size: 1.8rem;
                    background: var(--primary);
                    padding:0;
                    border-radius: 5px;
                    color: var(--secondary);
            }
            }
        }


        .segmento {
            color: var(--primary);
            font-size: 1.04rem;
            margin-bottom: 1rem;

            @media only screen and (max-width: 900px) {
                color: var(--secondary);
            }
        }

        .option {
            padding: 0.75rem;
            
        }

        .radio {
        display: flex; 
        margin-bottom: 1rem;
        width: 100%;
        
        justify-content:space-around;
        align-items: center;


        @media only screen and (max-width: 900px) {
                    justify-content: flex-start;
               
                    flex-wrap: wrap;
             
            
            }
        input[type="radio"] {
            display: none;
        }

        label {
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        }

        input[type="radio"]+label {
        cursor: pointer;
        margin-bottom: 0.5rem;
        }

        input[type="radio"]+label:before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        border: 2px solid #adb5bd;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        }

        input[type="radio"].disabled+label,
        input[type="radio"]:disabled+label {
        background-color: #f8f9fa;
        opacity: 0.5;
        cursor: not-allowed;
        }

        input[type="radio"]:checked+label:before {
        background-color: #4bcffa;
        border-color: #4bcffa;
        }

        input[type="radio"]:checked+label:after {
        content: "";
        position: absolute;
        left: 8px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: white;
        }

 
        }

  

    }


    .information {
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
        gap: 2rem;

        @media only screen and (max-width: 900px) {
            display: none;

            }
    }



`



export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
   


    span {
        color: var(--primary);
        max-width: 350px;
        text-align:center;
        font-size: 0.9rem;
    }

    img {
        margin-bottom: 1rem;
        max-width: 60px;
        transition: all 0.4s ease-in-out;

        &:hover {
            transform: rotateZ(360deg);
        }
    }


`

export const Section = styled.section`

    margin-top: 15rem;
    
    width: 100%;
    max-width:1120px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
    background: var(--primary);
    

    border-radius: 10px;
    margin-bottom: 7rem;

    display: flex;
    flex-direction: column;

    text-align: center;
    padding: 1.5rem;

    h1 {
        color: var(--secondary);
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 2rem;

    }

    span {
        padding: 1.5rem;
        color: var(--grey-100);
        border-top: 1px solid var(--grey-100);
    }

`