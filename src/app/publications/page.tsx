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
    title: 'Example Publication Title 1',
    authors: 'Your Name, Co-Author 1, Co-Author 2',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2023',
    type: 'conference',
    doi: 'https://doi.org/10.xxxx/xxxxx',
    pdf: '/papers/paper1.pdf',
    abstract: 'This is a brief description of the paper and its contributions to the field.',
    tags: ['AI', 'Machine Learning', 'NLP'],
  },
  {
    title: 'Example Publication Title 2',
    authors: 'Your Name, Co-Author 1',
    venue: 'Journal of Artificial Intelligence Research',
    year: '2022',
    type: 'journal',
    doi: 'https://doi.org/10.xxxx/xxxxx',
    pdf: '/papers/paper2.pdf',
    abstract: 'Another example paper showcasing your research contributions.',
    tags: ['NLP', 'Education'],
  },
  // Add more publications as needed
]

const publicationTypes = [
  { id: 'all', name: 'All', icon: DocumentTextIcon },
  { id: 'conference', name: 'Conference Papers', icon: AcademicCapIcon },
  { id: 'journal', name: 'Journal Articles', icon: BookOpenIcon },
]

export default function Publications() {
  const [selectedType, setSelectedType] = React.useState('all')
  const [selectedYear, setSelectedYear] = React.useState('all')
  const [expandedAbstract, setExpandedAbstract] = React.useState<string | null>(null)

  const years = ['all', ...new Set(publications.map(pub => pub.year))].sort().reverse()

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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my academic publications in AI, NLP, and Computing Education.
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
                <div className="flex space-x-2">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={pub.pdf}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <DocumentTextIcon className="h-5 w-5" />
                  </a>
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
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 