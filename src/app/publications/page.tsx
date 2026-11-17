'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentTextIcon, 
  BookOpenIcon, 
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const publications = [
  {
    id: 1,
    title: 'Can Large Audio Language Models Understand Child Stuttering Speech? Speech Summarization, and Source Separation',
    authors: 'Chibuzor Okocha, Maya Bakri, and Christan Grant',
    venue: 'IEEE ASRU 2025 Satellite Workshop',
    year: '2025',
    abstract: 'A zero-shot, instruction-based framework for reasoning over child stuttering speech while preserving clinically relevant disfluencies without explicit diarization or source separation. This work received the Best Paper Award.',
    type: 'workshop',
    pdf: 'https://arxiv.org/abs/2510.20850',
  },
  {
    id: 2,
    title: 'Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech',
    authors: 'Chibuzor Okocha, et al.',
    venue: 'Interspeech',
    year: '2026',
    abstract: 'A benchmark for evaluating audio-language reasoning on child stuttering speech, moving beyond transcription-only assessment.',
    type: 'conference',
    projectPage: '/reasoning-beyond-transcription',
    code: 'https://github.com/ufdatastudio/child-speech-analysis',
  },
  {
    id: 3,
    title: 'AfriSpeech-Dialog: A Benchmark Dataset for Spontaneous English Conversations in Healthcare and Beyond',
    authors: 'Mardhiyah Sanni, Tassallah Abdullahi, Chibuzor Okocha, and Tobi Olatunji, et al.',
    venue: 'NAACL',
    year: '2025',
    abstract: 'A benchmark of spontaneous African-accented English conversations across healthcare and general domains for ASR, diarization, and conversational speech evaluation.',
    type: 'conference',
    pdf: 'https://doi.org/10.48550/arXiv.2502.03945',
    code: 'https://huggingface.co/datasets/intronhealth/afrispeech-dialog',
  },
  {
    id: 4,
    title: 'AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs',
    authors: 'Tobi Olatunji, Babatunde Awobade, Mardhiyah Sanni, Tassallah Abdullahi, Chibuzor Okocha, et al.',
    venue: 'EACL',
    year: '2026',
    abstract: 'A multilingual, accent-diverse benchmark for probing the robustness of speech language models.',
    type: 'conference',
    code: 'https://huggingface.co/datasets/intronhealth/afrivox',
  },
  {
    id: 5,
    title: 'Afrispeech-Semantics: Evaluating Audio-Semantic Reasoning in Spoken Language Models',
    authors: 'Chibuzor Okocha and Christan Grant',
    venue: 'ACL',
    year: '2026',
    abstract: 'A benchmark for audio-semantic reasoning in spoken language models using African-accented evaluation data.',
    type: 'conference',
  },
  {
    id: 6,
    title: 'The Hidden Labor Market Titles of AI Engineering Education',
    authors: 'Chibuzor Okocha, Amanda N. Irving, Iván Villanueva Alarcón, Charles R. Taylor, and Christan Grant',
    venue: 'ASEE',
    year: '2026',
    abstract: 'An empirical study of labor-market titles and signals surrounding AI engineering education.',
    type: 'conference',
  },
  {
    id: 7,
    title: 'How Robust Are Neural Audio Codecs for African Speech? A Multi-Task Benchmark and the Limits of Perceptual Quality',
    authors: 'Chibuzor Okocha and Christan Grant',
    venue: 'IEEE SLT',
    year: '2026',
    abstract: 'A comprehensive evaluation of seven neural audio codecs on African-accented and multilingual speech, studying perceptual fidelity and speaker separability.',
    type: 'conference',
  },
  {
    id: 8,
    title: 'Beyond Word Error Rate: A Switch-Aware Evaluation of ASR and Audio Language Models on English-Yoruba Code-Switched Speech',
    authors: 'Chibuzor Okocha and Christan Grant',
    venue: 'IEEE SLT',
    year: '2026',
    abstract: 'A switch-aware evaluation framework for ASR and audio language models that accounts for code-switching boundaries.',
    type: 'conference',
  },
  {
    id: 9,
    title: 'Dynamic Multi-Byte Prediction With Hierarchical Language Models',
    authors: 'A. T. Owodunni, Chibuzor Okocha, Christan Grant, Tomasz Limisiewicz, and Sachin Kumar',
    venue: 'Conference on Language Modeling (CoLM)',
    year: '2026',
    abstract: 'Research on hierarchical language models for dynamic multi-byte prediction.',
    type: 'conference',
  },
  {
    id: 10,
    title: 'Evaluating Clinical Safety of Multimodal LLMs Across Text and Speech in Low-Resource Languages',
    authors: 'Mojisola Oduwole, Tassallah Abdullahi, Tobi Olatunji, Gloria Katuka, Chibuzor Okocha, et al.',
    venue: 'Africa at NeurIPS Workshop',
    year: '2026',
    abstract: 'An evaluation of clinical safety in multimodal language models across text and speech for low-resource languages.',
    type: 'workshop',
  },
]

const publicationTypes = [
  { id: 'all', name: 'All', icon: DocumentTextIcon },
  { id: 'conference', name: 'Conference Papers', icon: AcademicCapIcon },
  { id: 'workshop', name: 'Workshop Papers', icon: BookOpenIcon },
  { id: 'journal', name: 'Journal Articles', icon: BookOpenIcon },
]

export default function Publications() {
  const [selectedType, setSelectedType] = React.useState('all')
  const [selectedYear, setSelectedYear] = React.useState('all')
  const [expandedAbstract, setExpandedAbstract] = React.useState<string | null>(null)

  const years = ['all', ...Array.from(new Set(publications.map(pub => pub.year)))].sort().reverse()

  const filteredPublications = publications.filter(pub => {
    if (selectedType !== 'all' && pub.type !== selectedType) return false
    if (selectedYear !== 'all' && pub.year !== selectedYear) return false
    return true
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Publications
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A collection of my academic publications, conference papers, and research contributions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {publicationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <type.icon className="h-5 w-5 mr-2" />
              {type.name}
            </button>
          ))}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-0 focus:ring-2 focus:ring-blue-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>
            ))}
          </select>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {pub.venue} ({pub.year})
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {pub.projectPage && (
                    <a
                      href={pub.projectPage}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-cyan-950 text-cyan-300 border border-cyan-800 hover:bg-cyan-900 transition-colors flex items-center gap-1"
                    >
                      Project Page &rarr;
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <DocumentTextIcon className="h-5 w-5" />
                    </a>
                  )}
                  {pub.code && (
                    <a
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setExpandedAbstract(expandedAbstract === pub.title ? null : pub.title)}
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {expandedAbstract === pub.title ? 'Hide Abstract' : 'Show Abstract'}
                </button>
                {expandedAbstract === pub.title && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {pub.abstract}
                  </p>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  {pub.type}
                </span>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                  {pub.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 