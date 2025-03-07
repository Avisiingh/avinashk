import { PageLayout } from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="section-container">
        <h1 className="section-title">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - Personal info */}
          <div className="md:col-span-1">
            <div className="card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Info</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h3>
                  <p className="text-gray-900 dark:text-white">Avinash Kumar</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                  <p className="text-gray-900 dark:text-white">avinasgavs40@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="text-gray-900 dark:text-white">[Your Location]</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Interests</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      Data Science
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      AI
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">[Your Degree]</h3>
                  <p className="text-gray-600 dark:text-gray-400">[University Name]</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">[Year] - [Year]</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">[Another Degree/Certification]</h3>
                  <p className="text-gray-600 dark:text-gray-400">[Institution Name]</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">[Year]</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Bio and experience */}
          <div className="md:col-span-2">
            <div className="card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Biography</h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Hello! I'm Avinash Kumar, a passionate [Your Role/Title] with expertise in Data Science, Machine Learning, AI, and Web Development. 
                </p>
                
                <p>
                  I have a strong background in [Your Background], and I'm particularly interested in [Your Specific Interests or Specializations]. 
                  My journey in the tech world began [Brief Story About How You Started].
                </p>
                
                <p>
                  Throughout my career, I've worked on various projects that have allowed me to develop a deep understanding of [Your Key Skills]. 
                  I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
                </p>
                
                <p>
                  When I'm not coding or analyzing data, you can find me [Your Hobbies or Interests Outside of Work]. 
                  I believe that maintaining a balance between technical work and personal interests helps foster creativity and problem-solving abilities.
                </p>
                
                <p>
                  I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out if you'd like to connect!
                </p>
              </div>
            </div>
            
            <div className="card p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">[Job Title]</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-500">[Year] - [Year/Present]</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">[Company Name]</p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Accomplishment or responsibility 1</li>
                    <li>Accomplishment or responsibility 2</li>
                    <li>Accomplishment or responsibility 3</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">[Previous Job Title]</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-500">[Year] - [Year]</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">[Previous Company Name]</p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Accomplishment or responsibility 1</li>
                    <li>Accomplishment or responsibility 2</li>
                    <li>Accomplishment or responsibility 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 