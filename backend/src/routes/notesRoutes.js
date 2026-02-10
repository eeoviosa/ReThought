import express from 'express';
import { createNote, deleteNoteById, getAllNotes, getNoteById, updateNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNoteById);
router.delete('/:id', deleteNoteById);
router.get('/:id', getNoteById);

export default router;
