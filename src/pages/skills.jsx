import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills"> {/* Correct ID here */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-extrabold text-center mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-600 shadow-lg animate-glow">
           Skills {/* Make sure to correct spelling if needed */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillCard icon={<FaHtml5 className="text-6xl mb-4 text-orange-500" />} title="HTML5" description="Markup language for web pages" />
          <SkillCard icon={<FaCss3Alt className="text-6xl mb-4 text-blue-400" />} title="CSS3" description="Styling language for web pages" />
          <SkillCard icon={<FaReact className="text-6xl mb-4 text-cyan-400" />} title="ReactJS" description="Library for building user interfaces" />
          <SkillCard icon={<FaNodeJs className="text-6xl mb-4 text-green-500" />} title="Node.js" description="JavaScript runtime for server-side" />
          <SkillCard icon={<FaDatabase className="text-6xl mb-4 text-yellow-500" />} title="SQL" description="Database management language" />
          <SkillCard icon={<SiPostman className="text-6xl mb-4 text-red-600" />} title="Postman" description="API development environment" />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  </div>
);

export default Skills;
