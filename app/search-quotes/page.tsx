"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SearchQuotes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = () => {
        setResults([`Result 1 for "${searchTerm}"`, `Result 2 for "${searchTerm}"`]);
    };

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Search Quotes</h1>
            <div className="text-center mb-8">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for quotes..."
                    className="border rounded px-4 py-2 w-1/2"
                />
                <Button variant="default" size="lg" onClick={handleSearch} className="ml-4">
                    Search
                </Button>
            </div>
            <div>
                {results.length > 0 ? (
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Quote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No results found. Please try searching with a different term.</p>
                )}
            </div>
            <br />
            <div className="flex justify-center">
                <Link href="/">
                    <Button
                        variant="default"
                        size="lg"
                        className="bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
