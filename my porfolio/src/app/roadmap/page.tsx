import { Metadata } from 'next'
import roadmapData from '@/content/roadmap.json'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { RoadmapData } from '@/types/roadmap'

export const metadata: Metadata = {
  title: 'My Projects | Avinash Kumar',
  description: roadmapData.description,
}

export default function RoadmapPage() {
  const data = roadmapData as RoadmapData;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Github className="w-8 h-8 text-gray-800" />
          <h1 className="text-4xl font-bold">{data.title}</h1>
        </div>
        <p className="text-lg text-gray-600 mb-12">{data.description}</p>

        <div className="space-y-8">
          {data.categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full border-8 border-gray-100">
                    <div 
                      className="w-full h-full rounded-full border-8 border-blue-500"
                      style={{ 
                        clipPath: `inset(${100 - category.progress}% 0 0 0)`,
                        transform: 'rotate(-90deg)'
                      }}
                    />
                  </div>
                  <span className="ml-4 text-xl font-semibold">{category.progress}%</span>
                </div>
              </div>

              <div className="space-y-6">
                {category.paths.map((path) => (
                  <div key={path.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{path.title}</h3>
                        <p className="text-gray-600">{path.description}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-100">
                          <div 
                            className="w-full h-full rounded-full border-4 border-green-500"
                            style={{ 
                              clipPath: `inset(${100 - path.progress}% 0 0 0)`,
                              transform: 'rotate(-90deg)'
                            }}
                          />
                        </div>
                        <span className="ml-3 text-lg font-semibold">{path.progress}%</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {path.milestones.map((milestone) => (
                        <div key={milestone.id}>
                          <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                          <p className="text-gray-600 mb-3">{milestone.description}</p>
                          
                          <div className="space-y-2">
                            {milestone.resources.map((resource) => (
                              <Link 
                                key={resource.name}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 hover:underline"
                              >
                                <Github className="w-4 h-4" />
                                {resource.name}
                                {resource.progress && (
                                  <span className="text-sm text-gray-500">
                                    ({resource.progress}%)
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 