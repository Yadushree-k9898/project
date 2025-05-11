import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="relative font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default NavLink;