import React from 'react';
import { motion } from 'framer-motion';

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
      className="bg-white rounded-lg overflow-hidden m-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
    >
      <img src={imgSrc} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{position}</p>
      </div>
    </motion.div>
        // <div className="mt-10 p-1 rounded-lg  flex flex-col items-center">
        //     <img src={imgSrc} alt={name} className="w-24 h-24 rounded-2xl mb-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" />
        //     <h2 className="text-lg text-white font-semibold">{name}</h2>
        //     <p className="text-gray-200 mt-2 text-center max-w-md">{position}</p>
        // </div>
    );
};

export default TeamMemberCard;
