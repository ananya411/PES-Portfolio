import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Project from './models/Project.js';

dotenv.config();

const updateProjects = async () => {
    try {
        await connectDB();
        await Project.updateMany(
            {},
            {
                $set: {
                    liveUrl: 'https://example.com',
                    githubUrl: 'https://github.com/ananya411'
                }
            }
        );
        console.log('Project URLs updated successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error updating projects:', error);
        process.exit(1);
    }
};

updateProjects();
