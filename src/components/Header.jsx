import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../images/Icon/Logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white py-3 px-6 drop-shadow-2xl transition-all duration-500 ease-in-out ${isSticky ? 'fixed top-0 w-full z-50' : ''}`}>
      <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isSticky ? 'justify-center' : ''}`}>
        <NavLink className="flex items-center" to="/">
          <img src={logo} alt="Logo" className={`h-12 transition-all duration-500 ease-in-out ${isSticky ? 'transform translate-x-12' : ''}`} />
          <div className={`ml-4 transition-opacity duration-500 ease-in-out ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className="text-xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaludin</p>
          </div>
        </NavLink>
        <div className="hidden md:flex space-x-4">
          <NavLink 
            className={({ isActive }) => 
              isActive 
              ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 border-b-2 border-pink-500"
              : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300"
            } 
            to="/" 
            onClick={handleNavLinkClick}
          >
            BERANDA
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              isActive 
              ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 border-b-2 border-pink-500"
              : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300"
            } 
            to="fasilitas"
            onClick={handleNavLinkClick}
          >
            FASILITAS
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              isActive 
              ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 border-b-2 border-pink-500"
              : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300"
            } 
            to="tentang"
            onClick={handleNavLinkClick}
          >
            TENTANG
          </NavLink>
        </div>
        <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
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
        </button>
      </div>
      {showMenu && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4 mt-10">
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                  ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center border-b-2 border-pink-500"
                  : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center"
                } 
                to="/" 
                onClick={handleNavLinkClick}
              >
                BERANDA
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                  ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center border-b-2 border-pink-500"
                  : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center"
                } 
                to="fasilitas"
                onClick={handleNavLinkClick}
              >
                FASILITAS
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                  ? "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center border-b-2 border-pink-500"
                  : "text-black px-6 py-2 rounded-md font-semibold hover:font-bold hover:text-blue-500 transform transition duration-300 w-full text-center"
                } 
                to="tentang"
                onClick={handleNavLinkClick}
              >
                TENTANG
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
