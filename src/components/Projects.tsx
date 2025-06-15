
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Car Rental System",
      description: "Full-stack car rental platform with booking management, user authentication, and payment processing. Built for Mufasa Business Group with modern UI and secure backend.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "Express", "MySQL", "Authentication"],
      github: "https://github.com/gadishiimwe/carrental",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "Comprehensive school management platform with student records, grade tracking, attendance management, and parent-teacher communication features.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=300&fit=crop",
      tags: ["React", "Express.js", "MySQL", "CRUD Operations"],
      github: "https://github.com/gadishiimwe/student-management-system",
      demo: "#"
    },
    {
      title: "News Portal",
      description: "Dynamic news website with content management system, article categorization, user comments, and admin dashboard for content moderation.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      tags: ["PHP", "Laravel", "MySQL", "CMS", "Admin Panel"],
      github: "https://github.com/gadishiimwe/newsportal",
      demo: "#"
    },
    {
      title: "UNITED CHRISTIAN CHURCH Website",
      description: "Church website with event management, sermon streaming, member portal, and donation system. Features responsive design and content management.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop",
      tags: ["WordPress", "PHP", "MySQL", "Custom Themes"],
      github: "#",
      demo: "#"
    },
    {
      title: "ECHOX - Super App",
      description: "All-in-One digital platform combining multiple services in a single application. Features modern UI, user management, and integrated payment systems.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "Multi-Service", "Payment Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "Investment Solutions Platform",
      description: "Financial platform for investment tracking, portfolio management, and market analysis with real-time data integration and secure transactions.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      tags: ["React", "Express", "MySQL", "Financial APIs", "Charts"],
      github: "#",
      demo: "#"
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
            Real-world applications solving business problems across various industries
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
