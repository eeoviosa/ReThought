/**
 * Axios Configuration
 * Centralized HTTP client setup with environment-aware base URL
 */

import axios from 'axios';

/**
 * Configure axios base URL based on environment
 * - Development: http://localhost:5001/api (local backend server)
 * - Production: /api (relative path for deployed backend)
 */
const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/api';

// Create axios instance with configured base URL
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;