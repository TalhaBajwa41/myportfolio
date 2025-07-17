"use client";
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowUp,
  Heart,
  Send,
  Star,
  Zap
} from 'lucide-react';

const AnimatedFooter = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('animated-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSubmit = () => {
    // Add your newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consulting', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', color: 'hover:text-gray-400' }
  ];

  return (
    <footer 
      id="animated-footer"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="h-1 w-1 text-purple-400" />
          </div>
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <div 
        className="absolute pointer-events-none opacity-20"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transition: 'all 0.1s ease'
        }}
      >
        <div className="h-48 w-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Wave Animation */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" viewBox="0 0 1440 320">
            <path 
              fill="currentColor" 
              className="text-purple-600 opacity-30 animate-pulse"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 animate-pulse">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NextUI
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating digital experiences that inspire and engage. We build the future, one pixel at a time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group">
                  <MapPin className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  <span>123 Tech Street, Digital City, DC 12345</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group">
                  <Phone className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group">
                  <Mail className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                  <span>hello@nextui.com</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Stay Connected</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for updates and exclusive content.
              </p>
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-white/10 backdrop-blur-sm rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Links */}
          <div className={`border-t border-white/20 pt-8 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Resources</h4>
            <div className="flex flex-wrap gap-6">
              {footerLinks.resources.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-white/20 pt-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-gray-300">Made with </span>
                <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                <span className="text-gray-300"> by NextUI Team</span>
              </div>
              <div className="text-gray-300">
                © {new Date().getFullYear()} NextUI. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default AnimatedFooter;