"use client";
import { motion } from "framer-motion";

const featureList = [
    {
        title: "Cybertronian Engineering",
        desc: "Adaptive robotic framing allows for frame-perfect transformation at high velocities.",
        img: "/images/camaro_weaponized.jpg"
    },
    {
        title: "Autonomous Combat AI",
        desc: "Neural network processing capable of predicting enemy movements within microseconds.",
        img: "/images/bumblebee_face.jpg"
    },
    {
        title: "Energon Core Reactor",
        desc: "Infinite operational range powered by a condensing Energon harvesting unit.",
        img: "/images/bumblebee_split.jpg"
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="bg-[#0B0B0F] py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-32">
                {featureList.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 w-full h-[500px] relative rounded-xl overflow-hidden group border border-[#2A2C35] bg-[#111216]">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                            <img src={feature.img} alt={feature.title} className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700" />
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="h-1 w-12 bg-cybertron-gold" />
                            <h3 className="text-4xl md:text-5xl font-serif text-white">{feature.title}</h3>
                            <p className="text-xl text-gray-400 leading-relaxed">{feature.desc}</p>
                            <button className="text-cybertron-gold uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors">
                                Learn More &rarr;
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
