import styled from "styled-components";

export const BoxPaginaPrincipal = styled.div`
    display: grid;
    border-style: solid;
    border-width: thin;
    border-color: rgba(0, 0, 0,0.5);
    align-items: start;
    background-color: rgb(226, 222, 222);
    height: fit-content;
    text-align: center;
    border-radius: 0.25rem;
  
  `
  export const Cover = styled.img`
      width: 100%;
      height: 320px;
      border-top-right-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
      cursor: pointer;
      :hover{
        border: 3px solid rgba(255, 255, 255, 0.5);    
        transition-duration: 300ms; 
        transform: scale(1.1) ;
        border-radius: 9px;
      }
    
  `

  export const PainelDeVideos = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
  `    
  
  
  