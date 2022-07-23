// import logo from "./logo.svg";
import "./App.css";
import Skills from "./Skills";
import Collapse from "./Collapse/index";
function App() {
  return (
    <>
      <Skills />
      <Collapse title="Información">
        <h1>Contiendo del Collapse</h1>
      </Collapse>
    </>
  );
}

export default App;
