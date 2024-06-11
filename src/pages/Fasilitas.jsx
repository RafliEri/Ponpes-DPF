import React from 'react';
import { motion } from 'framer-motion';
import kolam from "../images/Image/kolam.jpeg";
import mushola from '../images/Image/mushola.jpeg';
import taman from '../images/Image/taman.jpeg';
import asrama from "../images/Image/asrama.jpeg";
import rb from "../images/Image/rb.jpg";

const images = [
  { src: rb, alt: "Ruang Belajar", label: "Ruang Belajar" },
  { src: mushola, alt: "Musholla", label: "Musholla" },
  { src: taman, alt: "Taman", label: "Taman" },
  { src: asrama, alt: "Asrama", label: "Asrama" },
  { src: kolam, alt: "Kolam Berenang", label: "Kolam Berenang" },
];

const Fasilitas = () => {
  return (
    <div className='bg-teal-600 pt-10 pb-10'>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
          key={index}
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0 }}
            >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
              <h2 className="text-xl font-bold">{image.label}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      </div>
  );
};

export default Fasilitas;
