import { Footer } from "./components/Footer.jsx";
import "./App.css";
import Acheivement from "./components/Acheivement.jsx";
import { Creators } from "./components/Creators.jsx";
import { EsportsTeam } from "./components/EsportsTeam.jsx";
import Navbar from "./components/Navbar.jsx";
import { Shop } from "./components/Shop.jsx";
import { Sponsers } from "./components/Sponsers.jsx";
import { Videos } from "./components/Videos.jsx";


function App() {
  
  return (
    <>
      <div>
        
        <Navbar/>
        <Acheivement/>
        <EsportsTeam/>
        <Creators />
        <Sponsers/>
        <Videos/>
        <Shop/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
