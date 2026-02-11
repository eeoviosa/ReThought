/**
 * NotesNotFound Component
 * Empty state UI displayed when no notes exist
 */

import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

/**
 * NotesNotFound component displays:
 * - Empty state icon
 * - Encouraging message
 * - CTA button to create first note
 */
const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            {/* Icon container */}
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>

            {/* Empty state heading */}
            <h3 className="text-2xl font-bold">No notes yet</h3>

            {/* Descriptive message */}
            <p className="text-base-content/70">
                Ready to organize your thoughts? Create your first note to get started on your journey.
            </p>

            {/* CTA link to create note page */}
            <Link to="/create" className="btn btn-primary">
                Create Your First Note
            </Link>
        </div>
    );
};

export default NotesNotFound;