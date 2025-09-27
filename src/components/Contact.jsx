import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Star, Sparkles } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email",
      value: "microsofttechclub@dubai.bits-pilani.ac.in",
      link: "mailto:microsofttechclub@dubai.bits-pilani.ac.in",
      description: "Contact without hesitating"
    },
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Phone",
      value: "+1 (555) TRUMP-01",
      link: "tel:+15558786701",
      description: "Call for the best deals"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Location",
      value: "United States of America",
      link: "#",
      description: "The greatest country in the world"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/mtcbpdcdubai",
      color: "hover:bg-gray-700",
      bgColor: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/microsoft-tech-club/posts/?feedView=all",
      color: "hover:bg-blue-600",
      bgColor: "from-blue-500 to-blue-700"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      url: "https://www.instagram.com/mtcbpdc/",
      color: "hover:bg-pink-600",
      bgColor: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full mb-6 shadow-2xl">
              <MessageCircle className="text-white" size={36} />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-yellow-400 animate-pulse" size={16} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Make a Deal
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to work with the best? I'm always open to tremendous opportunities, 
              beautiful partnerships, and winning conversations. Let's create something fantastic together!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 group-hover:transform group-hover:-translate-y-2 h-64 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-2">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the winning team and stay connected with exclusive updates, behind-the-scenes content, 
              and the most tremendous projects. Together, we'll make everything great again!
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative"
                  title={social.name}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className={`relative p-4 bg-gradient-to-r ${social.bgColor} text-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1`}>
                    {social.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
