'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BestSellers() {
    const products = [
        { name: "Nitro Matcha 4-Pack", price: "$24", tag: "Best Seller" },
        { name: "Dirty Pour Concentrate", price: "$32", tag: "New Drop" },
        { name: "Bamboo Whisk Set", price: "$18", tag: "Essential" }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-24">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-6 block"
                        >
                            Curated Drops
                        </motion.span>
                        <h2 className="text-white text-4xl md:text-7xl font-medium tracking-tighter italic">Most Wanted</h2>
                    </div>
                    <button className="hidden md:block text-white/40 hover:text-white text-[10px] tracking-widest uppercase font-bold border-b border-white/10 pb-2 transition-all">
                        Explore Collection
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-3xl mb-8 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:bg-white/[0.04] group-hover:border-green-400/20">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className="text-7xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                >
                                    🍵
                                </motion.div>
                                <div className="absolute top-6 left-6 px-4 py-2 bg-green-400 text-black text-[8px] font-black tracking-widest uppercase rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    {product.tag}
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <div>
                                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">{product.name}</h3>
                                    <p className="text-white/30 text-xs font-mono">{product.price}</p>
                                </div>
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    +
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
