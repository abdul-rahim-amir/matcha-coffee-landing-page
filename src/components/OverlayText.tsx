'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface OverlayTextProps {
    progress: MotionValue<number>;
    start: number;
    end: number;
    title: string;
    subtitle: string;
    align: 'left' | 'center' | 'right';
    isCTA?: boolean;
}

export default function OverlayText({
    progress, start, end, title, subtitle, align, isCTA
}: OverlayTextProps) {
    const rangeLen = end - start;
    const fadeLen = rangeLen * 0.1; // Exactly 10% of their range

    const opacity = useTransform(
        progress,
        [start, start + fadeLen, end - fadeLen, end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [start, start + fadeLen, end - fadeLen, end],
        [20, 0, 0, -20]
    );

    let positionClasses = "absolute top-1/2 -translate-y-1/2 px-8 md:px-24 w-full flex flex-col ";
    if (align === 'center') positionClasses += "items-center text-center left-0";
    if (align === 'left') positionClasses += "items-start text-left left-0";
    if (align === 'right') positionClasses += "items-end text-right right-0";

    return (
        <motion.div
            style={{ opacity, y }}
            className={positionClasses}
        >
            <h2 className={`font-bold tracking-tighter text-white/90 mb-4 whitespace-nowrap 
                ${align === 'center' ? 'text-5xl md:text-7xl lg:text-9xl' : 'text-4xl md:text-6xl lg:text-8xl'}`}>
                {title}
            </h2>
            <p className="text-lg md:text-2xl text-white/60 tracking-wide max-w-[600px] font-light mb-8">
                {subtitle}
            </p>
            {isCTA && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-400 text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-green-300 transition-colors"
                >
                    Order Now
                </motion.button>
            )}
        </motion.div>
    );
}
