import { EsportsTeam } from "./EsportsTeam";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar text-white flex justify-between items-center p-4 max-w-1600px mx-5">
      <div className="navbar-left flex items-center mt-4">
        <NavLink to="/" className="w-12 h-12">
          <img src="/logo.png" alt="" className="w-20 h-12" />
        </NavLink>
        <p className="text-yellow-400 font-bold italic ml-4 align-center">
          #DilSeGodlike
        </p>
      </div>
      <div className="navbar-right flex ml-auto ">
        <ul className="nav-links text-yellow-400 font-bold flex mt-4 space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="https://dacby.com/product-detail/?pid=bpN&Name=Godlike-Official-Jersey-Limited-Edition-%7C-Size---S-(New).html"
              target="_blank"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="teams">Teams</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
