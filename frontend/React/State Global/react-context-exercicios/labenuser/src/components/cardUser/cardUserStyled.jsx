import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  width: 230px;
  min-height: 300px;
  border: 2px solid;
  border-color: ${({select})=>select?"#f00":"rgba(0,0,0,.4)"} ;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: beige;  
  background-color: ${({select})=>select?"#f0d1f2":"beige"};  
  img{
    width: 120px;
    margin-bottom: 30px;
  }
`;

export const NameUser = styled.button`
  font-family: Helvetica, sans-serif;
  font-style: oblique;  
  font-weight: 700;
  width: 195px;
  height: 40px;
  border: none;
  border-radius: 18px;
  color: #e1e1e1;
  background-color: #f77f00;
  cursor: pointer;
`;

export const ContainerButtonUser = styled.div`
  width: 100%;
  height: 100px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  height: 100px;
`;

export const ContainerButtons = styled.div`
  position: absolute;
  bottom: 0;
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
  font-size: 20px;
  border: none;
  padding-left: 5px;
  margin-bottom: 10px;
`;