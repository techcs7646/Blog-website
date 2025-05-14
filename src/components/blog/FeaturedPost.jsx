import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
// Remove the BlogPost import since we don't need it in JavaScript

const FeaturedPost = ({ post }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-accent-400/90 rounded">
            {post.category}
          </span>
          <div className="flex items-center text-xs text-gray-200">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-200 mb-4 max-w-2xl">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">{post.date}</span>
          <Link to={`/blog/${post.slug}`} className="flex items-center text-accent-400 hover:text-accent-300 font-medium transition-colors">
            Read More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPost;