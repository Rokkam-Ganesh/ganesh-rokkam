import React from "react";

const Education = () => {
  return (
    <section className="flex items-center justify-center relative w-full mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="z-10 bg-white mx-auto rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl py-8 px-5 sm:px-8 md:px-10 w-full lg:w-[70%]">
        <h1 className="arvo-bold text-3xl font-bold mb-4 text-blue-600 text-center">
          Education
        </h1>
        <div className="p-4 sm:p-5">
          <h3>
            <strong className="text-lg sub">
              Bachelor of Technology in Computer Science (AI & ML)
            </strong>
          </h3>
          <p className="text-[#555] matter">
            Godavari Institute of Engineering and Technology, Rajahmundry
          </p>
          <p className="text-[#888]">2022 – 2026</p>
          <ul className="list-disc ml-5 sm:ml-8 text-sm sm:text-base mt-4 matter">
            <li>CGPA: 8.79/10</li>
            <li>
              <strong className="sub">Relevant Coursework</strong> : Data
              Structures & Algorithms, Operating Systems, Databases, Computer
              Networks, Machine Learning
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
