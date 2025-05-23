
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarDays, Video, MessageCircle, BookOpen } from 'lucide-react';

const SuccessScreen = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center space-y-6">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">✓</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-slate-800">Welcome to Yoga!</h1>
      <p className="text-slate-600 max-w-xs text-center">
        Your account has been created successfully. Start your yoga journey today!
      </p>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4">
        <Button 
          onClick={() => handleNavigate('/dashboard')}
          className="flex flex-col h-24 gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl"
        >
          <CalendarDays className="h-6 w-6" />
          <span>My Classes</span>
        </Button>
        
        <Button 
          onClick={() => handleNavigate('/instructors')}
          className="flex flex-col h-24 gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl"
        >
          <MessageCircle className="h-6 w-6" />
          <span>Find Instructors</span>
        </Button>
        
        <Button 
          onClick={() => handleNavigate('/content')}
          className="flex flex-col h-24 gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-xl"
        >
          <Video className="h-6 w-6" />
          <span>Videos & Blogs</span>
        </Button>
        
        <Button 
          onClick={() => handleNavigate('/resources')}
          className="flex flex-col h-24 gap-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl"
        >
          <BookOpen className="h-6 w-6" />
          <span>Resources</span>
        </Button>
      </div>

      <Button
        onClick={() => navigate('/dashboard')}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl font-medium"
      >
        Go to Dashboard
      </Button>
    </div>
  );
};

export default SuccessScreen;
