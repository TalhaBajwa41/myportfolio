"use client";
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, MessageCircle, Book, Settings, Shield, CreditCard, Users, HelpCircle, Star, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 1,
      title: "Getting Started",
      icon: Book,
      color: "bg-blue-500",
      articles: [
        { id: 1, title: "How to create your first account", views: "2.1k", rating: 4.8 },
        { id: 2, title: "Setting up your profile", views: "1.8k", rating: 4.7 },
        { id: 3, title: "Understanding the dashboard", views: "3.2k", rating: 4.9 }
      ]
    },
    {
      id: 2,
      title: "Account & Settings",
      icon: Settings,
      color: "bg-green-500",
      articles: [
        { id: 4, title: "Managing your account settings", views: "1.5k", rating: 4.6 },
        { id: 5, title: "Changing your password", views: "2.3k", rating: 4.8 },
        { id: 6, title: "Two-factor authentication setup", views: "1.1k", rating: 4.9 }
      ]
    },
    {
      id: 3,
      title: "Privacy & Security",
      icon: Shield,
      color: "bg-red-500",
      articles: [
        { id: 7, title: "Understanding our privacy policy", views: "890", rating: 4.5 },
        { id: 8, title: "Data protection and GDPR", views: "1.2k", rating: 4.7 },
        { id: 9, title: "Reporting security issues", views: "654", rating: 4.8 }
      ]
    },
    {
      id: 4,
      title: "Billing & Payments",
      icon: CreditCard,
      color: "bg-purple-500",
      articles: [
        { id: 10, title: "Payment methods and billing", views: "2.8k", rating: 4.6 },
        { id: 11, title: "Subscription management", views: "2.1k", rating: 4.7 },
        { id: 12, title: "Refunds and cancellations", views: "1.7k", rating: 4.5 }
      ]
    }
  ];

  const popularArticles = [
    { id: 1, title: "How to create your first account", category: "Getting Started", views: "2.1k" },
    { id: 10, title: "Payment methods and billing", category: "Billing", views: "2.8k" },
    { id: 3, title: "Understanding the dashboard", category: "Getting Started", views: "3.2k" },
    { id: 5, title: "Changing your password", category: "Account", views: "2.3k" }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0 || searchQuery === '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Help Center
              </h1>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            How can we help you?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
            Search our knowledge base or browse categories below
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto animate-fade-in-up delay-200">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for articles, guides, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-200 hover:shadow-xl"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-float delay-500"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Browse by Category</h3>
              
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                const isExpanded = expandedCategory === category.id;
                
                return (
                  <div
                    key={category.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center transform transition-transform duration-200 ${isExpanded ? 'scale-110' : ''}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{category.title}</h4>
                          <p className="text-gray-500">{category.articles.length} articles</p>
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-6 pb-6 space-y-3">
                        {category.articles.map((article, articleIndex) => (
                          <div
                            key={article.id}
                            className={`p-4 bg-gray-50 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200 transform hover:translate-x-2 animate-fade-in ${isExpanded ? 'animate-slide-in-right' : ''}`}
                            style={{ animationDelay: `${articleIndex * 50}ms` }}
                            onClick={() => setSelectedArticle(article)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-800 mb-1">{article.title}</h5>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>{article.views} views</span>
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{article.rating}</span>
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-right">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Popular Articles</span>
              </h3>
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-all duration-200 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h4 className="font-medium text-gray-800 text-sm mb-1">{article.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.category}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-right delay-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 transform hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Live Chat</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200 transform hover:scale-105">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Community Forum</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-200 transform hover:scale-105">
                  <Book className="w-5 h-5" />
                  <span className="font-medium">Video Tutorials</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{selectedArticle.title}</h2>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>{selectedArticle.views} views</span>
                {selectedArticle.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{selectedArticle.rating}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  This is where the detailed article content would appear. You can include step-by-step instructions, 
                  images, code examples, and other helpful information to guide users through the process.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The content would be dynamically loaded based on the selected article, providing comprehensive 
                  help and guidance for users seeking assistance with specific topics.
                </p>
              </div>
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
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default HelpCenter;