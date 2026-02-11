/**
 * Rate Limiter Middleware
 * Enforces request rate limiting on all API endpoints
 * Limits requests to 10 per 60 seconds to prevent API abuse
 */

import ratelimit from "../config/upstash.js";

/**
 * Middleware function that checks if request exceeds rate limit
 * Returns 429 Too Many Requests if limit is exceeded
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const rateLimiter = async (req, res, next) => {
  try {
    // Check rate limit using Upstash Redis backend
    const { success } = await ratelimit.limit("my-limit-key");

    // If rate limit exceeded, return 429 status code
    if (!success) {
      return res.status(429).json({ message: 'Too many requests, please try again later.' });
    }

    // Proceed to next middleware/route handler if rate limit not exceeded
    next();
  }
  catch (error) {
    // Log any errors that occur during rate limit check
    console.error('Rate limit error:', error);
    // Pass error to error handling middleware
    next(error);
  }
};

export default rateLimiter;