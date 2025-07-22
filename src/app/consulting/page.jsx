'use client';
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  Lightbulb,
  Shield,
  Clock,
  Star,
  ChevronDown,
  Play
} from 'lucide-react';

const ConsultingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Transform your business with data-driven strategic planning and market analysis",
      details: "Our strategic consulting helps you identify growth opportunities, optimize operations, and stay ahead of market trends.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Build high-performing teams and optimize your organizational structure",
      details: "We help create efficient workflows, improve team dynamics, and develop leadership capabilities across your organization.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions",
      details: "From automation to AI implementation, we guide your digital transformation journey with proven methodologies.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Maximize efficiency and ROI across all business operations",
      details: "Our performance experts identify bottlenecks, streamline processes, and implement KPIs that drive measurable results.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "$50M+", label: "Value Created", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TechCorp",
      company: "Fortune 500 Company",
      text: "The strategic guidance we received transformed our entire business model. Revenue increased by 40% in just 12 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Williams",
      role: "VP Operations",
      company: "Global Manufacturing",
      text: "Their organizational development expertise helped us streamline operations and improve team productivity by 60%.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "David Rodriguez",
      role: "CTO, FinanceFlow",
      company: "Fintech Startup",
      text: "The digital transformation roadmap they created was exactly what we needed to scale our platform globally.",
      rating: 5,
      avatar: "DR"
    }
  ];

  const faqs = [
    {
      question: "What makes your consulting approach different?",
      answer: "We combine deep industry expertise with data-driven methodologies and a collaborative approach that ensures sustainable results."
    },
    {
      question: "How long does a typical consulting engagement last?",
      answer: "Engagements typically range from 3-12 months depending on project scope, with ongoing support available as needed."
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: "Yes, we work with startups, mid-market companies, and Fortune 500 enterprises across various industries."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across technology, healthcare, finance, manufacturing, and professional services sectors."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-60 -right-60 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute -bottom-60 -left-60 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.1}deg)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Lightbulb className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold">ConsultPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Strategic
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Consulting
                </span>
                Excellence
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-300">
              Transform your business with expert guidance. We deliver measurable results through 
              strategic planning, operational excellence, and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
              <button className="px-8 py-4 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Case Studies
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 animate-fade-in-up delay-700">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={20} />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm text-gray-300">Industry Leader</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-lg border border-white/20 overflow-hidden">
                {!isVideoPlaying ? (
                  <div className="flex items-center justify-center h-full cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110 transform">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                  </div>
                ) : (
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                      <p className="text-gray-300">Data-driven strategies that deliver results</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <stat.icon size={28} className="text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 cursor-pointer ${
                  activeService === index ? 'ring-2 ring-blue-500/50 scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors">
                    {service.description}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeService === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-400 text-sm mb-4">
                      {service.details}
                    </p>
                  </div>
                  
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300">A proven methodology for success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyze", description: "Deep dive into your business challenges" },
              { step: "02", title: "Strategize", description: "Develop customized solutions" },
              { step: "03", title: "Implement", description: "Execute with precision and care" },
              { step: "04", title: "Optimize", description: "Continuous improvement and support" }
            ].map((phase, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold group-hover:rotate-12 transition-transform duration-300">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-300">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 text-lg font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <div className="absolute top-6 right-6 text-6xl text-blue-500/10 font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/20"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our strategic consulting can help you achieve your goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <Phone className="group-hover:rotate-12 transition-transform" size={20} />
                </span>
              </button>
              <button className="px-8 py-4 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Send Message
                  <Mail size={20} />
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center mt-8 space-x-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold">ConsultPro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Strategic consulting excellence for forward-thinking businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Business Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organizational Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Optimization</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@consultpro.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-gray-400">
            <p>© 2024 ConsultPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default ConsultingPage;