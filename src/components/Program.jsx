import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import tahfidz from "../images/Image/Tahfidz.png";
import adab from "../images/Image/Adab.png";
import dirasah from "../images/Image/dirasah.png";
import bahasa from "../images/Image/bahasa.png";
import tik from "../images/Image/tik.png";

const programs = [
  {
    src: tahfidz,
    alt: "Tahfidz Al-Quran",
    title: "Tahfidz Al-Quran",
    description: `
      Pondok Pesantren Putri Djalaludin menggunakan metode menghafal Al Qur’an Pakistani. Metode Pakistani ini adalah aplikasi dari metode yang diterapkan di Pakistan dalam menghafal Al-Qur’an. Metode Pakistani ini terdiri dari sabaq, sabqi dan manzil. Sabaq adalah penambahan hafalan baru yang wajib disetorkan peserta didik setiap harinya. Sabqi adalah hafalan sabaq yang telah dihafal kemudian disetor kembali dalam bentuk gabungan dari beberapa sabaq yang belum mencapai 1 juz. Sedangkan manzil adalah hafalan sabqi yang telah mencapai 1 juz kemudian di setorkan kepada pengampuh halaqah masing-masing. Tujuan dari penelitian ini adalah untuk mengetahui perencanaan, pelaksanaan dan evaluasi metode pakistani pada pelajaran tahfidz Qur’an di Pondok Pesantren Putri Djalaludin. Metode pakistani ini dilakukan dengan 3 tahapan yaitu perencanaan, pelaksanaan dan evaluasi.
    `,
  },
  {
    src: dirasah,
    alt: "Dirasah Islamiyah",
    title: "Dirasah Islamiyah",
    description: "Dirasah Islamiyah di Pondok Pesantren Putri Djalaludin menggunakan pembelajaran berbasis ahlu sunnah wal jama’ah, yaitu pembelajaran fiqh menggunakan mazhab Syafi’i, pembelajaran Aqidah menggunakan firqah Asy’ariyah dan Maturidiyah, dan pembelajaran Adab dan Tasawuf menggunakan mazhab Imam Ghazali dan Imam Junaid AL Baghdadi.",
  },
  {
    src: adab,
    alt: "Adab Islam",
    title: "Adab Islam",
    description: "Makna adab merupakan esensi dari semua sikap yang baik melalui latihan terpuji yang membuat seseorang mencapai satu keutamaan. Sedangkan orang yang beradab adalah orang yang terhimpun sikap baik di dalam dirinya. Pendapat ini dikemukakan oleh Abu al-Qasim al-Qusyairy (w 465H) dalam kitabnya al-Risālah al-Qusyiriyah, dan dikuatkan oleh Muhammad, Ali al-Fayyumi yang disepakati Abu Zaid al-Anshari, yang dikutip oleh Ardiyansyah. Makna adab dalam sisi ini bermakna semua nilai-nilai kebaikan yang dapat mendatangkan keutamaan dan ketenangan jiwa. Ibn al-Qayyim al-Jauziyah (w.751) menanggapi pendapat alQusyairy bahwa adab adalah aplikasi atau pengamalan akhlak yang baik, karena adab merupakan upaya aktualisasi kesempurnaan karakter dari potensi menuju aplikasi.",
  },
  {
    src: bahasa,
    alt: "Program Bahasa Arab dan Inggris",
    title: "Bahasa Arab dan Inggris",
    description: "Pondok Pesantren Putri Djalaludin menerapkan pembelajaran Bahasa Inggris dan Arab dalam pembelajarannya. Implementasi dari program bahasa Inggris dan Arab ini adalah santri akan diberikan mahfuzhat (kosakata bahasa Arab) dan vocabulary (Kosakata Bahasa Inggris) setiap hari sebanyak 5-10 kata. Santri wajib menghafalkannya dan mempraktekkannya di hari khusus bahasa Inggris dan Ararb. Hari khusus Bahasa Inggris dan Arab akan diadakan setiap sebulan 2 kali.",
  },
  {
    src: tik,
    alt: "Keterampilan Keputrian dan TIK",
    title: "Keterampilan Keputrian dan TIK",
    description: "Keterampilan TIK di Pondok Pesantren Putri Djalaludin akan berfokus pada teknologi AI dan aplikasi multimedia.",
  },
];

const Program = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', image: '', description: '' });

  const openModal = (program) => {
    setModalContent(program);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="program text-center py-10 font-body">
      <h2 className="text-3xl mb-8 font-heading font-extrabold text-pink-400">Program Unggulan</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white card p-6 shadow-lg rounded-md cursor-pointer hover:bg-primary transition transform hover:scale-105 duration-300"
            onClick={() => openModal(program)}
          >
            <img
              src={program.src}
              alt={program.alt}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold text-accent">{program.title}</h2>
          </div>
        ))}
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg relative max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-300"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <img
              src={modalContent.src}
              alt={modalContent.alt}
              className="rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-2xl text-primary mb-4 font-heading font-bold">{modalContent.title}</h2>
            <div className="text-gray-700 space-y-4 text-justify">
              {modalContent.description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-2">{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Program;
