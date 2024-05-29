import React from "react";
import instagram from "../images/Icon/instagram.png"
import whatsapp from "../images/Icon/whatsapp.png"
import youtube from '../images/Icon/youtube.png'
function Footer() {
  return (
    <div className="footer bg-green-100 p-10">
      <footer className="flex justify-around">
        <div className="mediaSosial">
          <h2 className="text-xl">Social Media</h2>
          <div className="icon flex justify-around mt-2">
            <img src={instagram} alt="Instagram" className="w-10 h-10"/>
            <img src={whatsapp} alt="Whatsapp" className="w-10 h-10"/>
            <img src={youtube} alt="YouTube" className="w-10 h-10"/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
