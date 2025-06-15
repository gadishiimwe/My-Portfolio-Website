
import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript", level: 95 }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 92 },
        { name: "Django", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    },
    database: {
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "Supabase", level: 87 },
        { name: "Firebase", level: 80 }
      ]
    },
    tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 90 },
        { name: "Linux", level: 88 },
        { name: "CI/CD", level: 82 }
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
            A comprehensive toolkit for building modern, scalable applications
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
