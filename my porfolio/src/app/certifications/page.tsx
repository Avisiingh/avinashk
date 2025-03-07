import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

// Sample certification data
const certifications = [
  {
    id: 1,
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2023",
    description: "A comprehensive program covering data science methodologies, tools, and techniques.",
    skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
    logo: "/placeholder-logo.png", // Replace with actual logo
    url: "https://www.example.com/certification",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Stanford University / Coursera",
    date: "2022",
    description: "In-depth training on machine learning algorithms, techniques, and applications.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    logo: "/placeholder-logo.png", // Replace with actual logo
    url: "https://www.example.com/certification",
  },
  {
    id: 3,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2022",
    description: "Comprehensive program covering neural networks, deep learning, and their applications.",
    skills: ["Neural Networks", "TensorFlow", "Computer Vision", "NLP"],
    logo: "/placeholder-logo.png", // Replace with actual logo
    url: "https://www.example.com/certification",
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2021",
    description: "Complete web development course covering front-end and back-end technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    logo: "/placeholder-logo.png", // Replace with actual logo
    url: "https://www.example.com/certification",
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2021",
    description: "Certification validating expertise in designing distributed systems on AWS.",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking"],
    logo: "/placeholder-logo.png", // Replace with actual logo
    url: "https://www.example.com/certification",
  },
];

export default function CertificationsPage() {
  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">My Certifications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="card overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    {/* Replace with actual logo */}
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm constantly learning and adding new certifications to my portfolio.
            Check back regularly for updates!
          </p>
        </div>
      </div>
    </PageLayout>
  );
} 