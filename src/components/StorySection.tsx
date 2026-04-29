'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection() {
    return (
        <section className="px-8 md:px-24 py-64 flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
            {/* Dynamic Matcha Glow */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.08, 0.05] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500 rounded-full blur-[150px] pointer-events-none" 
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full max-w-5xl relative z-10"
            >
                <span className="text-green-400 text-xs tracking-[0.8em] uppercase mb-16 block font-bold opacity-80">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl text-white font-medium tracking-tight leading-[1.1] italic px-4 mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    &quot;Crafting the perfect Dirty Matcha is an act of defiance against the mundane.&quot;
                </h2>
                <p className="text-white/30 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed italic mb-20">
                    We trade speed for soul, and rush for ritual. Every drop is a testament to the patient pursuit of perfection.
                </p>
                <div className="w-[1px] h-40 bg-gradient-to-b from-green-400/50 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
}
