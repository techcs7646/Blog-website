import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ post, featured = false, delay = 0 }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: delay * 0.1
      }
    },
    hover: { 
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`card group h-full ${featured ? 'md:col-span-2 lg:col-span-2 md:flex' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className={`${featured ? 'md:flex' : ''} h-full`}>
          <div className={`${featured ? 'md:w-2/5' : ''} overflow-hidden`}>
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className={`p-5 ${featured ? 'md:w-3/5' : ''}`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded">
                {post.category}
              </span>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-200 group-hover:text-primary-700 dark:group-hover:text-accent-400`}>
              {post.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;