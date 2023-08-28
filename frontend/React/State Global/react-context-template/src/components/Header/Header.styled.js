import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  height: 70px;
  width: 1200px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cb1ee;
  margin-bottom: 10px;

  button {
    position: absolute; 
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    padding: 0 4px; 
    align-self: left ;
    border: none;
    border-radius: 12px;
    padding: 0 10px;
  }

 
`;
