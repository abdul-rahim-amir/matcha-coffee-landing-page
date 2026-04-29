'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HealthBenefitsSection() {
    const benefits = [
        { 
            title: "Cellular Longevity", 
            desc: "Packed with EGCG, the most potent antioxidant known to science, fighting free radicals and promoting cellular repair.",
            icon: "🧬"
        },
        { 
            title: "Cognitive Synergy", 
            desc: "The L-Theanine and Caffeine combination provides a state of 'alert calm', enhancing focus without the jitters.",
            icon: "🧠"
        },
        { 
            title: "Metabolic Mastery", 
            desc: "Naturally boosts thermogenesis and fat oxidation, supporting a healthy metabolism and sustained energy levels.",
            icon: "🔥"
        }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                    >
                        Beyond Energy
                    </motion.span>
                    <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter italic leading-none">
                        Bio-Available <br /> Wellness
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 bg-white/[0.03] border border-white/5 rounded-full flex items-center justify-center text-4xl mb-10 group hover:border-green-400/30 transition-all duration-500">
                                {benefit.icon}
                            </div>
                            <h3 className="text-white text-sm font-bold uppercase tracking-[0.3em] mb-6">{benefit.title}</h3>
                            <p className="text-white/40 text-lg font-light leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
