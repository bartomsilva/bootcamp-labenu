import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";

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

  const [title, setTitle]=useState()
  const [image, setImage]=useState()
  const [post, setPost]= useState()

  const handleOnChange=(e,setState)=>{
    setState(e.target.value)
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            title={title}
            setTitle={setTitle}
            image={image}
            setImage={setImage}
            post={post}
            setPost={setPost}
            handleOnChange={handleOnChange} />
        </aside>
        <TelaDaPostagem 
          title={title}
          image={image}
          post={post}/>
      </Container>
    </>
  );
}

export default App;
