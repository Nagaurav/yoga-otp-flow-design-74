
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Video, BookOpen, User, Settings, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import MobileFrame from '../components/MobileFrame';

const Dashboard = () => {
  const navigate = useNavigate();

  const upcomingClasses = [
    {
      id: 1,
      title: 'Morning Hatha Yoga',
      instructor: 'Priya Sharma',
      time: '8:00 AM',
      date: 'Today',
      type: 'Hatha'
    },
    {
      id: 2,
      title: 'Vinyasa Flow',
      instructor: 'Raj Patel',
      time: '6:00 PM',
      date: 'Tomorrow',
      type: 'Vinyasa'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Good Morning!</h1>
              <p className="text-slate-600">Ready for your yoga practice?</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button 
              onClick={() => navigate('/instructors')}
              className="flex flex-col h-20 gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl border-0"
              variant="outline"
            >
              <User className="h-5 w-5" />
              <span className="text-sm">Find Instructors</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/messages')}
              className="flex flex-col h-20 gap-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl border-0"
              variant="outline"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">Messages</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/content')}
              className="flex flex-col h-20 gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-xl border-0"
              variant="outline"
            >
              <Video className="h-5 w-5" />
              <span className="text-sm">Videos</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/resources')}
              className="flex flex-col h-20 gap-2 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-xl border-0"
              variant="outline"
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-sm">Resources</span>
            </Button>
          </div>

          {/* Upcoming Classes */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Upcoming Classes</h2>
              <Button variant="ghost" size="sm" className="text-blue-600">
                View All
              </Button>
            </div>
            
            <div className="space-y-3">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {class_.type}
                    </Badge>
                    <span className="text-xs text-slate-500">{class_.date}</span>
                  </div>
                  <h3 className="font-medium text-slate-800 mb-1">{class_.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">with {class_.instructor}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">{class_.time}</span>
                    <Button size="sm" className="h-8 px-4 rounded-lg">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 pt-4">
            <Button 
              onClick={() => navigate('/instructors')}
              className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book a New Class
            </Button>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
};

export default Dashboard;
