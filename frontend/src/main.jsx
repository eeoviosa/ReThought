/**
 * React Application Entry Point
 * Sets up root React component with routing and notifications
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

/**
 * Mount React application to DOM and configure:
 * - StrictMode for development warnings
 * - BrowserRouter for client-side routing
 * - Toast notifications with react-hot-toast
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Router context for navigation between pages */}
    <BrowserRouter>
      {/* Main App component with routes */}
      <App />
      {/* Toast notification system */}
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
