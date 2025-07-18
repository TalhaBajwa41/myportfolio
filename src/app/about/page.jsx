"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, Heart, Users, Award, Coffee } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const skills = [
    { icon: Code, name: "Full Stack Development", level: 95 },
    { icon: Palette, name: "UI/UX Design", level: 88 },
    { icon: Zap, name: "Performance Optimization", level: 92 },
    { icon: Heart, name: "User Experience", level: 90 }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl animate-float"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Alex Johnson
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Full Stack Developer & Creative Problem Solver
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
              Node.js
            </span>
            <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 transition-all duration-300">
              TypeScript
            </span>
          </div>
          
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* About Content */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="about-content"
            data-animate
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that matter. I specialize in building scalable web applications using modern technologies like React, Next.js, and Node.js.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                My journey in tech started with a curiosity about how things work, and it evolved into a deep passion for creating solutions that make people's lives easier and more enjoyable.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View My Work
                </button>
                <button className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300">
                  Download CV
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="skills"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{skill.name}</h3>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible['skills'] ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            id="journey"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['journey'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            
            <div className="space-y-8">
              {[
                { year: "2019", title: "Started Web Development", desc: "Began my journey with HTML, CSS, and JavaScript" },
                { year: "2021", title: "First Full-Stack Role", desc: "Joined a startup as a junior full-stack developer" },
                { year: "2023", title: "Senior Developer", desc: "Promoted to senior role, leading a team of 5 developers" },
                { year: "2024", title: "Freelance Success", desc: "Launched my own consultancy, working with 50+ clients" }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? I'm here to help you create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;