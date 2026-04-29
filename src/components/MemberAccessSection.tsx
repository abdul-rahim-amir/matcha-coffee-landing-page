'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MemberAccessSection() {
    return (
        <section className="px-8 md:px-24 py-40 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05)_0%,transparent_70%)]" />
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-green-900/20 blur-[150px] rounded-full" />
            
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-md w-full relative z-10 bg-white/[0.02] border border-white/5 p-12 rounded-3xl backdrop-blur-xl"
            >
                <div className="text-center mb-12">
                    <span className="text-green-400 text-[10px] tracking-[0.8em] uppercase font-bold mb-4 block">The Inner Circle</span>
                    <h2 className="text-white text-4xl font-medium tracking-tighter italic">Member Access</h2>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="text-white/40 text-[10px] tracking-widest uppercase mb-2 block font-bold">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white text-sm focus:outline-none focus:border-green-400/50 transition-all"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="text-white/40 text-[10px] tracking-widest uppercase mb-2 block font-bold">Member Key</label>
                        <input 
                            type="password" 
                            className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white text-sm focus:outline-none focus:border-green-400/50 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button className="w-full bg-white text-black py-4 rounded-xl text-[10px] font-black tracking-[0.4em] uppercase hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                        Enter Sanctuary
                    </button>
                </form>

                <div className="mt-12 pt-12 border-t border-white/5 text-center">
                    <p className="text-white/20 text-[10px] tracking-widest uppercase font-bold mb-4">Lost your access key?</p>
                    <a href="#" className="text-green-400 text-[10px] tracking-widest uppercase font-bold hover:text-white transition-colors">Request New Key</a>
                </div>
            </motion.div>
        </section>
    );
}
