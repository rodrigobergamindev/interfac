import styled from 'styled-components';




export const Form = styled.form`

    margin-top: 15rem;
    
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

        input[type=submit] {
            margin-top: 2rem;
            width: 15rem;
            font-size: 1.2rem;
            color: var(--primary);

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