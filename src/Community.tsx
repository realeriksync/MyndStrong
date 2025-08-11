import React from 'react';
import { ArrowLeft, Users, MessageCircle, Heart, ExternalLink, Globe, Shield } from 'lucide-react';

interface CommunityProps {
  onBack: () => void;
}

export default function Community({ onBack }: CommunityProps) {
  const supportGroups = [
    {
      name: "NAMI Support Groups",
      description: "Peer-led support groups for individuals and families",
      link: "https://www.nami.org/Support-Education/Support-Groups",
      type: "In-person & Online",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Depression and Bipolar Support Alliance",
      description: "Support groups for mood disorders",
      link: "https://www.dbsalliance.org/support/chapters-support-groups",
      type: "In-person & Online",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Anxiety and Depression Association",
      description: "Online support groups and resources",
      link: "https://adaa.org/finding-help/treatment/peer-to-peer-support",
      type: "Online",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  const onlineCommunities = [
    {
      name: "7 Cups",
      description: "Free emotional support and online therapy",
      link: "https://www.7cups.com",
      members: "40M+ users"
    },
    {
      name: "Mental Health America Community",
      description: "Online forums and peer support",
      link: "https://www.mhanational.org/online-support-communities",
      members: "Active community"
    },
    {
      name: "Reddit Mental Health Communities",
      description: "Various subreddits for mental health support",
      link: "https://www.reddit.com/r/mentalhealth",
      members: "1M+ members"
    },
    {
      name: "Mighty",
      description: "Health-focused social network",
      link: "https://themighty.com",
      members: "3M+ users"
    }
  ];

  const localResources = [
    {
      title: "Find Local Support Groups",
      description: "Search for in-person support groups in your area",
      link: "https://www.psychologytoday.com/us/groups",
      action: "Search Now"
    },
    {
      title: "Community Mental Health Centers",
      description: "Locate community mental health services",
      link: "https://findtreatment.samhsa.gov",
      action: "Find Centers"
    },
    {
      title: "Peer Support Programs",
      description: "Connect with trained peer supporters",
      link: "https://www.namiillinois.org/peer-support",
      action: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Community Support</h1>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
            <p className="text-purple-800">
              <strong>Remember:</strong> You're not alone in your mental health journey. 
              Connecting with others who understand can provide valuable support and encouragement.
            </p>
          </div>

          {/* Support Groups */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Support Groups
            </h2>
            <div className="grid gap-4">
              {supportGroups.map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className="text-purple-600 mr-4 mt-1">
                        {group.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">{group.name}</h3>
                        <p className="text-gray-600 mb-2">{group.description}</p>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {group.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Communities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              Online Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {onlineCommunities.map((community, index) => (
                <a
                  key={index}
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {community.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{community.description}</p>
                  <span className="text-xs text-blue-600 font-medium">{community.members}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Local Resources */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Local Resources
            </h2>
            <div className="grid gap-4">
              {localResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      {resource.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Notice */}
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Community Safety</h4>
                <p className="text-yellow-700 text-sm">
                  When participating in online communities, protect your privacy and be cautious about sharing personal information. 
                  If you encounter harmful content or behavior, report it to the platform moderators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}