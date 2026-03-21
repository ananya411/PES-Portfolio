import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Project from './models/Project.js';

dotenv.config();

const newProjects = [
    {
        title: 'AI Predictive Autoscaling Engine',
        description: 'Built an AI-based Predictive Autoscaling Engine using real-time metrics analysis to optimize cloud resource allocation and improve system performance. Implemented full-stack architecture with authentication, dashboard analytics, and automated scaling logic.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        techStack: ['Python', 'React', 'Node.js', 'Cloud'],
    },
    {
        title: 'Sports Management System',
        description: 'Developed a full-stack Sports Management System for players and coaches. Implemented venue booking, schedule management, and role-based portals with REST APIs and CRUD operations.',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        techStack: ['React.js', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Child Aptitude Test',
        description: 'Designed and implemented an interactive web-based platform to evaluate children’s cognitive abilities and skills through structured aptitude tests. Empowered parents and educators with data-driven reports.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    }
];

const seedProjects = async () => {
    try {
        await connectDB();
        await Project.deleteMany();
        await Project.insertMany(newProjects);
        console.log('Projects added successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding projects:', error);
        process.exit(1);
    }
};

seedProjects();
