import styled from 'styled-components'

export const CarroContainer = styled.section`
  width: 350px;
  border: 1px solid black;
  border-radius: 28%;
  gap: 1rem;
  padding: 1rem;
  
  ul {
    list-style: none;
  }
  
  li:nth-child(1){
    color: ${(props)=>props.color};
  }
`
