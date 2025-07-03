
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "avms",
      title: "Apartment Visitor Management System (AVMS)",
      description: "A PHP-based system to manage apartment visitors securely. Includes check-in/check-out, visitor logs, admin panel, and report generation with PDF export functionality.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      tags: ["PHP", "MySQL", "Bootstrap", "CRUD", "PDF Export"],
      github: "#",
      demo: "#"
    },
    {
      id: "hospital-management",
      title: "Hospital Management System",
      description: "Complete hospital web application to manage patients, staff, appointments, billing, and medical reports with comprehensive admin dashboard and authentication.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop",
      tags: ["PHP", "MySQL", "Admin Dashboard", "Authentication"],
      github: "#",
      demo: "#"
    },
    {
      id: "student-management",
      title: "Student Management System",
      description: "Comprehensive school management platform that tracks students, grades, attendance, parent information, and classroom data with secure authentication and responsive admin portal.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      tags: ["React", "Express.js", "MySQL", "Secure Auth", "Admin Portal"],
      github: "https://github.com/gadishiimwe/student-management-system",
      demo: "#"
    },
    {
      id: "news-portal",
      title: "News Portal",
      description: "Dynamic Laravel-based content management system for posting news, categorizing content, managing user comments, and providing interactive user experience.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      tags: ["Laravel", "PHP", "MySQL", "Admin Panel", "User Interaction"],
      github: "https://github.com/gadishiimwe/newsportal",
      demo: "#"
    },
    {
      id: "car-rental",
      title: "Car Rental Platform – Mufasa Business Group",
      description: "Full-stack car rental platform with booking management, user authentication, and payment processing. Built for Mufasa Business Group with modern UI and secure backend.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "Express", "MySQL", "Authentication", "Booking Logic"],
      github: "https://github.com/gadishiimwe/carrental",
      demo: "#"
    },
    {
      id: "church-website",
      title: "UNITED CHRISTIAN CHURCH Website",
      description: "Modern church website with event calendar, sermon video streaming, member dashboard, and integrated donation system featuring responsive design and content management.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop",
      tags: ["ReactJS", "NodeJS", "MySQL", "Custom Theme"],
      github: "#",
      demo: "#"
    },
    {
      id: "echox",
      title: "EchoX – The Super App",
      description: "All-in-One digital platform combining social interaction, news feeds, payment systems, and multiple services in a single comprehensive application with modern UI.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "Payment Integration"],
      github: "#",
      demo: "#"
    },
    {
      id: "investment-platform",
      title: "Investment Solutions Platform",
      description: "Financial platform for investment tracking, portfolio management, and market analysis with real-time data integration and secure transactions.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      tags: ["React", "Express", "MySQL", "Financial APIs", "Charts"],
      github: "#",
      demo: "#"
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

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
              onClick={() => handleProjectClick(project.id)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
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
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
