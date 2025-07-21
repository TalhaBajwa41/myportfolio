'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Users, Cookie, FileText, ChevronDown, ChevronRight, Mail, Phone, MapPin, Calendar, Check, AlertTriangle, Info, ExternalLink } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setReadingProgress(progress);

      // Update active section based on scroll position
      const sections = ['overview', 'data-collection', 'data-usage', 'data-sharing', 'cookies', 'security', 'rights', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacySections = [
    {
      id: 'overview',
      title: 'Privacy Overview',
      icon: Eye,
      color: 'bg-blue-500',
      content: `We are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and safeguard your data when you use our services.`
    },
    {
      id: 'data-collection',
      title: 'Data We Collect',
      icon: FileText,
      color: 'bg-green-500',
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, and payment information.`
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: Users,
      color: 'bg-purple-500',
      content: `We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.`
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: Shield,
      color: 'bg-orange-500',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in specific circumstances outlined in this policy, such as with your consent or to comply with legal obligations.`
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Cookie,
      color: 'bg-red-500',
      content: `We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings and opt-out of certain tracking.`
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      color: 'bg-indigo-500',
      content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
    }
  ];

  const userRights = [
    'Access your personal data',
    'Correct inaccurate data',
    'Delete your data',
    'Restrict data processing',
    'Data portability',
    'Object to processing'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How long do you keep my personal data?',
      answer: 'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, typically 3-7 years depending on the type of data and legal requirements.'
    },
    {
      id: 2,
      question: 'Do you share my data with third parties?',
      answer: 'We do not sell your data. We only share data with trusted partners who help us provide our services, and only when necessary and with appropriate safeguards.'
    },
    {
      id: 3,
      question: 'How can I delete my account and data?',
      answer: 'You can delete your account and associated data by contacting our support team or using the account deletion feature in your settings. Some data may be retained for legal compliance.'
    },
    {
      id: 4,
      question: 'What happens if there is a data breach?',
      answer: 'In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours, providing clear information about what happened and steps being taken.'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          <Shield className="absolute inset-0 w-8 h-8 text-blue-400 m-auto animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-indigo-400/10 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-400/10 rounded-full animate-float delay-1500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-gray-300 text-sm">Last updated: January 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>Effective January 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Your Privacy Matters
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up delay-200 max-w-3xl mx-auto">
            We believe in transparency and your right to privacy. This policy explains how we protect 
            and handle your personal information with the utmost care and responsibility.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-in-left">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Navigation</h3>
              <nav className="space-y-2">
                {privacySections.map((section) => {
                  const IconComponent = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
              
              {/* Privacy Score */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-green-300">Privacy Score: A+</span>
                </div>
                <p className="text-xs text-gray-300">
                  Your data is protected with industry-leading security measures.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Privacy Sections */}
            <div className="space-y-8 mb-12">
              {privacySections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-slide-in-right hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center animate-glow`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                        
                        {section.id === 'data-collection' && (
                          <div className="mt-6 grid md:grid-cols-2 gap-4">
                            {['Personal Info', 'Usage Data', 'Device Info', 'Location Data'].map((type, i) => (
                              <div 
                                key={type}
                                className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg animate-fade-in"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-200">{type}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.id === 'security' && (
                          <div className="mt-6 flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-green-400">
                              <Lock className="w-5 h-5" />
                              <span>End-to-End Encryption</span>
                            </div>
                            <div className="flex items-center space-x-2 text-blue-400">
                              <Shield className="w-5 h-5" />
                              <span>Regular Security Audits</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Your Rights Section */}
            <div id="rights" className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-400/20 mb-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {userRights.map((right, index) => (
                  <div 
                    key={right}
                    className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 animate-slide-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Info className="w-6 h-6 text-blue-400" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isExpanded = expandedFAQ === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="border border-white/10 rounded-lg overflow-hidden animate-slide-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <button
                        onClick={() => setExpandedFAQ(isExpanded ? null : faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
                        <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Our Privacy Team</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300 text-sm">privacy@company.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Office</p>
                    <p className="text-gray-300 text-sm">123 Privacy St, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 z-50 animate-slide-in-bottom">
          <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <Cookie className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">We use cookies to enhance your experience</p>
                <p className="text-gray-300 text-sm">
                  By continuing to use our site, you accept our use of cookies as described in our privacy policy.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-gray-300 hover:text-white text-sm underline flex items-center space-x-1">
                <span>Learn More</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                onClick={() => setCookieConsent(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

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
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.4s ease-out forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-1500 {
          animation-delay: 1500ms;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;