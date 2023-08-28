import Router from "./routes/Router";
import { GlobalStateContext } from "./Global/GlobalStateContext";
import GlobalState from "./Global/GlobalState";

export default function App() {
  const context = GlobalState();

  return (
    <GlobalStateContext.Provider value={context}>
      <Router />
    </GlobalStateContext.Provider>
  );
}
