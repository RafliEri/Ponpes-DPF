import React from 'react';
import { FaUserEdit, FaQuran, FaComments, FaFileSignature, FaCalendarCheck, FaArrowRight, FaArrowDown } from 'react-icons/fa';

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div className="relative bg-orange-200 hover:bg-orange-300 transition-colors duration-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <FaUserEdit size={60} className="text-green-600"/>
          <h3 className="text-gray-900 font-bold ml-4">Melakukan pengisian biodata di form yang telah disediakan</h3>
        </div>
        <div className="lg:hidden flex justify-center mt-4">
          <FaArrowDown size={40} className="text-green-600"/>
        </div>
        <FaArrowRight size={40} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-green-600 hidden lg:block"/>
      </div>
      <div className="relative bg-green-200 hover:bg-green-300 transition-colors duration-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <FaQuran size={60} className="text-orange-600"/>
          <h3 className="text-gray-900 font-bold ml-4">Tes bacaan Al Qur'an dan hafalan</h3>
        </div>
        <div className="lg:hidden flex justify-center mt-4">
          <FaArrowDown size={40} className="text-orange-600"/>
        </div>
        <FaArrowRight size={40} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-orange-600 hidden lg:block"/>
      </div>
      <div className="relative bg-orange-200 hover:bg-orange-300 transition-colors duration-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <FaComments size={60} className="text-green-600"/>
          <h3 className="text-gray-900 font-bold ml-4">Wawancara (santri dan orang tua)</h3>
        </div>
        <div className="lg:hidden flex justify-center mt-4">
          <FaArrowDown size={40} className="text-green-600"/>
        </div>
        </div>
      <div className="relative bg-green-200 hover:bg-green-300 transition-colors duration-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <FaFileSignature size={60} className="text-orange-600"/>
          <h3 className="text-gray-900 font-bold ml-4">Menandatangani Pakta integritas</h3>
        </div>
        <div className="lg:hidden flex justify-center mt-4">
          <FaArrowDown size={40} className="text-orange-600"/>
        </div>
        <FaArrowRight size={40} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-orange-600 hidden lg:block"/>
      </div>
      <div className="bg-orange-200 hover:bg-orange-300 transition-colors duration-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <FaCalendarCheck size={60} className="text-green-600"/>
          <h3 className="text-gray-900 font-bold ml-4">Kedatangan santri sebelum tanggal 15 Juli 2024</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
