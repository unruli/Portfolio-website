'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarIcon, DocumentTextIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

// Sample blog posts data - you can replace with your actual content
const blogPosts = [
  {
    id: 1,
    title: 'Building a Real-Time Feedback System for Student Presentations',
    excerpt: 'Learn how to create a system that analyzes speech clarity, filler word usage, pacing, tone, and emotions to provide feedback on student presentations.',
    date: 'March 15, 2024',
    category: 'tutorial',
    icon: DocumentTextIcon,
    link: '/blog/real-time-feedback-system',
    tags: ['Speech Analysis', 'Education Technology', 'Python', 'Machine Learning'],
  },
  {
    id: 2,
    title: 'African Speech Recognition: Challenges and Solutions',
    excerpt: 'Exploring the unique challenges in developing speech recognition systems for African accents and the innovative solutions being implemented.',
    date: 'February 28, 2024',
    category: 'whitepaper',
    icon: AcademicCapIcon,
    link: '/blog/african-speech-recognition',
    tags: ['Speech Recognition', 'African Accents', 'ASR', 'Research'],
  },
  {
    id: 3,
    title: 'Integrating LLaMA 3 with Speech-to-Text for Creative Applications',
    excerpt: 'A comprehensive guide on combining SpeechBrain for transcription with LLaMA 3 for creative text generation in applications like story writing.',
    date: 'February 10, 2024',
    category: 'tutorial',
    icon: BookOpenIcon,
    link: '/blog/llama3-speech-to-text',
    tags: ['LLM', 'Speech-to-Text', 'LLaMA 3', 'SpeechBrain', 'Python'],
  },
  {
    id: 4,
    title: 'The Future of Multi-Agent Systems in Education',
    excerpt: 'Examining how multi-agent systems can transform educational experiences through personalized learning, automated feedback, and intelligent tutoring.',
    date: 'January 22, 2024',
    category: 'whitepaper',
    icon: AcademicCapIcon,
    link: '/blog/multi-agent-education',
    tags: ['Multi-Agent Systems', 'Education', 'AI', 'Future of Learning'],
  },
]

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'tutorial', label: 'Tutorials' },
  { id: 'whitepaper', label: 'White Papers' },
  { id: 'blog', label: 'Blog Posts' },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
            Blog & Resources
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Insights, tutorials, and white papers on AI, speech technology, and computing education.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <post.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 capitalize">
                    {post.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No posts found</h3>
            <p className="text-gray-500 dark:text-gray-400">Check back later for new content in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
} 