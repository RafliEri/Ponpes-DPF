import React from "react";
import logo from "../images/Icon/Logo DPF.png";
import TeamList from '../components/TeamList'

function Tentang() {
  return (
    <>
      <div className="bg-teal-600 p-8 md:p-40 mx-auto flex flex-col items-center">
        <div className="logo flex flex-col md:flex-row items-center bg-white p-4 md:p-8 rounded-[3px_5px_3px_2px] shadow-lg mb-0">
          <img src={logo} alt="Logo" className="h-12 md:h-24" />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaluddin Pane</p>
          </div>
        </div>
        <div className="container text-lg text-justify bg-white pt-4 pb-3 px-8 shadow-[3px_5px_3px_2px_#1a202c] md:pt-8 md:pb-20 md:px-20 rounded-lg mt-0">
          <p className="text-teal-600 font-semibold">
          &nbsp;&nbsp;&nbsp; Pondok Pesantren Putri Djalaludin merupakan pondok pesantren tahfizh Al Qur’an berbasis adab dan teknologi yang bertempat di Jalan Budi Luhur, Kampung Babakan Haji, RT 003/002, Kelurahan Cisarua, Kecamatan Cisarua, Kabupaten Bogor. Pondok Pesantren Putri Djalaludin berdiri di atas villa milik keluarga besar Bapak H. Dajalaluddin Pane. Pondok Pesantren Putri Djalaludin didirikan dengan tujuan “Mendidik Adab Membangun Peradaban”. Konsep Adab sangat ditekankan di pondokbpesantren ini karena mengingat generasi muda zaman sekarang mengalamibkrisis adab (karakter). Maka dari itu dengan berdirinya pondok pesantren putri Djalaludin ini menjadi salah satu pelopor revolusi adab bagi generasi penerus bangsa Indonesia.
Pondok Pesantren Djalaludin memiliki 5 program unggulan, yaitu tahfizh Al Qur’an, Dirasah Islamiyah, Adab Islam, Bahasa Inggris dan Arab, dan TIK. Pondok Pesantren Putri Djalaludin juga mendapat predikat sebagai Pesantren ramah anak yang terbebas dari bullying, kekerasan, dan pelecehan seksual. Hal ini supaya santri merasa aman dan nyaman dalam belajar di pondok pesantren putri Djalaludin.
          </p>
        </div>
      </div>
      <div>
        <TeamList />
      </div>
    </>
  );
}

export default Tentang;
