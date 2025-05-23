
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
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto px-2">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Find Instructors</h1>
        <p className="text-slate-600">Discover the perfect yoga teacher for you</p>
      </div>
      
      {/* Search and Filter */}
      <div className="space-y-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search instructors, yoga styles, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-14 text-lg rounded-2xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
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
      
      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="bg-blue-50 p-6 rounded-full mb-4">
          <Search className="h-10 w-10 text-blue-500" />
        </div>
        <h3 className="text-lg font-medium text-slate-800 mb-2">No instructors found</h3>
        <p className="text-slate-500 mb-6">Try adjusting your search or filters</p>
        <Button 
          onClick={() => navigate('/dashboard')}
          className="w-full max-w-xs h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Instructors;
