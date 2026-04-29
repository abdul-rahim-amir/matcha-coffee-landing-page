'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IngredientsSection() {
    const ingredients = [
        {
            name: "Ceremonial Matcha",
            source: "Uji, Japan",
            benefit: "High L-Theanine for calm focus.",
            icon: "🍵"
        },
        {
            name: "Single Origin Espresso",
            source: "Antigua, Guatemala",
            benefit: "Clean caffeine without the crash.",
            icon: "☕"
        },
        {
            name: "Pure Nitrogen",
            source: "Molecular Grade",
            benefit: "Velvety texture and natural sweetness.",
            icon: "💨"
        }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05)_0%,transparent_70%)]" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-32">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                    >
                        What's Inside
                    </motion.span>
                    <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter italic">Pure. Organic. <br /> Powerful.</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-green-400/30 transition-all group"
                        >
                            <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-500">{ing.icon}</div>
                            <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">{ing.name}</h3>
                            <span className="text-green-400 text-[10px] tracking-widest uppercase font-bold mb-8 block">{ing.source}</span>
                            <p className="text-white/40 text-lg font-light leading-relaxed">{ing.benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
