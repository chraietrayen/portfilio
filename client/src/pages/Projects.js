import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';
import { useProfile } from '../context/ProfileContext';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative"
    >
      <div className="modern-card p-0 overflow-hidden h-full">
        {/* Project Image with Parallax Effect */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-vscode-blue/10 to-vscode-green/10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                💻
              </div>
            )}
          </motion.div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-vscode-bg via-vscode-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-vscode-blue/90 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-vscode-blue transition-colors"
                >
                  <span className="mr-2">💻</span>
                  GitHub
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-vscode-green/90 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-vscode-green transition-colors"
                >
                  <span className="mr-2">🚀</span>
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-8">
          <motion.h3 
            className="text-2xl md:text-3xl font-display font-bold mb-3 text-vscode-blue group-hover:text-vscode-green transition-colors duration-300"
          >
            {project.name}
          </motion.h3>
          
          <p className="text-vscode-comment mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {(project.technologies || []).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="px-4 py-2 bg-vscode-bg border border-vscode-border rounded-full text-sm font-code hover:border-vscode-blue hover:bg-vscode-panel transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { profile, loading } = useProfile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-vscode-blue"></div>
      </div>
    );
  }

  const projects = profile?.projects || [];

  return (
    <div ref={containerRef} className="min-h-screen p-4 md:p-8 lg:p-12">
      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="mb-16 md:mb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.p 
            className="text-vscode-comment uppercase tracking-wider text-sm mb-4 font-code"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {`// Featured Work`}
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="modern-heading">
              Projects &
            </span>
            <br />
            <span className="text-vscode-text">
              Creations
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-vscode-comment max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A collection of my work, experiments, and creative endeavors.
            Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full"
          >
            <CodeBlock title="projects.js" language="javascript">
              <div className="text-center py-12">
                <p className="syntax-comment mb-4">
                  {`// No projects found`}
                </p>
                <p className="text-vscode-text">
                  <span className="syntax-keyword">const</span>{" "}
                  <span className="syntax-property">message</span> ={" "}
                  <span className="syntax-string">"Coming soon..."</span>;
                </p>
              </div>
            </CodeBlock>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 md:py-24"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-vscode-text">
          Interested in collaborating?
        </h2>
        <p className="text-vscode-comment text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let's create something amazing together
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-vscode-blue to-vscode-green text-white font-bold rounded-full text-lg hover:shadow-2xl transition-shadow duration-300"
        >
          Get in Touch →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;
