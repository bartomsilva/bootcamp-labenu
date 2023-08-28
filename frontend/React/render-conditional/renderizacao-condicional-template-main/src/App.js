import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`


function App() {

  const [pageActive, setPageActive] = useState("login")

  const returnPage = () => {

    switch (pageActive) {
      
      case 'login':
        return <TelaLogin
          setPageActive={setPageActive} />

      case 'register':
        return <TelaCadastro
          setPageActive={setPageActive} />

      case 'registered':
        return <TelaUsuarioCadastrado />
    
      default:
        return <TelaLogin
        setPageActive={setPageActive} />
    }

  }

  return (
    <MainContainer >
      <GlobalStyled />
      {returnPage()}
    </MainContainer>
  );
}

export default App;