import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import logo from "../images/Icon/Logo DPF.png";

function Header () {
  const [showMenu, setShowMenu] = useState(false);
 

  return (
    <header className="bg-white py-3 px-6 drop-shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaluddin Pane</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink className="text-black px-6 py-2 rounded-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300" to={"/"}>
            BERANDA
          </NavLink>
          <NavLink className="text-black px-6 py-2 rounded-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300" to={"Fasilitas"}>
            FASILITAS
          </NavLink>
          <NavLink className="text-black px-6 py-2 rounded-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300" to={"Layanan"}>
            LAYANAN
          </NavLink>
          <NavLink className="text-black px-6 py-2 rounded-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300" to={"Tentang"}>
            TENTANG
          </NavLink>
        </div>
        <NavLink className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </NavLink>
      </div>
      {showMenu && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink className="text-black px-6 py-2 rounded-md shadow-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300 w-full">
                BERANDA
              </NavLink>
            </li>
            <li>
              <NavLink className="text-black px-6 py-2 rounded-md shadow-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300 w-full">
                FASILITAS
              </NavLink>
            </li>
            <li>
              <NavLink className="text-black px-6 py-2 rounded-md shadow-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300 w-full">
                LAYANAN
              </NavLink>
            </li>
            <li>
              <NavLink className="text-black px-6 py-2 rounded-md shadow-md hover:font-bold hover:underline hover:text-blue-500 transform transition duration-300 w-full">
                TENTANG
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
