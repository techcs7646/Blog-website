import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xl font-bold mb-4 text-primary-700 dark:text-accent-400">Minimalist</h4>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              A beautiful, minimal blog sharing thoughts and ideas on design, technology, and life.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-gray-800 dark:text-gray-200">Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-gray-800 dark:text-gray-200">Categories</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Technology</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Lifestyle</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors">Productivity</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-accent-400" /> and React
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            &copy; {currentYear} Minimalist Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;