"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-16 sm:py-24"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
              variants={fadeIn}
            >
              About Smith
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600"
              variants={fadeIn}
            >
              Smith is a curated collection of premium products designed to
              enhance your lifestyle. Our commitment to quality and design
              excellence drives everything we do.
            </motion.p>
          </div>

          <motion.div
            className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
            variants={fadeIn}
          >
            {[
              {
                title: "Our Mission",
                description:
                  "To provide exceptional products that combine functionality with elegant design.",
              },
              {
                title: "Our Vision",
                description:
                  "To become the leading destination for premium lifestyle products.",
              },
              {
                title: "Our Values",
                description:
                  "Quality, innovation, and customer satisfaction guide every decision we make.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{["🎯", "👁️", "💎"][index]}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-24 text-center" variants={fadeIn}>
            <ArrowDownCircle
              className="mx-auto text-blue-500 animate-bounce"
              size={48}
            />
            <p className="mt-4 text-gray-600">Discover More</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
