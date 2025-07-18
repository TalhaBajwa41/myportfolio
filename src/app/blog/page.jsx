"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, User, Tag, Heart, MessageCircle, Share2, ArrowRight } from 'lucide-react';

const AnimatedBlogPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Beyond React",
      excerpt: "Exploring emerging technologies that will shape the next decade of web development...",
      date: "July 15, 2025",
      readTime: "8 min read",
      tags: ["Technology", "Web Dev", "Future"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Mastering CSS Animations: A Complete Guide",
      excerpt: "Learn how to create stunning animations that enhance user experience without compromising performance...",
      date: "July 12, 2025",
      readTime: "12 min read",
      tags: ["CSS", "Animation", "Design"],
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "AI in Design: Tools That Transform Creativity",
      excerpt: "Discover how artificial intelligence is revolutionizing the design process and what it means for creators...",
      date: "July 8, 2025",
      readTime: "6 min read",
      tags: ["AI", "Design", "Innovation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    }
  ];

  const featuredPost = {
    title: "Building Immersive Web Experiences with Three.js",
    excerpt: "Dive deep into 3D web development and learn how to create captivating interactive experiences that blur the line between web and reality. From basic geometries to complex particle systems, we'll explore the endless possibilities of modern web graphics.",
    content: `
      In the rapidly evolving landscape of web development, creating immersive experiences has become more accessible than ever. Three.js, a powerful JavaScript library, opens up a world of possibilities for developers looking to incorporate 3D graphics into their web applications.

      ## Getting Started with 3D Graphics

      The journey into 3D web development begins with understanding the fundamental concepts of computer graphics. Unlike traditional 2D interfaces, 3D environments require us to think in terms of scenes, cameras, and lighting. Three.js abstracts much of the complexity while still providing the flexibility to create stunning visual experiences.

      ## Performance Considerations

      When working with 3D graphics on the web, performance is paramount. Modern browsers are incredibly capable, but we must still be mindful of polygon counts, texture sizes, and shader complexity. The key is finding the right balance between visual fidelity and smooth performance across different devices.

      ## The Future of Web Graphics

      As WebGPU becomes more widely adopted and browsers continue to evolve, we're entering an exciting era where the line between native applications and web experiences continues to blur. The democratization of 3D development tools means that creating immersive experiences is no longer limited to specialized graphics programmers.

      The web is becoming a canvas for unprecedented creativity, and developers who embrace these new technologies will be at the forefront of the next digital revolution.
    `,
    author: "Alex Chen",
    date: "July 19, 2025",
    readTime: "15 min read",
    tags: ["Three.js", "3D Graphics", "WebGL", "Performance"],
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&h=600&fit=crop"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

     

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of
              </span>
              <br />
              <span className="text-white">Development</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Exploring cutting-edge technologies, design patterns, and the innovations that will shape tomorrow's digital landscape.
            </p>
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Start Reading
                <ArrowRight className="inline ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-80 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Featured</span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{featuredPost.author}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handleLike}
                      className={`flex items-center space-x-2 transition-all duration-300 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    >
                      <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{likeCount}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <MessageCircle className="w-5 h-5" />
                      <span>24</span>
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`group bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default AnimatedBlogPage;