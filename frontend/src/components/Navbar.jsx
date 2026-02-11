/**
 * Navigation Bar Component
 * Header component with app title and create note button
 */

import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

/**
 * Navbar component with:
 * - App branding/title
 * - Navigation links
 * - Button to create new note
 */
function Navbar() {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    {/* App title/branding */}
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">ReThought</h1>

                    {/* Navigation and action buttons */}
                    <div className="flex items-center gap-4">
                        {/* Link to create new note page */}
                        <Link to="/create" className="btn btn-primary">
                            <PlusIcon className="size-5" />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar