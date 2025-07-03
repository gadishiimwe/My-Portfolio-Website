import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Young & Affordable Full-Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RealOne_merged.pdf';
    link.download = 'GAD_ISHIMWE_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const requestResume = () => {
    window.location.href = 
      "mailto:gadyishimwe1@gmail.com?subject=Requesting%20Your%20Resume&body=Hi%20Gad,%20I%20would%20like%20to%20request%20your%20resume.%20Please%20send%20it%20when%20you%20have%20a%20moment.";
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
      </div>

      <div className="z-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-center animate-fade-in">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                GAD ISHIMWE
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 h-12">
              <span className="border-r-2 border-blue-400 pr-1">{displayText}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a young developer passionate about building modern digital experiences that blend beautiful design with powerful functionality — all at a budget-friendly cost. I create scalable solutions that make a real impact without breaking the bank.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/gadishiimwe" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                <Github size={24} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/gad-ishimwe/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                <Linkedin size={24} className="text-white" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore My Work
              </button>
              <button
                onClick={requestResume}
                className="flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Request Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-blue-400" />
      </button>
    </section>
  );
};
