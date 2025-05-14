import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Minimalist Blog - Contact';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#1E2530] text-white">
      <div className="container-custom py-24">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-400">
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#262D37] rounded-2xl p-8 shadow-lg"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;