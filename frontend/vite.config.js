/**
 * Vite Configuration
 * Build tool and development server configuration for React + Tailwind CSS
 */

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration with:
 * - React plugin for JSX support
 * - Tailwind CSS plugin for styling
 * - Hot Module Replacement (HMR) for fast development
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

