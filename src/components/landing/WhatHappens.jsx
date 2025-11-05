import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Your Knowledge Becomes a Structured Product",
    description: "We work with you to extract and organize your expertise into a professional course or info product. No tech skills needed—we handle all curriculum design, platform setup, and content formatting.",
    image: "/WHAT HAPPENS/1.webp"
  },
  {
    title: "Your Sales Funnel Goes Live Automatically",
    description: "We build high-converting landing pages, email sequences, and checkout flows that turn your audience into paying customers. Everything is automated and optimized for maximum conversions.",
    image: "/WHAT HAPPENS/2.webp"
  },
  {
    title: "You Launch and Start Earning",
    description: "With your product live and marketing systems in place, you start generating revenue from day one. We provide ongoing support and optimization to scale your income month after month.",
    image: "/WHAT HAPPENS/3.webp"
  }
];

export default function WhatHappens() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            This is What Happens After You Join{" "}
            <span className="bg-gradient-to-r from-[#006eff] via-white to-[#006eff] bg-clip-text text-transparent">
              Momento
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#006eff]/30 transition-all duration-300">
                {/* Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

