
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, post management, real-time messaging, and content moderation.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop",
      tags: ["Express.js", "JWT", "Redis", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["React Native", "TypeScript", "Weather API"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, progress tracking, video streaming, and interactive assignments.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      tags: ["Django", "React", "AWS S3", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
