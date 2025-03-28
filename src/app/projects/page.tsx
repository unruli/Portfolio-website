'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  BookOpenIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'AI-Powered Educational Platform',
    description: 'A machine learning-based platform that personalizes learning experiences for students in computer science courses.',
    image: '/projects/education-platform.jpg',
    tags: ['AI', 'Education', 'Python', 'React'],
    demo: 'https://demo.example.com',
    repo: 'https://github.com/yourusername/project1',
    paper: '/papers/project1.pdf',
  },
  {
    title: 'NLP Research Tool',
    description: 'A comprehensive toolkit for natural language processing research, featuring state-of-the-art models and evaluation metrics.',
    image: '/projects/nlp-toolkit.jpg',
    tags: ['NLP', 'Python', 'PyTorch', 'Transformers'],
    demo: 'https://demo.example.com',
    repo: 'https://github.com/yourusername/project2',
    paper: '/papers/project2.pdf',
  },
  // Add more projects as needed
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort()

export default function Projects() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    if (selectedTags.length === 0) return true
    return selectedTags.every(tag => project.tags.includes(tag))
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

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
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my research projects, tools, and applications in AI, NLP, and Computing Education.
          </p>
        </motion.div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {hoveredProject === project.title && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300"
                      >
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300"
                      >
                        <CodeBracketIcon className="h-6 w-6" />
                      </a>
                    )}
                    {project.paper && (
                      <a
                        href={project.paper}
                        className="text-white hover:text-blue-300"
                      >
                        <BookOpenIcon className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 