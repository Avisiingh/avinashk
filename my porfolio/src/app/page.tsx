import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="block">Hello, I'm</span>
                <span className="text-accent-600 dark:text-accent-400 block mt-2">Avinash Kumar</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Data Scientist, Machine Learning Engineer, and Web Developer passionate about AI and technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects" className="btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-card">
              {/* Replace with your image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-5xl font-semibold">
                AK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Specializing in data science, machine learning, and web development to create impactful solutions.
          </p>
          
          <div className="grid-layout mt-12">
            {/* Data Science */}
            <div className="card p-6 group">
              <div className="h-12 w-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Science</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Analyzing complex data sets to extract meaningful insights and drive data-driven decisions.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Machine Learning & AI */}
            <div className="card p-6 group">
              <div className="h-12 w-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Machine Learning & AI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Building intelligent systems that learn from data and make predictions or decisions without explicit programming.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="card p-6 group">
              <div className="h-12 w-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Creating modern, responsive, and user-friendly web applications using cutting-edge technologies.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">
            Thoughts, insights, and updates on my latest work and learning experiences.
          </p>
          
          <div className="grid-layout mt-12">
            {/* Blog Post 1 */}
            <div className="card group">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-2.5 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs rounded-md">
                    Data Science
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 7, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Blog Post Title 1
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="card group">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-2.5 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs rounded-md">
                    Machine Learning
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 5, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Blog Post Title 2
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="card group">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-2.5 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs rounded-md">
                    Web Development
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 1, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Blog Post Title 3
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-primary">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-600 dark:bg-accent-700">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Let's Work Together</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects.
          </p>
          <Link href="/contact" className="btn-secondary bg-white text-accent-600 hover:bg-gray-100">
            Get In Touch
          </Link>
        </div>
      </section>
    </PageLayout>
  );
} 