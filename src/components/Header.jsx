import React from "react";

function Header() {
  return (
    <header>
      <nav className="p-5 flex justify-between">
        <div className="flex">
          <img src="../images/Icon/Logo DPF.png" alt="DPF Logo" className="max-h-14 object-cover"/>
          <h1 className="text-green-600 ml-4">Pondok Pesantren Djalaluddin Pane</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
