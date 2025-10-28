const Profile = require('../models/Profile');

const defaultProfile = {
  personalInfo: {
    name: 'Rayen Chraiet',
    title: 'Full Stack Developer',
    email: 'rayenchraiet2000@gmail.com',
    phone: '+21694599198',
    position: 'Full Stack Developer',
    age: 25,
    drivingLicense: 'Yes',
    photo: '/rvn.jpg',
    tagline: 'Passionate developer creating amazing digital experiences',
    bio: 'I am a full-stack developer with expertise in modern web technologies.'
  },
  skills: {
    platforms: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel'],
    software: ['Figma', 'Photoshop', 'Postman']
  },
  education: [{
    school: 'University',
    diploma: 'Computer Science',
    period: '2019-2023',
    description: 'Software engineering'
  }],
  experience: [{
    company: 'Tech Startup',
    position: 'Developer Intern',
    period: 'June 2022 - Aug 2022',
    description: 'React development',
    type: 'internship'
  }],
  projects: [{
    name: 'E-commerce',
    description: 'Full-stack application',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: '/placeholder.jpg'
  }]
};

const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne().maxTimeMS(5000);
    if (!profile) {
      try {
        profile = new Profile(defaultProfile);
        await profile.save();
      } catch (saveError) {
        console.log('Cannot save to database, returning default data');
        return res.json(defaultProfile);
      }
    }
    res.json(profile);
  } catch (error) {
    console.error('Profile fetch error:', error.message);
    res.json(defaultProfile);
  }
};

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
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error updating profile' });
  }
};

module.exports = { getProfile, updateProfile };
