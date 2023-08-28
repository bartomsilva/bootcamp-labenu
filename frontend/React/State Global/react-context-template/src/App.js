import Router from "./routes/Router";
import GlobalState from "./context/GlobalState";

import { GlobalStateContext } from "./context/GlobalStateContext";


export default function App() {

  return (
    <GlobalStateContext.Provider value={GlobalState()}>
      <Router />
    </GlobalStateContext.Provider>
  );
}
