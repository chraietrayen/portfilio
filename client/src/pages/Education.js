import React from 'react';
import { motion } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import CodeBlock from '../components/CodeBlock';

const Education = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment">Loading education...</p>
        </div>
      </div>
    );
  }

  const education = profile?.education || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CodeBlock title="Education.cpp" language="cpp">
          <div>
            <span className="syntax-keyword">#include</span>{" "}
            <span className="syntax-string">&lt;iostream&gt;</span>
          </div>
          <div>
            <span className="syntax-keyword">#include</span>{" "}
            <span className="syntax-string">&lt;vector&gt;</span>
          </div>
          <div>
            <span className="syntax-keyword">#include</span>{" "}
            <span className="syntax-string">&lt;string&gt;</span>
          </div>
          <div className="mt-2">
            <span className="syntax-keyword">using namespace</span>{" "}
            <span className="syntax-property">std</span>;
          </div>
          <div className="mt-4">
            <span className="syntax-keyword">struct</span>{" "}
            <span className="syntax-method">Education</span> &#123;
          </div>
          <div className="ml-4">
            <span className="syntax-keyword">string</span>{" "}
            <span className="syntax-property">school</span>;
          </div>
          <div className="ml-4">
            <span className="syntax-keyword">string</span>{" "}
            <span className="syntax-property">diploma</span>;
          </div>
          <div className="ml-4">
            <span className="syntax-keyword">string</span>{" "}
            <span className="syntax-property">period</span>;
          </div>
          <div className="ml-4">
            <span className="syntax-keyword">string</span>{" "}
            <span className="syntax-property">description</span>;
          </div>
          <div>&#125;;</div>
        </CodeBlock>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="education-timeline.tsx" language="tsx">
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-method">EducationTimeline</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-6">
            <div className="space-y-6">
              {education.length > 0 ? education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                        className="w-4 h-4 bg-vscode-blue rounded-full border-2 border-vscode-bg"
                      />
                      {index < education.length - 1 && (
                        <div className="w-0.5 h-full bg-vscode-border mt-2" />
                      )}
                    </div>
                    <div className="card flex-1 mb-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-vscode-yellow text-xl font-semibold">
                          {edu.school}
                        </h3>
                        <span className="text-vscode-comment text-sm bg-vscode-bg px-2 py-1 rounded">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-vscode-green text-lg mb-3">
                        {edu.diploma}
                      </h4>
                      {edu.description && (
                        <p className="text-vscode-text text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      )}
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
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-vscode-yellow text-xl mb-2">Sample Education Entry</h3>
                  <div className="text-vscode-comment mb-4">2019 - 2023</div>
                  <h4 className="text-vscode-green text-lg mb-3">Bachelor's in Computer Science</h4>
                  <p className="text-vscode-text text-sm">
                    University of Technology - Focused on software engineering and web development
                  </p>
                </motion.div>
              )}
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="achievements.json" language="json">
          <div>&#123;</div>
          <div className="ml-4">
            <span className="syntax-string">"academicAchievements"</span>: [
          </div>
          <div className="ml-8 my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Dean's List", description: "Maintained high GPA throughout studies", icon: "🏆" },
                { title: "Programming Contest", description: "Top 10 in university coding competition", icon: "💻" },
                { title: "Research Paper", description: "Published paper on web security", icon: "📄" },
                { title: "Team Leadership", description: "Led final year project team", icon: "👥" }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-vscode-bg p-4 rounded border border-vscode-border hover:border-vscode-blue transition-colors"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className="text-vscode-yellow font-semibold mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-vscode-comment text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="ml-4">]</div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="certifications.yaml" language="yaml">
          <div>
            <span className="syntax-property">certifications</span>:
          </div>
          <div className="ml-4 my-4">
            <div className="space-y-4">
              {[
                { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
                { name: "React Developer Certification", issuer: "Meta", year: "2023" },
                { name: "MongoDB Associate", issuer: "MongoDB Inc.", year: "2022" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-vscode-bg rounded border border-vscode-border"
                >
                  <div>
                    <h4 className="text-vscode-blue font-semibold">{cert.name}</h4>
                    <p className="text-vscode-comment text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-vscode-green text-sm">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Education;