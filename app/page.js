"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 lg:px-0">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          DevBoard: Your Developer Dashboard
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Organize your tasks, notes, and links seamlessly. DevBoard keeps all
          your development workflow in one clean, minimal, and intuitive dashboard.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link href="/auth/register">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition">
              Get Started
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition">
              Sign In
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-0 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Task Management",
              desc: "Create, prioritize, and track all your development tasks efficiently.",
            },
            {
              title: "Notes & Snippets",
              desc: "Keep important notes, code snippets, and documentation in one place.",
            },
            {
              title: "Links & Resources",
              desc: "Save useful links, project resources, and references for easy access.",
            },
            {
              title: "Team Collaboration",
              desc: "Share tasks, notes, and links with your team seamlessly.",
            },
            {
              title: "Dark & Light Mode",
              desc: "Switch between themes to keep your eyes comfortable all day.",
            },
            {
              title: "Responsive Design",
              desc: "Use DevBoard on desktop, tablet, or mobile with a smooth UI.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 px-6 lg:px-0 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Sign Up or Login",
              desc: "Create an account or login to access your personal DevBoard dashboard.",
            },
            {
              step: "2",
              title: "Add Tasks, Notes & Links",
              desc: "Organize all your development workflow items into a clean interface.",
            },
            {
              step: "3",
              title: "Track Progress",
              desc: "Monitor tasks, review notes, and quickly access resources from one place.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl text-center transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center px-6 lg:px-0">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Ready to organize your workflow?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Sign up and start using DevBoard today. Keep all your tasks, notes, and links in one place.
        </motion.p>
        <Link href="/auth/register">
          <motion.button
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} DevBoard. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
