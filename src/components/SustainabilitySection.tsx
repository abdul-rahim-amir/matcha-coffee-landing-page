'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilitySection() {
    return (
        <section className="px-8 md:px-24 py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                        >
                            Earth First
                        </motion.span>
                        <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter mb-10 italic leading-none">
                            Carbon <br /> Negative <br /> Rituals
                        </h2>
                        <p className="text-white/40 text-xl font-light leading-relaxed max-w-md mb-12">
                            Every gram of our matcha is sourced from farms that sequester more carbon than they emit. We believe the energy you put in your body should come from energy that heals the planet.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "100% Solar-Powered Grinding",
                                "Zero-Waste Compostable Packaging",
                                "Direct Trade — 4x Fair Trade Premium"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest"
                                >
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-green-900/10 border border-green-400/20 rounded-full flex items-center justify-center p-20 animate-pulse">
                            <div className="w-full h-full bg-green-400/20 rounded-full blur-[80px]" />
                            <span className="text-9xl relative z-10">🌿</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
