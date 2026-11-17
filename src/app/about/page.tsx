'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline'

const education = [
  {
    degree: 'Ph.D., Engineering (Speech AI)',
    institution: 'University of Florida',
    status: 'August 2023 - Present',
    description: 'Doctoral research in CISE and the UF Data Studio with Dr. Christan Grant, focused on audio language models, speech understanding, neural audio codecs, and multilingual audio AI.',
  },
  {
    degree: 'M.S., Engineering Education',
    institution: 'University of Florida',
    status: 'May 2026',
    description: 'Graduate study in engineering education and AI-enabled learning research.',
  },
  {
    degree: 'B.Sc., Computer Engineering',
    institution: 'University of Benin, Nigeria',
    status: '2021',
    description: 'Foundation in computer engineering, software, and intelligent systems.',
  },
]

const experience = [
  {
    title: 'Research Scientist Intern',
    institution: 'Adobe Research',
    period: 'May 2026 - Present',
    description: 'Building multimodal tool-calling agents for audio editing, pretraining and fine-tuning audio language models, and developing model-driven approaches for Adobe Audition workflows.',
  },
  {
    title: 'Research Assistant - Project ALTER',
    institution: 'UF Data Studio, University of Florida',
    period: 'Fall 2025 - Present',
    description: 'Advancing speech and language technology for African and other under-resourced tonal languages, with emphasis on intonation, emphasis, and emotion.',
  },
  {
    title: 'Graduate Research Assistant',
    institution: 'UF Data Studio (CISE), University of Florida',
    period: 'August 2023 - May 2026',
    description: 'Led research on audio language models, ASR, neural audio codecs, child and disfluent speech, and accented multilingual speech, producing peer-reviewed work across speech and NLP venues.',
  },
  {
    title: 'Data Science Intern',
    institution: 'Colgate-Palmolive',
    period: 'May 2025 - December 2025',
    description: 'Built and evaluated more than five machine-learning models and engineered large-scale data-cleaning and feature pipelines for product-characteristic prediction.',
  },
  {
    title: 'Research Assistant - Clinical Speech Recognition',
    institution: 'Intron Health (Intron Voice AI)',
    period: 'May 2024 - August 2024',
    description: 'Developed and evaluated multilingual ASR and speaker-diarization models for African-accented English and contributed to the AfriSpeech-Dialog benchmark.',
  },
  {
    title: 'Research Intern',
    institution: 'BioRamp Labs',
    period: 'January 2021 - June 2023',
    description: 'Built end-to-end ASR and diarization pipelines, established WER and DER evaluation protocols, and supported speech-AI research for real-time healthcare applications.',
  },
]

const service = [
  { role: 'Conference Reviewer', organization: 'NeurIPS' },
  { role: 'Conference Reviewer', organization: 'ACL, EMNLP, NAACL & EACL' },
  { role: 'Conference Reviewer', organization: 'ICMLA & ACDSA 2026' },
  { role: 'Conference Reviewer', organization: 'ICDE & IEEE BigData' },
  { role: 'Workshop Reviewer', organization: 'AfricaNLP' },
]

const talks = [
  {
    title: 'Can Large Audio Language Models Understand Child Stuttering Speech?',
    venue: 'IEEE ASRU 2025 Satellite Workshop',
    date: 'December 2025',
  },
  {
    title: 'AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs',
    venue: 'EACL 2026',
    date: '2026',
  },
  {
    title: 'Afrispeech-Semantics: Evaluating Audio-Semantic Reasoning',
    venue: 'ACL 2026',
    date: '2026',
  },
  {
    title: 'AfriSpeech-Dialog: A Benchmark Dataset for Spontaneous English Conversations',
    venue: 'NAACL 2025',
    date: '2025',
  },
  {
    title: 'Multilingual and Low-Resource Speech AI Research',
    venue: 'Midwest Speech and Language Days',
    date: 'April 2026',
  },
]

const skills = [
  'Audio Language Models',
  'ASR & Speaker Diarization',
  'Neural Audio Codecs',
  'Speech Dataset Engineering',
  'PyTorch & Transformers',
  'Model Pre/Post-Training',
  'LoRA & Fine-Tuning',
  'Distributed Training',
  'Python, SQL & JavaScript',
  'Hugging Face Datasets',
  'Weights & Biases',
  'pandas & Tableau',
  'Audio Quality Evaluation',
  'Multilingual & Disfluent Speech',
  'Technical Communication',
]

export default function About() {
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
            About Me
          </h1>
          <div className="text-xl text-white max-w-3xl mx-auto space-y-4">
            <p>
              I am an audio and speech ML engineer and Ph.D. researcher in Speech AI at the University of Florida. My work spans multimodal tool-calling audio agents, audio language models, ASR, diarization, neural codecs, and evaluation on accented, multilingual, and disfluent speech.
            </p>
            <p className="font-semibold text-blue-300">
              I have 5+ years of hands-on experience turning complex audio into curated datasets, reliable benchmarks, and deployed research systems.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <AcademicCapIcon className="h-8 w-8 text-white mr-2" />
            <h2 className="text-2xl font-bold text-white">
              Education
            </h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.status}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BriefcaseIcon className="h-8 w-8 text-white mr-2" />
            <h2 className="text-2xl font-bold text-white">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {exp.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service & Talks Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service Section */}
          <section>
            <div className="flex items-center mb-8">
              <UserGroupIcon className="h-8 w-8 text-white mr-2" />
              <h2 className="text-2xl font-bold text-white">
                Service & Reviewing
              </h2>
            </div>
            <div className="space-y-4">
              {service.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{item.organization}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Talks Section */}
          <section>
            <div className="flex items-center mb-8">
              <MicrophoneIcon className="h-8 w-8 text-white mr-2" />
              <h2 className="text-2xl font-bold text-white">
                Invited Talks
              </h2>
            </div>
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{talk.title}</h3>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-600 dark:text-gray-300">{talk.venue}</span>
                    <span className="text-gray-500 dark:text-gray-400">{talk.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <section>
          <div className="flex items-center mb-8">
            <DocumentTextIcon className="h-8 w-8 text-white mr-2" />
            <h2 className="text-2xl font-bold text-white">
              Skills & Expertise
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg text-center"
              >
                <span className="text-gray-900 dark:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
} 