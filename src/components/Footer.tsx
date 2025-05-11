import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            Yadushree K
          </motion.div>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/Yadushree-k9898" icon={<Github size={18} />} />
            <SocialLink href="https://x.com/KYadushree" icon={<Twitter size={18} />} />
            <SocialLink href="https://www.linkedin.com/in/yadushree-k/" icon={<Linkedin size={18} />} />
          </div>
        </div>
        
        <div className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Yadushree K. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;