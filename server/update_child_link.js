import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Project from './models/Project.js';

dotenv.config();

const updateProject = async () => {
    try {
        await connectDB();
        await Project.updateOne(
            { title: 'Child Aptitude Test' },
            { $set: { githubUrl: 'https://github.com/ananya411/child-aptitude-test' } }
        );
        console.log('Successfully updated Child Aptitude project GitHub URL!');
        process.exit(0);
    } catch (error) {
        console.error('Error updating project:', error);
        process.exit(1);
    }
};

updateProject();
