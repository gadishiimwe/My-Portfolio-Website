
import { Code2, Database, Globe, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Full-Stack Development",
      description: "Building complete web applications from React frontends to Express/Laravel backends"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Database & CRUD",
      description: "Expert in MySQL with full CRUD operations and secure data management"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Digital Solutions",
      description: "Creating real-world applications including car rentals, school systems, and news portals"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Emerging Technologies",
      description: "Exploring AI integration, blockchain, and machine learning for future-ready solutions"
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo and Text */}
          <div className="space-y-8">
            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/288eda16-60e8-41e0-9f00-37d178198211.png"
                  alt="GAD ISHIMWE - Full Stack Developer"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-slate-700 group-hover:border-blue-500/50 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <strong className="text-blue-400">Gad Ishimwe</strong>, a full-stack developer from Rwanda with <strong className="text-blue-400">3 years of experience</strong> crafting digital solutions that matter. As the founder of <strong className="text-blue-400">ViraX</strong>, I focus on building responsive, user-friendly web applications that solve real problems and bring ideas to life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Over the past 3 years, I've specialized in the MERN stack (MongoDB, Express, React, Node.js) and MySQL, with extensive experience in tools like WordPress, Firebase, Tailwind CSS, and emerging technologies like AI integration and blockchain. From backend APIs to front-end design, I enjoy building systems that are both powerful and easy to use.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Throughout my 3-year journey, I've successfully delivered projects like car rental platforms, school and church websites, investment systems, and modern news portals. Each line of code I write is aimed at delivering impact, performance, and real-world value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-purple-400">Always learning, always building</strong> — I'm committed to pushing boundaries and growing as a developer every day.
              </p>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
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
