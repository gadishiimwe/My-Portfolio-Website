import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Phone, MapPin, Send, Linkedin, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "avms": {
      title: "Apartment Visitor Management System (AVMS)",
      description: "A comprehensive PHP-based system designed to manage apartment visitors securely and efficiently. This system provides a complete solution for apartment complexes to track and manage visitor access.",
      longDescription: "The AVMS is a robust visitor management solution that streamlines the process of managing apartment visitors. It includes comprehensive check-in/check-out functionality, detailed visitor logs, an intuitive admin panel, and sophisticated report generation with PDF export capabilities. The system ensures security while maintaining ease of use for both administrators and visitors.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop"
      ],
      technologies: ["PHP", "MySQL", "Bootstrap", "CRUD Operations", "PDF Export", "Security Features"],
      features: [
        "Secure visitor check-in/check-out system",
        "Comprehensive visitor logs and history",
        "Admin panel with full CRUD operations",
        "PDF report generation and export",
        "Real-time visitor tracking",
        "Security access controls",
        "Responsive design for all devices",
        "Visitor photo capture and storage"
      ],
      challenges: [
        "Implementing secure access control mechanisms",
        "Designing efficient database schema for visitor tracking",
        "Creating user-friendly PDF report generation",
        "Ensuring responsive design across all devices"
      ],
      solutions: [
        "Developed multi-layered authentication system",
        "Optimized database queries for faster data retrieval",
        "Integrated TCPDF library for professional reports",
        "Used Bootstrap framework for mobile-first design"
      ],
      github: "#",
      demo: "#",
      duration: "3 months",
      role: "Full-Stack Developer"
    },
    "hospital-management": {
      title: "Hospital Management System",
      description: "A complete hospital web application designed to streamline healthcare operations and improve patient care through digital solutions.",
      longDescription: "This comprehensive hospital management system revolutionizes healthcare administration by digitizing patient records, staff management, appointment scheduling, billing processes, and medical report generation. The system features a sophisticated admin dashboard and robust authentication system to ensure data security and operational efficiency.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop"
      ],
      technologies: ["PHP", "MySQL", "Admin Dashboard", "Authentication", "Bootstrap", "Session Management"],
      features: [
        "Patient registration and management",
        "Staff and doctor profiles",
        "Appointment scheduling system",
        "Billing and payment tracking",
        "Medical report generation",
        "Comprehensive admin dashboard",
        "Secure authentication system",
        "Patient history tracking"
      ],
      challenges: [
        "Managing complex patient data relationships",
        "Implementing secure medical record access",
        "Creating intuitive appointment scheduling",
        "Ensuring HIPAA compliance considerations"
      ],
      solutions: [
        "Designed normalized database structure",
        "Implemented role-based access control",
        "Built calendar-based scheduling interface",
        "Added comprehensive audit logging"
      ],
      github: "#",
      demo: "#",
      duration: "4 months",
      role: "Lead Developer"
    },
    "student-management": {
      title: "Student Management System",
      description: "A comprehensive school management platform that revolutionizes educational administration through modern web technologies.",
      longDescription: "This full-stack student management system provides educational institutions with a complete digital solution for managing student data, academic performance, attendance tracking, and parent communication. Built with React and Express.js, it offers a responsive admin portal and secure authentication system.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
      ],
      technologies: ["React", "Express.js", "MySQL", "Secure Authentication", "Admin Portal", "Node.js"],
      features: [
        "Student registration and profiles",
        "Grade and performance tracking",
        "Attendance management system",
        "Parent information portal",
        "Classroom data management",
        "Secure authentication system",
        "Responsive admin dashboard",
        "Real-time data updates"
      ],
      challenges: [
        "Creating scalable React component architecture",
        "Implementing real-time grade updates",
        "Managing complex parent-student relationships",
        "Ensuring secure data transmission"
      ],
      solutions: [
        "Used React hooks and context for state management",
        "Implemented WebSocket connections for live updates",
        "Built flexible user role system",
        "Added JWT authentication with refresh tokens"
      ],
      github: "https://github.com/gadishiimwe/student-management-system",
      demo: "#",
      duration: "5 months",
      role: "Full-Stack Developer"
    },
    "news-portal": {
      title: "News Portal",
      description: "A dynamic Laravel-based content management system for modern news publishing and community interaction.",
      longDescription: "This sophisticated news portal leverages Laravel's powerful framework to create a dynamic content management system. It enables efficient news posting, content categorization, user comment management, and provides an interactive user experience with modern web technologies.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Admin Panel", "User Interaction", "CMS"],
      features: [
        "Dynamic news posting system",
        "Content categorization and tagging",
        "User comment management",
        "Admin panel for content control",
        "SEO-optimized article pages",
        "User interaction features",
        "Responsive design",
        "Content scheduling"
      ],
      challenges: [
        "Building efficient content management workflows",
        "Implementing advanced search functionality",
        "Creating engaging user interaction features",
        "Optimizing for search engine visibility"
      ],
      solutions: [
        "Leveraged Laravel's Eloquent ORM for data management",
        "Integrated full-text search capabilities",
        "Built comprehensive commenting system",
        "Implemented meta tag optimization and sitemap generation"
      ],
      github: "https://github.com/gadishiimwe/newsportal",
      demo: "#",
      duration: "3 months",
      role: "Backend Developer"
    },
    "car-rental": {
      title: "Car Rental Platform – Mufasa Business Group",
      description: "A full-stack car rental platform built for Mufasa Business Group, featuring modern UI and comprehensive booking management.",
      longDescription: "This sophisticated car rental platform was specifically developed for Mufasa Business Group to streamline their car rental operations. The system includes advanced booking management, secure user authentication, integrated payment processing, and a modern, user-friendly interface that enhances the customer experience.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=300&fit=crop"
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Authentication", "Booking Logic"],
      features: [
        "Vehicle browsing and search",
        "Advanced booking system",
        "User authentication and profiles",
        "Payment processing integration",
        "Booking management dashboard",
        "Vehicle availability tracking",
        "Customer support features",
        "Mobile-responsive design"
      ],
      challenges: [
        "Implementing complex booking logic with availability checking",
        "Integrating secure payment processing",
        "Building responsive vehicle showcase",
        "Creating efficient admin management tools"
      ],
      solutions: [
        "Developed sophisticated booking algorithm with conflict resolution",
        "Integrated Stripe payment gateway with webhook handling",
        "Used CSS Grid and Flexbox for responsive vehicle gallery",
        "Built comprehensive admin dashboard with real-time analytics"
      ],
      github: "https://github.com/gadishiimwe/carrental",
      demo: "#",
      duration: "6 months",
      role: "Full-Stack Developer"
    },
    "church-website": {
      title: "UNITED CHRISTIAN CHURCH Website",
      description: "A modern church website featuring comprehensive community features and spiritual resources.",
      longDescription: "This modern church website was designed to serve the UNITED CHRISTIAN CHURCH community with a complete digital platform. It includes an event calendar, sermon video streaming capabilities, member dashboard, and integrated donation system, all built with responsive design principles.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&h=300&fit=crop"
      ],
      technologies: ["ReactJS", "NodeJS", "MySQL", "Custom Theme", "Video Streaming", "Payment Integration"],
      features: [
        "Event calendar and scheduling",
        "Sermon video streaming",
        "Member dashboard and profiles",
        "Integrated donation system",
        "Community announcements",
        "Prayer request management",
        "Responsive design",
        "Content management system"
      ],
      challenges: [
        "Implementing video streaming for sermons",
        "Creating engaging community features",
        "Building secure donation processing",
        "Designing spiritual and modern interface"
      ],
      solutions: [
        "Integrated video.js for cross-platform streaming",
        "Built interactive community bulletin board",
        "Implemented PayPal and Stripe donation gateways",
        "Created custom theme with spiritual aesthetics"
      ],
      github: "#",
      demo: "#",
      duration: "4 months",
      role: "Full-Stack Developer"
    },
    "echox": {
      title: "EchoX – The Super App",
      description: "An all-in-one digital platform combining multiple services in a single comprehensive application.",
      longDescription: "EchoX represents the future of digital platforms as a comprehensive super app that combines social interaction, news feeds, payment systems, and multiple other services in a single, seamless application. Built with modern technologies and featuring an intuitive UI, EchoX serves as a one-stop solution for users' digital needs.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Payment Integration", "Real-time Features"],
      features: [
        "Social interaction platform",
        "Real-time news feeds",
        "Integrated payment system",
        "Multi-service integration",
        "User-friendly interface",
        "Cloud-based architecture",
        "Mobile-responsive design",
        "Advanced security features"
      ],
      challenges: [
        "Architecting scalable microservices",
        "Implementing real-time communication",
        "Managing complex state across multiple services",
        "Ensuring consistent user experience"
      ],
      solutions: [
        "Built modular architecture with service-oriented design",
        "Used Socket.io for real-time features",
        "Implemented Redux with middleware for state management",
        "Created unified design system with component library"
      ],
      github: "#",
      demo: "#",
      duration: "8 months",
      role: "Lead Full-Stack Developer"
    },
    "investment-platform": {
      title: "Investment Solutions Platform",
      description: "A comprehensive financial platform for investment tracking and portfolio management.",
      longDescription: "This sophisticated investment platform provides users with comprehensive tools for investment tracking, portfolio management, and market analysis. Featuring real-time data integration and secure transaction processing, it serves as a complete solution for modern investment management needs.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=300&fit=crop"
      ],
      technologies: ["React", "Express", "MySQL", "Financial APIs", "Charts", "Security"],
      features: [
        "Investment portfolio tracking",
        "Real-time market analysis",
        "Secure transaction processing",
        "Interactive charts and graphs",
        "Financial data integration",
        "Risk assessment tools",
        "Performance analytics",
        "Mobile-responsive dashboard"
      ],
      challenges: [
        "Integrating real-time financial data APIs",
        "Building complex charting and analytics",
        "Ensuring financial data security",
        "Creating intuitive investment tracking"
      ],
      solutions: [
        "Integrated multiple financial data providers with fallbacks",
        "Used D3.js and Recharts for advanced visualizations",
        "Implemented end-to-end encryption for sensitive data",
        "Built progressive web app for mobile accessibility"
      ],
      github: "#",
      demo: "#",
      duration: "7 months",
      role: "Senior Full-Stack Developer"
    }
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/gadishiimwe", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/gad-ishimwe/", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>

          {/* Hero Section */}
          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Project Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Project Overview */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">Project Duration</h3>
                  <p className="text-blue-400 text-lg font-semibold">{project.duration}</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">My Role</h3>
                  <p className="text-purple-400 text-lg font-semibold">{project.role}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors"
                    >
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-red-500/10 rounded-lg border border-red-500/20"
                      >
                        <span className="text-red-400 mr-3">⚡</span>
                        <span className="text-gray-300">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Solutions</h2>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                      >
                        <span className="text-green-400 mr-3">✓</span>
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github size={20} className="text-white mr-3" />
                    <span className="text-white">View Code</span>
                  </a>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Interested in Similar Work?</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  I'd love to discuss your project and how I can help bring your ideas to life.
                </p>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-slate-700">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* About Section */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">GAD ISHIMWE</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Full-Stack Developer with 3+ years of experience creating innovative web solutions. 
                  Passionate about building scalable applications that solve real-world problems.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <div className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => navigate('/#about')}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    About Me
                  </button>
                  <button 
                    onClick={() => navigate('/#projects')}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    All Projects
                  </button>
                  <button 
                    onClick={() => navigate('/#skills')}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-3 text-blue-400" />
                    <a href="tel:+250781166081" className="hover:text-blue-400 transition-colors duration-200">
                      +250 781 166 081
                    </a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-3 text-blue-400" />
                    <a href="mailto:gadyishimwe1@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                      gadyishimwe1@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                    <span>Kigali, Rwanda</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 GAD ISHIMWE. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Let's Work Together
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetails;
