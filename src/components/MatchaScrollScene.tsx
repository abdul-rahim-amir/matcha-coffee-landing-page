'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useSpring, useTransform, motion, MotionValue } from 'framer-motion';

const FRAME_COUNT = 174;

export default function MatchaScrollScene() {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Framer Motion Hooks
  // We use a callback ref to lock scroll progress specifically to this container.
  // This prevents the animation from compressing when more content is added below.
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
        // handle error to prevent infinite loading state if image is missing
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
        // Handle High DPI scaling
        const styleWidth = canvas.clientWidth;
        const styleHeight = canvas.clientHeight;
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = styleWidth * dpr;
        canvas.height = styleHeight * dpr;
        ctx.scale(dpr, dpr);

        // 'cover' fit logic
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

    // Initial render
    render();

    // handle resize
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
                
                {/* Scroll Indicator */}
                <ScrollIndicator progress={scrollYProgress} />

                {/* Text Overlays */}
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
            <StorySection />
            <FaqSection />
            <JoinRitual />
        </>
      )}
      
      <footer className="py-24 border-t border-white/5 flex flex-col items-center gap-8 bg-black">
        <div className="text-white font-bold tracking-[0.4em] text-sm uppercase opacity-50">Artisan Matcha</div>
        <p className="text-white/20 text-xs tracking-widest uppercase">© 2024 Artisan — ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

function StorySection() {
    return (
        <section className="px-8 md:px-24 py-60 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Subtle Matcha Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full max-w-4xl relative z-10"
            >
                <span className="text-green-400 text-xs tracking-[0.6em] uppercase mb-16 block font-bold">Philosophy</span>
                <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight leading-tight italic px-4">
                    &quot;Crafting the perfect Dirty Matcha is an act of defiance against the mundane. We trade speed for soul, and rush for ritual.&quot;
                </h2>
                <div className="mt-20 w-[1px] h-32 bg-gradient-to-b from-green-400 to-transparent mx-auto opacity-50" />
            </motion.div>
        </section>
    );
}

function ScrollIndicator({ progress }: { progress: MotionValue<number> }) {
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

function OverlayText({ 
    progress, start, end, title, subtitle, align, isCTA 
}: { 
    progress: MotionValue<number>, 
    start: number, 
    end: number, 
    title: string, 
    subtitle: string, 
    align: 'left' | 'center' | 'right',
    isCTA?: boolean
}) {
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

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
            <div className="text-white font-bold tracking-[0.4em] text-sm uppercase">Artisan</div>
            <div className="hidden md:flex gap-12">
                {['The Craft', 'Ingredients', 'Shop'].map((item) => (
                    <a key={item} href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.3em] transition-colors">{item}</a>
                ))}
            </div>
            <button className="text-white border border-white/20 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                Member Access
            </button>
        </nav>
    );
}

function FeaturesSection() {
    return (
        <section className="px-8 md:px-24 py-32 grid md:grid-cols-3 gap-12 bg-[#050505]">
            {[
                { title: 'Ceremonial Grade', desc: 'Sourced from at the foothills of Uji, Japan, for unparalleled purity.' },
                { title: 'Nitro Chilled', desc: 'Oxygen-free brewing process that preserves every aromatic note.' },
                { title: 'Clean Energy', desc: 'No jitters. Just 6 hours of sustained, crystalline focus.' }
            ].map((feature, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-10 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-green-400/20 transition-all group"
                >
                    <h3 className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6 group-hover:tracking-[0.4em] transition-all">{feature.title}</h3>
                    <p className="text-white/50 text-lg font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
            ))}
        </section>
    );
}

function FaqSection() {
    return (
        <section className="px-8 md:px-24 py-40 bg-[#050505]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-20 text-center uppercase">Expertise & Care</h2>
                <div className="space-y-8">
                    {[
                        { q: 'How is the nitro process applied?', a: 'We infuse cold-brewed matcha with pure nitrogen under high pressure to create a micro-foam that mimics the traditional whisked tea.' },
                        { q: 'Is this caffeinated?', a: 'Yes, but with L-Theanine for a smooth, jitter-free focus that lasts up to 6 hours.' },
                        { q: 'Sustainable sourcing?', a: 'Every gram of our matcha comes from carbon-negative farms in the Uji region, Japan.' }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="border-b border-white/5 pb-8 group"
                        >
                            <h4 className="text-white/70 text-lg mb-4 flex justify-between items-center group-hover:text-white transition-colors cursor-pointer uppercase tracking-widest text-xs font-bold">
                                {item.q}
                                <span className="text-green-400">+</span>
                            </h4>
                            <p className="text-white/30 text-sm font-light leading-loose max-w-xl">{item.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function JoinRitual() {
    return (
        <section className="px-8 md:px-24 py-60 flex flex-col items-center justify-center text-center bg-black relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.03)_0%,transparent_70%)]" />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-2xl relative z-10"
            >
                <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tighter mb-8 italic">Join the Ritual</h2>
                <p className="text-white/40 text-lg mb-12 font-light">Be the first to access our limited micro-batches and nitrogen-sealed drops.</p>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        className="bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white text-xs tracking-widest focus:outline-none focus:border-green-400/50 flex-grow"
                    />
                    <button className="bg-white text-black px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-green-400 transition-colors">
                        SUBSCRIBE
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

