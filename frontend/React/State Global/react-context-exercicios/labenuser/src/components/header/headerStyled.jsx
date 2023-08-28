import styled from "styled-components";

export const Header_ = styled.header`
  width: 100%;
  background-color: #001caf;
  background-color: #f77f00;
  color: #fff;
  padding: 10px 25px;
`;

export const Container = styled.div`
  min-height: 110px;
  display: flex;
  justify-content: center;  
  align-items: center;
`;
  
export const ContainerImage = styled.div`
  width: 33.33%;
  img{
    width: 120px;
    margin-bottom: 15px;
  }
`;


export const ContainerInfo = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavBar = styled.nav`
  
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  
  li{
    background-color: black;
    list-style: none;
    border-radius: 20px;
    transition: .3s;
  }
  
  a{
    display: block;
    padding: 10px 15px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    transition: .3s;
  }

  a:hover{
    color: #f7c101;
    cursor: pointer;
  }

  li:active{
    transform: scale(0.9);
  }

`;