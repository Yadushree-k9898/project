import { motion } from 'framer-motion';

interface FloatingElementProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  icon: React.ReactNode;
  delay: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  top, left, bottom, right, icon, delay 
}) => {
  return (
    <motion.div 
      className="absolute z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-purple-600 dark:text-purple-400"
      style={{ top, left, bottom, right }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        delay,
        duration: 0.8,
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default FloatingElement;