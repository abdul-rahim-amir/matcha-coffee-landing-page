'use client';

import Link from 'next/link';

export default function Navbar() {
    const navItems = [
        { name: 'The Craft', href: '/craft' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Shop', href: '/shop' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
            <Link href="/" className="text-white font-bold tracking-[0.4em] text-sm uppercase">Artisan</Link>
            <div className="hidden md:flex gap-12">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.3em] transition-colors">
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link 
                href="/member-access"
                className="text-white border border-white/20 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
                Member Access
            </Link>
        </nav>
    );
}
