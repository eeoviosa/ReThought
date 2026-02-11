/**
 * Utility Functions
 * Common helper functions used across the application
 */

/**
 * Formats a date object into a readable string format
 * Example: "Feb 10, 2026"
 * @param {Date} date - The date object to format
 * @returns {string} Formatted date string in "Mon DD, YYYY" format
 */
export function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        month: "short",      // "Jan", "Feb", etc.
        day: "numeric",      // 1, 2, ..., 31
        year: "numeric",     // 2024, 2025, etc.
    });
}