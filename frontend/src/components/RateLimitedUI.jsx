/**
 * RateLimitedUI Component
 * Warning message displayed when user hits the API rate limit
 */

import { ZapIcon } from "lucide-react";

/**
 * RateLimitedUI component displays:
 * - Rate limit warning icon
 * - Explanation of rate limiting
 * - Instructions to wait before retrying
 */
const RateLimitedUI = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center p-6">
                    {/* Rate limit warning icon */}
                    <div className="shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                        <ZapIcon className="size-10 text-primary" />
                    </div>

                    {/* Message content */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Main heading */}
                        <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>

                        {/* Explanation */}
                        <p className="text-base-content mb-1">
                            You've made too many requests in a short period. Please wait a moment.
                        </p>

                        {/* Instruction to retry */}
                        <p className="text-sm text-base-content/70">
                            Try again in a few seconds for the best experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateLimitedUI;