'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CollectionsSection() {
    const collections = [
        { title: "Limited Drops", desc: "Small-batch micro-lots sourced for their unique flavor profiles.", count: "04 Items" },
        { title: "Starter Kits", desc: "Everything you need to begin your nitrogen-infused ritual.", count: "02 Items" },
        { title: "Ritual Tools", desc: "Crafted bamboo and ceramic essentials for the perfect whisk.", count: "06 Items" }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-[#050505] relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                    >
                        Explore More
                    </motion.span>
                    <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter italic leading-none">
                        Curated <br /> Collections
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {collections.map((col, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-12 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] hover:border-green-400/20 transition-all cursor-pointer"
                        >
                            <span className="text-green-400/40 text-[10px] tracking-widest uppercase font-bold mb-12 block">{col.count}</span>
                            <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-6 group-hover:text-green-400 transition-colors">{col.title}</h3>
                            <p className="text-white/30 text-base font-light leading-relaxed mb-12">{col.desc}</p>
                            <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-green-400/50 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
