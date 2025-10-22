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
      <section id="hero" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about-me.jpg"
                  alt="Chibuzor Okocha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Academic Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="space-y-3">
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                  Chibuzor Okocha
                </h1>
                <div className="space-y-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I am a PhD student in Engineering with a minor in Computer Science at the University of Florida, where I am privileged to be a member of the <a 
                      href="https://ufdatastudio.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      UF DataStudio Lab
                    </a>. Previously, I worked on building speech and audio models for African languages and accents.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My research is focused on Speech and Audio AI, reasoning in Audio Language Models, and developing robust systems for accented and multilingual speech processing. I am passionate about creating inclusive AI systems that work across multiple languages and cultures.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Beyond research, I am passionate about mentoring aspiring AI researchers, building open science communities, and contributing to collaborative initiatives. I firmly believe in democratizing access to knowledge and fostering collaborative ecosystems.
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:c.okocha@ufl.edu"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Email
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  CV
                </a>
                <a
                  href="https://github.com/unruli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://scholar.google.com/citations?user=your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Google Scholar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-4">
                  <interest.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section id="publications" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Recent Publications
          </h2>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-blue-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Afrispeech-Dialog: A Benchmark Dataset for Spontaneous English Conversations in Healthcare and Beyond
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">NAACL 2025</span> | Mardhiyah Sanni, Tassallah Abdullahi, Devendra D. Kayande, Emmanuel Ayodele, Naome A. Etori, Michael S. Mollel, Moshood Yekini, <span className="font-semibold">Chibuzor Okocha</span>, et al.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                A comprehensive dataset for evaluating ASR and summarization on African-accented speech conversations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-4 border-green-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ACL ARR July 2025 (Under Review)</span> | <a href="https://openreview.net/forum?id=CUXfIv07j5" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">OpenReview</a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Open-source benchmark across 20 African languages and 100+ African English accents, evaluating multimodal speech LLMs vs traditional ASR/AST models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-4 border-purple-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Navigating Unfamiliar Waters: Enhancing Intercultural Understanding and Academic Self-Efficacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">IEEE FIE 2024</span> | <span className="font-semibold">Chibuzor J. Okocha</span>, Jeremiah J. Blanchard, Gloria J. Kim, Mariko Adachi
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Research on academic self-efficacy among computer science students in international study abroad programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-4 border-red-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Neural Audio Codec Evaluation for Low-Resource African Languages
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ICASSP 2026 (Under Review)</span> | <span className="font-semibold">Chibuzor Okocha</span>, et al.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Comprehensive evaluation framework for neural audio codecs on African speech data and low-resource language settings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-4 border-orange-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Large Audio Language Models for Child Speech Analysis and Summarization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ICASSP 2026 (Under Review)</span> | <span className="font-semibold">Chibuzor Okocha</span>, et al.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Evaluating LALMs for child interview summarization with focus on speaker separation and content isolation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-l-4 border-indigo-600 pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Domain-Aware Speaker Diarization On African-Accented English
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">arXiv preprint (Under Review)</span> | <span className="font-semibold">Chibuzor Okocha</span>, Kelechi Ezema, Christan Grant | <a href="https://www.arxiv.org/abs/2509.21554" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">arXiv</a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Examining domain effects in speaker diarization for African-accented English across general and clinical dialogues.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/publications" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All Publications →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                CodecEval-Africa
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Neural audio codecs evaluation framework for low-resource African language settings.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  Neural Codecs
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  Low-Resource
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
                Child Speech Analysis with LALMs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Large Audio Language Models for child interview summarization and speaker separation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  LALMs
                </span>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  Child Speech
                </span>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/projects" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}