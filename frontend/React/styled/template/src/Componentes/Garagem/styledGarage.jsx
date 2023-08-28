import styled from "styled-components";



export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #7A717D;
    width: 100vw;
    height: 90vh;
`


export const HeaderGaragem = styled.header`
    width: 100%;
    min-height: 10%; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;
    background: #eb9749;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        width: 74px;
        height: 74px;
    }

    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`


export const Estacionamento = styled.section`
    width: 80%;
    height: 80%;
    margin-top: 50px;
    gap: 10px;  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: skew(30deg);

`


export const Button = styled.button`
    background-color: #F5F5F5; 
    color: #464141;
    font-size: 1.2rem;
    width: 7rem;
    height: 2.5rem;
    border-radius: 0.45rem;
    padding: 5px;
    border: none;
    position: fixed;
    right: 0;
    top: 6.25rem;
    margin-right: 1em;
    
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition-duration: 200ms;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eb9749;
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.875rem;
   
`
