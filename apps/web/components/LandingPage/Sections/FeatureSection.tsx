"use client";
import React from "react";
import FeatureCard from "../Cards/FeatureCard";
import { motion } from "motion/react";
import {
  Users,
  BellRing,
  BarChart3,
  Smartphone,
  LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const FeatureSection = () => {
  const features: Feature[] = [
    {
      icon: BellRing,
      title: "Automated Fee Reminders",
      desc: "The system sends smart WhatsApp and SMS reminders automatically before and after due dates. Teachers stay stress-free, while parents receive timely updates for hassle-free payments.",
    },
    {
      icon: Users,
      title: "Smart Student Management",
      desc: "Easily track every student in one place. Add new students, update details, and manage. With student database, teachers can save time and focus more on teaching.",
    },
    {
      icon: BarChart3,
      title: "Fee Reports & Insights",
      desc: "Get a clear picture of your earnings with detailed fee reports and insights. Track pending, collected, and overdue payments, generate monthly reports.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Dashboard",
      desc: "Designed for teachers on the go. Our mobile-friendly dashboard works seamlessly on phones, tablets, and desktops, giving you the freedom to manage fees anytime, anywhere.",
    },
  ];

  return (
    <section className="mt-5 w-full py-14 md:py-28 px-5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="sm:text-lg md:text-xl text-primary text-start">
          FEATURES
        </h3>
        <h1 className="text-[28px] sm:text-5xl mt-1 sm:mt-3 max-w-lg text-start">
          Transform your workflow with our SaaS tool
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-0.5 pt-6 sm:pt-8">
        <div className="md:col-span-2 sm:border-b border-white/60">
          {features[0] && <FeatureCard {...features[0]} />}
        </div>

        <div className="md:col-span-1 sm:border-l border-white/60">
          {features[1] && <FeatureCard {...features[1]} />}
        </div>

        <div className="md:col-span-1 sm:border-r border-white/60">
          {features[2] && <FeatureCard {...features[2]} />}
        </div>

        <div className="md:col-span-2 sm:border-t border-white/60">
          {features[3] && <FeatureCard {...features[3]} />}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
