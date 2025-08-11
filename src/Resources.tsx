import React from 'react';
import { ArrowLeft, ExternalLink, Phone, MessageCircle, Heart, BookOpen, Users, Shield } from 'lucide-react';

interface ResourcesProps {
  onBack: () => void;
}

export default function Resources({ onBack }: ResourcesProps) {
  const emergencyResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support",
      link: "https://suicidepreventionlifeline.org"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 text-based crisis support",
      link: "https://crisistextline.org"
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "Treatment referral and information service",
      link: "https://www.samhsa.gov/find-help/national-helpline"
    }
  ];

  const mentalHealthResources = [
    {
      title: "Psychology Today",
      description: "Find therapists, psychiatrists, and support groups",
      link: "https://www.psychologytoday.com",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "NAMI (National Alliance on Mental Illness)",
      description: "Education, support, and advocacy",
      link: "https://www.nami.org",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Mental Health America",
      description: "Screening tools and resources",
      link: "https://www.mhanational.org",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Headspace",
      description: "Meditation and mindfulness app",
      link: "https://www.headspace.com",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const selfCareResources = [
    {
      title: "Mindfulness Exercises",
      description: "Free guided meditations and breathing exercises",
      link: "https://www.mindful.org/meditation/mindfulness-getting-started"
    },
    {
      title: "Mood Tracking Apps",
      description: "Track your mental health progress",
      link: "https://www.healthline.com/health/mental-health/top-mood-tracking-apps"
    },
    {
      title: "Sleep Hygiene Guide",
      description: "Tips for better sleep and mental health",
      link: "https://www.sleepfoundation.org/how-sleep-works/sleep-hygiene"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Mental Health Resources</h1>
          
          {/* Emergency Resources */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              Emergency Resources
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-medium">
                If you're in immediate danger or having thoughts of self-harm, please reach out for help immediately.
              </p>
            </div>
            <div className="grid gap-4">
              {emergencyResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{resource.name}</h3>
                      <p className="text-gray-600 mb-2">{resource.description}</p>
                      <p className="text-lg font-bold text-red-600">{resource.phone}</p>
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mental Health Resources */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Mental Health Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mentalHealthResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-3 mt-1">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Self-Care Resources */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Self-Care & Wellness</h2>
            <div className="grid gap-4">
              {selfCareResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow group flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}