import styled from "styled-components";


export const MenuVertical = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
    background-color: rgba(128, 128, 128, 0.6);
    ul{
        margin-top:  2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

`    
 
export const BotoesMeunuVertical = styled.li`
    margin-left: 2rem;
    height: 50px;
    line-height: 50px;
    border-radius: 40% 9% 25% 9%;
    list-style-type: none;
    font-size: large;
    font-style: italic;
    font-weight: 800;
    background-color: black;
    width: 50%; 
    color: #fff;  
    text-align: center;
    border: 2px solid #8d8c8c ;
    cursor: pointer;
    &:hover {
        background-color: #c7c7c7;
        color: #000;
        transform: scale(1.1);
        transition-duration: 200ms;
        border: none;

    }
     
`  
  

export const Header = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    width: 100%;
    height: 10vh;

    h1{
        padding: 0 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        color: #d30808;
        border-radius: 30% 0 30% 0;
        border: 1px solid #fff;
    }

    input{
        height: 1.8rem;
        border-radius: 9px;
        border: 1px solid #fff;
    }

`

export const Footer = styled.footer`
    background-color: orange;
    width: 100%;
    height: 10vh;
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    
    h4 {
        margin-left: 20px;
        font-size: 1.5rem;    
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

    }
 
`

export const TelaInteira = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`

export const ContainerTrailer = styled.section`
    
    visibility: ${(props) => props.ver ? `visible` : `hidden`};
    z-index: ${(props) => props.ver ? 1:-1};
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid white;

`

export const Main = styled.main`
    min-height: 80%;
    display: flex;
`

export const ImgBtn = styled.img`
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: brown;
    border: 2px solid rgba(255, 255, 255, 0.5);
    margin-top: 0.4rem;
    align-self: flex-end;   
    position: fixed;
    z-index: 9999;
    transform: translateY(-149px);
    :hover{
        cursor: pointer;
        transition: 500ms;
    }
`

export const Control = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

`

export const Video = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border: 8px solid rgba(255, 255, 255, 0.5);
        
    iframe {
        width: 800px;
        border: 2px solida rgb(228, 21, 21);
    }
      
`


