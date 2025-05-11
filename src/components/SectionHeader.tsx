import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="relative inline-block">
          {title}
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-purple-600 dark:bg-purple-400"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </span>
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;