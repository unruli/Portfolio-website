'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const education = [
  {
    degree: 'Master of Science in Engineering Education',
    institution: 'University of Florida',
    status: 'Summer 2025',
    description: 'Focusing on AI, NLP, and Human Computer Interaction Research',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'University of Florida',
    status: 'Completed in 2020',
    
  },
]

const experience = [
  {
    title: 'Research Assistant',
    institution: 'University of Florida',
    period: 'Present',
    description: 'Conducting research in AI, NLP, and Human Computer Interaction',
  },
]

const skills = [
  'Artificial Intelligence',
  'Natural Language Processing',
  'Speech Recognition',
  'Deep Learning',
  'Python',
  'Machine Learning',
  'Human Computer Interaction',
  'Research Methodology',
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
          <p className="text-xl text-white max-w-3xl mx-auto">
            I am a graduate research assistant at the University of Florida, specializing in AI, Speech Technology, NLP, and Human Computer Interaction. My research focuses on developing innovative solutions in speech technology and improving computer science education through interdisciplinary approaches.
          </p>
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