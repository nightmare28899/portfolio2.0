"use client";

import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "Full-Stack Developer",
    company: "Government Digital Platforms (Michoacán)",
    dates: "[Add exact dates]",
    responsibilities: [
      "Built and maintained business-critical platforms used by public institutions.",
      "Implemented role-based workflows, secure authentication flows, and validation layers.",
      "Collaborated with stakeholders to refine requirements and deliver production-ready releases."
    ],
    achievements: [
      "Improved internal workflows by replacing manual processes with a centralized digital platform.",
      "Enabled better operational oversight through centralized reporting and data visibility."
    ]
  },
  {
    role: "Mobile & Frontend Engineer",
    company: "Consumer Mobile Products",
    dates: "[Add exact dates]",
    responsibilities: [
      "Developed cross-platform mobile applications with React Native and TypeScript.",
      "Integrated APIs and optimized app performance for real-world usage spikes.",
      "Worked with cross-functional teams across product, design, and backend."
    ],
    achievements: [
      "Delivered production features used by active mobile users.",
      "Improved maintainability through modular architecture and reusable components."
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Timeline of product-focused work across web and mobile development, with an emphasis on maintainable architecture, delivery reliability, and business impact.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <motion.article
              key={`${item.role}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <span className="text-sm text-gray-400">{item.dates}</span>
              </div>
              <p className="text-primary font-medium mb-4">{item.company}</p>

              <h4 className="font-semibold mb-2">Responsibilities</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
                {item.responsibilities.map((point) => <li key={point}>{point}</li>)}
              </ul>

              <h4 className="font-semibold mb-2">Key achievements</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {item.achievements.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
