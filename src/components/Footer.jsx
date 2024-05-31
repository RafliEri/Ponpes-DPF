import React from "react";
import instagram from "../images/Icon/instagram.png";
import whatsapp from "../images/Icon/whatsapp.png";
import youtube from '../images/Icon/youtube.png';
import logo from "../images/Icon/Logo DPF.png"

function Footer() {
  return (
    <div className="footer bg-green-100 p-10">
      <footer className="flex flex-col md:flex-row justify-around items-start md:items-center space-y-4 md:space-y-0">
        <div className="Kontak flex items-start md:items-center max-w-md">
          <img src={logo} alt="Logo" className="w-18 h-16 mr-4" />
          <div >
            <h2 className="text-xl font-bold mb-1">Kontak</h2>
            <p>
              Jalan Raya Puncak, Jalan Budi Luhur,
              Kampung Babakan Haji, RT 003/002,
              Kelurahan Cisarua, Kecamatan Cisarua,
              Kabupaten Bogor.
            </p>
            <p className="mt-1 font-semibold">Telp. +62 852 3456 7951</p>
          </div>
        </div>
        <div className="mediaSosial">
          <h2 className="text-xl font-bold mb-1">Social Media</h2>
          <div className="icon flex space-x-4 mt-2">
            <a href="https://www.instagram.com/dpf.or.id?igsh=MTc4MmM1YmI2Ng==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20menunaikan%20zakat%20bisakah%20dibantu%3F" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="w-10 h-10" />
            </a>
            <a href="https://www.youtube.com/@dpfofficial" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="w-11 h-11" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
