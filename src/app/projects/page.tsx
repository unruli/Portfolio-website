'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'AfriSpeech-200',
    description: 'A comprehensive dataset of Pan-African accented speech for clinical and general domain ASR, featuring 100+ African accents totaling 196+ hours of audio. The dataset includes 2,463 unique speakers with a balanced gender distribution (57.11% female, 42.41% male, 0.48% other). This resource aims to address the gap in African-accented speech recognition and provide a benchmark for developing more inclusive speech technologies.',
    tags: ['Speech Processing', 'ASR', 'African Accents', 'Dataset', 'Clinical Domain', 'Python'],
    github: 'https://github.com/intron-innovation/AfriSpeech-200',
    image: '/projects/afrispeech-200.jpg',
    category: 'group',
  },
  {
    id: 2,
    title: 'AfriSpeech-Dialog',
    description: 'A dataset of long-form African accented English conversation for evaluation diarization, ASR, and summarization. I worked on the Diarization of open and closed Diarization models on our Custom dataset.',
    tags: ['Speech Processing', 'ASR', 'Diarization', 'Python'],
    github: 'https://github.com/unruli/AfriSpeech-Dialog',
    image: '/projects/afrispeech.jpg',
    category: 'group',
  },
  {
    id: 3,
    title: 'ASR Fine-Tuning with Nvidia NeMo',
    description: 'Built, trained, and deployed a GPU-accelerated automatic speech recognition service (ASR) tailored for Nigerian English using NVIDIA\'s Riva and NeMo frameworks. The project includes fine-tuning pre-trained models, implementing word boosting, and deploying custom ASR pipelines.',
    tags: ['ASR', 'Deep Learning', 'NVIDIA NeMo', 'NVIDIA Riva', 'Python', 'GPU Computing'],
    github: 'https://github.com/unruli/ASR-Fine-Tuning-with-Nvidia-NeMo',
    image: '/projects/nemo-asr.jpg',
    category: 'personal',
  },
  {
    id: 4,
    title: 'Academic Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include dark mode support, smooth animations using Framer Motion, and a fully responsive design showcasing my research, publications, and projects.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React'],
    github: 'https://github.com/unruli/Portfolio-website',
    demo: 'https://chibuzor.vercel.app/',
    image: '/projects/portfolio.jpg',
    category: 'personal',
  },
  {
    id: 5,
    title: 'AfriSpeech-TTS',
    description: 'African Digital Voices: A pan-African parameter-efficient multi-accent multi-speaker text-to-speech system. Features 751 unique speakers with a balanced gender distribution (54.45% female, 44.36% male, 1.19% other). The system uses parameter-efficient approaches to achieve competitive performance in voice synthesis while using only 1.2% to 0.8% of original trainable parameters.',
    tags: ['Text-to-Speech', 'Speech Synthesis', 'African Voices', 'Deep Learning', 'Python'],
    github: 'https://github.com/intron-innovation/AfriSpeech-TTS',
    image: '/projects/afrispeech-tts.jpg',
    category: 'group',
  },
  {
    id: 6,
    title: 'RAG Application with NVIDIA NIM',
    description: 'Built a Retrieval-Augmented Generation (RAG) pipeline using NVIDIA\'s NIM (NeMo Inference Microservices) and LangChain, with a Streamlit UI for interaction. The system processes PDF documents, creates vector embeddings using NVIDIAEmbeddings, and enables natural language querying over the content using the meta/llama3-70b-instruct model through ChatNVIDIA.',
    tags: ['RAG', 'NVIDIA NIM', 'LangChain', 'Streamlit', 'LLM', 'Vector Embeddings'],
    github: 'https://github.com/unruli/Building-RAG-Agents-with-LLms',
    image: '/projects/rag-nim.jpg',
    category: 'personal',
  },
  {
    id: 7,
    title: 'Multi-Agent Systems with CrewAI',
    description: 'A project exploring the design and orchestration of multi-agent systems using CrewAI and OpenAI models. Demonstrates how to coordinate autonomous agents to solve complex tasks collaboratively, with features for agent delegation, natural language communication, and external tool integration.',
    tags: ['Multi-Agent Systems', 'CrewAI', 'OpenAI', 'LLM', 'Python', 'Agent Orchestration'],
    github: 'https://github.com/unruli/Mutli-Agent-systems',
    image: '/projects/crewai.jpg',
    category: 'personal',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'group', label: 'Group Research Projects' },
  { id: 'personal', label: 'Personal Projects' }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
            Projects
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A collection of Group Research projects and Personal AI projects.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <CodeBracketIcon className="h-5 w-5 mr-1" />
                      GitHub
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-1" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 