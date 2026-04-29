'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FaqSection() {
    return (
        <section className="px-8 md:px-24 py-48 bg-black relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-green-400 text-xs tracking-[0.6em] uppercase font-bold mb-6 block"
                        >
                            The Ritual Details
                        </motion.span>
                        <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tighter mb-10 italic leading-none">
                            Expertise <br /> & Care
                        </h2>
                        <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
                            Everything you need to know about the science and soul behind our ceremonial blends.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: 'How is the nitro process applied?', a: 'We infuse cold-brewed matcha with pure nitrogen under high pressure to create a micro-foam that mimics the traditional whisked tea.' },
                            { q: 'Is this caffeinated?', a: 'Yes, but with L-Theanine for a smooth, jitter-free focus that lasts up to 6 hours.' },
                            { q: 'Sustainable sourcing?', a: 'Every gram of our matcha comes from carbon-negative farms in the Uji region, Japan.' },
                            { q: 'What is a "Dirty Pour"?', a: 'It\'s our signature technique where rich espresso meets ceremonial matcha, creating a stunning visual and flavor contrast.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-green-400/20 transition-all cursor-pointer"
                            >
                                <h4 className="text-white/80 text-sm font-bold uppercase tracking-[0.3em] mb-4 flex justify-between items-center group-hover:text-green-400 transition-colors">
                                    {item.q}
                                    <span className="text-xl">+</span>
                                </h4>
                                <p className="text-white/30 text-base font-light leading-relaxed group-hover:text-white/50 transition-colors">
                                    {item.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
