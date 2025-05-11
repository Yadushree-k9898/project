import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Code, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';
import FloatingElement from './FloatingElement';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="text-purple-600 dark:text-purple-400">Yadushree K</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Web Developer
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              With a passion for developing modern React web apps fullstack, I create beautiful and functional websites with cutting-edge technologies.
            </motion.p>
            
            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <SocialLink href="https://github.com/Yadushree-k9898" icon={<Github />} />
              <SocialLink href="https://x.com/KYadushree" icon={<Twitter />} />
              <SocialLink href="https://www.linkedin.com/in/yadushree-k/" icon={<Linkedin />} />
            </motion.div>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a 
                href="#projects"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact"
                className="px-6 py-3 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600/10 rounded-md font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(124, 58, 237, 0.5)",
                    "0 0 40px rgba(124, 58, 237, 0.3)", 
                    "0 0 20px rgba(124, 58, 237, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-950 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/public/images/hero-img.webp" 
                      alt="Yadushree K" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </motion.div>
              
              <FloatingElement 
                top="-10%" 
                left="10%" 
                icon={<Code size={30} />} 
                delay={0.3}
              />
              <FloatingElement 
                bottom="-5%" 
                right="10%" 
                icon={<ExternalLink size={30} />} 
                delay={0.6}
              />
              <FloatingElement 
                top="80%" 
                left="-5%" 
                icon={<Github size={30} />} 
                delay={0.9}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;