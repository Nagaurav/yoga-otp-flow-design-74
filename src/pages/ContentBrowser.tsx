
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Clock, Star, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MobileFrame from '../components/MobileFrame';

const ContentBrowser = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock video data
  const videos = [
    {
      id: 1,
      title: "Morning Hatha Flow",
      instructor: "Priya Sharma",
      duration: "45 min",
      difficulty: "Beginner",
      rating: 4.8,
      thumbnail: "https://placehold.co/400x300",
      category: "hatha"
    },
    {
      id: 2,
      title: "Vinyasa Power Sequence",
      instructor: "Raj Patel",
      duration: "30 min", 
      difficulty: "Advanced",
      rating: 4.9,
      thumbnail: "https://placehold.co/400x300",
      category: "vinyasa"
    },
    {
      id: 3,
      title: "Relaxing Yin Yoga",
      instructor: "Meera Singh",
      duration: "60 min",
      difficulty: "All Levels",
      rating: 4.7,
      thumbnail: "https://placehold.co/400x300", 
      category: "yin"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Videos' },
    { value: 'hatha', label: 'Hatha' },
    { value: 'vinyasa', label: 'Vinyasa' },
    { value: 'yin', label: 'Yin' },
    { value: 'ashtanga', label: 'Ashtanga' }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Yoga Videos</h1>
            <p className="text-slate-600">Practice anytime, anywhere</p>
          </div>
          
          {/* Search and Filter */}
          <div className="space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-12 text-base rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 text-base rounded-xl border-2 border-blue-100 bg-blue-50/30">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Video Grid */}
          <div className="flex-1 overflow-y-auto">
            {filteredVideos.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="bg-blue-50 p-6 rounded-full mb-4">
                  <Play className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">No videos found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your search or filters</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="w-full max-w-xs h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button 
                          size="icon"
                          className="bg-white/90 hover:bg-white text-blue-600 rounded-full w-12 h-12"
                        >
                          <Play className="h-6 w-6 ml-0.5" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-slate-800 flex-1">{video.title}</h3>
                        <div className="flex items-center ml-2">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{video.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-3">by {video.instructor}</p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {video.difficulty}
                        </Badge>
                        <Button 
                          size="sm" 
                          className="h-8 px-4 rounded-lg bg-blue-500 hover:bg-blue-600"
                        >
                          Play
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-6 pt-4">
            <Button 
              onClick={() => navigate('/dashboard')}
              className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
};

export default ContentBrowser;
