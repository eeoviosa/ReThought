/**
 * Main App Component
 * Root component that sets up routing and global styling
 */

import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import CreatePage from './pages/CreatePage';

/**
 * App component with all application routes
 * Features:
 * - Route configuration for home, note details, and note creation
 * - Global gradient background
 * - DaisyUI theme configuration
 */
const App = () => {
  return (
    <div data-theme="forest" className="relative h-full w-full">
      {/* Animated radial gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      {/* Route definitions for all pages */}
      <Routes>
        {/* Home page - displays all notes */}
        <Route path="/" element={<HomePage />} />

        {/* Note detail page - view and edit individual notes */}
        <Route path="/note/:id" element={<NoteDetailPage />} />

        {/* Create note page - form to create new notes */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;