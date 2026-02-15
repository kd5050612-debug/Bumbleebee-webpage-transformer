"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import { useLenis } from "lenis/react"; // If available, or just standard body lock

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    // Lock scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-auto"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white z-50 p-4"
                    >
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-transparent border-t-2 border-r-2 border-transparent group-hover:border-cybertron-gold transition-all" />
                            <span className="text-4xl leading-none">&times;</span>
                        </div>
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative w-full h-full bg-black overflow-hidden"
                    >
                        <video
                            className="w-full h-full object-contain"
                            autoPlay
                            loop
                            src="/videos/bumblebee_fight.mp4"
                            poster="/frames/ezgif-frame-240.jpg"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
