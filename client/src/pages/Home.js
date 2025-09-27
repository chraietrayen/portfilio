import React from 'react';
import { motion } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import CodeBlock from '../components/CodeBlock';

const Home = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment">Loading profile data...</p>
        </div>
      </div>
    );
  }

  const personalInfo = profile?.personalInfo || {};

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4 font-code"
        >
          <span className="text-vscode-comment">{"// "}</span>
          <span className="text-vscode-blue">Welcome</span>
          <span className="text-vscode-text"> to my </span>
          <span className="text-vscode-green">Portfolio</span>
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1 bg-gradient-to-r from-vscode-blue to-vscode-green mx-auto mb-8"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Profile Photo and Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <CodeBlock title="profile.jsx" language="jsx">
            <div>
              <span className="syntax-keyword">import</span>{" "}
              <span className="syntax-string">React</span>{" "}
              <span className="syntax-keyword">from</span>{" "}
              <span className="syntax-string">'react'</span>;
            </div>
            <div className="mt-2"></div>
            <div>
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-method">Profile</span> = () =&gt; &#123;
            </div>
            <div className="ml-4">
              <span className="syntax-keyword">return</span> (
            </div>
            <div className="ml-8">
              &lt;<span className="syntax-keyword">div</span> 
              <span className="syntax-property"> className</span>=
              <span className="syntax-string">"profile-container"</span>&gt;
            </div>
            <div className="ml-12 my-4">
              <div className="flex items-center space-x-4">
                <img
                  src={personalInfo.photo || "/rvn.jpg"}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full border-4 border-vscode-blue object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-vscode-yellow mb-2">
                    {personalInfo.name || "Rayen Chraiet"}
                  </h2>
                  <p className="text-vscode-green text-lg">
                    {personalInfo.title || "Full Stack Developer"}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-8">
              &lt;/<span className="syntax-keyword">div</span>&gt;
            </div>
            <div className="ml-4">);</div>
            <div>&#125;</div>
            <div className="mt-2"></div>
            <div>
              <span className="syntax-keyword">export default</span>{" "}
              <span className="syntax-method">Profile</span>;
            </div>
          </CodeBlock>
        </motion.div>

        {/* Tagline and Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <CodeBlock title="about.ts" language="typescript">
            <div>
              <span className="syntax-keyword">interface</span>{" "}
              <span className="syntax-method">About</span> &#123;
            </div>
            <div className="ml-4">
              <span className="syntax-property">tagline</span>: 
              <span className="syntax-keyword"> string</span>;
            </div>
            <div className="ml-4">
              <span className="syntax-property">bio</span>: 
              <span className="syntax-keyword"> string</span>;
            </div>
            <div>&#125;</div>
            <div className="mt-2"></div>
            <div>
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-property">about</span>: 
              <span className="syntax-method"> About</span> = &#123;
            </div>
            <div className="ml-4 my-4">
              <div className="bg-vscode-bg p-4 rounded border border-vscode-border">
                <h3 className="text-vscode-yellow text-xl mb-4 font-semibold">
                  "{personalInfo.tagline || "Passionate developer creating amazing digital experiences"}"
                </h3>
                <p className="text-vscode-text leading-relaxed">
                  {personalInfo.bio || "I'm a full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems."}
                </p>
              </div>
            </div>
            <div>&#125;</div>
            <div className="mt-2"></div>
            <div>
              <span className="syntax-keyword">export</span>{" "}
              <span className="syntax-property">about</span>;
            </div>
          </CodeBlock>
        </motion.div>
      </div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12"
      >
        <CodeBlock title="navigation.js" language="javascript">
          <div>
            <span className="syntax-comment">{"// Quick access to portfolio sections"}</span>
          </div>
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-property">sections</span> = [
          </div>
          <div className="ml-4 my-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Information', icon: 'ℹ️', path: '/information' },
                { name: 'Skills', icon: '⚡', path: '/skills' },
                { name: 'Education', icon: '🎓', path: '/education' },
                { name: 'Experience', icon: '💼', path: '/experience' },
                { name: 'Contact', icon: '📧', path: '/contact' }
              ].map((section, index) => (
                <motion.a
                  key={section.path}
                  href={section.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card text-center hover:border-vscode-blue transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <span className="text-3xl mb-2 block">{section.icon}</span>
                  <span className="text-vscode-blue font-semibold">{section.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div>];</div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Home;