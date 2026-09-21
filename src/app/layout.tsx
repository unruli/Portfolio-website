import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const metadata: Metadata = {
  title: 'Chibuzor Okocha - PhD Student',
  description: 'PhD student in Computer Science at University of Florida. Research in Speech and Audio AI, reasoning in Audio Language Models, and accented multilingual speech processing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 