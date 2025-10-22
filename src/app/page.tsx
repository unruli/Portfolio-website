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
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl">
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
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                  Chibuzor Okocha
                </h1>
                <div className="space-y-2">
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                    PhD Student in Engineering
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    PhD Minor in Computer Science
                  </p>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    University of Florida | <a 
                      href="https://ufdatastudio.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      UF DataStudio Lab
                    </a>
                  </p>
                </div>
              </div>

              {/* Research Focus */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Research Focus
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Speech and Audio AI • Audio Language Models • Accented and Multilingual Speech Processing • 
                  Neural Audio Codecs • Speaker Diarization
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">4</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Under Review</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">9</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:c.okocha@ufl.edu"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Contact
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center font-medium"
                >
                  Curriculum Vitae
                </a>
                <a
                  href="https://github.com/unruli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center font-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/about-me.jpg"
                  alt="Chibuzor Okocha presenting at conference"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi there, I am Chibuzor Okocha, a PhD student in Engineering Education with a minor in Computer Science at the University of Florida. 
                I am a member of the <a 
                  href="https://ufdatastudio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  UF DataStudio lab
                </a>, where my research focuses on the intersection of Speech and Audio AI, reasoning in Audio Language Models, 
                and developing robust systems for accented and multilingual speech processing.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My work aims to enhance the understanding of how both learners and educators interact with speech technologies 
                in educational contexts. I am passionate about creating inclusive AI systems that work across multiple languages 
                and cultures, particularly focusing on underrepresented accents and dialects.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I hold a Bachelor of Science in Computer Engineering from the University of Florida. Before pursuing my doctoral studies, 
                I gained valuable experience developing practical technology solutions, which now informs my research approach to bridge 
                technology and education to improve learning outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="mailto:c.okocha@ufl.edu"
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center"
                >
                  Contact Me
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
                >
                  Download CV
                </a>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Recent News
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">📝</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[Jan 25]</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Submitted two papers to <span className="font-semibold">ICASSP 2026</span> on neural audio codecs and child speech analysis with LALMs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🎤</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[Sept 25]</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Excited to present my research at the <span className="font-semibold">TTIC Summer Workshop on Foundations of Speech and Audio Foundation Models</span> in Chicago.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 text-lg">🎉</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[1/15/25]</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Excited to present our <span className="font-semibold">AfriSpeech-Dialog</span> work at NAACL 2025.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-lg">🔬</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[10/24]</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Presented research on intercultural understanding at <span className="font-semibold">FIE 2024</span> conference.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">🎤</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[6/24]</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Contributing to <span className="font-semibold">AfriSpeech-200</span> dataset with 100+ African accents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My research spans multiple domains in speech and audio processing, with a focus on inclusive AI systems for underrepresented languages and accents.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <interest.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
      <section id="publications" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Recent Publications
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
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
            
            <div className="text-center mt-12">
              <a 
                href="/publications" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Publications
              </a>
            </div>
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