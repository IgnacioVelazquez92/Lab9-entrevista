import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { themeChange } from "theme-change";
import CartContent from "./NavbarComponents/CartContent";
import HamburgBtn from "./NavbarComponents/HamburgBtn";
import LightDark from "./NavbarComponents/LightDark";
import UserLog from "./NavbarComponents/UserLog";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <nav className="bg-primary p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          Lab9
        </NavLink>

        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white hover:underline">
            Contact
          </NavLink>
        </div>

        <div className="flex gap-3 items-center">
          <HamburgBtn toggleMenu={toggleMenu} />
          <LightDark />
          <UserLog />
          <CartContent />
        </div>
      </div>

      {!isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink to="/" className="text-white hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
