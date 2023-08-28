import styled from "styled-components";

export const Register = styled.section`
    
`
  
export const Generic = styled.section`
    width: 100%;
    min-height: 30vh;
    background-color: #eeeed4;
    display: flex;    
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;  
    gap: 1rem;  
    padding: 0 1.5rem
  `

export const Sold = styled.section`
    width: 100%;
    min-height: 30vh;
    background-color: #d4ffd6;
    display: flex;    
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;    
    gap: 1rem;
    padding: 0 1.5rem

`
export const Control = styled.section`
    width: 100%;
    min-height: 30vh;
    background-color: #a9aaa9;
    display: flex;    
    justify-content: center;
    align-items: center;    
    gap: 1rem;
`


export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props)=>props.pro?'#53ff87':'#fcff43'};

`


