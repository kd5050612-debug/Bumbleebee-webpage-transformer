"use client";
import { motion } from "framer-motion";
import { features } from "../data/specs";

export default function PerformanceSection() {
    return (
        <section id="performance" className="relative min-h-screen bg-[#111216] text-white py-24 px-6 md:px-12 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] rounded-lg overflow-hidden border border-[#2A2C35] bg-[#1B1C22]"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-[#111216]">
                        <img
                            src="/images/bumblebee_action.jpg"
                            alt="Bumblebee Performance"
                            className="w-full h-full object-cover object-top scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111216] via-transparent to-transparent opacity-50" />
                    </div>
                </motion.div>

                {/* Specs Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                        Combat <span className="text-cybertron-gold">Ready</span>
                    </h2>
                    <p className="text-xl text-[#B0B3BD] mb-12">
                        Engineered for both speed and battle. The Bumblebee platform integrates Cybertronian agility with Earth muscle car aesthetics.
                    </p>

                    <div className="grid grid-cols-1 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="border-b border-[#2A2C35] pb-6 group hover:border-cybertron-gold transition-colors duration-300">
                                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-cybertron-gold transition-colors">{feature.title}</h3>
                                <p className="text-[#8A8F98]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
