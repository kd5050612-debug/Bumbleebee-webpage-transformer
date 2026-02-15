"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#performance" },
    { name: "FEATURES", href: "#features" },
    { name: "TRANSFORMATION", href: "#transformation" },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-[60] bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" onClick={(e) => scrollToSection(e, "#hero")} className="text-xl font-black italic tracking-tighter text-white">
                    BUMBLE<span className="text-cybertron-gold">BEE</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-xs font-bold tracking-[0.15em] text-white/70 hover:text-cybertron-gold transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Icon (Placeholder for now) */}
                <div className="md:hidden text-white">
                    {/* Simple hamburger if needed, or just hide links */}
                </div>
            </div>
        </motion.nav>
    );
}
