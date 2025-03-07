import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        
        {/* Content */}
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="block">Hello, I'm</span>
                <span className="text-primary-600 dark:text-primary-400 block mt-2">Avinash Kumar</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <div className="flex justify-center animate-fade-in">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-6xl font-bold">
                  AK
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-container">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            I specialize in creating data-driven solutions and applications that solve real-world problems.
          </p>
          
          <div className="apple-grid mt-16">
            {/* Data Science */}
            <div className="glass-card p-8 group hover:shadow-lg">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data Science</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Transforming raw data into actionable insights using statistical analysis, machine learning, and data visualization.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Machine Learning & AI */}
            <div className="glass-card p-8 group hover:shadow-lg">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Machine Learning & AI</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Building intelligent systems that learn from data and make predictions or decisions without explicit programming.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="glass-card p-8 group hover:shadow-lg">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Creating responsive, user-friendly web applications with modern frameworks and technologies.
              </p>
              <Link href="/skills" className="btn-text group">
                <span>Learn more</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work in data science, machine learning, and web development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Project 1 */}
            <div className="card group overflow-hidden hover:shadow-lg">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Project Title 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A brief description of the project, highlighting key features and technologies used.
                </p>
                <Link href="/projects" className="btn-text group">
                  <span>View Project</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card group overflow-hidden hover:shadow-lg">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Project Title 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A brief description of the project, highlighting key features and technologies used.
                </p>
                <Link href="/projects" className="btn-text group">
                  <span>View Project</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-container">
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">
            Thoughts, insights, and updates on my latest work and learning experiences.
          </p>
          
          <div className="apple-grid mt-16">
            {/* Blog Post 1 */}
            <div className="glass-card group hover:shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full">
                    Data Science
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 7, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Blog Post Title 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="glass-card group hover:shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full">
                    Machine Learning
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Blog Post Title 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="glass-card group hover:shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full">
                    Web Development
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">March 1, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Blog Post Title 3
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  A brief summary of the blog post content, giving readers a preview of what to expect.
                </p>
                <Link href="/blog" className="btn-text group">
                  <span>Read More</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/blog" className="btn-primary">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 -z-10"></div>
        
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 font-medium shadow-lg">
            Get In Touch
          </Link>
        </div>
      </section>
    </PageLayout>
  );
} 