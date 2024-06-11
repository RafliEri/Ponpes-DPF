import React from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ponpes from "../images/Image/WhatsApp Image 2023-06-08 at 09.20.43(1).jpeg";
import Card from "../components/card";
import Program from "../components/Program";
import Typing from 'react-typing-effect';
import flower from '../images/Icon/flower.png'

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
    <>
      <div className="tagLine text-center bg-gradient-to-t from-pink-500 to-gray-100">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="p-10 flex flex-col md:flex-row justify-center gap-16"
        >
          <div className="judul text-center md:text-left">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-semibold font-fjalla text-3xl mt-10 drop-shadow-xl md:mt-20 md:ml-2 "
            >
              Selamat Datang di Official Website
              <br />
              Pondok Pesantren Putri Djalaluddin Pane
            </motion.h2>
            <div className="flex justify-center mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=6285234567951&text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20seputar%20pondok%20bisakah%20dibantu%3F"
                className="default text-white font-semibold bg-gray-900 rounded-full p-4 hover:bg-black"
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
            className="max-w-xs mt-10 md:mt-0"
          >
            {!imageLoaded && <Skeleton height={200} />}
            <img
              src={ponpes}
              alt="ponpes"
              className={`rounded-lg transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </motion.article>
      </div>

      <div className="bg-pink-500 p-4 ">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-white text-2xl font-bold mb-4 text-center mt-10 font-extrabold"
      >
        TENTANG PONDOK PESANTREN PUTRI DJALALUDDIN PANE
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative bg-white rounded-lg p-4 mt-6 max-w-xl mx-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <h2 className="text-xl font-bold mb-2">
            Apa Itu Pondok Pesantren Djalaluddin Pane?
          </h2>
          <p className="text-justify font-semibold">
            Pondok Pesantren Djalaluddin Pane adalah pondok pesantren tahfizh dan adab yang berbasis sains dan teknologi. Pondok Pesantren Djalaluddin Pane juga mendapatkan predikat sebagai pesantren ramah anak yang terbebas dari bullying, kekerasan, dan pelecehan seksual.
          </p>
          <div className="absolute bottom-0 left-0">
            <img src={flower} alt="Flower" className=" rounded-bl-lg w-16 h-16" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="relative bg-white rounded-lg p-4 mt-6 max-w-xl mx-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <div className="absolute top-0 right-0">
            <img src={flower} alt="Flower" className=" rounded-bl-lg rotate-180 w-16 h-16" />
          </div>
          <h2 className="font- fjalla text-xl font-bold mb-2 ml-6">Keunggulan</h2>
          <ul className="text-lg text-left list-disc list-inside font-semibold">
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
        className="relative bg-white rounded-lg p-4 mt-6 mx-auto max-w-xl mb-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      >
        <div className="absolute bottom-0 right-0">
          <img src={flower} alt="Flower" className=" rounded-bl-lg transform -scale-x-100 w-16 h-16" />
        </div>
        <h2 className="text-xl font-bold mb-2 text-center">VISI</h2>
        <p className="text-lg text-center font-semibold mb-6">Mendidik adab membangun peradaban</p>
        <h2 className="text-xl font-bold mb-2 text-center">MISI</h2>
        <ul className="text-lg text-left list-disc list-inside font-semibold">
          <li>Melaksanakan pendidikan berbasis Al Qur’an, Hadits, dan adab</li>
          <li>Membentuk karakter santri yang berakhlak mulia, disiplin, kreatif, dan mandiri</li>
          <li>Menerapkan sistem pembelajaran berbasis TIK</li>
        </ul>
      </motion.div>
    </div>

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-pink-500"
      >
        
      </motion.div> */}

      <div className="Pendaftaran text-center p-10 relative bg-gradient-to-b from-pink-500 to-gray-100">
        <article>
          <div className="selengkapnya text-center md:text-center text-lg font-semibold">
      <Program />
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="text-xl mb-3"
            >
              Masya Allah ternyata banyak banget ya impact jika putra putri bapak
              ibu bisa menjadi bagian dari Pondok Pesantren Djalaluddin Pane ini,
            </motion.p>
            <Typing
            text={[
              "Yuk tunggu apalagi langsung daftar di Pondok Pesantren Putri Djalaluddin Pane."
            ]}
              className="text-2xl mt-2 font-extrabold mx-auto max-w-4xl"
              speed={100}
              eraseDelay={4000}
          />
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="text-xl text-logo font-bold mb-12 mt-12 bg-yellow-300 mx-auto max-w-fit"
            >
              Alur Pendaftaran
            </motion.p>
            <Card />
            <br />
            <br />
            <div className="button button-black">
              <a
                href="https://docs.google.com/forms/d/1_Mg4PahclKNH4CGPjrlEYS4P2sa7_idS-BG-eavd9XM/prefill"
                className="default text-white font-semibold bg-gray-900 rounded-full p-4 hover:bg-black"
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
