
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarDays, Video, MessageCircle, Search } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for upcoming sessions
  const upcomingSessions = [
    { id: 1, title: "Morning Flow Yoga", instructor: "Alexa Chen", time: "Today, 7:00 AM", isOnline: true },
    { id: 2, title: "Power Yoga", instructor: "Mike Johnson", time: "Tomorrow, 6:00 PM", isOnline: false }
  ];
  
  // Mock data for recommended content
  const recommendedContent = [
    { id: 1, title: "5 Poses for Better Sleep", type: "Blog", thumbnail: "https://placehold.co/100x60" },
    { id: 2, title: "Beginner's Meditation", type: "Video", thumbnail: "https://placehold.co/100x60" }
  ];

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Hello, Yogi</h1>
          <p className="text-slate-500 text-sm">Welcome back to your practice</p>
        </div>
        <Button 
          variant="ghost"
          size="icon"
          className="rounded-full bg-blue-50"
          onClick={() => navigate('/profile')}
        >
          <span className="text-xl font-medium text-blue-600">YG</span>
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
                      {session.time}
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
      
      {/* Recommended Content */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-slate-800">Recommended For You</h2>
          <Button 
            variant="link" 
            className="text-blue-600 p-0 h-auto text-sm font-medium"
            onClick={() => navigate('/content')}
          >
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {recommendedContent.map(item => (
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
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.type === 'Blog' ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'}`}>
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Book a Session CTA */}
      <div className="mx-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
        <h3 className="font-semibold mb-1">Ready for your next practice?</h3>
        <p className="text-sm text-blue-100 mb-3">Book a one-to-one session with our instructors</p>
        <Button 
          className="bg-white text-blue-600 hover:bg-blue-50 w-full"
          onClick={() => navigate('/instructors')}
        >
          Find an Instructor
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
