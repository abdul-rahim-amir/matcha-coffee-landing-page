'use client';

import Link from 'next/link';

export default function Footer() {
    const discoverLinks = [
        { name: 'The Craft', href: '/craft' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Philosophy', href: '/' },
        { name: 'Shop', href: '/shop' }
    ];

    return (
        <footer className="py-32 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-8 md:px-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="text-white font-bold tracking-[0.4em] text-xl uppercase mb-8">Artisan</div>
                        <p className="text-white/30 text-sm font-light max-w-xs leading-relaxed uppercase tracking-widest">
                            Redefining the energy ritual through the lens of craftsmanship and soul.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Discover</h5>
                        <ul className="space-y-4">
                            {discoverLinks.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/30 hover:text-green-400 text-[10px] uppercase tracking-[0.2em] transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Connect</h5>
                        <ul className="space-y-4">
                            {['Instagram', 'Twitter', 'Newsletter', 'Contact'].map(item => (
                                <li key={item}><a href="#" className="text-white/30 hover:text-green-400 text-[10px] uppercase tracking-[0.2em] transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-8">
                    <div className="text-white/10 text-[8px] font-bold tracking-[0.5em] uppercase">Artisan Matcha © 2024 — ALL RIGHTS RESERVED</div>
                    <div className="flex gap-12">
                        {['Privacy', 'Terms', 'Shipping'].map(item => (
                            <a key={item} href="#" className="text-white/20 hover:text-white text-[8px] uppercase tracking-[0.3em] transition-colors">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
