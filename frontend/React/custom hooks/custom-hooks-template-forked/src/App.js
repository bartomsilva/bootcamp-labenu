import React from "react";
import { BASE_URL } from "./constants/constants";

import { Title, NameContainer, PostContainer } from "./style";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useRequestData } from "./hooks/useRequestData";

function App() {
  const [nomeUsuarios, isLoadingUsers, errorUsers] = useRequestData(
    `${BASE_URL}users`
  );
  const [postagens, isLoadingPosts, errorPosts] = useRequestData(
    `${BASE_URL}comments`
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingUsers && <h1>lendo......</h1>}
        {errorUsers && (
          <h1>Ops! não foi possível carregar a lista de usuários.....</h1>
        )}
        {!isLoadingUsers &&
          nomeUsuarios.map((usuario) => {
            return (
              <Card
                key={usuario.id}
                text={usuario.name}
                backgroudColor={"nome"}
                textColor={"nome"}
              />
            );
          })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingPosts && <h1>lendo......</h1>}
        {errorPosts && (
          <h1>Ops!, não foi possível carregar os comentários.....</h1>
        )}
        {!isLoadingPosts &&
          postagens.map((post) => {
            return (
              <Card
                key={post.id}
                text={post.body}
                backgroudColor={"#1dc690"}
                textColor={"#ffffff"}
              />
            );
          })}
      </PostContainer>
    </div>
  );
}

export default App;
