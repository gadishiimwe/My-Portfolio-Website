import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company: "EchoX",
      location: "Rwanda",
      period: "2023 - Present",
      description: "Founded and leading a tech company focused on building digital solutions for businesses across Rwanda. Managing multiple client projects and developing innovative web applications.",
      achievements: [
        "Successfully delivered 10+ full-stack web applications",
        "Built car rental, school management, and news portal systems",
        "Established strong client relationships across various industries",
        "Led development of AI-integrated projects and emerging tech solutions"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Rwanda",
      period: "2022 - Present",
      description: "Developing custom web applications for clients including church websites, business management systems, and investment platforms using modern tech stack.",
      achievements: [
        "Delivered UNITED CHRISTIAN CHURCH website with full CMS",
        "Built Mufasa Business Group car rental platform",
        "Developed ECHOX super app with multiple integrated services",
        "Implemented secure authentication and payment systems"
      ]
    },
    {
      title: "Web Developer",
      company: "Various Projects",
      location: "Rwanda",
      period: "2021 - 2022",
      description: "Started professional journey building WordPress sites and learning modern web development. Gained expertise in CRUD operations, database management, and API development.",
      achievements: [
        "Mastered WordPress development and custom themes",
        "Learned MySQL database design and optimization",
        "Built first full-stack applications with React and Node.js",
        "Completed multiple certification programs in programming"
      ]
    },
    {
      title: "Student & Learner",
      company: "Self-Directed Learning",
      location: "Rwanda",
      period: "2020 - 2021",
      description: "Intensive self-learning period focusing on programming fundamentals, web development, and obtaining industry certifications from various platforms.",
      achievements: [
        "Earned certificates from FreeCodeCamp, HubSpot, and UDACITY",
        "Completed Java, C++, and HTML certifications from US Chicago",
        "Built foundational knowledge in multiple programming languages",
        "Participated in EdHeroes Global Forum 2024"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From self-taught developer to tech entrepreneur - building solutions that matter
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-500/25"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center text-blue-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
