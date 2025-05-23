
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CalendarDays, Video, MessageCircle, Search, Star, BookOpen, Clock } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

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
        
        <div className="text-center p-10 bg-gray-50 rounded-xl">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-slate-800 font-medium mb-2">No upcoming sessions</p>
          <p className="text-slate-500 text-sm mb-3">Book a session with an instructor</p>
          <Button 
            variant="default" 
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate('/instructors')}
          >
            Find an Instructor
          </Button>
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
        
        <div className="text-center p-8 bg-gray-50 rounded-xl">
          <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
            <Clock className="h-7 w-7 text-gray-500" />
          </div>
          <p className="text-slate-500">No previous sessions</p>
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
        
        <div className="text-center p-8 bg-gray-50 rounded-xl">
          <div className="bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
            <BookOpen className="h-7 w-7 text-purple-500" />
          </div>
          <p className="text-slate-500">No saved resources</p>
          <Button 
            variant="link" 
            className="text-blue-600 mt-1"
            onClick={() => navigate('/content')}
          >
            Explore Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
