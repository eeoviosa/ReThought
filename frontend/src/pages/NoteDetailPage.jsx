/**
 * NoteDetailPage Component
 * Displays a single note with ability to edit and delete
 * Fetches note data on mount and handles updates
 */

import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

/**
 * NoteDetailPage component featuring:
 * - Fetch single note by ID from URL params
 * - Edit title and content inline
 * - Save changes back to API
 * - Delete note with confirmation
 * - Loading state while fetching
 */
const NoteDetailPage = () => {
  // State management
  const [note, setNote] = useState(null);          // Current note object
  const [loading, setLoading] = useState(true);    // Initial page load state
  const [saving, setSaving] = useState(false);     // Save operation state

  // Router hooks
  const navigate = useNavigate();
  const { id } = useParams();  // Note ID from URL

  /**
   * Fetch note data when component mounts or ID changes
   */
  useEffect(() => {
    const fetchNote = async () => {
      try {
        // Get note by ID from API
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  /**
   * Handles note deletion with user confirmation
   * Redirects to home page after successful deletion
   */
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  /**
   * Handles updating note with new title and content
   * Validates input before sending to API
   */
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      // Send updated note to API
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  // Show loading spinner while fetching note
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header with back button and delete action */}
          <div className="flex items-center justify-between mb-6">
            {/* Back to home button */}
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            {/* Delete note button */}
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          {/* Edit form card */}
          <div className="card bg-base-100">
            <div className="card-body">
              {/* Title input field */}
              <div className="form-control mb-4">
                <label className="label mb-1">
                  <span className="label-text font-semibold">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              {/* Content textarea field */}
              <div className="form-control mb-4">
                <label className="label mb-1">
                  <span className="label-text font-semibold">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              {/* Save button */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;