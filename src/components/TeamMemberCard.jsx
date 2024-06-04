import React from 'react';

const TeamMemberCard = ({ imgSrc, name, age, position }) => {
    return (
        <div className="mt-10 p-1 rounded-lg  flex flex-col items-center">
            <img src={imgSrc} alt={name} className="w-24 h-24 rounded-2xl mb-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" />
            <h2 className="text-lg text-white font-semibold">{name}</h2>
            <p className="text-gray-200 mt-2 text-center max-w-md">{position}</p>
        </div>
    );
};

export default TeamMemberCard;
