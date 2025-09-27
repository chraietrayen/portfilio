import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ title, children, language = 'javascript', lineStart = 1 }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="code-block mb-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-vscode-border">
        <h2 className="text-lg font-semibold text-vscode-blue font-code">
          {title}
        </h2>
        <span className="text-xs text-vscode-comment font-code">
          {language}
        </span>
      </div>

      {/* Code Content */}
      <div className="font-code text-sm">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="code-line">
            <span className="line-number">
              {String(lineStart + index).padStart(2, '0')}
            </span>
            <div className="flex-1">{child}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeBlock;