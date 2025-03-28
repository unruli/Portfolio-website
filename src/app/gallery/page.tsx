'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

const galleryItems = [
  {
    id: 1,
    title: 'Conference Presentation',
    description: 'Presenting my research at the International Conference on Machine Learning',
    image: '/gallery/conference.jpg',
    category: 'conferences',
  },
  {
    id: 2,
    title: 'Research Visualization',
    description: 'Interactive visualization of language model attention patterns',
    image: '/gallery/visualization.jpg',
    category: 'research',
  },
  {
    id: 3,
    title: 'Teaching Workshop',
    description: 'Leading a workshop on AI in Education',
    image: '/gallery/workshop.jpg',
    category: 'teaching',
  },
  {
    id: 4,
    title: 'Lab Meeting',
    description: 'Discussing research progress with the team',
    image: '/gallery/lab.jpg',
    category: 'lab',
  },
  // Add more gallery items as needed
]

const categories = ['all', ...new Set(galleryItems.map(item => item.category))]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryItems[0] | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

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
            Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A visual journey through my academic life, research, and teaching experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-sm">{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 