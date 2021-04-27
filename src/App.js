import "./App.css";
import Section from "./Section.js";
import logo from "./img.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <img class="img-logo" alt="netflix logo" src={logo} />
        <Section />
      </div>
    </div>
  );
}

export default App;
