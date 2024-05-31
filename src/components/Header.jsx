import React from "react";
import logo from "../images/Icon/Logo DPF.png";

function Header() {
  return (
    <header className="bg-green-100">
      <nav className="p-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="DPF Logo" className="max-h-14 object-cover" />
          <h1 className="font-semibold text-lg text-green-600 ml-4">Pondok Pesantren Djalaluddin</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
