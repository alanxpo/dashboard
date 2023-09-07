import React from "react";

const Page = () => {
  const skills = [
    "Desarrollo web",
    "Frontend y Backend",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5 y CSS3",
    "Responsive Design",
    "Git y Control de Versiones",
    "UI/UX Design",
  ];

  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Tesla",
      location: "Ensenada, México",
      date: "Enero 2023 - Presente",
      experience: "Diseño y programación de aplicaciones web",
    },
    {
      title: "Desarrollador frontend y backend Móvil",
      company: "Innovatec",
      location: "Ensenada, México",
      date: "Enero 2023 - Julio 2023",
      experience: "Diseño y programación de aplicacion movil",
    },
    {
      title: "Desarrollador backend de API",
      company: "VictoryAPI",
      location: "Ensenada, México",
      date: "Enero 2023 - Julio 2023",
      experience: "Programación de una API REST sobre boxeo",
    },
  ];

  const education = [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      school: "ITE",
      location: "Ensenada, México",
      date: "Agosto 2019 - Presente",
    },
    {
      degree: "Técnico en Programación",
      school: "CECYTE",
      location: "Ensenada, México",
      date: "Junio 2016 - Julio 2019",
    },
  ];

  return (
    <div className="min-h-screen from-gray-50 to-gray-200 flex items-center justify-center">
      <div className="flex">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <div className="mt-4">
            <img className="rounded-md" src="./images/imagen.jpg" />

            <h2 className="text-lg font-semibold mb-2">Sobre mí</h2>
            <p className="text-gray-700 mb-2">
              Apasionado por crear soluciones web innovadoras y funcionales.
            </p>
            <p className="text-blue-500">☎️ +526461268707</p>
            <p className="text-blue-500">📧 alanmuro2001@gmail.com</p>
            <hr className="border-t border-gray-300 my-4" />
            <h3 className="text-md font-semibold mb-2">Habilidades</h3>
            <ul className="list-disc list-inside text-gray-700">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-144">
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Alan Alfredo
            </h1>

            <h2 className="text-lg font-semibold mb-2">
              Desarrollador Full Stack
            </h2>
            <hr className="border-t border-gray-300 my-4" />
            <h3 className="text-md font-semibold mb-2">Experiencia</h3>
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">
                  {experience.title} - {experience.company}
                </h4>
                <p className="text-gray-700 mb-1">{experience.location}</p>
                <p className="text-gray-700 mb-1">{experience.experience}</p>
                <p className="text-gray-700 mb-1">{experience.date}</p>
              </div>
            ))}
            <hr className="border-t border-gray-300 my-4" />
            <h3 className="text-md font-semibold mb-2">Educación</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">
                  {edu.degree} - {edu.school}
                </h4>
                <p className="text-gray-700 mb-1">{edu.location}</p>
                <p className="text-gray-700">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
