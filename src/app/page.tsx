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
    title: 'Artificial Intelligence',
    description: 'Exploring cutting-edge AI technologies and their applications',
    icon: CpuChipIcon,
  },
  {
    title: 'Natural Language Processing',
    description: 'Advancing language understanding and generation models',
    icon: BookOpenIcon,
  },
  {
    title: 'Human Computer Interaction',
    description: 'Improving teaching methods in computer science',
    icon: AcademicCapIcon,
  },
  {
    title: 'Audio and Speech Technology',
    description: 'Developing advanced speech recognition and audio processing systems',
    icon: LightBulbIcon,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
              PhD Student & Research Assistant in AI, NLP, and Human Computer Interaction
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Master of Science in Engineering Education (Expected Summer 2025)
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
          </motion.div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
    </div>
  )
} 