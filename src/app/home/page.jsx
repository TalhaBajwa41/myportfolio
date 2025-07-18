'use client';
import { useState, useEffect, useRef } from "react";

export default function ModernHomepage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const observerRef = useRef();
  const statsRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const counters = [
            { key: 'projects', target: 150, suffix: '+' },
            { key: 'clients', target: 500, suffix: '+' },
            { key: 'years', target: 5, suffix: '+' },
            { key: 'satisfaction', target: 99, suffix: '%' }
          ];

          counters.forEach(({ key, target }) => {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Performance First",
      description: "Lightning-fast websites that load instantly and provide exceptional user experiences across all devices.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Cutting-edge designs that capture attention and convert visitors into customers with stunning visuals.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Perfectly optimized for all screen sizes, ensuring your site looks amazing on every device.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "🔧",
      title: "Custom Solutions",
      description: "Tailored development solutions that meet your specific business needs and growth objectives.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "⚡",
      title: "Fast Development",
      description: "Rapid prototyping and development cycles to get your project to market quickly and efficiently.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability to protect your business and customer data.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "MySite transformed our online presence completely. The team's expertise and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthCorp",
      content: "Working with MySite was a game-changer. Our conversion rates increased by 300% after the new website launch.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, InnovateLab",
      content: "The level of creativity and technical skill is outstanding. They delivered exactly what we envisioned and more.",
      rating: 5
    }
  ];

  const recentWork = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Corporate Website",
      category: "Design & Development",
      description: "Professional corporate presence with CMS integration",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Mobile App",
      category: "App Development",
      description: "Cross-platform mobile application with seamless UX",
      color: "from-orange-600 to-red-600"
    }
  ];

  const registerElement = (element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-10 transition-transform duration-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px) translateX(${mousePosition.x * 20}px)`
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                Transform
              </span>
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent animate-pulse">
                Your Digital
              </span>
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
                Presence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-pulse" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              We create stunning, high-performance websites and applications that 
              drive results for your business. Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-pulse" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                  <span className="group-hover:rotate-45 transition-transform">↗</span>
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { key: 'projects', value: stats.projects, label: 'Projects Completed', suffix: '+' },
              { key: 'clients', value: stats.clients, label: 'Happy Clients', suffix: '+' },
              { key: 'years', value: stats.years, label: 'Years Experience', suffix: '+' },
              { key: 'satisfaction', value: stats.satisfaction, label: 'Client Satisfaction', suffix: '%' }
            ].map((stat, index) => (
              <div 
                key={stat.key}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features" ref={registerElement}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose MySite?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative excellence to deliver 
              exceptional digital solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transform: isVisible['features'] ? 'translateY(0)' : 'translateY(2rem)'
                }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 bg-white" id="work" ref={registerElement}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our latest projects that showcase our expertise 
              in creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWork.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible['work'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transform: isVisible['work'] ? 'translateY(0)' : 'translateY(2rem)'
                }}
              >
                <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl font-bold overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">{project.category}</div>
                    <div className="text-lg opacity-75">{project.title}</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="text-sm text-indigo-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50" id="testimonials" ref={registerElement}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              <span className="flex items-center justify-center space-x-2">
                <span>Get Free Quote</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <a href="/contact">
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center justify-center space-x-2">
                <span>Schedule Call</span>
                <span className="group-hover:rotate-12 transition-transform">📞</span>
              </span>
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}