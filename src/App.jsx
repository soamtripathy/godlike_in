import "./App.css";
import Acheivement from "./components/Acheivement.jsx";
import { EsportsTeam } from "./components/EsportsTeam.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <>
      <div>
        
        <Navbar/>
        <Acheivement/>
        <EsportsTeam/>
      </div>
    </>
  );
}

export default App;
