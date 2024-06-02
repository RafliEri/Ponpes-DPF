import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// Import images
import image1 from '../images/Image/039508000_1672714709-learning_Arabic.webp';
// import image2 from '../images/Image/WhatsApp Image 2023-06-08 at 09.20.43(1).jpeg';
// import image3 from '../images/Image/WhatsApp Image 2023-06-08 at 09.20.46.jpeg';
import image4 from '../images/Image/istock-1293985170_ratio-16x9.jpg';

function Slider({ slides, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[400px] w-full m-auto py-8 px-4 relative group'>
      <h2 className="text-center text-xl font-bold mb-4">{title}</h2>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-[300px] rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
  );
}

function Program() {
  const slides1 = [
    { src: image1 },
    { src: image4 },
  ];

  const slides2 = [
    { src: image4 },
    { src: image1 },
  ];

  return (
    <div className='max-w-[900px] w-full m-auto py-16 px-4'>
    <p className='text-teal-700 text-center font-bold text-2xl'>Program Unggulan</p>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <Slider slides={slides1} title="Kegiatan 1" />
        <Slider slides={slides2} title="Kegiatan 2" />
      </div>
    </div>
  );
}

export default Program;
