"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

// Define skill categories and skills
const skillCategories = [
  {
    name: "Data Science",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Data Cleaning", level: 90 },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "Supervised Learning", level: 85 },
      { name: "Unsupervised Learning", level: 80 },
      { name: "Deep Learning", level: 75 },
      { name: "Natural Language Processing", level: 70 },
      { name: "Computer Vision", level: 65 },
      { name: "TensorFlow/PyTorch", level: 75 },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Excel", level: 95 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "VS Code", level: 85 },
    ],
  },
];

// Skill bar component
function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("Data Science");

  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">My Skills</h1>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.name
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              {activeCategory}
            </h2>
            
            {skillCategories
              .find((category) => category.name === activeCategory)
              ?.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
          </div>
          
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              About My {activeCategory} Skills
            </h2>
            
            {activeCategory === "Data Science" && (
              <div className="prose dark:prose-invert">
                <p>
                  My data science skills encompass a wide range of techniques and tools for extracting insights from complex datasets. I'm proficient in Python, R, and SQL for data manipulation, analysis, and visualization.
                </p>
                <p>
                  I have experience with various statistical methods, data cleaning techniques, and visualization libraries like Matplotlib, Seaborn, and Plotly. I enjoy transforming raw data into meaningful insights that drive decision-making.
                </p>
              </div>
            )}
            
            {activeCategory === "Machine Learning & AI" && (
              <div className="prose dark:prose-invert">
                <p>
                  In the field of Machine Learning and AI, I have experience implementing various algorithms and models to solve complex problems. I'm familiar with supervised and unsupervised learning techniques, as well as deep learning frameworks.
                </p>
                <p>
                  I've worked on projects involving natural language processing, computer vision, and predictive modeling. I'm constantly learning and exploring new advancements in AI to stay at the cutting edge of this rapidly evolving field.
                </p>
              </div>
            )}
            
            {activeCategory === "Web Development" && (
              <div className="prose dark:prose-invert">
                <p>
                  My web development skills include front-end and back-end technologies. I'm proficient in HTML, CSS, and JavaScript, and have experience with modern frameworks like React and Next.js.
                </p>
                <p>
                  I focus on creating responsive, accessible, and user-friendly web applications. I'm also familiar with server-side technologies and database integration, allowing me to build full-stack applications.
                </p>
              </div>
            )}
            
            {activeCategory === "Tools & Technologies" && (
              <div className="prose dark:prose-invert">
                <p>
                  I'm proficient with a variety of tools and technologies that support my development workflow. This includes version control with Git, containerization with Docker, and cloud services like AWS.
                </p>
                <p>
                  I'm also experienced with productivity tools like Excel for data analysis, Jupyter Notebooks for interactive computing, and VS Code for efficient coding. These tools help me work more effectively and collaborate with teams.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 