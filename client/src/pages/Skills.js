import React from 'react';
import { motion } from 'framer-motion';
import { useProfile } from '../context/ProfileContext';
import CodeBlock from '../components/CodeBlock';

const Skills = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-vscode-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-vscode-comment">Loading skills...</p>
        </div>
      </div>
    );
  }

  const skills = profile?.skills || {};

  const SkillCategory = ({ title, items, color }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card"
    >
      <h3 className={`${color} text-lg font-semibold mb-4`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {(items || []).map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-vscode-bg px-3 py-1 rounded-full text-sm border border-vscode-border hover:border-vscode-blue transition-colors"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CodeBlock title="skills.py" language="python">
          <div>
            <span className="syntax-keyword">class</span>{" "}
            <span className="syntax-method">TechnicalSkills</span>:
          </div>
          <div className="ml-4 mt-2">
            <span className="syntax-keyword">def</span>{" "}
            <span className="syntax-method">__init__</span>(
            <span className="syntax-property">self</span>):
          </div>
          <div className="ml-8">
            <span className="syntax-property">self</span>.platforms = [
          </div>
          <div className="ml-12">
            {(skills.platforms || ['React', 'Node.js', 'Express']).map((platform, index) => (
              <div key={index}>
                <span className="syntax-string">"{platform}"</span>
                {index < (skills.platforms?.length || 3) - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div className="ml-8">]</div>
          <div className="ml-8 mt-2">
            <span className="syntax-property">self</span>.languages = [
          </div>
          <div className="ml-12">
            {(skills.languages || ['JavaScript', 'TypeScript', 'Python']).map((lang, index) => (
              <div key={index}>
                <span className="syntax-string">"{lang}"</span>
                {index < (skills.languages?.length || 3) - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div className="ml-8">]</div>
          <div className="ml-8 mt-2">
            <span className="syntax-property">self</span>.tools = [
          </div>
          <div className="ml-12">
            {(skills.tools || ['Git', 'Docker', 'AWS']).map((tool, index) => (
              <div key={index}>
                <span className="syntax-string">"{tool}"</span>
                {index < (skills.tools?.length || 3) - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div className="ml-8">]</div>
          <div className="ml-8 mt-2">
            <span className="syntax-property">self</span>.software = [
          </div>
          <div className="ml-12">
            {(skills.software || ['VS Code', 'Figma', 'Photoshop']).map((software, index) => (
              <div key={index}>
                <span className="syntax-string">"{software}"</span>
                {index < (skills.software?.length || 3) - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div className="ml-8">]</div>
        </CodeBlock>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="skills-display.tsx" language="tsx">
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-method">SkillsDisplay</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SkillCategory
                title="🚀 Platforms & Frameworks"
                items={skills.platforms}
                color="text-vscode-blue"
              />
              <SkillCategory
                title="💻 Programming Languages"
                items={skills.languages}
                color="text-vscode-green"
              />
              <SkillCategory
                title="🛠️ Tools & Technologies"
                items={skills.tools}
                color="text-vscode-yellow"
              />
              <SkillCategory
                title="📱 Software & Design"
                items={skills.software}
                color="text-vscode-pink"
              />
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Skill Proficiency */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="proficiency.js" language="javascript">
          <div>
            <span className="syntax-comment">{"// Skill proficiency levels"}</span>
          </div>
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-property">proficiencyLevels</span> = &#123;
          </div>
          <div className="ml-4 my-4">
            <div className="space-y-4">
              {[
                { category: 'Frontend Development', level: 90, color: 'bg-vscode-blue' },
                { category: 'Backend Development', level: 85, color: 'bg-vscode-green' },
                { category: 'Database Design', level: 80, color: 'bg-vscode-yellow' },
                { category: 'DevOps & Deployment', level: 75, color: 'bg-vscode-pink' },
                { category: 'UI/UX Design', level: 70, color: 'bg-vscode-orange' }
              ].map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-vscode-text text-sm">{skill.category}</span>
                    <span className="text-vscode-comment text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-vscode-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                      className={`h-2 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Skills;