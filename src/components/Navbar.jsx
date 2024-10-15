import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 font-bold sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              </NavLink>
              <p className="text-yellow-400 font-bold italic ml-4 hidden sm:block">
                <span className="text-white">#DilSe</span>Godlike
              </p>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Shop", "Teams", "About Us"].map((item, index) => (
                  <NavLink
                    key={index}
                    to={
                      item === "Home"
                      ? "/"
                      : item === "Shop"
                        ? "https://dacby.com/product-detail/?pid=bpN&Name=Godlike-Official-Jersey-Limited-Edition-%7C-Size---S-(New).html"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    target={item === "Shop" ? "_blank" : undefined}
                    className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-md transition-all duration-300 ease-in-out text-sm font-bold uppercase"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            aria-hidden="true"
            onClick={toggleMenu}
          ></div>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-black shadow-xl z-50 overflow-y-auto">
            <div className="px-4 pt-5 pb-4 space-y-4">
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
              >
                <span className="sr-only">Close menu</span>
                <FaTimes className="h-6 w-6" />
              </button>

              {["Home", "Shop", "Teams", "About Us"].map((item, index) => (
                <NavLink
                  key={index}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Shop"
                      ? "https://dacby.com/product-detail/?pid=bpN&Name=Godlike-Official-Jersey-Limited-Edition-%7C-Size---S-(New).html"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  target={item === "Shop" ? "_blank" : undefined}
                  className="block text-yellow-400 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-bold transition-all duration-300 ease-in-out uppercase"
                  onClick={toggleMenu}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
