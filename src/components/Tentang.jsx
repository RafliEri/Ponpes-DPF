import React from "react";
import logo from "../images/Icon/Logo DPF.png";

function Tentang() {
  return (
    <>
      <div className="bg-teal-600 p-8 md:p-40 mx-auto flex flex-col items-center">
        <div className="logo flex flex-col md:flex-row items-center bg-white p-4 md:p-8 rounded shadow-lg mb-0">
          <img src={logo} alt="Logo" className="h-12 md:h-24" />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaluddin Pane</p>
          </div>
        </div>
        <div className="container text-lg text-justify bg-white pt-4 pb-8 px-8  shadow-[3px_5px_3px_2px_#1a202c] md:pt-8 md:pb-40 md:px-20 shadow-lg rounded-lg mt-0">
          <p className="text-teal-600 font-semibold">
            Pondok Pesantren Djalaluddin Adalah Pondok Pesantren Tahfizh Dan Adab Yang Berbasis Sains Dan Teknologi. Pondok Pesantren Djalaluddin Juga Mendapatkan Predikat Sebagai Pesantren Ramah Anak Yang Terbebas Dari Bullying, Kekerasan, Dan Pelecehan Seksual.
          </p>
        </div>
      </div>
    </>
  );
}

export default Tentang;
