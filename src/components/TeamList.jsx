import React from 'react';
import TeamMemberCard from './TeamMemberCard';

import image1 from '../images/team/image2.jpg';

const teamMembers = [
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
    {
        name: "Nama",
        age: "Umur",
        position: "Tugas",
        imgSrc: image1,
    },
];

const TeamList = () => {
    return (
        <div className="min-h-screen bg-teal-600 flex flex-col items-center py-10">
            <h1 className="text-2xl font-bold text-white mb-10 text-center">USTADZ DAN USTADZAH<br/>PONDOK PESANTREN PUTRI DJALALUDIN</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        imgSrc={member.imgSrc}
                        name={member.name}
                        age={member.age}
                        position={member.position}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamList;
