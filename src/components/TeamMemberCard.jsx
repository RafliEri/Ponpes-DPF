import React from 'react';

const TeamMemberCard = ({ imgSrc, name, age, position }) => {
    return (
        <div className="mt-10 p-6 rounded-lg  flex flex-col items-center">
            <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-lg text-white font-semibold">{name}</h2>
            <p className="text-white">{age}</p>
            <p className="text-gray-200 text-center">{position}</p>
        </div>
    );
};

export default TeamMemberCard;
