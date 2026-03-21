import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Project from './models/Project.js';

dotenv.config();

const updateProject = async () => {
    try {
        await connectDB();
        await Project.updateOne(
            { title: 'Sports Management System' },
            { $set: { liveUrl: 'https://sport-pro-lovat.vercel.app/' } }
        );
        console.log('Successfully updated Sports Management System Live URL!');
        process.exit(0);
    } catch (error) {
        console.error('Error updating project:', error);
        process.exit(1);
    }
};

updateProject();
