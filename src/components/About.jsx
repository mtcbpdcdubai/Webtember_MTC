import React from 'react';
import { BookOpen, Code, Coffee, Zap } from 'lucide-react';

import donald_2 from '../assets/images/donald_2.jpeg';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Tremendous Deals",
      description: "Making the best deals in business and politics"
    },
    {
      icon: <BookOpen className="text-indigo-600" size={24} />,
      title: "Wharton Graduate",
      description: "Graduated from the best business school, believe me"
    },
    {
      icon: <Coffee className="text-purple-600" size={24} />,
      title: "Tower Builder",
      description: "Built the most beautiful towers and properties"
    },
    {
      icon: <Zap className="text-yellow-600" size={24} />,
      title: "Media Master",
      description: "Dominated TV, social media, and headlines everywhere"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a very stable genius with the best words and the highest IQ—just ask me! I built towers, made headlines, and ran the country like one big, beautiful deal. People love me, and I'm tremendously successful. The beauty of me is that I'm rich and, let's face it, orange really is the new black.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={donald_2}
                alt="Donald Trump's tremendous journey"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Started my business empire with a small loan of a million dollars and built it into 
                a tremendous success. From real estate to reality TV to the White House, everything 
                I touch turns to gold.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not making deals, you'll find me on the golf course at Mar-a-Lago, 
                tweeting tremendous thoughts, or hosting beautiful rallies. I believe in winning 
                so much that you'll get tired of winning.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;