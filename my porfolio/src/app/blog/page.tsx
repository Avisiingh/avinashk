"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Data Science: A Beginner's Guide",
    excerpt: "Learn the fundamentals of data science, including key concepts, tools, and resources for beginners.",
    content: `
      # Getting Started with Data Science: A Beginner's Guide
      
      Data science is an exciting field that combines statistics, programming, and domain expertise to extract insights from data. If you're just starting out, here's what you need to know.
      
      ## What is Data Science?
      
      Data science is the process of extracting knowledge and insights from structured and unstructured data. It involves using various techniques from statistics, mathematics, and computer science to analyze data and make predictions.
      
      ## Essential Skills for Data Scientists
      
      1. **Programming**: Python and R are the most popular languages for data science. They have extensive libraries for data manipulation, visualization, and machine learning.
      
      2. **Statistics and Mathematics**: A solid understanding of statistics, probability, and linear algebra is crucial for data science.
      
      3. **Data Wrangling**: The ability to clean, transform, and prepare data for analysis is a fundamental skill.
      
      4. **Data Visualization**: Communicating insights through effective visualizations is essential for data storytelling.
      
      5. **Machine Learning**: Understanding algorithms and how to apply them to solve problems is a core part of data science.
      
      ## Getting Started
      
      1. **Learn Python or R**: Start with one of these languages and focus on data science libraries like pandas, NumPy, and scikit-learn for Python, or dplyr and ggplot2 for R.
      
      2. **Take Online Courses**: Platforms like Coursera, edX, and DataCamp offer excellent courses for beginners.
      
      3. **Work on Projects**: Apply your skills to real-world problems. Start with simple projects and gradually increase complexity.
      
      4. **Join Communities**: Engage with data science communities on platforms like Kaggle, GitHub, or Stack Overflow.
      
      5. **Read Books and Blogs**: Stay updated with the latest trends and techniques in data science.
      
      ## Conclusion
      
      Data science is a journey, not a destination. Continuous learning and practice are key to becoming proficient. Start small, be consistent, and don't be afraid to make mistakes. Happy learning!
    `,
    author: "Avinash Kumar",
    date: "March 7, 2024",
    category: "Data Science",
    tags: ["Data Science", "Beginner", "Python", "R"],
  },
  {
    id: 2,
    title: "Introduction to Machine Learning Algorithms",
    excerpt: "Explore the most common machine learning algorithms and their applications in real-world scenarios.",
    content: `
      # Introduction to Machine Learning Algorithms
      
      Machine learning algorithms are at the heart of AI systems. Understanding these algorithms and when to use them is essential for any data scientist or ML engineer.
      
      ## Supervised Learning
      
      Supervised learning algorithms learn from labeled training data to make predictions or decisions. Common algorithms include:
      
      1. **Linear Regression**: Used for predicting continuous values.
      2. **Logistic Regression**: Used for binary classification problems.
      3. **Decision Trees**: Tree-like models for classification and regression.
      4. **Random Forests**: Ensemble of decision trees for improved accuracy.
      5. **Support Vector Machines (SVM)**: Effective for classification and regression in high-dimensional spaces.
      6. **Neural Networks**: Deep learning models inspired by the human brain.
      
      ## Unsupervised Learning
      
      Unsupervised learning algorithms find patterns in unlabeled data. Common algorithms include:
      
      1. **K-means Clustering**: Groups similar data points into clusters.
      2. **Hierarchical Clustering**: Creates a tree of clusters.
      3. **Principal Component Analysis (PCA)**: Reduces dimensionality while preserving variance.
      4. **Autoencoders**: Neural networks for dimensionality reduction and feature learning.
      
      ## Reinforcement Learning
      
      Reinforcement learning involves an agent learning to make decisions by taking actions in an environment to maximize rewards. Examples include:
      
      1. **Q-Learning**: A value-based method for learning optimal actions.
      2. **Deep Q Networks (DQN)**: Combines Q-learning with deep neural networks.
      3. **Policy Gradient Methods**: Directly optimize the policy function.
      
      ## Choosing the Right Algorithm
      
      Selecting the appropriate algorithm depends on various factors:
      
      - **Type of Problem**: Classification, regression, clustering, etc.
      - **Data Size and Quality**: Some algorithms perform better with large datasets.
      - **Interpretability**: Some models (like decision trees) are more interpretable than others.
      - **Computational Resources**: Deep learning models typically require more computational power.
      
      ## Conclusion
      
      Understanding machine learning algorithms is crucial for applying them effectively to real-world problems. Start with simpler algorithms and gradually explore more complex ones as you gain experience.
    `,
    author: "Avinash Kumar",
    date: "March 5, 2024",
    category: "Machine Learning",
    tags: ["Machine Learning", "Algorithms", "AI"],
  },
  {
    id: 3,
    title: "Building Responsive Web Applications with React and Tailwind CSS",
    excerpt: "Learn how to create modern, responsive web applications using React and Tailwind CSS.",
    content: `
      # Building Responsive Web Applications with React and Tailwind CSS
      
      React and Tailwind CSS are powerful tools for building modern web applications. In this post, we'll explore how to combine them to create responsive, user-friendly interfaces.
      
      ## Why React and Tailwind CSS?
      
      **React** is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the DOM when data changes.
      
      **Tailwind CSS** is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It promotes consistency and speeds up the development process.
      
      ## Setting Up Your Project
      
      1. **Create a React App**:
      \`\`\`bash
      npx create-react-app my-app
      cd my-app
      \`\`\`
      
      2. **Install Tailwind CSS**:
      \`\`\`bash
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      \`\`\`
      
      3. **Configure Tailwind**:
      Update your \`tailwind.config.js\` file:
      \`\`\`javascript
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      \`\`\`
      
      4. **Add Tailwind to your CSS**:
      In your \`index.css\` file:
      \`\`\`css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      \`\`\`
      
      ## Building Responsive Components
      
      Tailwind makes it easy to create responsive designs using breakpoint prefixes:
      
      \`\`\`jsx
      function Card() {
        return (
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p className="text-gray-700">Card content goes here...</p>
            </div>
          </div>
        );
      }
      \`\`\`
      
      This card will be full-width on small screens, half-width on medium screens, and one-third width on large screens.
      
      ## Creating a Responsive Navigation
      
      \`\`\`jsx
      function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold">My App</span>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4">
                  <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">Home</a>
                  <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">About</a>
                  <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">Services</a>
                  <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded-md">Contact</a>
                </div>
                
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Home</a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">About</a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Services</a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Contact</a>
                </div>
              </div>
            )}
          </nav>
        );
      }
      \`\`\`
      
      ## Conclusion
      
      React and Tailwind CSS are a powerful combination for building responsive web applications. React provides the component structure and interactivity, while Tailwind CSS makes styling and responsiveness straightforward. With these tools, you can create modern, user-friendly interfaces that work well on all devices.
    `,
    author: "Avinash Kumar",
    date: "March 1, 2024",
    category: "Web Development",
    tags: ["React", "Tailwind CSS", "Web Development", "Responsive Design"],
  },
  {
    id: 4,
    title: "Exploring Natural Language Processing with Python",
    excerpt: "Dive into the world of Natural Language Processing (NLP) and learn how to implement basic NLP tasks using Python.",
    content: `
      # Exploring Natural Language Processing with Python
      
      Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and human language. In this post, we'll explore some basic NLP tasks using Python.
      
      ## What is NLP?
      
      NLP combines computational linguistics, machine learning, and deep learning to help computers understand, interpret, and generate human language. Applications include:
      
      - Sentiment analysis
      - Text classification
      - Named entity recognition
      - Machine translation
      - Question answering
      - Text summarization
      
      ## Getting Started with NLP in Python
      
      Python offers several libraries for NLP tasks. The most popular ones are:
      
      1. **NLTK (Natural Language Toolkit)**: A comprehensive library for NLP tasks.
      2. **spaCy**: A modern NLP library designed for production use.
      3. **Transformers**: A library by Hugging Face for state-of-the-art NLP models.
      
      Let's explore some basic NLP tasks using these libraries.
      
      ## Text Preprocessing
      
      Text preprocessing is a crucial step in NLP. It involves:
      
      1. **Tokenization**: Breaking text into words or sentences.
      2. **Lowercasing**: Converting text to lowercase.
      3. **Removing stop words**: Eliminating common words like "the", "is", etc.
      4. **Stemming/Lemmatization**: Reducing words to their root form.
      
      Here's an example using NLTK:
      
      \`\`\`python
      import nltk
      from nltk.tokenize import word_tokenize
      from nltk.corpus import stopwords
      from nltk.stem import PorterStemmer
      
      # Download necessary resources
      nltk.download('punkt')
      nltk.download('stopwords')
      
      text = "Natural Language Processing is fascinating. It helps computers understand human language."
      
      # Tokenization
      tokens = word_tokenize(text)
      print("Tokens:", tokens)
      
      # Lowercasing
      tokens = [token.lower() for token in tokens]
      print("Lowercased:", tokens)
      
      # Removing stop words
      stop_words = set(stopwords.words('english'))
      filtered_tokens = [token for token in tokens if token not in stop_words]
      print("Without stop words:", filtered_tokens)
      
      # Stemming
      stemmer = PorterStemmer()
      stemmed_tokens = [stemmer.stem(token) for token in filtered_tokens]
      print("Stemmed:", stemmed_tokens)
      \`\`\`
      
      ## Sentiment Analysis
      
      Sentiment analysis determines the emotional tone behind a text. Here's a simple example using TextBlob:
      
      \`\`\`python
      from textblob import TextBlob
      
      text1 = "I love this product! It's amazing and works perfectly."
      text2 = "This is terrible. It doesn't work as advertised and broke after a week."
      
      blob1 = TextBlob(text1)
      blob2 = TextBlob(text2)
      
      print(f"Sentiment of text1: {blob1.sentiment}")
      print(f"Sentiment of text2: {blob2.sentiment}")
      \`\`\`
      
      ## Named Entity Recognition
      
      Named Entity Recognition (NER) identifies entities like people, organizations, locations, etc. Here's an example using spaCy:
      
      \`\`\`python
      import spacy
      
      # Load English model
      nlp = spacy.load("en_core_web_sm")
      
      text = "Apple is looking at buying U.K. startup for $1 billion. The deal will be finalized in New York."
      
      doc = nlp(text)
      
      for ent in doc.ents:
          print(f"Entity: {ent.text}, Type: {ent.label_}")
      \`\`\`
      
      ## Conclusion
      
      NLP is a fascinating field with numerous applications. Python provides powerful libraries that make it accessible to beginners and experts alike. Start with these basic tasks and gradually explore more advanced topics like text generation, machine translation, and question answering.
    `,
    author: "Avinash Kumar",
    date: "February 25, 2024",
    category: "AI",
    tags: ["NLP", "Python", "AI", "Machine Learning"],
  },
];

// Get unique categories from blog posts
const uniqueCategories = Array.from(new Set(blogPosts.map((post) => post.category)));
const categories = ["All", ...uniqueCategories];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blog posts by category and search query
  const filteredPosts = blogPosts
    .filter((post) => 
      selectedCategory === "All" || post.category === selectedCategory
    )
    .filter((post) => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">Blog & Updates</h1>
        
        {/* Search and filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
        
        {/* Blog posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="card overflow-hidden">
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              No posts found matching your criteria. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
} 