import "./App.css";
import Home from "./components/Home";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
