"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const AnimatedPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'Next.js', level: 90, color: '#000000' },
    { name: 'TypeScript', level: 85, color: '#3178C6' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'Python', level: 82, color: '#3776AB' },
    { name: 'GraphQL', level: 78, color: '#E10098' }
  ];

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization with machine learning insights",
      tech: ["React", "D3.js", "Python", "TensorFlow"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack marketplace with advanced filtering and payments",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Social Media Analytics",
      description: "Cross-platform analytics with sentiment analysis",
      tech: ["Vue.js", "Node.js", "MongoDB", "Docker"],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10">
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-pulse">
              Alex Chen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer crafting digital experiences that push the boundaries of web technology
            </p>
            
            <div className="flex gap-6 justify-center mb-12">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="group relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </div>
              ))}
            </div>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="flex items-center gap-2">
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${i * 0.1}s`
                    }}
                  />
                </div>
                
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}% proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <Code className="w-8 h-8 text-white/80 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            What I Bring to the Table
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Clean Code", desc: "Maintainable, scalable solutions" },
              { icon: Palette, title: "UI/UX Focus", desc: "Beautiful, intuitive interfaces" },
              { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency" }
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="relative mb-6">
                  <feature.icon className="w-16 h-16 mx-auto text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and create digital experiences that make a difference
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              Start a Project
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300 hover:scale-105">
              View Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedPortfolio;