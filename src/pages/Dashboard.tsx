
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CalendarDays, Video, MessageCircle, Search, Star, BookOpen, Clock } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for upcoming sessions
  const upcomingSessions = [
    { 
      id: 1, 
      title: "Ashtanga Yoga", 
      instructor: "Riya Sharma", 
      date: "May 25", 
      time: "6:00 AM - 7:00 AM", 
      isOnline: true 
    },
    { 
      id: 2, 
      title: "Hatha Yoga", 
      instructor: "Amit Patel", 
      date: "May 27", 
      time: "7:00 PM - 8:00 PM", 
      isOnline: false 
    }
  ];
  
  // Mock data for previous sessions
  const previousSessions = [
    { 
      id: 1, 
      title: "Morning Flow", 
      instructor: "Priya Verma", 
      date: "May 18", 
      isRated: true 
    }
  ];
  
  // Mock data for saved resources
  const savedResources = [
    { 
      id: 1, 
      title: "Beginner's Guide to Yoga", 
      type: "Blog", 
      thumbnail: "https://placehold.co/100x60" 
    },
    { 
      id: 2, 
      title: "20-Min Morning Flow", 
      type: "Video", 
      thumbnail: "https://placehold.co/100x60" 
    },
    { 
      id: 3, 
      title: "Healthy Lifestyle Tips", 
      type: "Note", 
      thumbnail: "https://placehold.co/100x60" 
    }
  ];

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Hello, Raj</h1>
          <p className="text-slate-500 text-sm">Welcome back to your practice</p>
        </div>
        <Button 
          variant="ghost"
          size="icon"
          className="rounded-full bg-blue-50"
          onClick={() => navigate('/profile')}
        >
          <span className="text-xl font-medium text-blue-600">RM</span>
        </Button>
      </div>
      
      {/* Quick Actions */}
      <div className="flex overflow-x-auto px-4 pb-2 gap-3 mb-6 no-scrollbar">
        <Button 
          onClick={() => navigate('/instructors')}
          className="flex flex-col py-3 px-5 gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl whitespace-nowrap"
        >
          <Search className="h-5 w-5" />
          <span className="text-xs">Find Instructor</span>
        </Button>
        
        <Button 
          onClick={() => navigate('/messages')}
          className="flex flex-col py-3 px-5 gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl whitespace-nowrap"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Messages</span>
        </Button>
        
        <Button 
          onClick={() => navigate('/content')}
          className="flex flex-col py-3 px-5 gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-xl whitespace-nowrap"
        >
          <Video className="h-5 w-5" />
          <span className="text-xs">Explore Content</span>
        </Button>
        
        <Button 
          onClick={() => navigate('/bookings')}
          className="flex flex-col py-3 px-5 gap-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl whitespace-nowrap"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs">My Bookings</span>
        </Button>
      </div>
      
      {/* Upcoming Sessions */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-slate-800">Upcoming Sessions</h2>
          <Button 
            variant="link" 
            className="text-blue-600 p-0 h-auto text-sm font-medium"
            onClick={() => navigate('/bookings')}
          >
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {upcomingSessions.length > 0 ? (
            upcomingSessions.map(session => (
              <div 
                key={session.id}
                className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex flex-col items-center justify-center mr-3">
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-slate-800">{session.title}</h3>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="mr-2">{session.instructor}</span>
                    <span className="flex items-center">
                      {session.date} • {session.time}
                    </span>
                  </div>
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${session.isOnline ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {session.isOnline ? 'Online' : 'In-person'}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <p className="text-slate-500">No upcoming sessions</p>
              <Button 
                variant="link" 
                className="text-blue-600 mt-2"
                onClick={() => navigate('/instructors')}
              >
                Find a Class
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Previous Sessions */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-slate-800">Previous Sessions</h2>
          <Button 
            variant="link" 
            className="text-blue-600 p-0 h-auto text-sm font-medium"
            onClick={() => navigate('/history')}
          >
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {previousSessions.map(session => (
            <div 
              key={session.id}
              className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex flex-col items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-slate-800">{session.title}</h3>
                <div className="flex items-center text-xs text-slate-500">
                  <span>{session.instructor}</span>
                  <span className="mx-1">•</span>
                  <span>{session.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {!session.isRated && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-yellow-600 border-yellow-200"
                  >
                    <Star className="h-3 w-3 mr-1" />
                    <span className="text-xs">Rate</span>
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-blue-600 border-blue-200"
                >
                  <span className="text-xs">Rebook</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Saved Resources */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-slate-800">Saved Resources</h2>
          <Button 
            variant="link" 
            className="text-blue-600 p-0 h-auto text-sm font-medium"
            onClick={() => navigate('/content')}
          >
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {savedResources.map(item => (
            <div 
              key={item.id}
              className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              onClick={() => navigate(`/content/${item.id}`)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-[60px] h-[60px] object-cover rounded-lg mr-3"
              />
              <div>
                <h3 className="font-medium text-slate-800">{item.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.type === 'Blog' ? 'bg-indigo-100 text-indigo-700' : 
                  item.type === 'Video' ? 'bg-purple-100 text-purple-700' : 
                  'bg-green-100 text-green-700'
                }`}>
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
