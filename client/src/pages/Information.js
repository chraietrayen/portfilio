import React from 'react';
import { motion } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import CodeBlock from '../components/CodeBlock';

const Information = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment">Loading information...</p>
        </div>
      </div>
    );
  }

  const info = profile?.personalInfo || {};

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CodeBlock title="PersonalInfo.java" language="java">
          <div>
            <span className="syntax-keyword">public class</span>{" "}
            <span className="syntax-method">PersonalInfo</span> &#123;
          </div>
          <div className="mt-4 ml-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> name</span> = 
                <span className="syntax-string"> "{info.name || 'Rayen Chraiet'}"</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> title</span> = 
                <span className="syntax-string"> "{info.title || 'Full Stack Developer'}"</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> email</span> = 
                <span className="syntax-string"> "{info.email || 'rayenchraiet2000@gmail.com'}"</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> phone</span> = 
                <span className="syntax-string"> "{info.phone || '+21694599198'}"</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> position</span> = 
                <span className="syntax-string"> "{info.position || 'Full stack Developper'}"</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private int</span>
                <span className="syntax-property"> age</span> = 
                <span className="syntax-number"> {info.age || 21}</span>;
              </div>
              <div className="flex items-center">
                <span className="syntax-keyword">private String</span>
                <span className="syntax-property"> drivingLicense</span> = 
                <span className="syntax-string"> "{info.drivingLicense || 'Yes'}"</span>;
              </div>
            </div>
          </div>
          <div className="mt-6 ml-4">
            <span className="syntax-comment">{"// Getter methods"}</span>
          </div>
          <div className="ml-4 mt-2">
            <span className="syntax-keyword">public String</span>
            <span className="syntax-method"> getName</span>() &#123;
          </div>
          <div className="ml-8">
            <span className="syntax-keyword">return</span>
            <span className="syntax-property"> name</span>;
          </div>
          <div className="ml-4">&#125;</div>
          <div className="mt-4 ml-4">
            <span className="syntax-keyword">public String</span>
            <span className="syntax-method"> getContactInfo</span>() &#123;
          </div>
          <div className="ml-8">
            <span className="syntax-keyword">return</span>
            <span className="syntax-string"> "Email: "</span> + 
            <span className="syntax-property">email</span> + 
            <span className="syntax-string">" | Phone: "</span> +
            <span className="syntax-property"> phone</span>;
          </div>
          <div className="ml-4">&#125;</div>
          <div className="mt-4">&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Visual Information Display */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="info-display.tsx" language="tsx">
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-method">InfoDisplay</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-vscode-yellow text-lg font-semibold mb-4">Personal Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Name:</span>
                    <span className="text-vscode-text">{info.name || 'Rayen Chraiet'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Title:</span>
                    <span className="text-vscode-green">{info.title || 'Full Stack Developer'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Position:</span>
                    <span className="text-vscode-text">{info.position || 'Software Engineer'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Age:</span>
                    <span className="text-vscode-number">{info.age || 21}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-vscode-yellow text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Email:</span>
                    <a 
                      href={`mailto:${info.email || 'your.email@example.com'}`}
                      className="text-vscode-blue hover:underline"
                    >
                      {info.email || 'rayenchraiet2000@gmail.com'}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Phone:</span>
                    <a 
                      href={`tel:${info.phone || '+1234567890'}`}
                      className="text-vscode-blue hover:underline"
                    >
                      {info.phone || '+21694599198'}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-vscode-comment">Driving License:</span>
                    <span className="text-vscode-green">{info.drivingLicense || 'No'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="bio.md" language="markdown">
          <div>
            <span className="syntax-comment"># About Me</span>
          </div>
          <div className="mt-4">
            <p className="text-vscode-text leading-relaxed">
              {info.bio || "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems with clean, efficient code."}
            </p>
          </div>
          <div className="mt-4">
            <span className="syntax-comment">## Current Focus</span>
          </div>
          <div className="mt-2">
            <p className="text-vscode-comment">
              - Building modern web applications with React and Node.js<br/>
              - Exploring cloud technologies and DevOps practices<br/>
              - Contributing to open-source projects
            </p>
          </div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Information;