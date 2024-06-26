import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import kolam1 from "../images/Image/kolam.jpeg";
import mushola2 from '../images/Image/mushola1.jpg';
import mushola1 from '../images/Image/mushola.jpeg';
import taman1 from '../images/Image/taman.jpeg';
import asrama from "../images/Image/asrama.png"
import asrama1 from "../images/Image/asrama1.png";
import asrama2 from "../images/Image/asrama2.png";
import asrama3 from "../images/Image/asrama3.png";
import asrama4 from "../images/Image/asrama4.png";
import rb from "../images/Image/rb.png";
import rb1 from "../images/Image/rb2.jpg";
import rb2 from "../images/Image/rb3.jpg";

const images = [
  { label: "Ruang Belajar", images: [rb, rb1, rb2] },
  { label: "Musholla", images: [mushola1, mushola2] },
  { label: "Taman", images: [taman1] },
  { label: "Asrama", images: [asrama, asrama1, asrama2, asrama3, asrama4] },
  { label: "Kolam Berenang", images: [kolam1] },
];

const Fasilitas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabelIndex, setSelectedLabelIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const openModal = (labelIndex) => {
    setSelectedLabelIndex(labelIndex);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images[selectedLabelIndex].images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images[selectedLabelIndex].images.length) % images[selectedLabelIndex].images.length);
  };

  return (
    <div className='pt-20 pb-20'>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((imageCategory, labelIndex) => (
            <motion.div
              key={labelIndex}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: labelIndex * 0 }}
              onClick={() => openModal(labelIndex)}
            >
              <motion.img
                src={imageCategory.images[0]}
                alt={imageCategory.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-auto rounded-tr-3xl">
                <h2 className="text-xl font-bold">{imageCategory.label}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center"
        contentLabel="Image Modal"
      >
        <div className="relative w-full max-w-3xl mx-auto p-4 rounded-lg">
          <button onClick={closeModal} className="absolute top-2 right-2 font-extrabold bg-close bg-opacity-75 rounded-lg p-2">
            <FaTimes size={20} />
          </button>
          <div className="flex justify-between items-center">
            <button onClick={prevImage} className="p-3 mr-4 font-extrabold bg-white bg-opacity-75 rounded-lg">
              <FaArrowLeft size={20} />
            </button>
            <div className="w-full h-auto max-h-screen max-w-full flex items-center justify-center">
              <img
                src={images[selectedLabelIndex].images[selectedImageIndex]}
                alt={images[selectedLabelIndex].label}
                className="object-cover max-w-full max-h-full"
              />
            </div>
            <button onClick={nextImage} className="p-3 ml-4 font-extrabold bg-white bg-opacity-75 rounded-lg">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Fasilitas;
