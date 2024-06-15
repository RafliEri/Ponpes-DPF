import React from 'react';
import { motion } from 'framer-motion';
import kolam from "../images/Image/kolam.jpeg";
import mushola from '../images/Image/mushola.jpeg';
import taman from '../images/Image/taman.jpeg';
import asrama from "../images/Image/asrama.png";
import rb from "../images/Image/rb.png";

const images = [
  { src: rb, alt: "Ruang Belajar", label: "Ruang Belajar" },
  { src: mushola, alt: "Musholla", label: "Musholla" },
  { src: taman, alt: "Taman", label: "Taman" },
  { src: asrama, alt: "Asrama", label: "Asrama" },
  { src: kolam, alt: "Kolam Berenang", label: "Kolam Berenang" },
];

const Fasilitas = () => {
  return (
    <div className='pt-20 pb-20'>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0 }}
            >
              <motion.img
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-auto rounded-tr-3xl">
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
