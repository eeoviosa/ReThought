/**
 * HomePage Component
 * Main page displaying all notes in a grid layout
 * Handles fetching notes from API and managing rate limit state
 */

import { useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import { useEffect } from 'react';
import api from '../lib/axios.js';
import { toast } from 'react-hot-toast';
import NoteCard from '../components/NoteCard.jsx';
import NotesNotFound from '../components/NotesNotFound.jsx';

/**
 * HomePage component featuring:
 * - Navigation bar with create note button
 * - Grid display of all notes
 * - Empty state when no notes exist
 * - Rate limit warning display
 * - Automatic note fetching on page load
 */
function HomePage() {

  // State management
  const [isRateLimited, setRateLimited] = useState(false);  // Rate limit status
  const [notes, setNotes] = useState([]);                   // Array of note objects
  const [loading, setLoading] = useState(true);             // Loading state for API call

  // Fetch all notes when component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Call API to get all notes
        const res = await api.get('/notes');
        setRateLimited(false);
        const data = res.data;
        console.log(data);
        // Update state with fetched notes
        setNotes(data);
      }
      catch (error) {
        console.log('Error fetching notes:', error);
        // Check if error is due to rate limiting (HTTP 429)
        if (error.response?.status === 429) {
          setRateLimited(true);
        }
        else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        // Disable loading state regardless of success/failure
        setLoading(false);
      }
    }

    fetchNotes();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      <Navbar />

      {/* Show rate limit warning if API limit reached */}
      {isRateLimited && <RateLimitedUI />}

      {/* Show empty state when no notes exist */}
      {notes.length === 0 && !loading && !isRateLimited && <NotesNotFound />}

      {/* Main content area */}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Loading spinner while fetching notes */}
        {loading && <div className="text-center text-primary py-10">Loading...</div>}

        {/* Grid of note cards */}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>

  );
};

export default HomePage