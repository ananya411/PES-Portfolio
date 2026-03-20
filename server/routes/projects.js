import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Sample projects data (fallback if MongoDB not connected)
const sampleProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    techStack: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
    techStack: ['React', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
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

