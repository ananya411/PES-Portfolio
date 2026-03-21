import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Project from './models/Project.js';

dotenv.config();

const updateProject = async () => {
    try {
        await connectDB();
        await Project.updateOne(
            { title: 'AI Predictive Autoscaling Engine' },
            { $set: { githubUrl: 'https://github.com/ananya411/Ai-Predictive-Autoscalingengine' } }
        );
        console.log('Successfully updated AI project GitHub URL!');
        process.exit(0);
    } catch (error) {
        console.error('Error updating project:', error);
        process.exit(1);
    }
};

updateProject();
