import React from 'react';
import flwr from '../images/Icon/flower.png'

const FlowerDiv = () => {
  return (
    <div className="relative bg-pink-500 w-full h-48 rounded-lg shadow-lg mt-4">
      <div className="absolute bottom-0 left-0 m-2 p-4">
        <img src={flwr} alt="Floral motif" className="h-16 w-16"/>
      </div>
    </div>
  );
};

export default FlowerDiv;
