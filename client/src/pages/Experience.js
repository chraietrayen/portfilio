import React from 'react';
import { motion } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import CodeBlock from '../components/CodeBlock';

const Experience = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment">Loading experience...</p>
        </div>
      </div>
    );
  }

  const experience = profile?.experience || [];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'internship': return '🎯';
      case 'job': return '💼';
      case 'association': return '🤝';
      default: return '💻';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship': return 'text-vscode-blue';
      case 'job': return 'text-vscode-green';
      case 'association': return 'text-vscode-pink';
      default: return 'text-vscode-yellow';
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CodeBlock title="Experience.cs" language="csharp">
          <div>
            <span className="syntax-keyword">using</span>{" "}
            <span className="syntax-property">System</span>;
          </div>
          <div>
            <span className="syntax-keyword">using</span>{" "}
            <span className="syntax-property">System.Collections.Generic</span>;
          </div>
          <div className="mt-2">
            <span className="syntax-keyword">namespace</span>{" "}
            <span className="syntax-method">Portfolio</span>
          </div>
          <div>&#123;</div>
          <div className="ml-4 mt-2">
            <span className="syntax-keyword">public class</span>{" "}
            <span className="syntax-method">Experience</span>
          </div>
          <div className="ml-4">&#123;</div>
          <div className="ml-8">
            <span className="syntax-keyword">public string</span>{" "}
            <span className="syntax-property">Company</span> &#123; get; set; &#125;
          </div>
          <div className="ml-8">
            <span className="syntax-keyword">public string</span>{" "}
            <span className="syntax-property">Position</span> &#123; get; set; &#125;
          </div>
          <div className="ml-8">
            <span className="syntax-keyword">public string</span>{" "}
            <span className="syntax-property">Period</span> &#123; get; set; &#125;
          </div>
          <div className="ml-8">
            <span className="syntax-keyword">public string</span>{" "}
            <span className="syntax-property">Type</span> &#123; get; set; &#125;
          </div>
          <div className="ml-4">&#125;</div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="experience-timeline.tsx" language="tsx">
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-method">ExperienceTimeline</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-6">
            <div className="space-y-8">
              {experience.length > 0 ? experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                        className="w-6 h-6 bg-vscode-blue rounded-full border-2 border-vscode-bg flex items-center justify-center text-white text-sm"
                      >
                        {getTypeIcon(exp.type)}
                      </motion.div>
                      {index < experience.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                          className="w-0.5 bg-vscode-border mt-2 flex-1"
                        />
                      )}
                    </div>
                    <div className="card flex-1 mb-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-vscode-yellow text-xl font-semibold">
                            {exp.company}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded ${getTypeColor(exp.type)} bg-vscode-bg border border-current`}>
                            {exp.type}
                          </span>
                        </div>
                        <span className="text-vscode-comment text-sm bg-vscode-bg px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-vscode-green text-lg mb-3">
                        {exp.position}
                      </h4>
                      <p className="text-vscode-text text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Skills used (if available) */}
                      <div className="mt-4 pt-3 border-t border-vscode-border">
                        <div className="flex flex-wrap gap-2">
                          {['JavaScript', 'React', 'Node.js', 'MongoDB'].map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs bg-vscode-bg text-vscode-blue px-2 py-1 rounded border border-vscode-blue"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="card text-center py-12"
                >
                  <div className="text-6xl mb-4">💼</div>
                  <h3 className="text-vscode-yellow text-xl mb-2">Sample Experience Entry</h3>
                  <div className="text-vscode-comment mb-4">June 2022 - August 2022</div>
                  <h4 className="text-vscode-green text-lg mb-3">Frontend Developer Intern</h4>
                  <p className="text-vscode-text text-sm">
                    Tech Startup - Developed responsive web applications using React and TailwindCSS
                  </p>
                </motion.div>
              )}
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Key Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="achievements.sql" language="sql">
          <div>
            <span className="syntax-keyword">SELECT</span>
          </div>
          <div className="ml-4">
            <span className="syntax-property">achievement_title</span>,
          </div>
          <div className="ml-4">
            <span className="syntax-property">description</span>,
          </div>
          <div className="ml-4">
            <span className="syntax-property">impact</span>
          </div>
          <div>
            <span className="syntax-keyword">FROM</span>{" "}
            <span className="syntax-property">professional_achievements</span>
          </div>
          <div>
            <span className="syntax-keyword">WHERE</span>{" "}
            <span className="syntax-property">relevance</span> = 
            <span className="syntax-string">'high'</span>
          </div>
          <div>
            <span className="syntax-keyword">ORDER BY</span>{" "}
            <span className="syntax-property">impact</span>{" "}
            <span className="syntax-keyword">DESC</span>;
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Performance Optimization",
                  description: "Improved application load time by 40%",
                  impact: "High",
                  icon: "⚡"
                },
                {
                  title: "Code Review Process",
                  description: "Implemented team code review standards",
                  impact: "Medium",
                  icon: "🔍"
                },
                {
                  title: "User Interface Redesign",
                  description: "Led UI/UX improvements increasing user engagement",
                  impact: "High",
                  icon: "🎨"
                },
                {
                  title: "Technical Documentation",
                  description: "Created comprehensive API documentation",
                  impact: "Medium",
                  icon: "📚"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-vscode-bg p-4 rounded border border-vscode-border hover:border-vscode-blue transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-vscode-yellow font-semibold mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-vscode-text text-sm mb-2">
                        {achievement.description}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        achievement.impact === 'High' ? 'text-vscode-green bg-green-900' : 'text-vscode-yellow bg-yellow-900'
                      }`}>
                        Impact: {achievement.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Experience;