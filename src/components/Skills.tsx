import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] 
    },
    { 
      category: "Libraries & Frameworks", 
      items: ["Redux", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "Next.js"] 
    },
    { 
      category: "Backend & Tools", 
      items: ["Node.js", "MongoDB", "Express", "Firebase", "Supabase", "Appwrite", "Python", "Git"] 
    }
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Skills" subtitle="My Technical Proficiencies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} index={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;