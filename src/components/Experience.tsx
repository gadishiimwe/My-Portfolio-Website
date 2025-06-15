
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on multiple successful projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Digital Solutions Ltd.",
      location: "Kigali, Rwanda",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality user experiences.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Reduced bug reports by 50% through comprehensive testing",
        "Implemented automated deployment processes"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Kigali, Rwanda",
      period: "2019 - 2020",
      description: "Focused on creating engaging user interfaces and improving user experience across various web applications. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      achievements: [
        "Improved user engagement by 35% through UI/UX enhancements",
        "Developed reusable component library used across 5 projects",
        "Mentored 2 junior developers in frontend best practices"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      location: "Kigali, Rwanda",
      period: "2018 - 2019",
      description: "Started my professional journey building websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Successfully delivered 15+ client websites",
        "Learned and applied modern JavaScript frameworks",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey through the world of software development
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
