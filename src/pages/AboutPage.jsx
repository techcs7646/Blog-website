import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { authorInfo } from '../utils/data';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Minimalist Blog - About';
  }, []);

  return (
    <div className="pt-24 animate-fade-in">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={authorInfo.avatar} 
                  alt={authorInfo.name} 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap items-center mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mr-4">{authorInfo.name}</h1>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 text-sm font-medium rounded-full">
                    {authorInfo.role}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {authorInfo.bio}
                </p>
                
                <div className="flex space-x-4">
                  {authorInfo.socialLinks.twitter && (
                    <a 
                      href={authorInfo.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {authorInfo.socialLinks.github && (
                    <a 
                      href={authorInfo.socialLinks.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {authorInfo.socialLinks.linkedin && (
                    <a 
                      href={authorInfo.socialLinks.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {authorInfo.socialLinks.instagram && (
                    <a 
                      href={authorInfo.socialLinks.instagram}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About This Blog</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Welcome to Minimalist, a blog dedicated to exploring the intersection of design, technology, and mindful living. In a world of increasing complexity, this space is devoted to finding clarity, purpose, and beauty through thoughtful writing and design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Here you'll find articles on design principles, creative thinking, productivity methods, and living intentionally in the digital age. Whether you're a designer, developer, creator, or simply curious, I hope these writings provide value and spark new ideas.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This blog embraces the philosophy that less can be more—that by focusing on what's essential, we create space for what truly matters. Through carefully crafted content and a clean, functional design, Minimalist aims to be a refreshing corner of the internet that respects both your time and attention.
              </p>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Approach</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-700 dark:border-accent-400 pl-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Intentional Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every design decision should serve a purpose. I believe in creating experiences that are both beautiful and functional, with nothing superfluous.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-700 dark:border-accent-400 pl-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Thoughtful Content</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quality over quantity. Each article is carefully researched and crafted to provide genuine value and insight rather than chasing trends or algorithms.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-700 dark:border-accent-400 pl-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Sustainable Thinking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In both design and living, I advocate for approaches that consider long-term impact and sustainability rather than quick wins or temporary solutions.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/contact" className="btn btn-primary px-6 py-2">
                Get in Touch
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;