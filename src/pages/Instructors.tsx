
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, MessageCircle, Star, Video } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Instructors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for instructors
  const instructors = [
    { 
      id: 1, 
      name: "Riya Sharma", 
      speciality: "Ashtanga Yoga", 
      rating: 4.8, 
      reviews: 150, 
      imageUrl: "https://placehold.co/400x400",
      city: "Mumbai",
      availability: "6:00 AM - 8:00 AM" 
    },
    { 
      id: 2, 
      name: "Amit Patel", 
      speciality: "Hatha Yoga", 
      rating: 4.7, 
      reviews: 98, 
      imageUrl: "https://placehold.co/400x400",
      city: "Delhi",
      availability: "7:00 PM - 9:00 PM" 
    },
    { 
      id: 3, 
      name: "Priya Verma", 
      speciality: "Vinyasa Flow", 
      rating: 4.9, 
      reviews: 124, 
      imageUrl: "https://placehold.co/400x400",
      city: "Bangalore",
      availability: "5:30 AM - 7:30 AM" 
    },
    { 
      id: 4, 
      name: "Dhruv Kapoor", 
      speciality: "Kundalini Yoga", 
      rating: 4.6, 
      reviews: 78, 
      imageUrl: "https://placehold.co/400x400",
      city: "Mumbai",
      availability: "6:00 PM - 8:00 PM" 
    },
  ];

  // Filter chips
  const filterChips = [
    { label: "Ashtanga", type: "style" },
    { label: "Hatha", type: "style" },
    { label: "Vinyasa", type: "style" },
    { label: "Mumbai", type: "city" },
    { label: "Delhi", type: "city" },
    { label: "Morning", type: "time" },
    { label: "Evening", type: "time" }
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
            placeholder="Search instructors, yoga styles, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filterChips.map((chip, index) => (
            <Badge 
              key={index} 
              variant="outline"
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap cursor-pointer hover:bg-slate-100 ${
                chip.type === 'style' ? 'border-blue-200 text-blue-700' : 
                chip.type === 'city' ? 'border-green-200 text-green-700' : 
                'border-purple-200 text-purple-700'
              }`}
            >
              {chip.label}
            </Badge>
          ))}
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
                <p className="text-xs text-slate-500 mb-1">{instructor.city}</p>
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
                variant="default"
                size="sm"
                className="flex-1 bg-blue-500 hover:bg-blue-600"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/instructors/${instructor.id}/book`);
                }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
