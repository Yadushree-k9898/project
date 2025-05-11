import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "BlogVerse",
      description: "Blog App",
      tags: ["React", "Firebase", "MUI", "Bootstrap"],
      image: "/public/images/blogverse.png",
      link: "https://github.com/Yadushree-k9898/myBlog-app",
      hostedLink: "https://my-blog-app-delta-orcin.vercel.app"
    },
    {
      title: "MoneyMinder",
      description: "Personal Finance App",
      tags: ["React", "Firebase", "TailwindCSS"],
      image: "/public/images/finance.png",
      link: "https://github.com/Yadushree-k9898/PersonalFinanceTracker",
      hostedLink: "https://personal-finance-tracker-tau-virid.vercel.app"
    },
    {
      title: "Google Docs 2.0",
      description: "Google Docs Clone",
      tags: ["React", "TailwindCSS"],
      image: "/public/images/gogle.png",
      link: "https://github.com/Yadushree-k9898/GoogleDocsClone",
      hostedLink: "https://googledocs2.example.com"
    },
    {
      title: "Password Generator",
      description: "Password Generator App",
      tags: ["JavaScript", "CSS", "HTML"],
      image: "/public/images/password-generator.png",
      link: "https://github.com/Yadushree-k9898/Password_Generator",
      hostedLink: "https://mellifluous-cascaron-b228be.netlify.app"
    },
    {
      title: "Creator Dashboard",
      description: "Creator Dashboard App",
      tags: ["MERN", "Redux"],
      image: "/public/images/credora.png",
      link: "https://github.com/Yadushree-k9898/creator-dashboard.git",
      hostedLink: "https://creator-dashboard-z28s.vercel.app/"
    },
    {
      title: "Voice Notes",
      description: "Voice Notes App",
      tags: ["React", "WebSpeechAPI", "IndexedDB", "MERN"],
      image: "/public/images/voice-notes.png",
      link: "https://github.com/Yadushree-k9898/IdeaLog.git",
      hostedLink: "https://idea-log-45xd.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="Projects" subtitle="My Recent Work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
              hostedLink={project.hostedLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
