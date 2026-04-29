'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ShopSection() {
    const products = [
        {
            name: "The Original Dirty",
            price: "$34.00",
            desc: "The perfect balance of ceremonial matcha and single-origin espresso.",
            image: "🍵"
        },
        {
            name: "Nitrogen Starter Kit",
            price: "$89.00",
            desc: "Everything you need to brew our signature velvety foam at home.",
            image: "📦"
        },
        {
            name: "Ceremonial Tin",
            price: "$28.00",
            desc: "30g of stone-ground Uji matcha. Pure, vibrant, and powerful.",
            image: "🥫"
        }
    ];

    return (
        <section className="px-8 md:px-24 py-40 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-green-400 text-xs tracking-[0.8em] uppercase font-bold mb-8 block"
                        >
                            The Shop
                        </motion.span>
                        <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter italic">Elevate Your <br /> Ritual</h2>
                    </div>
                    <button className="text-white border border-white/20 px-10 py-4 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all mb-4">
                        View All Drops
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col"
                        >
                            <div className="aspect-[4/5] bg-white/[0.03] border border-white/5 rounded-3xl mb-8 flex items-center justify-center text-8xl group-hover:bg-white/[0.05] group-hover:border-green-400/20 transition-all duration-700 overflow-hidden relative">
                                <motion.div 
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="cursor-pointer"
                                >
                                    {product.image}
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-white text-xl font-bold uppercase tracking-widest">{product.name}</h3>
                                <span className="text-green-400 font-mono font-bold">{product.price}</span>
                            </div>
                            <p className="text-white/30 text-sm font-light leading-relaxed mb-8 flex-grow">{product.desc}</p>
                            <button className="w-full bg-white text-black py-4 rounded-xl text-[10px] font-black tracking-[0.4em] uppercase hover:bg-green-400 transition-all">
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
