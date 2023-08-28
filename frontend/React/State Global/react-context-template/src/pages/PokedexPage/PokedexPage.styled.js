import styled from "styled-components";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
`;

export const TextEmpty=styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  border-radius: 40% 5% 40% 5%;
  font-size: 18px;
  font-style: italic;
  font-weight: 800;
`
