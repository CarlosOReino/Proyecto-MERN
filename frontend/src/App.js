import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./components/Section";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <div className="App">
      <Section>
        <Inicio />
      </Section>
    </div>
  );
}

export default App;
