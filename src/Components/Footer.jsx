import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Jim Paul G. Niñeria. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-sm">
                        My Website Portfolio
                    </p>
                </div>
            </div>
        </footer>
    );
}