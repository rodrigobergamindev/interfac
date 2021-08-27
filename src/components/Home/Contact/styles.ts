import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: center;
    margin-bottom: 5rem;


    .containerContato {
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
                max-width: 115px;
                display: flex;
                justify-content:space-evenly;
                align-items: flex-end;
                a {
                    img {
                        width:20px;
                    }
                }
            }
        }
    }
   

`


export const ButtonContato = styled.button`
  
    padding: 0.5rem;
    width: 200px;
    display: flex;
    color: var(--primary);
    font-weight: 600;
    font-size: 1.5rem;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    border: none;
    outline: 0;
    img {
        
        width: 30px;
    }
`