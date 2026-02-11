/**
 * Note Model
 * Defines the schema and model for notes in MongoDB
 */

import mongoose from 'mongoose';

// Define the schema for a Note document
const noteSchema = new mongoose.Schema({
    // Note title - required field
    title: {
        type: String,
        required: true,
    },
    // Note content/body - required field
    content: {
        type: String,
        required: true,
    },
}, {
    // Automatically add createdAt and updatedAt timestamps to each document
    timestamps: true,
});

// Create and export the Note model based on the schema
const Note = mongoose.model('Note', noteSchema);

export default Note;