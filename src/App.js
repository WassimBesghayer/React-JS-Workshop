import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carte from "./components/Carte";
import NavBarr from "./components/NavBarr";


function App() {

  return (
    <div className="App">
      <NavBarr/>
      <Carte/>
    </div>
  );
}

export default App;
