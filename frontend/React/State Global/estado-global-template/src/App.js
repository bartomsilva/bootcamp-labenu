import Router from "./Router/Router";
import styled from "styled-components";
import GlobalState from "./Global/GlobalState";
import { GlobalStateContext } from "./Global/GlobalStateContext";


export default function App() {

  const context = GlobalState(GlobalStateContext)

  return (

    <GlobalStateContext.Provider value={context}>
      <AppContainer>
        <h1 id="frutinhas">Labefrutas <span role="img" aria-label="frutinhas">🍌 🍉 🍇 🍓 </span></h1>
        <Router />
      </AppContainer>
    </GlobalStateContext.Provider>
  );
}
const AppContainer = styled.div`
   text-align: center;
`;