import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5} from "react-icons/tb"

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-green-100 rounded-lg shadow-md p-4">
        <div className="flex items-center">
          <TbCircleNumber1 size={60}/>
          <h3 className="text-gray-900 font-bold ml-2 ">Melakukan pengisian biodata di form yang telah disediakan</h3>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg shadow-md p-4">
        <div className="flex items-center">
        <TbCircleNumber2 size={60}/>
          <h3 className="text-gray-900 font-bold ml-2">Tes bacaan Al Qur'an dan hafalan</h3>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg shadow-md p-4">
        <div className="flex items-center">
        <TbCircleNumber3 size={60}/>
          <h3 className="text-gray-900 font-bold ml-2">Wawancara (santri dan orang tua)</h3>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg shadow-md p-4">
        <div className="flex items-center">
        <TbCircleNumber4 size={60}/>
          <h3 className="text-gray-900 font-bold ml-2">Menandatangani Pakta integritas</h3>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg shadow-md p-4">
        <div className="flex items-center">
        <TbCircleNumber5 size={60}/>
          <h3 className="text-gray-900 font-bold ml-2">Kedatangan santri sebelum tanggal 15 Juli 2024</h3>
        </div>
       </div>
    </div>
  );
}

export default Card;