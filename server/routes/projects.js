import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Sample projects data (fallback if MongoDB not connected)
const sampleProjects = [
  {
    id: 1,
    title: 'AI Predictive Autoscaling Engine',
    description: 'Built an AI-based Predictive Autoscaling Engine using real-time metrics analysis to optimize cloud resource allocation and improve system performance. Implemented full-stack architecture with authentication, dashboard analytics, and automated scaling logic.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    techStack: ['Python', 'React', 'Node.js', 'Cloud'],
    githubUrl: 'https://github.com/ananya411/Ai-Predictive-Autoscalingengine',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Sports Management System',
    description: 'Developed a full-stack Sports Management System for players and coaches. Implemented venue booking, schedule management, and role-based portals with REST APIs and CRUD operations.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/ananya411/sports-managment-main',
    liveUrl: 'https://sport-pro-lovat.vercel.app/'
  },
  {
    id: 3,
    title: 'Child Aptitude Test',
    description: 'Designed and implemented an interactive web-based platform to evaluate children’s cognitive abilities and skills through structured aptitude tests. Empowered parents and educators with data-driven reports.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    githubUrl: 'https://github.com/ananya411/child-aptitude-test',
    liveUrl: 'https://example.com'
  }
];

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    // Try to fetch from MongoDB
    try {
      const projects = await Project.find().sort({ createdAt: -1 });
      if (projects.length > 0) {
        return res.json(projects);
      }
    } catch (dbError) {
      console.log('Using sample projects (MongoDB not connected)');
    }

    // Fallback to sample data
    res.json(sampleProjects);
  } catch (error) {
    console.error('❌ Projects fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router;

