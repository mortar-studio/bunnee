import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Scroll indicator animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const scrollIndicator = document.getElementById("scroll-indicator");
      if (scrollIndicator) {
        const progress = Math.min(
          (scrollPosition / (documentHeight - windowHeight)) * 100,
          100,
        );
        scrollIndicator.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission handler removed as form was removed

  return (
    <div className="bg-cream text-black font-serif">
      {/* Fixed scroll indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50">
        <div id="scroll-indicator" className="h-full bg-black w-0"></div>
      </div>

      {/* Module 1: Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-canela font-light mb-8 leading-tight tracking-tight">
            BUNNEE - Your psychological personal trainer
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light max-w-2xl leading-relaxed">
            An AI-powered bridge that keeps therapy practitioners and therapy
            patients aligned, engaged, and supported in real-time.
          </p>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm font-inter mb-2">Scroll</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0L8 20M8 20L1 13M8 20L15 13"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </section>

      {/* Module: AI in Therapy */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-canela font-light mb-8 leading-tight">
            Patients are using AI without their practitioners
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-cream p-6 md:p-10 rounded-xl">
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src="https://www.semibrick.com/images/034.webp"
                alt="Stormy ocean representing unguided AI use"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-canela mb-4">
              Between therapy sessions, patients turn to general AI tools which:
            </h3>
            <ul className="space-y-3 font-inter">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p>
                  Lack therapeutic context derived from practitioner
                  understanding
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p>Lack continuity built upon foundational dialogue</p>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <p>Lack adaptability when new presentations emerge</p>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-4">
                <p className="italic text-lg font-inter mb-6">
                  "Using AI like this is akin to seeing a different therapist
                  each week... which is highly problematic"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center mr-3 text-black font-medium">
                    N
                  </div>
                  <span className="font-inter text-sm">
                    Clinical Psychologist
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-4">
                <p className="italic text-lg font-inter mb-6">
                  "People tune into the info they want to hear, this means they
                  can be enabling and reinforcing information that's
                  problematic"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center mr-3 text-black font-medium">
                    J
                  </div>
                  <span className="font-inter text-sm">Child Psychologist</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-4">
                <p className="italic text-lg font-inter mb-6">
                  "If my patients are using AI, I want to be involved in the
                  convo..."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center mr-3 text-black font-medium">
                    M
                  </div>
                  <span className="font-inter text-sm">
                    Clinical Psychologist
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-canela mb-4">
                The disconnect creates risks
              </h3>
              <p className="font-inter">
                When patients use general AI between sessions, they receive
                advice disconnected from their therapeutic journey, potentially
                undermining progress and creating confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Problem/Solution */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-black text-white py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-canela font-light mb-8 leading-tight">
              We aren't trying to replace practitioners — we're amplifying them
            </h2>
            <ul className="space-y-8 md:space-y-6 font-inter">
              <li className="flex items-start">
                <span className="text-sm mr-4 opacity-60">01</span>
                <p>
                  Practitioners shape the AI's approach based on their
                  therapeutic methodology
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-sm mr-4 opacity-60">02</span>
                <p>
                  Patients receive consistent support aligned with their therapy
                  goals
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-sm mr-4 opacity-60">03</span>
                <p>
                  The therapeutic relationship remains central, with AI as a
                  supportive tool
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative aspect-square">
              <img
                src="https://www.semibrick.com/images/7.webp"
                alt="BUNNEE connecting practitioners and patients"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 3: Benefits */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-canela font-light mb-8 leading-tight">
            BUNNEE anchors patients in therapeutic context between sessions
          </h2>
          <p className="text-xl font-inter font-light">
            By creating a seamless connection between sessions BUNNEE provides
            value for both patients and practitioners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8 mb-12 md:mb-0"
          >
            <h3 className="text-2xl font-canela">For Patients</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Your Psychological Personal Trainer
                </h4>
                <p className="font-inter font-light">
                  Learning and development platform for ongoing psychological
                  growth between therapy sessions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Personalized Support
                </h4>
                <p className="font-inter font-light">
                  AI assistance to de-escalate, ground, and anchor based on your
                  specific therapeutic context and needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Session Continuity
                </h4>
                <p className="font-inter font-light">
                  Access to notes and summaries to bolster learnings and
                  maintain progress between therapy sessions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <h3 className="text-2xl font-canela">For Practitioners</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Shape the Conversation
                </h4>
                <p className="font-inter font-light">
                  Actively guide AI interactions between sessions for better
                  therapeutic outcomes and patient progress.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Administrative Efficiency
                </h4>
                <p className="font-inter font-light">
                  AI-powered note-taking, easy referrals, and practice
                  management to streamline your workflow.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium mb-2">
                  Enhanced Care
                </h4>
                <p className="font-inter font-light">
                  Provide best-in-class support without increasing your
                  workload, improving patient outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 4: Coming Soon */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-cream py-12 md:py-0">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-canela font-light mb-8 leading-tight">
            Coming soon
          </h2>
          <p className="text-xl font-inter font-light mb-12">
            We're working hard to bring BUNNEE to you. Stay tuned for updates.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:will@mortar.studio?subject=Interest%20in%20BUNNEE"
              className="px-8 py-4 bg-black text-white font-inter hover:bg-black/80 transition-colors rounded-md inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-black/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-canela mb-2">BUNNEE</div>
            <p className="text-sm font-inter opacity-60">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm font-inter hover:opacity-60 transition-opacity"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-inter hover:opacity-60 transition-opacity"
            >
              Terms
            </a>
            <a
              href="mailto:will@mortar.studio?subject=Query%20about%20BUNNEE"
              className="text-sm font-inter hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
