
import { Code2, Database, Globe, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Frontend Excellence",
      description: "Crafting responsive, interactive user interfaces with modern frameworks"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Backend Mastery",
      description: "Building robust APIs and scalable server-side architectures"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Full-Stack Vision",
      description: "End-to-end development from concept to deployment"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance Focus",
      description: "Optimizing applications for speed, scalability, and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate fullstack developer with a love for creating digital solutions that make a real impact. 
              With expertise spanning both frontend and backend technologies, I bring ideas to life through clean, 
              efficient code and thoughtful user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development has taken me through various technologies and frameworks, 
              always with a focus on staying current with industry best practices and emerging trends. 
              I believe in writing code that not only works but is maintainable, scalable, and elegant.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm always excited about the next challenge 
              and the opportunity to learn something new.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
