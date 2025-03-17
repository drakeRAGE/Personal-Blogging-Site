import { Link } from '@remix-run/react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
                    Dragbos Blog
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
}