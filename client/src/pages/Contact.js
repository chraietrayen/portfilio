import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import CodeBlock from '../components/CodeBlock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await axios.post('/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message'
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CodeBlock title="contact.html" language="html">
          <div>
            &lt;!<span className="syntax-comment">DOCTYPE html</span>&gt;
          </div>
          <div>
            &lt;<span className="syntax-keyword">html</span>{" "}
            <span className="syntax-property">lang</span>=
            <span className="syntax-string">"en"</span>&gt;
          </div>
          <div>
            &lt;<span className="syntax-keyword">head</span>&gt;
          </div>
          <div className="ml-4">
            &lt;<span className="syntax-keyword">title</span>&gt;Contact Me&lt;/<span className="syntax-keyword">title</span>&gt;
          </div>
          <div>
            &lt;/<span className="syntax-keyword">head</span>&gt;
          </div>
          <div>
            &lt;<span className="syntax-keyword">body</span>&gt;
          </div>
          <div className="ml-4">
            &lt;<span className="syntax-keyword">section</span>{" "}
            <span className="syntax-property">class</span>=
            <span className="syntax-string">"contact-form"</span>&gt;
          </div>
        </CodeBlock>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="contact-info.jsx" language="jsx">
          <div>
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-method">ContactInfo</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  value: 'rayenchraiet2000@gmail.com',
                  link: 'mailto:rayenchraiet2000@gmail.com',
                  color: 'text-vscode-blue'
                },
                {
                  icon: '📱',
                  title: 'Phone',
                  value: '+21694599198',
                  link: 'tel:+21694599198',
                  color: 'text-vscode-green'
                },
                {
                  icon: '/github.png',
                  title: 'GITHUB',
                  value: 'github.com/rayenchraiet',
                  link: 'https://github.com/chraietrayen',
                  color: 'text-vscode-blue'
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card text-center hover:border-vscode-blue transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">
                    {contact.icon.startsWith('/') ? (
                      <img 
                        src={contact.icon} 
                        alt={contact.title}
                        className="w-10 h-10 mx-auto filter brightness-0 invert"
                      />
                    ) : (
                      contact.icon
                    )}
                  </div>
                  <h3 className={`${contact.color} font-semibold mb-2`}>{contact.title}</h3>
                  <p className="text-vscode-text text-sm break-words">{contact.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="contact-form.js" language="javascript">
          <div>
            <span className="syntax-keyword">function</span>{" "}
            <span className="syntax-method">sendMessage</span>() &#123;
          </div>
          <div className="ml-4 my-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-vscode-comment text-sm mb-2">
                    {/* Your Name */}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-vscode-comment text-sm mb-2">
                    {/* Email Address */}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-vscode-comment text-sm mb-2">
                  {/* Subject */}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-vscode-comment text-sm mb-2">
                  {/* Your Message */}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field w-full resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Messages */}
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900 border border-vscode-green rounded text-vscode-green"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900 border border-vscode-red rounded text-vscode-red"
                >
                  ❌ {status.error}
                </motion.div>
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <span className="flex items-center">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Download CV */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="download-cv.ts" language="typescript">
          <div>
            <span className="syntax-keyword">interface</span>{" "}
            <span className="syntax-method">CVDownload</span> &#123;
          </div>
          <div className="ml-4">
            <span className="syntax-property">format</span>: 
            <span className="syntax-string">'PDF'</span> | 
            <span className="syntax-string">'DOC'</span>;
          </div>
          <div className="ml-4">
            <span className="syntax-property">downloadUrl</span>: 
            <span className="syntax-keyword">string</span>;
          </div>
          <div>&#125;</div>
          <div className="mt-4">
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-property">downloadCV</span> = () =&gt; &#123;
          </div>
          <div className="ml-4 my-6">
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => {
                  // In a real implementation, this would trigger a PDF download
                  alert('CV download feature coming soon!');
                }}
              >
                📄 Download CV (PDF)
              </motion.button>
              <p className="text-vscode-comment text-sm mt-3">
                Get a printable version of my resume
              </p>
            </div>
          </div>
          <div>&#125;</div>
        </CodeBlock>
      </motion.div>

      {/* Closing HTML tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <CodeBlock title="closing-tags.html" language="html">
          <div className="ml-4">
            &lt;/<span className="syntax-keyword">section</span>&gt;
          </div>
          <div>
            &lt;/<span className="syntax-keyword">body</span>&gt;
          </div>
          <div>
            &lt;/<span className="syntax-keyword">html</span>&gt;
          </div>
        </CodeBlock>
      </motion.div>
    </div>
  );
};

export default Contact;