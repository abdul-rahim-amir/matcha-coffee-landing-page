'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

// Separate Components
import Navbar from './Navbar';
import FeaturesSection from './FeaturesSection';
import StorySection from './StorySection';
import FaqSection from './FaqSection';
import JoinRitual from './JoinRitual';
import Footer from './Footer';
import ScrollIndicator from './ScrollIndicator';
import OverlayText from './OverlayText';
import BestSellers from './BestSellers';

const FRAME_COUNT = 174;

export default function MatchaScrollScene() {
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    // Framer Motion Hooks
    const { scrollYProgress } = useScroll({
        target: containerRef ? { current: containerRef } : undefined,
        offset: ['start start', 'end end'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const num = i.toString().padStart(3, '0');
            img.src = `/matcha-sequence/matcha ${num}.jpg`;
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === FRAME_COUNT) {
                    setImages(loadedImages);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === FRAME_COUNT) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Canvas Drawing
    useEffect(() => {
        if (images.length < FRAME_COUNT || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            const idx = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(frameIndex.get()))
            );

            const img = images[idx];
            if (img && img.complete && img.naturalHeight !== 0) {
                const styleWidth = canvas.clientWidth;
                const styleHeight = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;

                canvas.width = styleWidth * dpr;
                canvas.height = styleHeight * dpr;
                ctx.scale(dpr, dpr);

                const imgRatio = img.width / img.height;
                const canvasRatio = styleWidth / styleHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (imgRatio > canvasRatio) {
                    drawHeight = styleHeight;
                    drawWidth = styleHeight * imgRatio;
                    offsetY = 0;
                    offsetX = (styleWidth - drawWidth) / 2;
                } else {
                    drawWidth = styleWidth;
                    drawHeight = styleWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (styleHeight - drawHeight) / 2;
                }

                ctx.clearRect(0, 0, styleWidth, styleHeight);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        const unsubscribe = frameIndex.on('change', render);
        render();
        window.addEventListener('resize', render);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', render);
        };
    }, [images, frameIndex]);

    if (loadedCount < FRAME_COUNT) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-full bg-[#050505] text-white">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-12 h-12 border-2 border-white/20 border-t-green-400 rounded-full mb-8"
                />
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                    <div
                        className="h-full bg-green-400/80 transition-all duration-300 ease-out"
                        style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
                    />
                </div>
                <div className="text-white/60 font-sans text-xs tracking-[0.3em] uppercase">
                    Loading {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#050505] min-h-screen">
            <Navbar />

            <div ref={setContainerRef} className={`relative w-full ${loadedCount < FRAME_COUNT ? 'h-screen overflow-hidden' : 'h-[800vh]'}`}>
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {loadedCount < FRAME_COUNT ? (
                        <div className="flex flex-col items-center justify-center h-full w-full text-white">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                className="w-12 h-12 border-2 border-white/20 border-t-green-400 rounded-full mb-8"
                            />
                            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                                <div
                                    className="h-full bg-green-400/80 transition-all duration-300 ease-out"
                                    style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
                                />
                            </div>
                            <div className="text-white/60 font-sans text-xs tracking-[0.3em] uppercase font-medium">
                                Loading {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                            </div>
                        </div>
                    ) : (
                        <>
                            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                            <ScrollIndicator progress={scrollYProgress} />

                            <OverlayText
                                progress={scrollYProgress}
                                start={0} end={0.2}
                                title="ARTISAN CRAFTED"
                                subtitle="The perfect balance of earth and energy."
                                align="center"
                            />
                            <OverlayText
                                progress={scrollYProgress}
                                start={0.25} end={0.45}
                                title="KINETIC CHILL"
                                subtitle="Crystalline ice suspended in a moment of freshness."
                                align="left"
                            />
                            <OverlayText
                                progress={scrollYProgress}
                                start={0.50} end={0.70}
                                title="THE DIRTY POUR"
                                subtitle="Rich espresso meets ceremonial grade matcha."
                                align="right"
                            />
                            <OverlayText
                                progress={scrollYProgress}
                                start={0.75} end={0.95}
                                title="TASTE THE MOMENT"
                                subtitle="Experience the fusion. Order now."
                                align="center"
                                isCTA
                            />
                        </>
                    )}
                </div>
            </div>

            {loadedCount === FRAME_COUNT && (
                <>
                    <FeaturesSection />
                    <BestSellers />
                    <StorySection />
                    <FaqSection />
                    <JoinRitual />
                    <Footer />
                </>
            )}
        </div>
    );
}
