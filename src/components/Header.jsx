import React from 'react';
import logo from "../images/Icon/Logo DPF.png";

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 drop-shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaluddin Pane</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
