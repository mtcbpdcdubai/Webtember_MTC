import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Donald Trump</h3>
              <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
                Business Mogul and Former President passionate about making tremendous deals and building beautiful properties.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <p className="text-gray-400 dark:text-gray-300 mb-4">
                Always open to interesting conversations and collaboration opportunities.
              </p>
              <a
                href="mailto:microsofttechclub@dubai.bits-pilani.ac.in"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-300">
              Made &hearts; by Donald (President of USA)
              <br />
              for my favourite tech club MTC_BPDC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
