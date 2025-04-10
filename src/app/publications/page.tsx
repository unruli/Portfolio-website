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
    id: 1,
    title: 'Afrispeech-Dialog: A Benchmark Dataset for Spontaneous English Conversations in Healthcare and Beyond',
    authors: 'Mardhiyah Sanni, Tassallah Abdullahi, Devendra D. Kayande, Emmanuel Ayodele, Naome A. Etori, Michael S. Mollel, Moshood Yekini, Chibuzor Okocha, Lukman E. Ismaila, Folafunmi Omofoye, Boluwatife A. Adewale, Tobi Olatunji',
    venue: 'Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL)',
    year: '2025',
    abstract: 'Speech technologies are transforming interactions across various sectors, from healthcare to call centers and robots, yet their performance on African-accented conversations remains underexplored. We introduce Afrispeech-Dialog, a benchmark dataset of 50 simulated medical and non-medical African-accented English conversations, designed to evaluate automatic speech recognition (ASR) and related technologies. We assess state-of-the-art (SOTA) speaker diarization and ASR systems on long-form, accented speech, comparing their performance with native accents and discover a 10%+ performance degradation. Additionally, we explore medical conversation summarization capabilities of large language models (LLMs) to demonstrate the impact of ASR errors on downstream medical summaries, providing insights into the challenges and opportunities for speech technologies in the Global South. Our work highlights the need for more inclusive datasets to advance conversational AI in low-resource settings.',
    type: 'conference',
    pdf: 'https://doi.org/10.48550/arXiv.2502.03945',
    code: 'https://github.com/yourusername/afrispeech-dialog',
    citations: 0,
  },
  {
    id: 2,
    title: 'Probing Multilingual and Accent robustness of Speech LLMs',
    authors: 'Anonymous',
    venue: 'Interspeech',
    year: '2025',
    type: 'conference',
    abstract: 'Recent multimodal "voice-native" large language models (LLMs) have demonstrated remarkable conversational capabilities but remain limited to a few widely spoken languages, leaving their applicability in low-resource settings largely unexplored. Given LLMs\' "superhuman" performance on multiple medical benchmarks, voice-based LLMs could enhance access to accurate and personalized health information by enabling more natural interactions, catering to patients in their preferred language, particularly in regions facing severe clinician shortages. This study compares speech-based LLMs with traditional ASR models, evaluating their transcription performance on African languages and English accents. Our results reveal significant disparities in language support and performance, highlighting key limitations in current speech-based LLMs and providing insights into optimal baselines for building more inclusive, multilingual, speech-driven healthcare AI systems',
    status: 'Under Review',
  },
  {
    id: 3,
    title: 'We lost 2 decades: a large-scale multi-country study on healthcare documentation speeds in LMICs',
    authors: 'Tobi Olatunji, Chinemelu Aka, Tassallah Abdullahi, Chibuzor Okocha, Naome A. Etori, Gloria A. Katuka, and Lukman E. Ismaila',
    venue: 'ACM CHI Workshop on Envisioning the Future of Interactive Health',
    year: '2025',
    type: 'workshop',
    abstract: 'Medical voice dictation and scribe services have boosted productivity in high-resource settings for decades. Yet they remain virtually absent in low-and-middle-income countries (LMICs), where healthcare systems face physician shortages and heavier patient loads but rely on outdated, paper-based workflows. While voice input is typically considered a suitable alternative that alleviates the additional cognitive burden from keyboard-based data entry, studies in high-resource settings report mixed findings on its efficiency. This study evaluates whether those findings hold true in LMIC contexts. We assessed typing and dictation speeds among over 1,000 clinicians and health workers across 15+ LMICs. Results reveal a median keyboard speed of just 21.4 words per minute (wpm), in contrast to dictation speeds that are 4–5x faster on average (median 93 wpm). This speed improvement highlights the potential of automatic speech recognition (ASR) to reduce documentation burdens, improve workflow efficiency, and transform clinician experiences, and reinforcing the need to integrate voice solutions into LMIC digital health strategies.',
  },
  {
    id: 4,
    title: 'Navigating Unfamiliar Waters: Enhancing Intercultural Understanding and Academic Self-Efficacy Among Computer Science Students in Japan',
    authors: 'Chibuzor J. Okocha, Jeremiah J. Blanchard, Gloria J. Kim, Mariko Adachi',
    venue: 'IEEE Frontiers in Education Conference (FIE)',
    year: '2024',
    type: 'conference',
    abstract: 'Global collaborations have expanded the importance of effective cross-cultural communication in engineering disciplines, with self-efficacy playing a crucial role in developing these skills. This work-in-progress innovative practice paper is a quantitative component of a mixed-method exploratory study investigating the experiences of fifteen computing students from the University of Florida who participated in a nine-week summer study abroad program at Kyoto University, Japan, in 2022. The research aimed to assess the enhancement of cross-cultural engineering self-efficacy and the evolution of students\' intercultural understanding. Surveys were conducted at the program\'s inception and conclusion, allowing for a detailed analysis of students\' self-perceived academic capabilities and intercultural awareness over time. Preliminary statistical analysis suggests an increase in students\' self-efficacy in cross-cultural engineering by the end of the program, highlighting the impact of the study abroad experience on broadening students\' perspectives and enhancing their adaptability in intercultural interactions.',
    pdf: 'https://doi.org/10.1109/FIE61694.2024.10893074',
    status: 'WIP',
  },
  {
    id: 5,
    title: 'Microelectronics Research and Global Competencies: Unpacking Research Abroad Experiences of Engineering Students',
    authors: 'Chibuzor J. Okocha, Gloria J. Kim, Jae Wan Choi, Yong-Kyu Yoon',
    venue: 'ASEE Annual Conference & Exposition',
    year: '2024',
    type: 'conference',
    abstract: 'Global competencies are essential for engineering students in today\'s globalized world. This work investigates this aspect of an International Research Experience for Students (IRES) program funded by the National Science Foundation (NSF). The NSF IRES: Interdisciplinary Research in Korea on Applied Smart Systems (IRiKA) recruited both undergraduate and graduate students with diverse backgrounds from four public and private US universities. Due to the constraints of the grant, only US citizens and permanent residents were eligible to apply. Over the duration of the grant, three cohorts were deployed. Due to the pandemic, the program did not run in 2020 and 2022. In all, 18 participants engaged in an 8-week research internship as part of the IRiKA program. This study focuses on the experience of the 2023 cohort - specifically, a subset of the 2023 cohort that worked on microelectronics device projects. This study employed a qualitative methods approach anchored in the PISA 2018 Global Competence theoretical framework. By analyzing qualitative data from weekly blog post reflections and student interviews, this work aims to unpack the complex ways global competencies are cultivated among undergraduate and graduate engineering students with varying degrees of prior research experience. The findings of this research are expected to inform future engineering education practices, providing valuable insights for educators, policymakers, and institutions aiming to enhance the global competencies of their students through international research collaborations.',
    pdf: 'https://doi.org/10.18260/1-2--47777',
  },
  // Add more publications as needed
]

const publicationTypes = [
  { id: 'all', name: 'All', icon: DocumentTextIcon },
  { id: 'conference', name: 'Conference Papers', icon: AcademicCapIcon },
  { id: 'workshop', name: 'Workshop Papers', icon: BookOpenIcon },
  { id: 'journal', name: 'Journal Articles', icon: BookOpenIcon },
]

export default function Publications() {
  const [selectedType, setSelectedType] = React.useState('all')
  const [selectedYear, setSelectedYear] = React.useState('all')
  const [expandedAbstract, setExpandedAbstract] = React.useState<string | null>(null)

  const years = ['all', ...Array.from(new Set(publications.map(pub => pub.year)))].sort().reverse()

  const filteredPublications = publications.filter(pub => {
    if (selectedType !== 'all' && pub.type !== selectedType) return false
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
          <h1 className="text-4xl font-bold text-white mb-4">
            Publications
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A collection of my academic publications, conference papers, and research contributions.
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
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <DocumentTextIcon className="h-5 w-5" />
                    </a>
                  )}
                  {pub.code && (
                    <a
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
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
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                  {pub.type}
                </span>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                  {pub.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 