import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-50 mt-20 flex items-center justify-center relative w-full px-4 sm:px-6 lg:px-8 my-10"
    >
      <div className="text-center z-10 mx-auto rounded-2xl py-8 sm:py-10 px-5 sm:px-10 w-full max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl arvo-bold font-bold mb-6 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
          Hi, I'm Ganesh
        </h1>

        <p className="text-base sm:text-lg lg:text-xl matter max-w-4xl mx-auto my-5 text-[rgb(29,108,173)] mb-8 text-justify leading-relaxed">
          A final-year{" "}
          <span className="sub text-blue-800 font-semibold">
            B.Tech student in Computer Science (AI & ML)
          </span>
          , actively seeking a job opportunity. Experienced in Java, Python and
          MySQL. Gained hands-on experience of AWS and RHEL system
          administration. Built projects such as a containerized application,
          text-to-speech conversion, and image search using AWS & RHEL,
          integrated with ML and web technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:bg-blue-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
