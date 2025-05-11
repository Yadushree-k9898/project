import { motion } from 'framer-motion';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value, link }) => {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
      whileHover={{ x: 5 }}
    >
      <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactInfo;