const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  personalInfo: {
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
    drivingLicense: { type: String, required: true },
    photo: { type: String },
    tagline: { type: String, required: true },
    bio: { type: String, required: true }
  },
  skills: {
    platforms: [{ type: String }],
    languages: [{ type: String }],
    tools: [{ type: String }],
    software: [{ type: String }]
  },
  education: [{
    school: { type: String, required: true },
    diploma: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String }
  }],
  experience: [{
    company: { type: String, required: true },
    position: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['internship', 'job', 'association'], required: true }
  }],
  projects: [{
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    image: { type: String }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);