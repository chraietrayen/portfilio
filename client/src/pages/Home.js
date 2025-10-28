import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { profile, loading, error, fetchProfile } = useProfile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment font-code">Loading profile data...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchProfile} />;
  }

  const personalInfo = profile?.personalInfo || {};

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      <motion.section style={{ y, opacity }} className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.p className="text-vscode-comment uppercase tracking-widest text-sm mb-6 font-code">{`// Full Stack Developer`}</motion.p>
              <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-6">
                <span className="modern-heading block">{personalInfo.name?.split(' ')[0] || 'Rayen'}</span>
                <span className="text-vscode-text block">{personalInfo.name?.split(' ')[1] || 'Chraiet'}</span>
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-vscode-comment mb-8 leading-relaxed max-w-xl">{personalInfo.tagline || 'Passionate developer'}</motion.p>
              <motion.div className="flex flex-wrap gap-4">
                <Link to="/contact"><motion.button whileHover={{ scale: 1.05, y: -5 }} className="px-8 py-4 bg-gradient-to-r from-vscode-blue to-vscode-green text-white font-bold rounded-full text-lg">Get in Touch</motion.button></Link>
                <Link to="/experience"><motion.button whileHover={{ scale: 1.05, y: -5 }} className="px-8 py-4 bg-vscode-panel border-2 border-vscode-border text-vscode-text font-bold rounded-full text-lg">View Work</motion.button></Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-3xl aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-vscode-blue via-vscode-green to-vscode-pink opacity-50 blur-2xl"></div>
                  <div className="relative bg-vscode-panel border-4 border-vscode-border rounded-3xl overflow-hidden">
                    {personalInfo.photo ? (<img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />) : (<div className="w-full h-full flex items-center justify-center text-9xl"></div>)}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
