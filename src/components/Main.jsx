import React from "react";
import ponpes from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.43(1).jpeg";
import tentang from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.46.jpeg";
import tahfidz from "../images/Image/hafiz.webp"
import adab from "../images/Image/Adab.png"
import dirasah from "../images/Image/dirasah.png"
import bahasa from "../images/Image/bahasa.png"
import tik from "../images/Image/tik.png"

function Main() {
  return (
    <main>
      <div className="tagLine text-center mt-0.5">
        <article className="bg-green-200 p-10 flex justify-center gap-16">
          <div className="judul">
            <h2 className="font-semibold text-3xl mt-20 ml-9">Selamat Datang di Official Website<br></br> Pondok Pesantren Djalaluddin</h2>
            <div className="button button-black mt-11">
              <a href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20seputar pondok%20bisakah%20dibantu%3F" className="default text-white bg-black rounded-full p-4">Hubungi Kami</a>
            </div>
          </div>
          <img src={ponpes} alt="ponpes" className="max-w-lg rounded-lg ml-20 mr-auto"/>
        </article>
      </div>


      <div className="tentangKami bg-green-100 p-10">
        <h2 className="text-2xl text-center">Tentang Pesantren Djalaluddin Pane</h2>
        <article className="bg-green-100 p-10 flex justify-center gap-16">
          <img src={tentang} alt="Tentang Kami DPF" className="max-w-xs rounded-lg"/>
          <div className="selengkapnya">
            <h2 className="text-xl mb-4">Apa Itu Pondok Pesantren Djalaluddin?</h2>
            <p>Pondok Pesantren Djalaluddin adalah pondok pesantren tahfizh dan adab yang berbasis sains dan teknologi. Pondok pesantren Djalaluddin juga mendapatkan predikat sebagai pesantren ramah anak yang terbebas dari bullying, kekerasan, dan pelecehan seksual.</p>            
            <h2 className="text-xl mt-4 mb-4">Keunggulan Pondok Pesantren Djalaluddin Pane</h2>
            <p>Pembelajaran berbasis sains dan teknologi, pesantren ramah anak, tenaga pendidik yang berkualitas dan tersertifikasi, lingkungan pesantren yang mendukung (asri dan terlindungi), dan biaya yang terjangkau</p>
          </div>
        </article>
      </div>
      <div className="program text-center bg-green-100 p-10">
        <h2 className="text-2xl mb-6">Program Unggulan</h2>
        <section className="flex justify-center gap-4">
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img src={tahfidz} alt="tahfidz" className="featured-image rounded-lg mb-2"/>
            <h2 className="text-xl">Tahfidz Al-Quran</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img src={adab} alt="adab" className="featured-image rounded-lg mb-2"/>
            <h2 className="text-xl">Adab Islam</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img src={dirasah} alt="Dirasah Islamiyah" className="featured-image rounded-lg mb-2"/>
            <h2 className="text-xl">Dirasah Islamiyah</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img src={bahasa} alt="Program Bahasa Arab dan Inggris" className="featured-image rounded-lg mb-2"/>
            <h2 className="text-xl">Bahasa Arab dan Inggris</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img src={tik} alt="kktik" className="featured-image rounded-lg mb-2"/>
            <h2 className="text-xl">Keterampilan Keputrian dan TIK</h2>
          </div>
        </section>
      </div>

      {/* <div className="alur text-center mt-10 p-10">
        <h2 className="text-2xl mb-4">Alur Pendaftaran Pondok Pesantren Djalaluddin Pane</h2>
        <p>Mari bersama memberdayakan dan ikut serta membukakan pintu pemberdayaan bagi kesejahteraan masyarakat fakir dan miskin bersama kami</p>
        <article className="mitra flex justify-center gap-4 mt-10">
          <img src="../image/1-removebg-preview.png" alt="" className="card max-w-xs rounded-lg"/>
          <img src="../image/2.png" alt="" className="card max-w-xs rounded-lg"/>
          <img src="../image/3.png" alt="" className="card max-w-xs rounded-lg"/>
          <img src="../image/4.png" alt="" className="card max-w-xs rounded-lg"/>
          <img src="../image/5.png" alt="" className="card max-w-xs rounded-lg"/>
          <img src="../image/6-removebg-preview.png" alt="" className="card max-w-xs rounded-lg"/>
        </article>
      </div> */}

      <div className="Pendaftaran text-center p-10">
        <article>
          <div className="selengkapnya">
            <p>Masya Allah ternyata banyak banget ya impact jika putra putri bapak ibu bisa menjadi bagian dari Pondok Pesantren Djalaluddin Pane ini, </p>            
            <p className="mb-12">yuk tunggu apalagi langsung daftar di Pondok Pesantren Djalaluddin Pane</p>
            <div className="button button-black">
              <a href="https://docs.google.com/forms/d/1_Mg4PahclKNH4CGPjrlEYS4P2sa7_idS-BG-eavd9XM/prefill" className="default text-white bg-black rounded-full p-4">Daftar Disini!</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Main;
