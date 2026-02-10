import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import dns from "dns";
import path from 'path';

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/ratelimiter.js';


dns.setServers(["1.1.1.1", "8.8.8.8"]); // or 1.1.1.1 + 1.0.0.1

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middleware
if (process.env.NODE_ENV != 'production') {
    app.use(cors({
        origin: ['http://localhost:5173']
    }));
}
app.use(express.json()); //use this middleware to parse JSON bodies
app.use(rateLimiter); // apply rate limiting middleware

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
});
