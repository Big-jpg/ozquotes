"use client"; // We need client-side navigation

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-between">
                <li>
                    <Link href="/" className="text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/search-quotes" className="text-white hover:underline">
                        Search Quotes
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:underline">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
