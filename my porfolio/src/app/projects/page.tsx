"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Machine Learning Image Classifier",
    description: "A deep learning model that classifies images into different categories with high accuracy.",
    longDescription: "This project implements a convolutional neural network (CNN) for image classification. It was trained on a large dataset of labeled images and achieves over 90% accuracy on the test set. The model is built using TensorFlow and can be deployed as a web service or integrated into other applications.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "Machine Learning",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    longDescription: "This dashboard provides an intuitive interface for exploring and visualizing data. Users can upload their own datasets, select variables for analysis, and generate various types of charts and graphs. The application includes features like data filtering, aggregation, and export options.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["Data Visualization", "React", "D3.js", "Dashboard"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Natural Language Processing Chatbot",
    description: "A conversational AI chatbot that understands and responds to natural language queries.",
    longDescription: "This NLP-powered chatbot uses transformer models to understand user queries and generate contextually relevant responses. It can be trained on domain-specific data to provide specialized assistance. The system includes features like intent recognition, entity extraction, and conversation memory.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["NLP", "AI", "Python", "Transformers"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "AI",
  },
  {
    id: 4,
    title: "E-commerce Web Application",
    description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
    longDescription: "This e-commerce application provides a complete solution for online stores. It includes features like product catalog management, user authentication, shopping cart functionality, order processing, and payment gateway integration. The platform is built with scalability and performance in mind.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["Web Development", "React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Predictive Analytics Tool",
    description: "A tool that uses historical data to predict future trends and outcomes for business decision-making.",
    longDescription: "This predictive analytics tool applies statistical algorithms and machine learning techniques to historical data to forecast future trends. It helps businesses make data-driven decisions by providing insights into potential outcomes. The system includes features for data preprocessing, model training, and result visualization.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["Data Science", "Predictive Modeling", "Python", "Statistics"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "Data Science",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "This portfolio website showcases my skills, projects, and professional experience. It features a clean, modern design with responsive layouts for all device sizes. The site includes sections for about me, skills, projects, blog, and contact information. It's built with Next.js for performance and SEO benefits, and styled with Tailwind CSS for a customizable design system.",
    image: "/placeholder-project.jpg", // Replace with actual image
    tags: ["Web Development", "Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/username/project",
    demo: "https://example.com/demo",
    category: "Web Development",
  },
];

// Get unique categories from projects
const uniqueCategories = Array.from(new Set(projects.map((project) => project.category)));
const categories = ["All", ...uniqueCategories];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Filter projects by category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  // Get the selected project details
  const projectDetails = selectedProject !== null
    ? projects.find((project) => project.id === selectedProject)
    : null;

  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">My Projects</h1>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project.id);
                  }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project details modal */}
        {selectedProject !== null && projectDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {projectDetails.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p>{projectDetails.longDescription}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={projectDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={projectDetails.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
} 