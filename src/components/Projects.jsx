import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

import donald_3 from "../assets/images/donald_3.jpeg";
import donald_4 from "../assets/images/donald_4.jpeg";
import donald_1 from "../assets/images/donald_1.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "Student Library Management System",
      description: "Comprehensive library management system designed for educational institutions. Features include book cataloging, student registration, borrowing/returning system, and administrative dashboard.",
      image: donald_3,
      technologies: ["Python", "Database Management", "GUI", "File Handling", "OOP"],
      githubUrl: "https://github.com/astro-prog/Student-Library-Management-System",
      liveUrl: "#"
    },
    {
      title: "Morse Code Quiz Generator",
      description: "Interactive educational tool that generates Morse code quizzes to help users learn and practice Morse code. Features multiple difficulty levels and progress tracking.",
      image: donald_4,
      technologies: ["Java", "GUI", "Translator Quiz", "Educational Tool"],
      githubUrl: "https://github.com/astro-prog/Morse-Code-quiz-generator",
      liveUrl: "#"
    },
    {
      title: "UAE Weather Hub",
      description: "Comprehensive weather application specifically designed for UAE locations. Provides real-time weather data, forecasts, and climate information for major UAE cities.",
      image: donald_1,
      technologies: ["Weather API", "JavaScript", "Responsive Design", "Location Services", "Data Visualization"],
      githubUrl: "https://github.com/astro-prog/Uae-Weather-Hub",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/mtcbpdcdubai"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
