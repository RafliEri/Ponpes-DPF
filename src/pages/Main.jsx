import React from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ponpes from "../images/Image/ponpes.png";
import Card from "../components/card";
import Program from "../components/Program";
import Typing from 'react-typing-effect';
import flower from '../images/Icon/flower.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

function Main() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div>
      <div className="bg-white bg-opacity-70">
        <div className="container mx-auto py-20">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center gap-16"
          >
            <div className="text-center md:text-left">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-bold text-3xl md:text-4xl text-pink-400 mb-6"
              >
                Selamat Datang di <span className="italic"> Official Website </span>
                <br />
                Pondok Pesantren Putri Djalaludin
              </motion.h2>
              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20seputar%20pondok%20bisakah%20dibantu%3F"
                  className="text-white font-semibold rounded-full px-8 py-4 bg-pink-500 hover:bg-pink-700 transition"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 md:mt-0"
            >
              {!imageLoaded && <Skeleton height={200} />}
              <img
                src={ponpes}
                alt="ponpes"
                className={`rounded-lg transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} w-96`}
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </motion.article>
        </div>
      </div>

      <div className=" py-20">
        <div className="container mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-3xl md:text-3xl font-bold text-center mb-12 text-pink-400"
          >
            Tentang Pondok Pesantren Putri Djalaludin
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gray-100 rounded-lg p-8 shadow-lg relative"
            >
              <h2 className="text-2xl font-bold mb-4">Apa Itu Pondok Pesantren Djalaludin?</h2>
              <p className="text-lg font-medium text-gray-700">
                Pondok Pesantren Djalaludin adalah pondok pesantren tahfizh dan adab yang berbasis sains dan teknologi. Pondok Pesantren Djalaludin juga mendapatkan predikat sebagai pesantren ramah anak yang terbebas dari bullying, kekerasan, dan pelecehan seksual.
              </p>
              <div className="absolute bottom-0 left-0">
                <img src={flower} alt="Flower" className="rounded-bl-lg w-16 h-16" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-gray-100 rounded-lg p-8 shadow-lg relative"
            >
              <div className="absolute top-0 right-0">
                <img src={flower} alt="Flower" className="rounded-bl-lg w-16 h-16 rotate-180" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Keunggulan</h2>
              <ul className="list-disc list-inside text-lg font-medium text-gray-700">
                <li>Pembelajaran berbasis sains dan teknologi</li>
                <li>Pesantren ramah anak</li>
                <li>Tenaga pendidik yang berkualitas dan tersertifikasi</li>
                <li>Lingkungan pesantren yang mendukung (asri dan terlindungi)</li>
                <li>Biaya yang terjangkau</li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gray-100 rounded-lg p-8 shadow-lg relative mt-16"
          >
            <div className="absolute bottom-0 right-0">
              <img src={flower} alt="Flower" className="rounded-bl-lg w-16 h-16 -scale-x-100" />
            </div>
            <div className="absolute top-0 left-0">
              <img src={flower} alt="Flower" className="rotate-90 rounded-bl-lg w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">VISI</h2>
            <p className="text-lg font-medium text-center text-gray-700 mb-6"><span className="font-bold">Mendidik </span> adab membangun peradaban</p>
            <h2 className="text-2xl font-bold mb-4 text-center">MISI</h2>
            <ul className="text-center list-inside text-lg font-medium text-gray-700">
              <li><span className="font-bold">Melaksanakan </span>pendidikan berbasis Al Qur’an, Hadits, dan adab.</li>
              <li><span className="font-bold">Membentuk </span> karakter santri yang berakhlak mulia, disiplin, kreatif, dan mandiri.</li>
              <li><span className="font-bold">Menerapkan </span> sistem pembelajaran berbasis TIK.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="text-center"
          >
            <Program />
            <p className="text-xl font-medium mt-12 mb-8 text-gray-700">
              Masya Allah ternyata banyak banget ya impact jika putri bapak ibu bisa menjadi bagian dari Pondok Pesantren Djalaludin ini,
            </p>
            <Typing
              text={["Yuk tunggu apalagi langsung daftar di Pondok Pesantren Putri Djalaludin."]}
              className="text-2xl font-bold text-pink-500"
              speed={100}
              eraseDelay={4000}
            /><br/>
            <p className="text-xl font-bold mt-12 mb-8 bg-yellow-300 inline-block px-6 py-2 rounded-full">
              Alur Pendaftaran
            </p>
            <Card />
            <div className="mt-12">
              <a
                href="https://docs.google.com/forms/d/1_Mg4PahclKNH4CGPjrlEYS4P2sa7_idS-BG-eavd9XM/prefill"
                className="text-white font-semibold rounded-full px-8 py-4 bg-pink-500 hover:bg-pink-700 transition"
              >
                Daftar Disini!
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}

export default Main;
