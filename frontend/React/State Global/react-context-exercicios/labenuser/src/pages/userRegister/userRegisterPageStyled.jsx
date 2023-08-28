import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-30%);
  width: 230px;
  min-height: 300px;
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding: 40px 0 0 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: beige;
  h3{
    font-style: italic;
    margin-bottom: 15px;
  }
`;


export const ContainerInputs = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

export const ContainerButtons = styled.div`
  position: absolute;
  bottom: 40px;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: #e1e1e1;
  background-color: #2b2d42;
  margin: 5px;
  cursor: pointer;
  transition-duration: 0.3s;
  :active{
    transform: scale(0.9);
  }
`;

export const Input = styled.input`
  width: 195px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 0px 10px;
  font-size: 18px;
  border: none;
  padding-left: 5px;
  margin-bottom: 10px;
`;
