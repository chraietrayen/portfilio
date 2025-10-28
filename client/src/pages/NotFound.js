import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <CodeBlock title="error.js" language="javascript">
          <div className="space-y-4">
            {/* Error Code */}
            <div>
              <span className="syntax-keyword">class</span>{" "}
              <span className="syntax-method">Error404</span>{" "}
              <span className="syntax-keyword">extends</span>{" "}
              <span className="syntax-method">Error</span> &#123;
            </div>
            
            <div className="ml-4">
              <span className="syntax-method">constructor</span>() &#123;
            </div>
            
            <div className="ml-8">
              <span className="syntax-keyword">super</span>();
            </div>
            
            <div className="ml-8 my-4">
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-8xl font-bold text-vscode-red mb-4"
                >
                  404
                </motion.div>
                <h1 className="text-3xl font-bold text-vscode-blue mb-2">
                  Page Not Found
                </h1>
                <p className="text-vscode-comment mb-6">
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>
            </div>
            
            <div className="ml-8">
              <span className="syntax-keyword">this</span>.
              <span className="syntax-property">message</span> ={" "}
              <span className="syntax-string">"Page not found"</span>;
            </div>
            
            <div className="ml-8">
              <span className="syntax-keyword">this</span>.
              <span className="syntax-property">statusCode</span> ={" "}
              <span className="syntax-number">404</span>;
            </div>
            
            <div className="ml-4">&#125;</div>
            
            <div>&#125;</div>
            
            {/* Navigation Options */}
            <div className="mt-8">
              <div>
                <span className="syntax-comment">
                  {"// Available routes:"}
                </span>
              </div>
              <div className="ml-4 my-4 space-y-2">
                {[
                  { path: '/', label: 'Home', icon: '🏠' },
                  { path: '/information', label: 'About Me', icon: 'ℹ️' },
                  { path: '/skills', label: 'Skills', icon: '⚡' },
                  { path: '/education', label: 'Education', icon: '🎓' },
                  { path: '/experience', label: 'Experience', icon: '💼' },
                  { path: '/contact', label: 'Contact', icon: '📧' }
                ].map((route, index) => (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={route.path}
                      className="block p-3 bg-vscode-panel hover:bg-vscode-border rounded border border-vscode-border transition-all duration-200 hover:scale-105"
                    >
                      <span className="text-2xl mr-3">{route.icon}</span>
                      <span className="text-vscode-blue font-semibold">
                        {route.label}
                      </span>
                      <span className="text-vscode-comment ml-2">
                        {route.path}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CodeBlock>
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-vscode-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <span className="mr-2">←</span>
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
