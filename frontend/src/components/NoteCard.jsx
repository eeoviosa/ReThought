/**
 * Note Card Component
 * Displays a single note in card format with preview and actions
 */

import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';
import api from '../lib/axios';
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast';

/**
 * NoteCard component displays a note with:
 * - Title and content preview
 * - Creation date
 * - Edit and delete buttons
 * - Click to view full note
 * @param {Object} note - Note object containing _id, title, content, createdAt
 * @param {Function} setNotes - Callback to update parent notes list after deletion
 */
const NoteCard = ({ note, setNotes }) => {

    /**
     * Handles note deletion with confirmation
     * Prevents navigation when delete button is clicked
     * Updates parent component after successful deletion
     */
    const handleDelete = async (e, id) => {
        // Prevent link navigation when clicking delete button
        e.preventDefault();

        // Confirm deletion with user
        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            // Send delete request to API
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted successfully");
            // Remove deleted note from parent component's state
            setNotes(prev => prev.filter(note => note._id !== id));
        }
        catch (error) {
            console.log('Error in handleDelete:', error);
            toast.error("Failed to delete note");
        }
    };

    return (
        // Link wrapper - clicking anywhere on card navigates to note detail page
        <Link
            to={`/note/${note._id}`}
            className="card bg-base-100 hover:shadow-lg hover:bg-base-50 transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D] shadow-md"
        >
            <div className="card-body">
                {/* Note title */}
                <h3 className="card-title text-base-content">{note.title}</h3>

                {/* Note content preview - limited to 3 lines */}
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>

                {/* Card footer with date and actions */}
                <div className="card-actions justify-between items-center mt-4">
                    {/* Creation date formatted */}
                    <span className="text-sm text-base-content/60">
                        {formatDate(new Date(note.createdAt))}
                    </span>

                    {/* Edit and delete buttons */}
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        {/* Delete button - prevents link navigation */}
                        <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={(e) => handleDelete(e, note._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NoteCard
