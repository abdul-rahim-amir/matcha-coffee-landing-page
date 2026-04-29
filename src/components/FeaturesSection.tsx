'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
    const features = [
        { 
            title: 'Ceremonial Grade', 
            desc: 'Sourced from the foothills of Uji, Japan, for unparalleled purity and a vibrant green hue.',
            icon: '🍵'
        },
        { 
            title: 'Nitro Chilled', 
            desc: 'Oxygen-free brewing process that preserves every aromatic note and creates a velvety texture.',
            icon: '⚡'
        },
        { 
            title: 'Clean Energy', 
            desc: 'No jitters. Just 6 hours of sustained, crystalline focus powered by L-Theanine.',
            icon: '🔋'
        }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-[#0a2f1f] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-400 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-600 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-xs tracking-[0.5em] uppercase font-bold mb-4 block"
                    >
                        The Collection
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-4xl md:text-6xl font-medium tracking-tight italic"
                    >
                        Engineered for Excellence
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-3xl hover:bg-white/[0.06] hover:border-green-400/30 transition-all group"
                        >
                            <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6 group-hover:tracking-[0.4em] transition-all font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 text-lg font-light leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
