import React from "react";
import p1 from "../assets/p1.png"; // Adjust path as needed

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-extrabold text-center mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-600 shadow-lg animate-glow">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={p1}
            alt="Portfolio Image"
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0 shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
          <div className="flex-1 text-lg mb-8">
            <p className="relative text-gray-300 italic pl-6 mb-8">
              <span className="absolute left-0 top-0 transform -translate-y-1/2 text-7xl text-gray-500  mb-10">“</span>
              I am a passionate full-stack developer specializing in building modern, responsive web applications. With a solid foundation in both frontend and backend technologies, I am dedicated to crafting seamless, efficient, and user-friendly experiences.
              <span className="absolute right-0 bottom-0 transform translate-y-1/2 text-7xl text-gray-500">”</span>
            </p>
            <div className="space-y-6 mt-8">
              {/** Skills Progress Bars **/}
              <SkillBar label="HTML & CSS" progress="10/12" />
              <SkillBar label="React JS" progress="11/12" />
              <SkillBar label="Node JS" progress="9/12" />
            </div>
            <div className="mt-12 flex justify-around text-center">
              <StatCard value="2+" label="Years Experience" />
              <StatCard value="15+" label="Projects Completed" />
              {/** Uncomment if you have this data **/}
              {/* <StatCard value="10+" label="Happy Clients" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, progress }) => {
  const width = `${(parseInt(progress.split('/')[0]) / parseInt(progress.split('/')[1])) * 100}%`;
  return (
    <div className="flex items-center">
      <label className="w-1/4 text-lg font-semibold">{label}</label>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
        <div
          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-300`}
          style={{ width }}
        />
      </div>
    </div>
  );
};

const StatCard = ({ value, label }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300">
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {value}
      </h3>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default About;
