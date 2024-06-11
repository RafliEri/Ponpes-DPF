import React from "react";
import { motion } from "framer-motion";
import logo from "../images/Icon/Logo Ponpes.png";
import TeamList from '../components/TeamList';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function Tentang() {
  return (
    <>
      <div className="bg-logo p-8 md:p-40 mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          transition={{ duration: 0.6 }}
          className="logo flex flex-col md:flex-row items-center bg-white p-4 md:p-8 rounded-md shadow-[5px_5px_0px_0px_#1a202c] mb-8"
        >
          <img src={logo} alt="Logo" className="h-12 md:h-24" />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-bold text-gray-800 drop-shadow-lg">
              Pondok Pesantren Putri
            </h1>
            <p className="text-gray-600 font-semibold">Djalaluddin Pane</p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container text-lg text-justify bg-white pt-6 pb-6 px-8 shadow-[5px_5px_0px_0px_#1a202c] md:pt-8 md:pb-8 md:px-20 rounded-lg"
        >
          <p className="text-logo font-semibold leading-relaxed">
            &nbsp;&nbsp;&nbsp; Pondok Pesantren Putri Djalaludin merupakan pondok pesantren tahfizh Al Qur’an berbasis adab dan teknologi yang bertempat di Jalan Budi Luhur, Kampung Babakan Haji, RT 003/002, Kelurahan Cisarua, Kecamatan Cisarua, Kabupaten Bogor. Pondok Pesantren Putri Djalaludin berdiri di atas villa milik keluarga besar Bapak H. Djalaluddin Pane. Pondok Pesantren Putri Djalaludin didirikan dengan tujuan “Mendidik Adab Membangun Peradaban”. Konsep Adab sangat ditekankan di pondok pesantren ini karena mengingat generasi muda zaman sekarang mengalami krisis adab (karakter). Maka dari itu dengan berdirinya pondok pesantren putri Djalaludin ini menjadi salah satu pelopor revolusi adab bagi generasi penerus bangsa Indonesia.
          </p>
          <p className="text-logo font-semibold leading-relaxed mt-4">
            Pondok Pesantren Djalaludin memiliki 5 program unggulan, yaitu tahfizh Al Qur’an, Dirasah Islamiyah, Adab Islam, Bahasa Inggris dan Arab, dan KKTIK. Pondok Pesantren Putri Djalaludin juga mendapat predikat sebagai Pesantren ramah anak yang terbebas dari bullying, kekerasan, dan pelecehan seksual. Hal ini supaya santri merasa aman dan nyaman dalam belajar di pondok pesantren putri Djalaludin.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="p-8 md:p-20 bg-logo"
      >
        <TeamList />
      </motion.div>
    </>
  );
}

export default Tentang;
