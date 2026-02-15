"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, useMotionValue } from "framer-motion";
import clsx from "clsx";

const FRAME_COUNT = 240;

export default function HeroCanvasAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll Progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Load Images
    useEffect(() => {
        const loadImages = async () => {
            const imgArray: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const p = new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                    img.onload = () => {
                        setLoadedCount((prev) => prev + 1);
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        setLoadedCount((prev) => prev + 1); // Skip it but count progress
                        resolve();
                    };
                    imgArray[i - 1] = img;
                });
                promises.push(p);
            }

            await Promise.all(promises);
            setImages(imgArray);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Render Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Render Function
        const render = (progress: number) => {
            if (images.length === 0) return;

            // Handle High DPI
            const dpr = window.devicePixelRatio || 1;

            // Optimization: Image Smoothing
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            // Clear
            ctx.fillStyle = "#0B0B0F";
            // Note: Canvas dimensions are already scaled by DPR in handleResize
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Frame Index
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(progress * (FRAME_COUNT - 1))
            );
            const img = images[frameIndex];

            if (img) {
                // Return to Cover Logic for "Focus" + Zoom to hide watermark
                // scale = max (cover)
                const zoom = 1.08; // 8% zoom to push watermark off screen
                const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * zoom;

                const w = img.width * scale;
                const h = img.height * scale;

                // Center the image
                const x = (canvas.width - w) / 2;
                const y = (canvas.height - h) / 2;

                ctx.drawImage(img, x, y, w, h);
            }
        };

        // Resize Handler
        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            // Set actual size in memory (scaled to account for extra pixel density)
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // Normalize coordinate system to use css pixels? 
            // No, drawImage uses pixels. We just scaled the canvas backing store.
            // We DON'T scale the context here because we want full control over pixel rendering for the image.

            render(smoothProgress.get());
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // Sub to spring
        const unsubscribe = smoothProgress.on("change", (latest) => {
            render(latest);
        });

        // Initial Render
        if (!isLoading) {
            render(smoothProgress.get());
        }

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, isLoading, smoothProgress]);

    // Text Opacity Transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.7, 0.85], [0, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

    if (isLoading) {
        return (
            <div className="h-screen w-full bg-[#0B0B0F] flex flex-col items-center justify-center text-cybertron-gold z-50 relative">
                <h2 className="text-2xl font-serif mb-4 tracking-widest">INITIALIZING SYSTEMS</h2>
                <div className="w-64 h-1 bg-gray-800 rounded overflow-hidden">
                    <div
                        className="h-full bg-cybertron-gold transition-all duration-300 ease-out"
                        style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
                    />
                </div>
                <p className="mt-2 font-mono text-xs text-cybertron-gunmetal">{Math.round((loadedCount / FRAME_COUNT) * 100)}%</p>
            </div>
        );
    }

    return (
        <div id="hero" ref={containerRef} className="h-[1000vh] relative bg-[#0B0B0F]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ width: '100%', height: '100%' }}
                />

                {/* Cinematic Grain Overlay */}
                <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay" />

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <motion.div style={{ opacity: opacity1 }} className="text-center absolute">
                        <h1 className="text-7xl md:text-9xl font-serif text-white mb-2 tracking-tight">Pure Power</h1>
                        <p className="text-xl text-cybertron-gold uppercase tracking-widest font-sans">Chevrolet Camaro Base</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacity2 }} className="text-center absolute">
                        <h1 className="text-6xl md:text-8xl font-serif text-white mb-2 tracking-tight">Transformation Begins</h1>
                        <p className="text-xl text-cybertron-gold uppercase tracking-widest font-sans">Cybertronian Engineering</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacity3 }} className="text-center absolute">
                        <h1 className="text-6xl md:text-8xl font-serif text-white mb-2 tracking-tight">Autonomous Intelligence</h1>
                        <p className="text-xl text-cybertron-gold uppercase tracking-widest font-sans">Adaptive Combat Systems</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacity4 }} className="text-center absolute bottom-20 md:bottom-auto">
                        <h1 className="text-7xl md:text-9xl font-serif text-cybertron-gold mb-2 tracking-tight glowing-text">Autobot Activated</h1>
                        <p className="text-xl text-white uppercase tracking-widest font-sans">Bumblebee</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
