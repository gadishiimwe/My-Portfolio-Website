
import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "Sass", level: 80 },
        { name: "WordPress", level: 82 }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "Java", level: 78 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    database: {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "mysql2 (Node.js)", level: 88 },
        { name: "CRUD Operations", level: 95 },
        { name: "Git & GitHub", level: 92 },
        { name: "LocalWP", level: 85 },
        { name: "Vercel", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    },
    emerging: {
      title: "Emerging Tech",
      skills: [
        { name: "Blockchain", level: 65 },
        { name: "Machine Learning", level: 70 },
        { name: "AI Integration", level: 75 },
        { name: "DevOps", level: 60 },
        { name: "Authentication Systems", level: 85 },
        { name: "Form Validation", level: 90 }
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
