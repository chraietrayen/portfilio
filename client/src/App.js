import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Information from './pages/Information';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ProfileProvider>
      <Router>
        <div className="flex flex-col md:flex-row h-screen bg-vscode-bg text-vscode-text">
          <Sidebar />
          <main className="flex-1 overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full overflow-y-auto"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;