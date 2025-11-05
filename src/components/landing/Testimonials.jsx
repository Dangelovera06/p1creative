import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Went from struggling with monetization to $50K in my first 60 days. Momento built everything—I just showed up with my knowledge. Life-changing.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Chen",
    role: "Fitness Creator, 45K followers",
  },
  {
    text: "Made $180K in my first launch with Momento. They handled the tech, funnels, and strategy while I focused on my audience. Best decision ever.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marcus Johnson",
    role: "Business Coach, 22K followers",
  },
  {
    text: "Finally monetized my 8 years of content creation. Momento turned my expertise into a six-figure course in just 30 days. Unbelievable ROI.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Elena Rodriguez",
    role: "Nutrition Expert, 68K followers",
  },
  {
    text: "I had the audience but no clue how to sell. Momento built my entire funnel and launch strategy. Hit $100K in month two.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Michael Thompson",
    role: "Real Estate Educator, 35K followers",
  },
  {
    text: "From zero to $75K in 45 days with Momento's done-for-you system. They made monetization effortless—I wish I'd found them years ago.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Lisa Martinez",
    role: "Mindset Coach, 15K followers",
  },
  {
    text: "Momento transformed my side hustle into a full-time business. $250K in year one, all while they handled the heavy lifting. Incredible team.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "David Kim",
    role: "Tech YouTuber, 120K subscribers",
  },
  {
    text: "$320K from one course launch. Momento's system is foolproof—sales funnels, emails, everything automated. I just focus on content now.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    name: "Amanda Foster",
    role: "Marketing Strategist, 55K followers",
  },
  {
    text: "Turned my Instagram following into consistent $40K months. Momento did all the technical work so I could stay in my zone of genius.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Jason Park",
    role: "Travel Creator, 95K followers",
  },
  {
    text: "Best investment in my creator journey. $150K in 90 days, and Momento handled everything from course design to checkout pages. Worth every penny.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Jennifer Blake",
    role: "Productivity Expert, 28K followers",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#030303] py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006eff]/[0.03] via-transparent to-[#0050cc]/[0.03]" />

      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] py-2 px-4 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#006eff]"></div>
              <span className="text-sm text-white/60 tracking-wide">Success Stories</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Real Creators.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
              Real Revenue.
            </span>
          </h2>
          
          <p className="text-center text-base md:text-lg text-white/50 leading-relaxed">
            See what creators are saying about their transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={17} 
          />
        </motion.div>
      </div>
    </section>
  );
}
