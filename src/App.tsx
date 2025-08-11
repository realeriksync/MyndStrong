import React, { useState } from 'react';
import { Brain, Heart, Users, BookOpen, Phone, MessageCircle, User, ArrowRight, ExternalLink, Shield, Lightbulb, Target, Calendar } from 'lucide-react';
import Crisis from './Crisis';
import Resources from './Resources';
import Community from './Community';
import Profile from './Profile';

type View = 'home' | 'crisis' | 'resources' | 'community' | 'profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'crisis') {
    return <Crisis onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'resources') {
    return <Resources onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'community') {
    return <Community onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'profile') {
    return <Profile onBack={() => setCurrentView('home')} />;
  }

  const quickActions = [
    {
      title: "Crisis Support",
      description: "Immediate help and emergency resources",
      icon: <Phone className="w-8 h-8" />,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      action: () => setCurrentView('crisis')
    },
    {
      title: "Find Resources",
      description: "Mental health tools and information",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      action: () => setCurrentView('resources')
    },
    {
      title: "Join Community",
      description: "Connect with supportive peers",
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      action: () => setCurrentView('community')
    },
    {
      title: "My Profile",
      description: "Manage your account and preferences",
      icon: <User className="w-8 h-8" />,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      action: () => setCurrentView('profile')
    }
  ];

  const mentalHealthTools = [
    {
      title: "Mood Tracker",
      description: "Track your daily emotions and identify patterns",
      link: "https://www.moodpath.com",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Meditation Guide",
      description: "Free guided meditations for stress relief",
      link: "https://www.headspace.com/meditation",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Breathing Exercises",
      description: "Simple techniques to manage anxiety",
      link: "https://www.calm.com/breathe",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Sleep Hygiene",
      description: "Tips for better sleep and mental health",
      link: "https://www.sleepfoundation.org/how-sleep-works/sleep-hygiene",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const articles = [
    {
      title: "Understanding Anxiety",
      description: "Learn about anxiety symptoms and management",
      link: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
      readTime: "5 min read"
    },
    {
      title: "Depression: Signs and Support",
      description: "Recognizing depression and finding help",
      link: "https://www.nimh.nih.gov/health/topics/depression",
      readTime: "7 min read"
    },
    {
      title: "Building Resilience",
      description: "Strategies for mental strength and recovery",
      link: "https://www.apa.org/topics/resilience",
      readTime: "6 min read"
    },
    {
      title: "Stress Management",
      description: "Effective ways to cope with daily stress",
      link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/basics/stress-basics/hlv-20049495",
      readTime: "4 min read"
    }
  ];

  const strategies = [
    {
      title: "5-4-3-2-1 Grounding",
      description: "Use your senses to stay present during anxiety",
      technique: "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste"
    },
    {
      title: "Box Breathing",
      description: "Calm your nervous system with controlled breathing",
      technique: "Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat."
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Release physical tension throughout your body",
      technique: "Tense and release each muscle group, starting from your toes"
    },
    {
      title: "Mindful Observation",
      description: "Focus your attention to reduce racing thoughts",
      technique: "Choose an object and observe it closely for 2-3 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">MyndStrong</h1>
                <p className="text-sm text-gray-600">Your Mental Health Companion</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button className="text-gray-600 hover:text-indigo-600 transition-colors">Home</button>
              <button 
                onClick={() => setCurrentView('resources')}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Resources
              </button>
              <button 
                onClick={() => setCurrentView('community')}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Community
              </button>
              <button 
                onClick={() => setCurrentView('profile')}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Profile
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            You're Not Alone in This Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access mental health resources, connect with supportive communities, and take control of your wellbeing with tools designed to help you thrive.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-yellow-800">
                <strong>Crisis Support:</strong> If you're in immediate danger, call 988 (Suicide & Crisis Lifeline) or 911
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`${action.color} ${action.hoverColor} text-white p-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 group`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
                <ArrowRight className="w-5 h-5 mt-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Mental Health Tools */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Mental Health Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalHealthTools.map((tool, index) => (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {tool.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {tool.title}
                </h4>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Educational Articles */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Educational Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <span className="text-xs text-indigo-600 font-medium">{article.readTime}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Coping Strategies */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Coping Strategies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200"
              >
                <h4 className="font-semibold text-gray-800 mb-2">{strategy.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{strategy.description}</p>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 italic">{strategy.technique}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Resources */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <Phone className="w-6 h-6 mr-2" />
            Emergency Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">Crisis Lifeline</h4>
              <p className="text-2xl font-bold text-red-600">988</p>
              <p className="text-sm text-gray-600">24/7 suicide prevention</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">Crisis Text Line</h4>
              <p className="text-lg font-bold text-red-600">Text HOME to 741741</p>
              <p className="text-sm text-gray-600">24/7 text support</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">Emergency</h4>
              <p className="text-2xl font-bold text-red-600">911</p>
              <p className="text-sm text-gray-600">Immediate danger</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}