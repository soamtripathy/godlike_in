import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-yellow-400 bg-black-800 mt-5 p-5">
      <h2 className="text-xl text-yellow-400 font-bold">#DilSeGodlike</h2>

      <div className="socials py-5 ">
        <Link to="" className="mr-5">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="mx-5">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link className="mx-5">
          {" "}
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Link>
        <Link className="mx-5">
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </Link>
      </div>

      <div className="footer-navigation grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="store-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">Store</h2>
          <ul className="text-white space-y-2">
            <li className="hover:text-yellow-400">
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/collections">Collections</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="esports-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">
            Godlike Esports
          </h2>
          <ul className="text-white space-y-2">
            <li className="hover:text-yellow-400">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/achievement">Achievement</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/partners">Partners</Link>
            </li>
          </ul>
        </div>
        <div className="teams-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">Teams</h2>
          <ul className="text-white space-y-2">
            <li className="hover:text-yellow-400">
              <Link to="/teams">Teams</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/players">Players</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/matches">Matches</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="flex justify-center items-center pt-5 font-bold">
        <span>©</span> Godlike Esports All Right Reserved.{" "}
        <span>Privacy Policy</span>
      </p>
    </div>
  );
};

export default Footer;
