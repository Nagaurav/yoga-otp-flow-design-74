
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Video, Star, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      {/* Header with image */}
      <div className="relative h-64">
        <div className="w-full h-full bg-blue-100"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 left-4 text-white bg-black/30 hover:bg-black/40 rounded-full"
          onClick={() => navigate('/instructors')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Instructor info */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Instructor Name</h1>
            <p className="text-slate-600">Yoga Style</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium text-sm">0.0</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
            <Clock className="h-3 w-3 mr-1" />
            Experience
          </div>
          <div className="flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
            <MapPin className="h-3 w-3 mr-1" />
            City
          </div>
        </div>
        
        {/* Bio */}
        <div className="mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">About</h3>
          <p className="text-slate-600 text-sm">Instructor bio would appear here.</p>
        </div>
        
        {/* Available time slots */}
        <div className="mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">Available Time Slots</h3>
          <div className="flex gap-2 flex-wrap">
            <div className="px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 text-sm">
              No available slots
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate(`/instructors/${id}/book`)}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book One-on-One
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50"
            onClick={() => navigate(`/instructors/${id}/video`)}
          >
            <Video className="h-4 w-4 mr-2" />
            Join Video Session
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-green-200 text-green-600 hover:bg-green-50"
            onClick={() => navigate(`/messages/chat/${id}`)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat with Instructor
          </Button>
        </div>
        
        {/* Reviews section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">Reviews</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-medium">0.0</span>
              <span className="text-slate-500 text-xs ml-1">(0 reviews)</span>
            </div>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Star className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <p className="text-slate-500">No reviews yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetail;
