import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Minimalist Blog';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-200 dark:text-primary-800">404</h1>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-700 dark:text-accent-400 font-medium hover:text-primary-800 dark:hover:text-accent-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;