
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Video, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentBrowser = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for content
  const videos = [
    { 
      id: 1, 
      title: "Morning Yoga Flow for Beginners", 
      instructor: "Alexa Chen", 
      duration: "18 min",
      thumbnail: "https://placehold.co/400x225",
      views: "2.3k views" 
    },
    { 
      id: 2, 
      title: "Meditation for Stress Relief", 
      instructor: "Sarah Williams", 
      duration: "12 min",
      thumbnail: "https://placehold.co/400x225",
      views: "1.8k views" 
    },
    { 
      id: 3, 
      title: "Advanced Poses Breakdown", 
      instructor: "David Kumar", 
      duration: "25 min",
      thumbnail: "https://placehold.co/400x225",
      views: "1.2k views" 
    },
  ];
  
  const blogs = [
    { 
      id: 1, 
      title: "5 Yoga Poses for Better Sleep", 
      author: "Priya Sharma", 
      readTime: "5 min read",
      thumbnail: "https://placehold.co/400x225",
      date: "May 15, 2023" 
    },
    { 
      id: 2, 
      title: "The Benefits of Daily Meditation", 
      author: "Mike Johnson", 
      readTime: "7 min read",
      thumbnail: "https://placehold.co/400x225",
      date: "Apr 22, 2023" 
    },
    { 
      id: 3, 
      title: "Yoga for Office Workers: Desk Stretches", 
      author: "Alexa Chen", 
      readTime: "4 min read",
      thumbnail: "https://placehold.co/400x225",
      date: "Mar 10, 2023" 
    },
  ];

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Learn & Practice</h1>
        <p className="text-slate-500 text-sm">Videos, articles and resources for your journey</p>
      </div>
      
      {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>
      </div>
      
      {/* Content Tabs */}
      <div className="px-4">
        <Tabs defaultValue="videos">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="videos">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="blogs">
              <BookOpen className="h-4 w-4 mr-2" />
              Articles
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="space-y-4">
            {videos.map(video => (
              <div 
                key={video.id}
                className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                onClick={() => navigate(`/content/video/${video.id}`)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-slate-800 mb-1">{video.title}</h3>
                  <p className="text-sm text-slate-500">{video.instructor}</p>
                  <p className="text-xs text-slate-400 mt-1">{video.views}</p>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/content/videos')}
            >
              View All Videos
            </Button>
          </TabsContent>
          
          <TabsContent value="blogs" className="space-y-4">
            {blogs.map(blog => (
              <div 
                key={blog.id}
                className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                onClick={() => navigate(`/content/blog/${blog.id}`)}
              >
                <img 
                  src={blog.thumbnail} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-slate-800 mb-1">{blog.title}</h3>
                  <p className="text-sm text-slate-500">{blog.author}</p>
                  <div className="flex items-center text-xs text-slate-400 mt-1">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/content/blogs')}
            >
              View All Articles
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentBrowser;
