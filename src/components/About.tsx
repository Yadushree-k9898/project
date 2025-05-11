import { motion } from 'framer-motion';
import { Code, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="About Me" subtitle="My Journey" />
        
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/another.png" 
                  alt="About Yadushree K" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <Code size={24} />
                  <span className="text-xl font-bold">Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">A passionate Web Developer with focus on React</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm Yadushree K, a web developer with expertise in building modern, responsive web applications. 
              With a strong foundation in React and full-stack development, I strive to create intuitive and 
              performant user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I enjoy working with the latest technologies and frameworks to solve complex problems and deliver 
              high-quality solutions. My approach combines technical expertise with creativity to create 
              applications that not only function well but also look great.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>
            <motion.a 
              href="#contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <Phone size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;