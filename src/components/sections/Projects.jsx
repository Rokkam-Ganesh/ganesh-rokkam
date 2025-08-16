import React from "react";
import bg from "../../assets/bg.png";

const Projects = () => {
  const projects = [
    {
      title: "VisionCast – Smart Image & Audio Output",
      image: bg,
      github: "https://github.com/Rokkam-Ganesh/VisionCast-Smart-Image-Audio-Output",
      techStack: ["Lambda"," S3", "Rekognition", "Polly", "DynamoDB"],
      description:
        "Developed a React frontend 50+ text/audio files and 100+ images, integrated with 5+ AWS Services",
    },
    {
      title: "Podman Web Server with S3 Backup",
      image: bg,
      github: "https://github.com/Rokkam-Ganesh/FreeIPA-S3Backup",
      techStack: ["Podman", "S3", "EC2", "RHEL", "Docker", "AWS"],
      description:
        "Running a Podman web server with S3 backup. The Web server is backed up to S3 using a cron job.",
    },
    {
      title: "Centralized FreeIPA Authentication with Route 53",
      image: bg,
      github: "https://github.com/Rokkam-Ganesh/FreeIPA-S3Backup",
      techStack: ["FreeIPA", "EC2", "Route 53", "RHEL", "AWS"],
      description:
        "Setting up Centralized FreeIPA authentication with Route 53 DNS management.",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-50 flex items-center justify-center relative w-full px-4 sm:px-6 lg:px-8 mt-10 mb-10"
    >
      <div className="z-10 bg-white rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl w-full lg:w-[70%] p-6 sm:p-8 lg:p-10">
        <h1 className="arvo-bold text-3xl font-bold mb-8 text-blue-600 text-center">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="mb-3 rounded-xl overflow-hidden border border-blue-100 bg-blue-50/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl sub font-extralight mb-4">{project.title}</h2>
              <div className="flex items-center text-gray-500">
                <a href={project.github} className="mb-3 mx-2 matter hover:text-blue-600 transition">
                  Github
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="matter bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm hover:bg-blue-600 transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="matter">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
