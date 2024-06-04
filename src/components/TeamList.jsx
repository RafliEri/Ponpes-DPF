import React from 'react';
import TeamMemberCard from './TeamMemberCard';

import image1 from '../images/team/usth. salbiyah.jpeg';
import image2 from '../images/team/usth. nesmiyeti.jpeg';
import image3 from "../images/team/usth. farah.jpeg";
import image4 from "../images/team/usth.laila.jpeg";
import image5 from '../images/team/k.h wahfiudin2.jpeg';
import image6 from "../images/team/FOTO-KIKI-3.jpeg";
import image7 from "../images/team/ustd. dedi.jpeg";
import image8 from "../images/team/irfana stefiano.jpeg";
import image9 from "../images/team/ustd. bagus.jpeg";
import image10 from "../images/team/usth. yuli.jpeg"


const teamPembina = [
    {
        name: "Ustadzah Hj. Salbiyah Sakam Bachrum,S.Ag",
        position: "Alumni Prodi  Pendidikan Bahasa Inggris UIN Jakarta dan Mantan pengajar di Yayasan AL Muslim, Tambun, Bekasi",
        imgSrc: image1,
    },
    {
        name: "Ustadzah Nesmiyeti Nasim, S.Ag",
        position: "Lulusan Pondok Putri Padang Panjang dan Ketua Yayasan Rahmatan Lil Alamin, Bogor ",
        imgSrc: image2,
    },
    {
        name: "Ustadzah Farah FakhiraRamadhania, S.TP ",
        position: "Ahli Teknologi Pangan",
        imgSrc: image3,
    },
    {
        name: "Ustadzah Laila Majda, S.E, M.P.D",
        position: "Pimpinan MT Remaja KOmsol",
        imgSrc: image4,
    },
];

const teamPenasihat = [
    {
        name: "K.H. Wahfiudin Sakam, SE., MBA",
        position: "Da’i Nasional, Wakil Ketua Komisi Pendidikan dan Kaderisasi MUI",
        imgSrc: image5,
    },
    {
        name: "Ustadz Rakhmat Zailani Kiki",
        position: "Dewan Pengawas Syari’ah Laznas DPF",
        imgSrc: image6,
    },
    {
        name: "Ustadz Dedi Sukarni",
        position: "Founder Arrahmah Islamic School dan Founder Ponpes Askar Komsol 89",
        imgSrc: image7,
    },
    {
        name: "Irfana Steviano, S.Pd., M.Ed",
        position: "Pakar Teknologi Pendidikan dan CEO Laznas DPF ",
        imgSrc: image8,
    },
];

const teamPengasuh = [
    {
        name: "Ust. Bagus Prastya, S.Ag, Al Hafizh",
        position: "Alumni Universitas Negeri Jakarta dan Hafizh 30 Juz",
        imgSrc: image9,
    },
    {
        name: "Ustadzah. Yuli Nur Azizah, Al Hafizhah",
        position: "Alumni Pondok Pesantren Gema Insan Cendekia, Karawang dan Hafizhah 30 Juz",
        imgSrc: image10,
    },
];
const TeamList = () => {
    return (
        <>
        <div className="min-h-screen bg-teal-600 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white mb-1 text-center italic">PEMBINA</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                {teamPembina.map((member, index) => (
                    <TeamMemberCard
                    key={index}
                    imgSrc={member.imgSrc}
                    name={member.name}
                        position={member.position}
                        />
                    ))}
            </div>
            <h1 className="text-2xl font-bold text-white mb-1 text-center mt-20 italic">PENASIHAT</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teamPenasihat.map((member, index) => (
                    <TeamMemberCard
                    key={index}
                    imgSrc={member.imgSrc}
                    name={member.name}
                    position={member.position}
                        />
                    ))}
            </div>
            <h1 className="text-2xl font-bold text-white mb-1 text-center mt-20 italic">PENGASUH</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-12">
                {teamPengasuh.map((member, index) => (
                    <TeamMemberCard
                    key={index}
                    imgSrc={member.imgSrc}
                    name={member.name}
                    position={member.position}
                        />
                    ))}
            </div>
        </div>
        </>
    );
};

export default TeamList;




