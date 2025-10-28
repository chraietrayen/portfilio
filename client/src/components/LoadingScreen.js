import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-vscode-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md px-4"
      >
        {/* Animated Logo/Icon */}
        <motion.div className="mb-8">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-20 h-20 mx-auto mb-4 relative"
          >
            <div className="absolute inset-0 border-4 border-vscode-border border-t-vscode-blue rounded-full" />
            <div className="absolute inset-2 border-4 border-vscode-border border-b-vscode-green rounded-full" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-code text-vscode-blue mb-4"
        >
          <span className="text-vscode-comment">&lt;</span>
          Loading Portfolio
          <span className="text-vscode-comment">/&gt;</span>
        </motion.h2>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-vscode-panel rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-vscode-blue via-vscode-green to-vscode-blue rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-vscode-comment text-sm font-code"
        >
          {progress}% • Initializing interactive CV system...
        </motion.p>

        {/* Loading Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-vscode-comment text-xs font-code space-y-1"
        >
          {progress > 20 && <div>✓ Loading components...</div>}
          {progress > 40 && <div>✓ Fetching profile data...</div>}
          {progress > 60 && <div>✓ Initializing animations...</div>}
          {progress > 80 && <div>✓ Almost ready...</div>}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;