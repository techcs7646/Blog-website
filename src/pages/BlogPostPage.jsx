import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPostBySlug, getRecentPosts } from '../utils/data';
import BlogCard from '../components/blog/BlogCard';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3);
  
  useEffect(() => {
    if (!post) {
      navigate('/404');
      return;
    }
    
    document.title = `${post.title} - Minimalist Blog`;
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <motion.div 
      className="pt-24 animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-96 w-full overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/30"></div>
        </div>
        
        <div className="container-custom relative -mt-24 z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-700 dark:text-accent-400 hover:text-primary-800 dark:hover:text-accent-500 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6 gap-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded">
                {post.category}
              </span>
            </div>
            
            <div 
              className="prose dark:prose-invert prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Share this post</h3>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      Twitter
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      Facebook
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-primary-700 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                
                <div>
                  <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
                    <span className="mr-2">Tags:</span>
                    <Link 
                      to="#" 
                      className="text-primary-700 dark:text-accent-400 hover:underline mr-2"
                    >
                      {post.category}
                    </Link>
                    <Link 
                      to="#" 
                      className="text-primary-700 dark:text-accent-400 hover:underline"
                    >
                      Design
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">You Might Also Enjoy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard key={relatedPost.id} post={relatedPost} delay={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostPage;