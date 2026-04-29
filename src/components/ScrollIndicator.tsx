'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

export default function ScrollIndicator({ progress }: { progress: MotionValue<number> }) {
    const opacity = useTransform(progress, [0, 0.1], [1, 0]);
    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Scroll to Explore</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent"
            />
        </motion.div>
    );
}
