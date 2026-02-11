/**
 * Notes API Routes
 * Defines all REST API endpoints for note operations
 */

import express from 'express';
import { createNote, deleteNoteById, getAllNotes, getNoteById, updateNoteById } from '../controllers/notesController.js';

const router = express.Router();

// GET /api/notes - Retrieve all notes
router.get('/', getAllNotes);

// POST /api/notes - Create a new note
router.post('/', createNote);

// PUT /api/notes/:id - Update a note by ID
router.put('/:id', updateNoteById);

// DELETE /api/notes/:id - Delete a note by ID
router.delete('/:id', deleteNoteById);

// GET /api/notes/:id - Retrieve a specific note by ID
router.get('/:id', getNoteById);

export default router;
