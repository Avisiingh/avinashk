"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Sample notes data
const notesCategories = [
  {
    id: "math",
    name: "Mathematics",
    description: "Notes on various mathematical concepts and formulas.",
    notes: [
      {
        id: "math-1",
        title: "Linear Algebra Fundamentals",
        excerpt: "Key concepts in linear algebra including vectors, matrices, and transformations.",
        date: "March 5, 2024",
        tags: ["Linear Algebra", "Matrices", "Vectors"],
      },
      {
        id: "math-2",
        title: "Calculus Cheat Sheet",
        excerpt: "Quick reference for derivatives, integrals, and series expansions.",
        date: "February 20, 2024",
        tags: ["Calculus", "Derivatives", "Integrals"],
      },
      {
        id: "math-3",
        title: "Probability Theory",
        excerpt: "Notes on probability distributions, Bayes' theorem, and statistical inference.",
        date: "January 15, 2024",
        tags: ["Probability", "Statistics", "Bayes Theorem"],
      },
    ],
  },
  {
    id: "python",
    name: "Python",
    description: "Programming notes and snippets for Python development.",
    notes: [
      {
        id: "python-1",
        title: "Data Structures in Python",
        excerpt: "Overview of lists, dictionaries, sets, and tuples with examples.",
        date: "March 7, 2024",
        tags: ["Python", "Data Structures", "Programming"],
      },
      {
        id: "python-2",
        title: "Python for Data Analysis",
        excerpt: "Using pandas, NumPy, and matplotlib for data manipulation and visualization.",
        date: "February 28, 2024",
        tags: ["Python", "Pandas", "Data Analysis"],
      },
      {
        id: "python-3",
        title: "Object-Oriented Programming in Python",
        excerpt: "Classes, inheritance, polymorphism, and encapsulation in Python.",
        date: "February 10, 2024",
        tags: ["Python", "OOP", "Classes"],
      },
      {
        id: "python-4",
        title: "Python Best Practices",
        excerpt: "Coding standards, documentation, testing, and performance optimization.",
        date: "January 25, 2024",
        tags: ["Python", "Best Practices", "Clean Code"],
      },
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Notes on machine learning algorithms, techniques, and applications.",
    notes: [
      {
        id: "ml-1",
        title: "Supervised Learning Algorithms",
        excerpt: "Overview of regression, classification, decision trees, and neural networks.",
        date: "March 3, 2024",
        tags: ["Machine Learning", "Supervised Learning", "Algorithms"],
      },
      {
        id: "ml-2",
        title: "Unsupervised Learning Techniques",
        excerpt: "Clustering, dimensionality reduction, and anomaly detection methods.",
        date: "February 15, 2024",
        tags: ["Machine Learning", "Unsupervised Learning", "Clustering"],
      },
      {
        id: "ml-3",
        title: "Model Evaluation Metrics",
        excerpt: "Accuracy, precision, recall, F1-score, ROC curves, and cross-validation.",
        date: "January 30, 2024",
        tags: ["Machine Learning", "Evaluation", "Metrics"],
      },
      {
        id: "ml-4",
        title: "Feature Engineering Techniques",
        excerpt: "Methods for creating, transforming, and selecting features for ML models.",
        date: "January 10, 2024",
        tags: ["Machine Learning", "Feature Engineering", "Data Preprocessing"],
      },
    ],
  },
  {
    id: "webdev",
    name: "Web Development",
    description: "Notes on web technologies, frameworks, and best practices.",
    notes: [
      {
        id: "webdev-1",
        title: "React Hooks Explained",
        excerpt: "Understanding useState, useEffect, useContext, and custom hooks.",
        date: "March 6, 2024",
        tags: ["React", "Hooks", "JavaScript"],
      },
      {
        id: "webdev-2",
        title: "CSS Grid and Flexbox",
        excerpt: "Modern layout techniques for responsive web design.",
        date: "February 25, 2024",
        tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
      },
      {
        id: "webdev-3",
        title: "Next.js Fundamentals",
        excerpt: "Server-side rendering, static site generation, and API routes in Next.js.",
        date: "February 5, 2024",
        tags: ["Next.js", "React", "SSR", "SSG"],
      },
    ],
  },
];

export default function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all notes across categories
  const allNotes = notesCategories.flatMap((category) => 
    category.notes.map((note) => ({
      ...note,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );

  // Filter notes by category and search query
  const filteredNotes = selectedCategory
    ? allNotes.filter((note) => note.categoryId === selectedCategory)
    : allNotes;

  const searchedNotes = searchQuery
    ? filteredNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredNotes;

  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">My Notes</h1>
        
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300">
            This is my personal knowledge base where I store notes, snippets, and resources on various topics.
            Feel free to explore and learn along with me!
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search notes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === null
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Notes
            </button>
            {notesCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category description */}
        {selectedCategory && (
          <div className="mb-8">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {notesCategories.find((cat) => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {notesCategories.find((cat) => cat.id === selectedCategory)?.description}
              </p>
            </div>
          </div>
        )}
        
        {/* Notes grid */}
        {searchedNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedNotes.map((note) => (
              <div key={note.id} className="card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md">
                      {note.categoryName}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{note.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {note.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {note.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/notes/${note.id}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    View Note →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              No notes found matching your criteria. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
} 