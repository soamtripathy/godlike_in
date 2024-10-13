import "./App.css";
import Acheivement from "./components/Acheivement.jsx";
import { Creators } from "./components/Creators.jsx";
import { EsportsTeam } from "./components/EsportsTeam.jsx";
import Navbar from "./components/Navbar.jsx";
import { Sponsers } from "./components/Sponsers.jsx";


function App() {
  
  return (
    <>
      <div>
        
        <Navbar/>
        <Acheivement/>
        <EsportsTeam/>
        <Creators />
        <Sponsers/>
      </div>
    </>
  );
}

export default App;
