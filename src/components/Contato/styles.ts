import styled from 'styled-components';




export const Form = styled.form`

 
    margin-top: 5rem;
    width: 100%;
    max-width:1120px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 0rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
    background: var(--primary);
    

    border-radius: 10px;
    margin-bottom: 7rem;

    .campos {
        border-left: 1px solid var(--secondary);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
            margin-bottom: 1.2rem;
            border-radius: 2px;
            height: 2.5rem;
            outline: 0;
            border: 0;
            font-size: 1.05rem;
            padding: 0.5rem;
        }

        button {
            margin-top: 2rem;
            width: 8rem;
            font-size: 1.2rem;
            color: var(--primary);
            font-weight: 600;
            display: flex;
            justify-content: space-evenly;
            border: 0;
            outline: 0;
            padding: 0.3rem;

            border-radius: 5px;
            img {
                width: 30px;
            }

            transition: all 0.3s ease-in-out;

            &:hover {
                filter: brightness(0.9);
            }

        }

        textarea {
            resize: none;
            border-radius: 2px;
            font-size: 1.05rem;
            padding: 0.5rem;
        }

        label {
            color: var(--secondary);
        }
        header {
            margin-bottom: 2rem;
            h2 {
                color: var(--secondary);
                font-size: 2.5rem;
                font-weight: 600;
            }
        }


        .segmento {
            color: var(--secondary);
            font-size: 1.04rem;
            margin-bottom: 1rem;
        }

        .radio {
        display: flex; 
        margin-bottom: 1rem;
        width: 100%;

        justify-content:space-around;
        align-items: center;

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
        background-color: #007a9d;
        border-color: #007a9d;
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
    }



`



export const Card = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
   


    span {
        color: var(--secondary);
        max-width: 350px;
        text-align:center;
        font-size: 0.9rem;
    }

    img {
        margin-bottom: 1rem;
        max-width: 60px;
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