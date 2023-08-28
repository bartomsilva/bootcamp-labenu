import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  
  const [userLogin, setUserlogin] = useState({ 'name': '', 'photo': '' })
  const [formPost, setFormPost] = useState({ "title": "", "image": "", "description": "" })
  const [post, setPost] = useState({ "title": "", "image": "", "description": "" })

  const handleOnChange = (e, state, setState) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
  }

  const login = () => {
    if (userLogin.name.length &&  userLogin.photo.length){
      setPageFlow(2);
    } else {
      alert("Login inválido!!!")
    } 

  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
            name={userLogin.name}
            photo={userLogin.photo}
            pageFlow={pageFlow}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
              // setPageFlow={setPageFlow}
              userLogin={userLogin}
              setUserLogin={setUserlogin}
              login={login}
              handleOnChange={handleOnChange}
            />
          ) : (
            <FormularioPostagem
              formPost={formPost}
              setFormPost={setFormPost}
              handleOnChange={handleOnChange}
              setPost={setPost}
            />
          )}
        </aside>
        <TelaDaPostagem
          post={post} />
      </Container>
    </>
  );
}

export default App;
