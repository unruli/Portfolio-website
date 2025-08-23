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
    degree: 'PhD in Engineering Education',
    institution: 'University of Florida',
    status: 'In Progress',
    description: 'Research focus on Speech and Audio AI, reasoning in Audio Language Models, accented and multilingual speech recognition systems',
  },
  {
    degree: 'PhD Minor in Computer Science',
    institution: 'University of Florida',
    status: 'In Progress',
    description: 'Complementary studies in computer science with focus on AI and speech processing',
  },
  {
    degree: 'Master of Science in Engineering Education',
    institution: 'University of Florida',
    status: 'August 2025',
    description: 'Thesis research on educational technology and AI in engineering education',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'University of Florida',
    status: 'Completed 2020',
    description: 'Foundation in computer engineering principles and systems',
  },
]

const experience = [
  {
    title: 'Graduate Research Assistant',
    institution: 'University of Florida - Engineering Education',
    period: '2023 - Present',
    description: 'Conducting research on Speech and Audio AI, developing reasoning capabilities in Audio Language Models, and creating robust systems for accented and multilingual speech processing',
  },
  {
    title: 'Teaching Assistant',
    institution: 'University of Florida',
    period: '2022 - 2023',
    description: 'Assisted with undergraduate engineering courses, developed educational materials, and mentored students in research projects',
  },
]

const skills = [
  'Speech and Audio AI',
  'Audio Language Models',
  'Accented Speech Recognition',
  'Multilingual Speech Processing',
  'Deep Learning',
  'Python Programming',
  'Research Methodology',
  'Statistical Analysis',
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
            I am a PhD student in Engineering Education with a minor in Computer Science at the University of Florida. My research focuses on Speech and Audio AI, reasoning in Audio Language Models, and developing robust systems for accented and multilingual speech processing.
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