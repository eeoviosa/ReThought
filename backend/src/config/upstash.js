/**
 * Rate Limiting Configuration
 * Uses Upstash Redis for distributed rate limiting across requests
 */

import dotenv from 'dotenv'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Load environment variables (UPSTASH_REDIS_URL, etc.)
dotenv.config();

/**
 * Create a rate limiter that allows 10 requests per 60 seconds
 * Uses sliding window algorithm for smooth rate limiting
 * Analytics enabled to track rate limit hits for monitoring
 */
const ratelimit = new Ratelimit({
    // Redis client initialized from environment variables
    redis: Redis.fromEnv(),
    // Sliding window: 10 requests per 60 seconds
    limiter: Ratelimit.slidingWindow(10, '60 s'),
    // Enable analytics to track rate limiting events
    analytics: true,
})

export default ratelimit; 