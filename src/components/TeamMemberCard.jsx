import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TeamMemberCard = ({ imgSrc, name, position }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible" 
      variants={cardVariants}
      transition={{ duration: 0.6 }}
      className="relative pb-14 bg-white rounded-br-full rounded-t-full overflow-visible w-full md:w-64 mb-4 md:mb-0 shadow-[5px_5px_rgba(0,98,90,0.4),10px_10px_rgba(0,98,90,0.3),15px_15px_rgba(0,98,90,0.2),20px_20px_rgba(0,98,90,0.1),25px_25px_rgba(0,98,90,0.05)] inline-block"
    >
        <img src={imgSrc} alt={name} className="pr-5 pl-5 w-80 h-80 rounded-r-full rounded-bl-full object-cover" />
    
      <div className="pt-13 p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{name}</h2>
        <p className="text-pink-600">{position}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
