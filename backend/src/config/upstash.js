import dotenv from 'dotenv'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

dotenv.config();

// Create a new ratelimiter, that allows 100 requests per minute

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '60 s'),
    analytics: true,
})

export default ratelimit; 