/**
 * Database Connection Configuration
 * Handles MongoDB connection using Mongoose ODM
 */

import mongoose from 'mongoose'

/**
 * Connects to MongoDB database using connection string from environment variables
 * Exits process if connection fails to prevent app from running without database
 */
export const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using MONGO_URI from environment
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        // Log error and exit process on connection failure
        console.error('MongoDB connection failed:', error);
        process.exit(1)
    }
};
