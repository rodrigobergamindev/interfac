import styled from 'styled-components';



export const Container = styled.section`

    width: 100%;
    display: flex;
    align-items: center;


    header {
       
        margin-top: 6.7rem;
        border: 2px solid blue;
        width: 100%;
        height: calc(60vh - 5rem);

        background-image: url("/img/server.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        padding: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            border: 1px solid yellow;
            width: 100%;
            max-width: 1120px;

            h1 {
                color: var(--secondary);
            }
        }
    }
    
       
`