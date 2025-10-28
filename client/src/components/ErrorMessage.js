import React from 'react';
import { motion } from 'framer-motion';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center justify-center h-full p-6"
    >
      <div className="max-w-md w-full">
        <div className="card border-red-500 border-2">
          <div className="text-center">
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl mb-4"
            >
              ⚠️
            </motion.div>

            {/* Error Title */}
            <h2 className="text-2xl font-code text-red-400 mb-4">
              <span className="text-vscode-comment">{"// "}</span>
              Oops! Something went wrong
            </h2>

            {/* Error Message */}
            <div className="bg-vscode-bg border border-vscode-border rounded-lg p-4 mb-6">
              <code className="text-sm text-vscode-comment break-words">
                Error: <span className="text-red-400">{message || 'An unexpected error occurred'}</span>
              </code>
            </div>

            {/* Retry Button */}
            {onRetry && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRetry}
                className="bg-vscode-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-code transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                <span>🔄</span>
                Try Again
              </motion.button>
            )}

            {/* Help Text */}
            <p className="text-vscode-comment text-sm mt-4">
              If the problem persists, please check your connection or contact support.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorMessage;
