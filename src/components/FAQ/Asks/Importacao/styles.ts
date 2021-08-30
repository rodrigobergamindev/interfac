import styled from 'styled-components';


export const Tab = styled.div`

   
    border-radius:5px;
    border-bottom: ${props => props.active ? "1px solid var(--primary)" : "1px solid #ccc"};
    color: ${props => props.active ? "var(--primary)" : "#333"};
    transition: all 0.5s ease;
    padding: 1rem;


    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;  
    
    font-size:1.2rem;

    span {
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: 1.5rem;

    .icon {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
        transform:none;
    }
    }


    img {
        align-self: center;
        width: 15px;
        height: 15px;
        transform:${props => props.active ? "rotateZ(180deg)" : "rotateZ(0deg)"};
        transition: all 0.3s ease;
    }

    &:hover {
        cursor: pointer;
    }

`


export const Container = styled.div`

    display: flex;
    flex-direction: column;



`

export const ContainerTable = styled.div`

    height: ${props => props.active ? "70px" : "0px"};
    display: flex;
    flex-direction: column;
    transition: height 0.5s;
    margin-bottom: ${props => props.active ? "2rem" : "auto"};
    overflow-y: hidden;
    

    @media only screen and (max-width: 900px) {
        height: ${props => props.active ? "100px" : "0px"};
       
        }


`


export const Ask = styled.div`

    padding: 1rem;


   
`