import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div 
      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, backgroundColor: "#9333ea", color: "#ffffff" }}
      viewport={{ once: true }}
    >
      {skill}
    </motion.div>
  );
};

export default SkillBadge;