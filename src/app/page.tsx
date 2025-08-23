'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  CpuChipIcon, 
  BookOpenIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const researchInterests = [
  {
    title: 'Speech and Audio AI',
    description: 'Developing advanced AI systems for speech and audio processing applications',
    icon: LightBulbIcon,
  },
  {
    title: 'Audio Language Models',
    description: 'Researching reasoning capabilities and cognitive processes in audio language models',
    icon: CpuChipIcon,
  },
  {
    title: 'Accented Speech Recognition',
    description: 'Building robust speech recognition systems for diverse accents and dialects',
    icon: BookOpenIcon,
  },
  {
    title: 'Multilingual Audio AI',
    description: 'Creating inclusive AI systems that work across multiple languages and cultures',
    icon: AcademicCapIcon,
  },
]

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/20 dark:to-purple-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="/profile.jpg"
                alt="Chibuzor Okocha"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Chibuzor Okocha
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              PhD Student in Engineering Education
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto">
              PhD Minor in Computer Science | University of Florida
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download CV
              </a>
              <a
                href="mailto:c.okocha@ufl.edu"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/unruli"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="mt-16">
              <button
                onClick={() => scrollToSection('research')}
                className="animate-bounce text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <p className="text-sm mt-2">Scroll to explore</p>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <interest.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section id="publications" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Recent Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AfriSpeech-Dialog: A Benchmark Dataset for Spontaneous English Conversations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                NAACL 2025 - A comprehensive dataset for evaluating ASR and summarization on African-accented speech.
              </p>
              <a href="/publications" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all publications →
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Navigating Unfamiliar Waters: Enhancing Intercultural Understanding
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                FIE 2024 - Research on academic self-efficacy among computer science students in international settings.
              </p>
              <a href="/publications" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all publications →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AfriSpeech-200
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pan-African speech dataset with 100+ accents and 196+ hours of audio for ASR research.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  Speech Processing
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  ASR
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AfriSpeech-TTS
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Parameter-efficient multi-accent multi-speaker text-to-speech system for African voices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  TTS
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  Speech Synthesis
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ASR Fine-Tuning with NVIDIA NeMo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                GPU-accelerated ASR service tailored for Nigerian English using NVIDIA frameworks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  ASR
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  NVIDIA NeMo
                </span>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 