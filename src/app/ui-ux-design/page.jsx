'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Users, Globe, Star, ArrowUp } from 'lucide-react';

const AnimatedPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance", color: "from-yellow-400 to-orange-500" },
    { icon: Users, title: "User Focused", description: "Designed with users at the center", color: "from-blue-400 to-purple-500" },
    { icon: Globe, title: "Global Reach", description: "Built for worldwide accessibility", color: "from-green-400 to-teal-500" },
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Product Designer", text: "Revolutionary approach to user experience" },
    { name: "Alex Rodriguez", role: "Frontend Developer", text: "The animations are incredibly smooth" },
    { name: "Maya Patel", role: "UX Researcher", text: "Perfect blend of form and function" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
              Design
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mt-4">
              That Moves You
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Experience the future of user interface design with fluid animations and intuitive interactions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform">
              <span className="flex items-center gap-2">
                Get Started
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float delay-1000">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-20 animate-float delay-2000">
          <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 transform cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Interactive Elements
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative h-48 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/20 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/10 hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star size={20} className="text-white" />
                    </div>
                    <p className="font-semibold">Card {item}</p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What People Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                
                {/* Rating Stars */}
                <div className="flex mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/20 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform">
              <span className="flex items-center gap-2">
                Launch Your Project
                <ArrowUp className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© 2024 Animated Design Co. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedPage;