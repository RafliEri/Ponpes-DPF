import React from "react";
import ponpes from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.43(1).jpeg";
import tentang from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.46.jpeg";
import tahfidz from "../images/Image/hafiz.webp";
import adab from "../images/Image/Adab.png";
import dirasah from "../images/Image/dirasah.png";
import bahasa from "../images/Image/bahasa.png";
import tik from "../images/Image/tik.png";
import Card from "./card";

function Main() {
  return (
    <main>
      <div className="tagLine text-center mt-0.5">
        <article className="bg-green-200 p-10 flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="judul text-center md:text-left">
            <h2 className="font-semibold text-3xl mt-10 md:mt-20 md:ml-2">
              Selamat Datang di Official Website
              <br />
              Pondok Pesantren Djalaluddin
            </h2>
            <div className="flex justify-center mt-11">
              <a
                href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20seputar%20pondok%20bisakah%20dibantu%3F"
                className="default text-white bg-black rounded-full p-4"
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

      <div className="tentangKami bg-green-100 p-10">
        <h2 className="text-2xl text-center font-bold">
          Tentang Pondok Pesantren Djalaluddin
        </h2>
        <article className="bg-green-100 p-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-16">
          <img
            src={tentang}
            alt="Tentang Kami DPF"
            className="max-w-xs rounded-lg mb-4 md:mb-0"
          />
          <div className="selengkapnya text-center md:text-left">
            <h2 className="text-xl mb-4 font-semibold">
              Apa Itu Pondok Pesantren Djalaluddin?
            </h2>
            <p className="text-lg text-justify">
              Pondok Pesantren Djalaluddin adalah pondok pesantren tahfizh dan
              adab yang berbasis sains dan teknologi. Pondok pesantren
              Djalaluddin juga mendapatkan predikat sebagai pesantren ramah anak
              yang terbebas dari bullying, kekerasan, dan pelecehan seksual.
            </p>
            <br></br><br></br>
            <h2 className="text-xl mt-4 mb-4 font-semibold">
              Keunggulan Pondok Pesantren Djalaluddin
            </h2>
            <ul className="text-lg text-left" style={{ listStyleType: 'disc' }}>
                    <li>Pembelajaran berbasis sains dan teknologi.</li>
                    <li>Pesantren ramah anak.</li>
                    <li>Tenaga pendidik yang berkualitas dan tersertifikasi.</li>
                    <li>Lingkungan
              pesantren yang mendukung (asri dan terlindungi).</li>
                    <li>Biaya yang
              terjangkau.</li>
                </ul>
            {/* <p className="text-lg">
              - Pembelajaran berbasis sains dan teknologi.<br></br>- Pesantren ramah anak.<br></br>
              - Tenaga pendidik yang berkualitas dan tersertifikasi.<br></br>- Lingkungan
              pesantren yang mendukung (asri dan terlindungi).<br></br>- Biaya yang
              terjangkau.
            </p> */}
          </div>
        </article>
      </div>
      <div className="program text-center bg-green-100 p-10">
        <h2 className="text-2xl mb-6">Program Unggulan</h2>
        <section className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img
              src={tahfidz}
              alt="tahfidz"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl">Tahfidz Al-Quran</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img
              src={adab}
              alt="adab"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl">Adab Islam</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img
              src={dirasah}
              alt="Dirasah Islamiyah"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl">Dirasah Islamiyah</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img
              src={bahasa}
              alt="Program Bahasa Arab dan Inggris"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl">Bahasa Arab dan Inggris</h2>
          </div>
          <div className="fotoProgram card p-4 shadow-lg rounded-md">
            <img
              src={tik}
              alt="kktik"
              className="featured-image rounded-lg mb-2"
            />
            <h2 className="text-xl">Keterampilan Keputrian dan TIK</h2>
          </div>
        </section>
      </div>

      <div className="Pendaftaran text-center p-10">
        <article>
          <div className="selengkapnya text-center md:text-center text-lg font-semibold">
            <p>
              Masya Allah ternyata banyak banget ya impact jika putra putri
              bapak ibu bisa menjadi bagian dari Pondok Pesantren Djalaluddin ini,
            </p>
            <p className="mb-12">
              yuk tunggu apalagi langsung daftar di Pondok Pesantren Djalaluddin.
            </p>
            <p className="text-xl font-bold mb-12">
              Alur Pendaftaran
            </p>
            <Card /><br></br><br></br>
            <div className="button button-black">
              <a
                href="https://docs.google.com/forms/d/1_Mg4PahclKNH4CGPjrlEYS4P2sa7_idS-BG-eavd9XM/prefill"
                className="default text-white bg-black rounded-full p-4"
              >
                Daftar Disini!
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Main;
