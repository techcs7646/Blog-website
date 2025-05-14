import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import FeaturedPost from '../components/blog/FeaturedPost';
import { getRecentPosts, getFeaturedPosts } from '../utils/data';

const HomePage = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);
  
  // Change page title
  useEffect(() => {
    document.title = 'Minimalist Blog - Home';
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              Ideas that <span className="text-primary-700 dark:text-accent-400">inspire</span> and <span className="text-primary-700 dark:text-accent-400">inform</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore thoughtful perspectives on design, technology, and living well in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about" className="btn btn-primary px-6 py-3">
                About the Author
              </Link>
              <Link to="/contact" className="btn btn-ghost border border-gray-300 dark:border-gray-700 px-6 py-3">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Stories</h2>
          </div>
          
          {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Recent Articles</h2>
            <Link 
              to="#" 
              className="flex items-center text-primary-700 dark:text-accent-400 hover:text-primary-800 dark:hover:text-accent-500 font-medium transition-colors"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} delay={index} />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-primary-700 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-primary-100 mb-8">
              Subscribe to our newsletter to receive the latest articles and updates delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <button 
                type="submit" 
                className="btn bg-accent-400 hover:bg-accent-500 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-primary-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;