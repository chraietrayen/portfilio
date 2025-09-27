const Profile = require('../models/Profile');

// Get profile data
const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    if (!profile) {
      // Create default profile if none exists
      profile = new Profile({
        personalInfo: {
          name: "Rayen Chraiet",
          title: "Full Stack Developer",
          email: "your.email@example.com",
          phone: "+1234567890",
          position: "Software Engineer",
          age: 25,
          drivingLicense: "Yes",
          photo: "/rvn.jpg",
          tagline: "Passionate developer creating amazing digital experiences",
          bio: "I'm a full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems."
        },
        skills: {
          platforms: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
          languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
          tools: ["Git", "Docker", "AWS", "Vercel", "Netlify"],
          software: ["VS Code", "Figma", "Photoshop", "Postman"]
        },
        education: [{
          school: "University of Technology",
          diploma: "Bachelor's in Computer Science",
          period: "2019 - 2023",
          description: "Focused on software engineering and web development"
        }],
        experience: [{
          company: "Tech Startup",
          position: "Frontend Developer Intern",
          period: "June 2022 - August 2022",
          description: "Developed responsive web applications using React and TailwindCSS",
          type: "internship"
        }],
        projects: [{
          name: "E-commerce Platform",
          description: "Full-stack e-commerce application with payment integration",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          githubUrl: "https://github.com/yourusername/ecommerce",
          liveUrl: "https://your-ecommerce.vercel.app",
          image: "/api/placeholder/400/200"
        }]
      });
      await profile.save();
    }
    
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update profile data
const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getProfile,
  updateProfile
};