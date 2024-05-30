import React from "react";
import instagram from "../images/Icon/instagram.png";
import whatsapp from "../images/Icon/whatsapp.png";
import youtube from '../images/Icon/youtube.png';

function Footer() {
  return (
    <div className="footer bg-green-100 p-10">
      <footer className="flex flex-col md:flex-row justify-around items-center">
        <div className="mediaSosial mb-4 md:mb-0">
          <h2 className="text-xl ml-3">Social Media</h2>
          <div className="icon flex justify-around mt-2 space-x-4">
            <a href="https://www.instagram.com/dpf.or.id?igsh=MTc4MmM1YmI2Ng==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20menunaikan%20zakat%20bisakah%20dibantu%3F" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="w-10 h-10" />
            </a>
            <a href="https://www.youtube.com/@dpfofficial" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
