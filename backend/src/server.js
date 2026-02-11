/**
 * ReThought Backend Server
 * Main Express server configuration and initialization
 * Handles routing, middleware setup, and database connection
 */

import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import dns from "dns";
import path from 'path';

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/ratelimiter.js';

// Configure DNS servers for reliable resolution
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// ==== MIDDLEWARE CONFIGURATION ====

// CORS middleware - Allow frontend to communicate with backend in development
if (process.env.NODE_ENV != 'production') {
    app.use(cors({
        // Allow requests from local frontend development server add your local frontend URL here
        origin: ['http://localhost:5173']
    }));
}

// JSON body parser middleware - Parse incoming JSON request bodies
app.use(express.json());

// Rate limiting middleware - Protect API from abuse using Upstash
app.use(rateLimiter);

// ==== ROUTES ====
// Mount notes API routes at /api/notes path
app.use("/api/notes", notesRoutes);

// ==== PRODUCTION SETUP ====
// Serve static frontend files and enable SPA routing in production
if (process.env.NODE_ENV === 'production') {
    // Serve pre-built frontend files
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // Fallback route for SPA - serve index.html for all unmatched routes
    // This allows React Router to handle client-side routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
    });
}

// ==== SERVER INITIALIZATION ====
// Connect to MongoDB, then start the Express server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
});
