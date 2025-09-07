import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

import donald_1 from "../assets/images/donald_1.jpeg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900 overflow-hidden">
              <img 
                src={donald_1}
                alt="Donald Trump" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Microsoft <span className="text-blue-600 dark:text-blue-400">Tech Club</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Business Mogul & President
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Making America Great Again through tremendous deals and beautiful buildings. 
            The most successful businessman and president you've ever seen.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/mtcbpdcdubai"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/microsoft-tech-club/posts/?feedView=all"
              className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:microsofttechclub@dubai.bits-pilani.ac.in"
              className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;