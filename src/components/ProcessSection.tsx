'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
    const steps = [
        {
            title: "Shade Growing",
            desc: "For 20 days before harvest, tea bushes are covered to increase chlorophyll and amino acids, creating the vibrant green color and umami flavor.",
            num: "01"
        },
        {
            title: "Stone Grinding",
            desc: "The leaves are slowly ground by granite stones. It takes one hour to produce just 30g of powder to prevent heat from damaging the aroma.",
            num: "02"
        },
        {
            title: "Nitro Infusion",
            desc: "Our unique process infuses the cold-brewed matcha with nitrogen at high pressure, creating a velvety micro-foam texture.",
            num: "03"
        }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                >
                    The Method
                </motion.span>
                <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter mb-24 italic">The Craft of <br /> Perfection</h2>
                
                <div className="grid md:grid-cols-3 gap-16">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group"
                        >
                            <span className="text-green-400/20 text-8xl font-black absolute -top-12 -left-8 group-hover:text-green-400/40 transition-colors duration-500">{step.num}</span>
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-6">{step.title}</h3>
                                <p className="text-white/40 text-lg font-light leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
