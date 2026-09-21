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
      <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-900/20 blur-[100px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-900/20 blur-[100px]" />
        </div>
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
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Chibuzor Okocha
                </h1>
                <div className="space-y-2 pt-2">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I am a PhD student in Computer Science at the University of Florida and a member of the <a 
                      href="https://ufdatastudio.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      UF DataStudio Lab
                    </a>. I am currently on the job market and <span className="font-semibold text-blue-600 dark:text-blue-400">open to Research Scientist roles in Speech and Audio AI</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My research centers on <span className="font-medium text-gray-900 dark:text-white">Speech and Audio AI</span>, with extensive experience in <span className="font-medium text-gray-900 dark:text-white">training multimodal and tool-calling audio models</span>. I focus on advancing the reasoning capabilities of Audio Language Models and developing robust, inclusive systems for accented and multilingual speech processing.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am passionate about building open science communities, mentoring aspiring AI researchers, and democratizing access to cutting-edge speech technology across diverse languages and cultures.
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
                  href="https://scholar.google.com/citations?user=mycXdzwAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Google Scholar
                </a>
                <a
                  href="https://calendly.com/c-okocha-ufl/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Schedule Meeting
                </a>
              </div>

              {/* Recent News */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Recent News
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[September 2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Excited to share that I have <span className="font-semibold">2 papers accepted</span> to IEEE SLT 2026!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🎤</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[September 2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Busy month! Gave a workshop talk at the <span className="font-semibold">ACM Tapia</span> conference and had a paper accepted to <span className="font-semibold">Interspeech</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-lg">💼</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[August 2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Successfully completed my summer research internship at the <span className="font-semibold">Adobe Speech AI lab</span> in San Francisco, capping it off with a talk to the CAVA group!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🏆</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[2025]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Received <span className="font-semibold">best paper award</span> at ASRU 2025 Workshop on Childspeech for "Can large audio language models understand child stuttering speech?"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        AfriVox paper accepted at <span className="font-semibold">EACL 2026</span>!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-lg">🏖️</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[2025]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Presenting poster <span className="font-semibold">"Can Large Audio Language Models Understand Child Stuttering Speech? Speech Summarization, and Source Separation"</span> at ASRU 2025 Satellite Workshop in Hawaii.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🎤</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[Sept 25]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Excited to present my research at the <span className="font-semibold">TTIC Summer Workshop on Foundations of Speech and Audio Foundation Models</span> in Chicago.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 text-lg">🎉</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[Jan 25]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Excited to present our <span className="font-semibold">AfriSpeech-Dialog</span> work at NAACL 2025.
                      </p>
                    </div>
                  </div>
                  

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-sm border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
      <section id="publications" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Recent Publications
          </h2>
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Afrispeech Semantics: Evaluating Audio–Semantic Reasoning in Spoken Language Models Across Domains and Accents
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ACL 2026 (Under Review)</span> | <span className="font-semibold">Chibuzor Okocha</span>, et al.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Evaluating audio-semantic reasoning capabilities of spoken language models across different domains and African accents.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">EACL 2026</span> | <a href="https://openreview.net/forum?id=CUXfIv07j5" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">OpenReview</a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Open-source benchmark across 20 African languages and 100+ African English accents, evaluating multimodal speech LLMs vs traditional ASR/AST models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How Robust Are Neural Audio Codecs for African Speech? A Multi-Task Benchmark and the Limits of Perceptual Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">IEEE SLT 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>, Christan Earl Grant
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Comprehensive evaluation framework for neural audio codecs on African speech data and low-resource language settings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beyond Word Error Rate: A Switch-Aware Evaluation of ASR and Audio Language Models on English–Yoruba Code-Switched Speech
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">IEEE SLT 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>, Christan Earl Grant
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                An evaluation of ASR and Audio Language Models on English-Yoruba code-switched speech, moving beyond traditional WER metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Interspeech 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Exploring reasoning capabilities and cognitive processes in audio language models applied to child stuttering speech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Can large audio language models understand child stuttering speech?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ASRU 2025 Workshop on Childspeech (Best Paper Award)</span> | <span className="font-semibold">Chibuzor Okocha</span>, Maya Bakri, Christan Grant | <a href="https://arxiv.org/abs/2510.20850" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">arXiv</a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Evaluating LALMs on disfluent child speech for source separation and summarization tasks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass p-6 rounded-2xl border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow duration-300"
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
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
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