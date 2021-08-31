import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    padding: 2rem;
    margin-bottom: 2rem;


`


export const Content = styled.section`

       
        width: 100%;
        max-width: 1120px;


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
            }
            h4 {
                font-weight: 400;
                max-width:850px;
            }
        }
        

        .topics{
            width: 100%;
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            gap: 2rem;
        }
        
    

`


export const Topic = styled.div`
    display: flex;
    background: var(--secondary);
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.13);
    border-left: 4px solid var(--primary);
    padding: 1rem;
    border-radius: 5px;
    h3 {
        color: var(--primary);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    img {
        margin-right: 1rem;
        max-width: 70px;
    }
    
`


export const ButtonSaibaMais = styled.button`
   
    outline: none;
    border: none;
    padding: 0.2rem;
    padding-right: 0.6rem;
    padding-left: 0.6rem;

    color: var(--primary);
    border: 1px solid var(--primary);
    font-weight: 600;
    font-size: 0.95rem;

    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--primary);
        color: var(--secondary);
    }

`