"use client";
import { motion } from "framer-motion";

const cards = [
    { title: "Camaro Mode", desc: "High-speed stealth transport.", img: "/images/camaro_weaponized.jpg" },
    { title: "Mid-Transformation", desc: "Defensive panel shifting.", img: "/images/bumblebee_split.jpg" },
    { title: "Robot Mode", desc: "Full combat capabilities.", img: "/images/bumblebee_action.jpg" },
];

export default function TransformationBreakdown() {
    return (
        <section id="transformation" className="bg-[#111216] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-center mb-16 text-white"
                >
                    Transformation <span className="text-cybertron-gold">Analysis</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#1B1C22] rounded-xl overflow-hidden border border-[#2A2C35] hover:border-cybertron-gold/50 transition-all duration-300"
                        >
                            <div className="h-[300px] overflow-hidden">
                                <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-serif text-white mb-2">{card.title}</h3>
                                <p className="text-[#B0B3BD]">{card.desc}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
