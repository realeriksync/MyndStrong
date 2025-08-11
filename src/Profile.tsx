import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Shield, Heart, Bell } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
}

export default function Profile({ onBack }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
    emergencyContact: 'Sarah Johnson - (555) 987-6543',
    preferredTherapist: 'Dr. Emily Chen',
    notifications: {
      appointments: true,
      wellness: true,
      community: false
    }
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const mentalHealthResources = [
    {
      title: "Crisis Hotlines",
      description: "24/7 emergency mental health support",
      link: "https://suicidepreventionlifeline.org",
      icon: <Phone className="w-5 h-5" />
    },
    {
      title: "Find a Therapist",
      description: "Locate mental health professionals near you",
      link: "https://www.psychologytoday.com/us/therapists",
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Mental Health Screening",
      description: "Free, confidential mental health assessments",
      link: "https://screening.mhanational.org/screening-tools",
      icon: <Heart className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <User className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                        className="bg-white/20 border border-white/30 rounded px-3 py-1 text-white placeholder-white/70"
                      />
                    ) : (
                      profile.name
                    )}
                  </h1>
                  <p className="text-indigo-100">Member since {profile.joinDate}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                    >
                      <Save className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-gray-800">{profile.email}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-gray-800">{profile.phone}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-gray-800">{profile.location}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Member Since</p>
                    <p className="font-medium text-gray-800">{profile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-red-600 mr-2" />
                Emergency Contact
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.emergencyContact}
                    onChange={(e) => setEditedProfile({...editedProfile, emergencyContact: e.target.value})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Name - Phone Number"
                  />
                ) : (
                  <p className="font-medium text-red-800">{profile.emergencyContact}</p>
                )}
              </div>
            </div>

            {/* Healthcare Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Healthcare Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-600 mb-1">Preferred Therapist</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.preferredTherapist}
                    onChange={(e) => setEditedProfile({...editedProfile, preferredTherapist: e.target.value})}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                ) : (
                  <p className="font-medium text-blue-800">{profile.preferredTherapist}</p>
                )}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Bell className="w-6 h-6 text-purple-600 mr-2" />
                Notification Preferences
              </h2>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isEditing ? editedProfile.notifications.appointments : profile.notifications.appointments}
                    onChange={(e) => isEditing && setEditedProfile({
                      ...editedProfile,
                      notifications: {...editedProfile.notifications, appointments: e.target.checked}
                    })}
                    disabled={!isEditing}
                    className="mr-3 h-4 w-4 text-indigo-600"
                  />
                  <span className="text-gray-700">Appointment reminders</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isEditing ? editedProfile.notifications.wellness : profile.notifications.wellness}
                    onChange={(e) => isEditing && setEditedProfile({
                      ...editedProfile,
                      notifications: {...editedProfile.notifications, wellness: e.target.checked}
                    })}
                    disabled={!isEditing}
                    className="mr-3 h-4 w-4 text-indigo-600"
                  />
                  <span className="text-gray-700">Wellness tips and resources</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isEditing ? editedProfile.notifications.community : profile.notifications.community}
                    onChange={(e) => isEditing && setEditedProfile({
                      ...editedProfile,
                      notifications: {...editedProfile.notifications, community: e.target.checked}
                    })}
                    disabled={!isEditing}
                    className="mr-3 h-4 w-4 text-indigo-600"
                  />
                  <span className="text-gray-700">Community updates</span>
                </label>
              </div>
            </div>

            {/* Quick Access Resources */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Access Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {mentalHealthResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-indigo-600 mr-2">
                        {resource.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}