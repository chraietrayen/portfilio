import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'home.jsx', icon: '🏠', color: 'text-vscode-blue' },
    { path: '/information', name: 'info.ts', icon: 'ℹ️', color: 'text-vscode-yellow' },
    { path: '/skills', name: 'skills.js', icon: '⚡', color: 'text-vscode-green' },
    { path: '/education', name: 'education.py', icon: '🎓', color: 'text-vscode-orange' },
    { path: '/experience', name: 'experience.cpp', icon: '💼', color: 'text-vscode-pink' },
    { path: '/contact', name: 'contact.html', icon: '📧', color: 'text-vscode-red' }
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-vscode-sidebar border-r border-vscode-border ${
        collapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-vscode-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-code text-vscode-text"
            >
              Portfolio Explorer
            </motion.h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-vscode-panel transition-colors"
          >
            <span className="text-vscode-text">
              {collapsed ? '→' : '←'}
            </span>
          </button>
        </div>
      </div>

      {/* File Tree Header */}
      <div className="px-4 py-2 text-xs text-vscode-comment uppercase tracking-wide">
        {!collapsed && 'Portfolio Files'}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 py-2">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-code transition-colors duration-200 mb-1 ${
                  isActive
                    ? 'bg-vscode-blue text-white'
                    : 'text-vscode-text hover:bg-vscode-panel hover:text-vscode-blue'
                }`
              }
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {!collapsed && (
                <span className={location.pathname === item.path ? 'text-white' : item.color}>
                  {item.name}
                </span>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-vscode-border">
        {!collapsed && (
          <div className="text-xs text-vscode-comment font-code">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-vscode-green rounded-full mr-2"></div>
              Server: Connected
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-vscode-blue rounded-full mr-2"></div>
              Database: Online
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;