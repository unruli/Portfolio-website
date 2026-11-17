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
    title: 'Speech and Audio ML',
    description: 'Building and evaluating ASR, diarization, audio understanding, and speech-generation systems',
    icon: LightBulbIcon,
  },
  {
    title: 'Audio Language Models',
    description: 'Training and evaluating models that reason over audio beyond transcription, including tool-calling agents',
    icon: CpuChipIcon,
  },
  {
    title: 'Inclusive Speech Benchmarks',
    description: 'Curating datasets and robust evaluations for accented, multilingual, child, and disfluent speech',
    icon: BookOpenIcon,
  },
  {
    title: 'Neural Audio Codecs',
    description: 'Auditing perceptual fidelity, speaker preservation, fairness, and language structure in audio compression',
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
      <section id="hero" className="relative py-20 lg:py-32">
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
                    I am an audio and speech ML engineer, a Ph.D. researcher in Speech AI at the University of Florida, and a member of the <a 
                      href="https://ufdatastudio.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      UF DataStudio Lab
                    </a>. I am currently a <span className="font-semibold text-blue-600 dark:text-blue-400">Research Scientist Intern at Adobe Research</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I turn raw, multilingual, and acoustically challenging audio into curated datasets, reliable benchmarks, and deployed models. My work spans <span className="font-medium text-gray-900 dark:text-white">audio language models, ASR, diarization, neural codecs, and multimodal tool-calling agents</span>.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Across Adobe Research, Intron Health, BioRamp Labs, and Colgate-Palmolive, I have built Python pipelines and ML systems that connect frontier speech research with production workflows and clear stakeholder decisions.
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
                    <span className="text-blue-500 text-lg">💼</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[May 2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Joined <span className="font-semibold">Adobe Research</span> as a Research Scientist Intern, building multimodal tool-calling agents and audio language models for professional audio editing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        New peer-reviewed work accepted at <span className="font-semibold">ACL, Interspeech, ASEE, CoLM, and IEEE SLT 2026</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🎓</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[May 2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Conferred an <span className="font-semibold">M.S. in Engineering Education</span> from the University of Florida.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-lg">🏆</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[December 2025]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Won the <span className="font-semibold">Best Paper Award</span> at the IEEE ASRU 2025 Satellite Workshop for work on audio language models and child stuttering speech.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[2026]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className="font-semibold">AfriVox</span> was accepted at EACL 2026, alongside AfriSpeech research featured at NAACL and ACL.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 text-lg">🎉</span>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">[Jan 25]</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Presented our <span className="font-semibold">AfriSpeech-Dialog</span> work at NAACL 2025.
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
                className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Afrispeech-Semantics: Evaluating Audio–Semantic Reasoning in Spoken Language Models
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ACL 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>, Christan Grant
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Evaluating audio-semantic reasoning capabilities of spoken language models across different domains and African accents.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow duration-300"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Interspeech 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>, et al.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                A diagnostic benchmark evaluating Audio Language Models (ALMs) and ASR + LLM cascades on disfluent child speech.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a href="/reasoning-beyond-transcription" className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors">
                  Project Page &rarr;
                </a>
                <a href="https://github.com/ufdatastudio/child-speech-analysis" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors">
                  GitHub Repository
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-300"
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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                The Hidden Labor Market Titles of AI Engineering Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">ASEE 2026</span> | <span className="font-semibold">Chibuzor Okocha</span>, Amanda N. Irving, Iván Villanueva Alarcón, Charles R. Taylor, Christan Grant
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Examining how labor-market titles and skills shape AI engineering education and the translation of research training into industry roles.
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
    </div>
  )
}
