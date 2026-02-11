/**
 * CreatePage Component
 * Form page for creating new notes
 * Handles title and content input with form validation and submission
 */

import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import api from '../lib/axios';
import toast from 'react-hot-toast';

/**
 * CreatePage component featuring:
 * - Form to input note title and content
 * - Input validation before submission
 * - API call to create note on submit
 * - Navigation back to home on success
 * - Rate limit error handling with extended feedback
 */
function CreatePage() {
  // Form state
  const [title, setTitle] = useState('');             // Note title input
  const [content, setContent] = useState('');         // Note content input
  const [loading, setLoading] = useState(false);      // Submission loading state

  // Router navigation hook
  const navigate = useNavigate();

  /**
   * Handles form submission
   * Validates input and creates note via API
   * Redirects to home on success
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields are not empty
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // Send POST request to create note
      await api.post('/notes', {
        title,
        content
      });
      toast.success("Note created successfully");
      // Redirect to home page after successful creation
      navigate('/');
    }
    catch (error) {
      console.log('Error creating note:', error);
      // Handle rate limiting with special error message
      if (error.response.status === 429) {
        toast.error("Too many requests. Please try again later.", {
          duration: 4000,
          icon: '⚠️',
        });
      } else {
        toast.error("Failed to create note.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back to home button */}
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          {/* Create note form card */}
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                {/* Title input field */}
                <div className="form-control mb-6">
                  <label className="label mb-1">
                    <span className="label-text font-semibold">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Content textarea field */}
                <div className="form-control mb-6">
                  <label className="label mb-1">
                    <span className="label-text font-semibold">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered w-full h-40"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* Form submit button */}
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage