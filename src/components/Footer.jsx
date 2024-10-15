import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-yellow-400 bg-black-800 mt-5 p-5">
      <h2 className="text-xl text-yellow-400 font-bold">
        <span className="text-white">#DilSe</span>Godlike
      </h2>

      <div className="socials py-5">
        <Link
          to="https://www.instagram.com/godlike.in"
          target="_blank"
          className="mr-5 "
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Link>
        <Link
          to="https://twitter.com/GodLike_in"
          target="_blank"
          className="mx-5"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link
          to="https://www.facebook.com/GodLike.in"
          target="_blank"
          className="mx-5"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link
          to="https://www.youtube.com/channel/UCF1KpKu_VDjDgIThFQJqYkw"
          target="_blank"
          className="mx-5"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </Link>
      </div>

      <div className="footer-navigation grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="store-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">Store</h2>
          <ul className="text-white space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="esports-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">
            Godlike Esports
          </h2>
          <ul className="text-white space-y-2">
            <li>
              <Link
                to="/about-us"
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/achievement"
                className="hover:text-yellow-400 transition-colors"
              >
                Achievement
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Partners
              </Link>
            </li>
          </ul>
        </div>
        <div className="teams-nav">
          <h2 className="text-xl text-yellow-400 font-bold mb-4">Teams</h2>
          <ul className="text-white space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Players
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Matches
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="flex flex-col sm:flex-row justify-center items-center pt-5 font-bold text-center sm:text-left">
        <span>© Godlike Esports All Rights Reserved.</span>
        <span className="sm:ml-2">Privacy Policy</span>
      </p>
      <p className="flex justify-center items-center pt-5 font-bold text-center text-white">
        <span className="mr-1 text-yellow-400">Made </span>
        <span className="mr-1"> with</span>
        <FaHeart className=" mx-1 text-yellow-400" />
        <span className="mr-1">by</span>
        <Link
          to="https://www.instagram.com/soamtripathy"
          target="_blank"
          className="text-yellow-400 hover:underline"
        >
          Soam Tripathy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
