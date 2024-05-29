import React from "react";
import logo from "../images/Icon/Logo DPF.png"
function Header() {
  return (
    <header>
      <nav className="p-5 flex justify-between">
        <div className="flex">
          <img src={logo} alt="DPF Logo" className="max-h-14 object-cover"/>
          <h1 className="font-semibold text-lg text-green-600 ml-4 mt-2 ">Pondok Pesantren Djalaluddin Pane</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
