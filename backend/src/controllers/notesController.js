/**
 * Notes Controller
 * Handles all CRUD (Create, Read, Update, Delete) operations for notes
 */

import Note from "../../models/Note.js";

/**
 * Retrieves all notes from the database
 * Sorted by creation date in descending order (newest first)
 * @param {Object} _ - Unused request object
 * @param {Object} res - Express response object
 */
export async function getAllNotes(_, res) {
    try {
        // Fetch all notes and sort by createdAt timestamp in descending order
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json(notes)
    }
    catch (error) {
        console.error('Error in getAllNotes controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

/**
 * Retrieves a single note by its MongoDB ID
 * @param {Object} req - Express request object containing note ID in params
 * @param {Object} res - Express response object
 */
export async function getNoteById(req, res) {
    const { id } = req.params
    try {
        // Query database for a note with the specified ID
        const note = await Note.findById(id)
        // Return 404 if note doesn't exist
        if (!note) {
            return res.status(404).json({ message: 'Note not found' })
        }
        res.json(note)
    }
    catch (error) {
        console.error('Error in getNoteById controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

/**
 * Creates a new note with title and content
 * @param {Object} req - Express request object containing title and content in body
 * @param {Object} res - Express response object
 */
export async function createNote(req, res) {
    try {
        // Extract title and content from request body
        const { title, content } = req.body
        // Create a new Note instance and save to database
        const newNote = new Note({ title, content })
        await newNote.save()
        res.status(201).json({ message: 'Note created successfully!', note: newNote })
    } catch (error) {
        console.error('Error in createNote controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

/**
 * Updates an existing note by ID with new title and/or content
 * @param {Object} req - Express request object containing note ID and updated fields
 * @param {Object} res - Express response object
 */
export async function updateNoteById(req, res) {
    try {
        const { id } = req.params
        const { title, content } = req.body
        // Find note by ID and update with new data, returning the updated document
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true })

        // Return 404 if note doesn't exist
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' })
        }
        res.status(200).json({ message: 'Note updated successfully!' })
    }
    catch (error) {
        console.error('Error in updateNoteById controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

/**
 * Deletes a note by its MongoDB ID
 * @param {Object} req - Express request object containing note ID in params
 * @param {Object} res - Express response object
 */
export async function deleteNoteById(req, res) {
    const { id } = req.params
    try {
        // Find and remove the note from database
        const deletedNote = await Note.findByIdAndDelete(id)
        // Return 404 if note doesn't exist
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' })
        }
        res.status(200).json({ message: 'Note deleted successfully!' })
    } catch (error) {
        console.error('Error in deleteNoteById controller:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

