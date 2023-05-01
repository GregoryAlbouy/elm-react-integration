import "./App.css";
import { CountingButton } from "./CountingButton";
import elmLogo from "./assets/elm.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  console.log("App.tsx");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo elm" alt="Elm logo" />
        </a>
        <a href="https://elm-lang.org/" target="_blank">
          <img src={elmLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Elm</h1>
      <div className="card">
        <CountingButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
