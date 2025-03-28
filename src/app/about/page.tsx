'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { AcademicCapIcon, LightBulbIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const education = [
  {
    degree: 'PhD in Computer Science',
    institution: 'Your University',
    year: '2022-Present',
    description: 'Focusing on AI, NLP, and Computing Education',
  },
  {
    degree: 'Master of Science',
    institution: 'Previous University',
    year: '2020-2022',
    description: 'Specialized in Machine Learning and Natural Language Processing',
  },
  {
    degree: 'Bachelor of Science',
    institution: 'Undergraduate University',
    year: '2016-2020',
    description: 'Computer Science with focus on AI and Software Engineering',
  },
]

const researchPhilosophy = [
  {
    title: 'Interdisciplinary Approach',
    description: 'Combining insights from AI, NLP, and education to create innovative solutions for teaching and learning.',
    icon: LightBulbIcon,
  },
  {
    title: 'Evidence-Based Research',
    description: 'Grounding all research in empirical data and rigorous methodology to ensure meaningful impact.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Practical Impact',
    description: 'Focusing on research that can be directly applied to improve educational outcomes and technological advancement.',
    icon: AcademicCapIcon,
  },
]

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am a passionate researcher and PhD student focused on advancing the fields of Artificial Intelligence,
            Natural Language Processing, and Computing Education. My work aims to bridge the gap between
            cutting-edge technology and effective teaching methodologies.
          </p>
        </motion.div>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  {edu.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Philosophy */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchPhilosophy.map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <philosophy.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {philosophy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {philosophy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <a
            href="/cv.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
} 