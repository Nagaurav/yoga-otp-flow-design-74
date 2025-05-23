
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, MessageCircle, Star, Video } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Instructors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for instructors
  const instructors = [
    { 
      id: 1, 
      name: "Alexa Chen", 
      speciality: "Hatha Yoga", 
      rating: 4.9, 
      reviews: 128, 
      imageUrl: "https://placehold.co/400x400",
      availability: "Available today" 
    },
    { 
      id: 2, 
      name: "Mike Johnson", 
      speciality: "Power Yoga", 
      rating: 4.7, 
      reviews: 84, 
      imageUrl: "https://placehold.co/400x400",
      availability: "Available tomorrow" 
    },
    { 
      id: 3, 
      name: "Sarah Williams", 
      speciality: "Meditation", 
      rating: 4.8, 
      reviews: 96, 
      imageUrl: "https://placehold.co/400x400",
      availability: "Available today" 
    },
    { 
      id: 4, 
      name: "David Kumar", 
      speciality: "Ashtanga Yoga", 
      rating: 4.6, 
      reviews: 72, 
      imageUrl: "https://placehold.co/400x400",
      availability: "Next available: Fri" 
    },
  ];

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Find Instructors</h1>
        <p className="text-slate-500 text-sm">Discover the perfect yoga teacher for you</p>
      </div>
      
      {/* Search and Filter */}
      <div className="px-4 mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by name or yoga style..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>
        
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="flex-1 h-10 rounded-xl border-2 border-blue-100 bg-blue-50/30">
              <SelectValue placeholder="Yoga Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              <SelectItem value="hatha">Hatha Yoga</SelectItem>
              <SelectItem value="power">Power Yoga</SelectItem>
              <SelectItem value="ashtanga">Ashtanga</SelectItem>
              <SelectItem value="meditation">Meditation</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="flex-1 h-10 rounded-xl border-2 border-blue-100 bg-blue-50/30">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anytime">Any time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="weekend">This weekend</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Instructors List */}
      <div className="px-4 space-y-4">
        {instructors.map(instructor => (
          <div 
            key={instructor.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            onClick={() => navigate(`/instructors/${instructor.id}`)}
          >
            <div className="flex gap-3">
              <img 
                src={instructor.imageUrl} 
                alt={instructor.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800">{instructor.name}</h3>
                <p className="text-sm text-slate-600 mb-1">{instructor.speciality}</p>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{instructor.rating}</span>
                  <span className="text-slate-500 text-xs ml-1">({instructor.reviews} reviews)</span>
                </div>
                <p className="text-xs text-green-600 mt-1">{instructor.availability}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3">
              <Button 
                variant="outline"
                size="sm"
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/instructors/${instructor.id}/book`);
                }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="flex-1 border-green-200 text-green-600 hover:bg-green-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/messages/${instructor.id}`);
                }}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
