import React from "react";

const Skills = () => {
  const skillCategories = [
    { title: "Languages", items: ["Java", "Python", "C"] },
    {
      title: "AWS Services",
      items: ["EC2", "Lambda", "LightSail", "S3", "EBS", "RDS", "DynamoDB", "VPC", "CloudFront", "IAM", "CloudWatch"],
    },
    { title: "Databases", items: ["MySQL", "MongoDB"] },
    { title: "Libraries & Frameworks", items: ["React", "Tailwind", "Node.js "] },
    { title: "Tools & Platforms", items: ["AWS", "RedHat", "Git", "GitHub", "VS Code", "IntelliJ", "Docker", "AWS Console & CLI", "Podman"] },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-50 flex items-center justify-center relative w-full mt-10 mb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="z-10 bg-white mx-auto rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl py-8 px-5 sm:px-8 md:px-10 w-full lg:w-[70%]">
        <h2 className="text-3xl arvo-bold font-bold mb-4 text-blue-600 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-4 sm:p-6 bg-white/10 items-start">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 bg-white/80 shadow-md hover:shadow-lg border border-gray-200 transition-shadow duration-300 ${
                category.title === "AWS Services"
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <h3 className="text-xl sub font-bold mb-4">{category.title}</h3>
              <div
                className={`flex flex-wrap gap-2 w-full ${
                  category.title === "AWS Services" ? "justify-start" : ""
                }`}
              >
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-400 matter cursor-pointer text-white px-3 py-1 rounded-full text-sm sm:text-base hover:bg-blue-600/5 hover:text-blue-600 transition duration-300 border border-blue-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
