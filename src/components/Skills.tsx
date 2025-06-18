import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 98 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Bootstrap", level: 92 },
        { name: "Sass", level: 91 },
        { name: "WordPress", level: 92 }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 94 },
        { name: "Express.js", level: 96 },
        { name: "PHP", level: 93 },
        { name: "Laravel", level: 92 },
        { name: "Python", level: 91 },
        { name: "Django", level: 90 },
        { name: "Java", level: 91 },
        { name: "RESTful APIs", level: 96 }
      ]
    },
    database: {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 96 },
        { name: "mysql2 (Node.js)", level: 94 },
        { name: "CRUD Operations", level: 98 },
        { name: "Git & GitHub", level: 97 },
        { name: "LocalWP", level: 92 },
        { name: "Vercel", level: 91 },
        { name: "VS Code", level: 98 }
      ]
    },
    emerging: {
      title: "Emerging Tech",
      skills: [
        { name: "Blockchain", level: 91 },
        { name: "Machine Learning", level: 93 },
        { name: "AI Integration", level: 95 },
        { name: "DevOps", level: 90 },
        { name: "Authentication Systems", level: 96 },
        { name: "Form Validation", level: 97 }
      ]
    },
    advanced: {
      title: "Advanced Skills",
      skills: [
        { name: "Automated Bug Detection", level: 96 },
        { name: "Code Review Tools", level: 94 },
        { name: "Voice Search Integration", level: 93 },
        { name: "Voice Command Features", level: 92 },
        { name: "SEO Analysis", level: 97 },
        { name: "SEO Optimization", level: 96 },
        { name: "Performance Optimization", level: 94 },
        { name: "Security Auditing", level: 93 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Full-stack expertise from intuitive frontends to secure backends and intelligent systems
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-slate-800/50 rounded-lg backdrop-blur-sm">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
