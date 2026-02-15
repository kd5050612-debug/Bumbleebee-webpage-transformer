"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function CTA() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0B0B0F] text-center px-4 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-radial-gradient from-cybertron-gold/5 to-transparent pointer-events-none" />

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-7xl md:text-9xl font-serif font-black mb-8 tracking-tighter text-white"
                >
                    ROLL OUT.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-[#8A8F98] mb-12 uppercase tracking-[0.2em]"
                >
                    Experience the full transformation
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoOpen(true)}
                    className="group relative px-12 py-5 bg-transparent border border-cybertron-gold text-cybertron-gold font-bold uppercase tracking-widest overflow-hidden cursor-pointer"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enter the Battle</span>
                    <div className="absolute inset-0 bg-cybertron-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    <div className="absolute inset-0 opacity-0 group-hover:animate-energy-pulse bg-white/20" />
                </motion.button>
            </section>

            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        </>
    );
}
