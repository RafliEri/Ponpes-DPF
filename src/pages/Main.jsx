import React from "react";
import ponpes from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.43(1).jpeg";
import Card from "../components/card";
// import TeamList from "./TeamList";
import Program from "../components/Program";
// import ChatBox from "../chatbot/Chatbot";

function Main() {
  return (
    <>
      <div className="tagLine text-center mt-0.5 bg-orange-500 drop-shadow-xl">
        <article className="p-10 flex flex-col md:flex-row justify-center gap-16">
          <div className="judul text-center md:text-left">
            <h2 className="font-semibold font-fjalla text-3xl mt-10 drop-shadow-xl md:mt-20 md:ml-2 text-white">
              Selamat Datang di Official Website
              <br />
              Pondok Pesantren Putri Djalaluddin
            </h2>
            <div className="flex justify-center mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20seputar%20pondok%20bisakah%20dibantu%3F"
                className="default text-white font-semibold bg-green-600 rounded-full p-4 hover:bg-green-700"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          <img
            src={ponpes}
            alt="ponpes"
            className="max-w-xs rounded-lg mt-10 md:mt-0"
          />
        </article>
      </div>

      <div className="p-4 mt-7 bg-green-500">
        <h1 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
          Tentang Pondok Pesantren Putri Djalaludin
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4 mt-6 shadow-lg max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-2">
              Apa Itu Pondok Pesantren Djalaludin ?
            </h2>
            <p className="text-justify font-semibold">
              Pondok Pesantren Djalaluddin Adalah Pondok Pesantren Tahfizh Dan
              Adab Yang Berbasis Sains Dan Teknologi. Pondok Pesantren
              Djalaluddin Juga Mendapatkan Predikat Sebagai Pesantren Ramah Anak
              Yang Terbebas Dari Bullying, Kekerasan, Dan Pelecehan Seksual.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mt-6 shadow-lg max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-2 ml-6">Keunggulan</h2>
            <ul className="text-lg text-left list-disc list-inside font-semibold">
              <li>Pembelajaran Berbasis Sains Dan Teknologi</li>
              <li>Pesantren Ramah Anak</li>
              <li>Tenaga Pendidik Yang Berkualitas Dan Tersertifikasi</li>
              <li>Lingkungan Pesantren Yang Mendukung (Asri Dan Terlindungi)</li>
              <li>Biaya Yang Terjangkau</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mt-6 shadow-lg mx-auto max-w-xl mb-8">
          <h2 className="text-xl font-bold mb-2 ml-6">Visi & Misi</h2>
          <ul className="text-lg text-left list-disc list-inside font-semibold">
            <li>Pembelajaran Berbasis Sains Dan Teknologi</li>
            <li>Pesantren Ramah Anak</li>
            <li>Tenaga Pendidik Yang Berkualitas Dan Tersertifikasi</li>
            <li>Lingkungan Pesantren Yang Mendukung (Asri Dan Terlindungi)</li>
            <li>Biaya Yang Terjangkau</li>
          </ul>
        </div>
      </div>
<Program/>
      {/* <div className="program text-center bg-orange-400 p-10">
        <h2 className="text-2xl mb-6 text-white font-bold">Program Unggulan</h2>
        <section className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="fotoProgram bg-orange-200 card p-4 shadow-lg rounded-md">
            <img
              src={tahfidz}
              alt="tahfidz"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl text-green-700">Tahfidz Al-Quran</h2>
          </div>
          <div className="fotoProgram bg-orange-200 card p-4 shadow-lg rounded-md">
            <img
              src={adab}
              alt="adab"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl text-green-700">Adab Islam</h2>
          </div>
          <div className="fotoProgram bg-orange-200 card p-4 shadow-lg rounded-md">
            <img
              src={dirasah}
              alt="Dirasah Islamiyah"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl text-green-700">Dirasah Islamiyah</h2>
          </div>
          <div className="fotoProgram bg-orange-200 card p-4 shadow-lg rounded-md">
            <img
              src={bahasa}
              alt="Program Bahasa Arab dan Inggris"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl text-green-700">
              Bahasa <br /> Arab dan Inggris
            </h2>
          </div>
          <div className="fotoProgram bg-orange-200 card p-4 shadow-lg rounded-md">
            <img
              src={tik}
              alt="kktik"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl text-green-700">
              Keterampilan Keputrian dan TIK
            </h2>
          </div>
        </section>
      </div> */}

      
{/* <ChatBox/> */}
      <div className="Pendaftaran text-center p-10 relative">
        <article>
          <div className="selengkapnya text-center md:text-center text-lg font-semibold text-white">
            <p className="text-xl">
              Masya Allah ternyata banyak banget ya impact jika putra putri bapak
              ibu bisa menjadi bagian dari Pondok Pesantren Djalaluddin ini,
            </p>
            <p className="mb-12">
              Yuk tunggu apalagi langsung daftar di Pondok Pesantren Djalaluddin.
            </p>
            <p className="text-xl text-teal-600 font-bold mb-12 bg-yellow-300 mx-auto max-w-fit ">Alur Pendaftaran</p>
            <Card />
            <br />
            <br />
            <div className="button button-black">
              <a
                href="https://docs.google.com/forms/d/1_Mg4PahclKNH4CGPjrlEYS4P2sa7_idS-BG-eavd9XM/prefill"
                className="default text-white bg-green-600 rounded-full p-4 hover:bg-green-700"
              >
                Daftar Disini!
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Main;
