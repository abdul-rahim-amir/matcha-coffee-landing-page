'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JoinRitual() {
    return (
        <section className="px-8 md:px-24 py-72 flex flex-col items-center justify-center text-center bg-[#050505] relative overflow-hidden">
            {/* Epic Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.08)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-3xl relative z-10"
            >
                <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-green-400 text-xs tracking-[1em] uppercase font-black mb-12 block"
                >
                    Limited Access
                </motion.span>
                <h2 className="text-white text-6xl md:text-8xl font-medium tracking-tighter mb-10 italic">Join the Ritual</h2>
                <p className="text-white/40 text-xl mb-16 font-light max-w-xl mx-auto leading-relaxed">
                    Be the first to access our limited micro-batches and nitrogen-sealed drops. Experience the future of matcha.
                </p>
                
                <form className="flex flex-col md:flex-row gap-6 w-full max-w-xl mx-auto group">
                    <div className="relative flex-grow">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl text-white text-xs tracking-[0.3em] focus:outline-none focus:border-green-400/50 focus:bg-white/[0.08] transition-all"
                        />
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-black px-12 py-6 rounded-2xl text-[10px] font-black tracking-[0.4em] uppercase hover:bg-green-400 transition-all whitespace-nowrap shadow-[0_0_40px_rgba(74,222,128,0.2)]"
                    >
                        Secure Access
                    </motion.button>
                </form>
                
                <p className="mt-12 text-white/20 text-[10px] tracking-[0.2em] uppercase font-bold">
                    No spam. Just pure energy.
                </p>
            </motion.div>
        </section>
    );
}
