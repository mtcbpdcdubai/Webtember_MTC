import React from 'react';
import { Code, Database, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-blue-500" size={28} />,
      color: "bg-blue-600",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend",
      icon: <Database className="text-purple-500" size={28} />,
      color: "bg-purple-600",
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="text-green-500" size={28} />,
      color: "bg-green-600",
      skills: ["Git/GitHub", "Docker", "Figma", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <Star className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with regularly. I'm always learning and expanding my skill set.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 text-center"
                        >
                          <span className="text-gray-800 dark:text-gray-200 font-semibold">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default Skills;