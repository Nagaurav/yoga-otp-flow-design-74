
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Video, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MessagesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Messages</h1>
        <p className="text-slate-500 text-sm">Chat with your instructors</p>
      </div>
      
      {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>
      </div>
      
      {/* Content Tabs */}
      <div className="px-4">
        <Tabs defaultValue="chats">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="chats">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chats
            </TabsTrigger>
            <TabsTrigger value="calls">
              <Video className="h-4 w-4 mr-2" />
              Calls
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chats" className="space-y-2">
            {/* Empty State for Chats */}
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-50 p-5 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">No messages yet</h3>
              <p className="text-slate-500 mb-4">Start chatting with an instructor</p>
              <Button 
                variant="default"
                className="bg-blue-500 hover:bg-blue-600"
                onClick={() => navigate('/instructors')}
              >
                Find Instructors
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="calls" className="space-y-2">
            {/* Empty State for Calls */}
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-50 p-5 rounded-full mb-4">
                <Video className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">No recent calls</h3>
              <p className="text-slate-500 mb-4">Your call history will appear here</p>
              <Button 
                variant="outline"
                className="border-blue-200 text-blue-600"
                onClick={() => navigate('/instructors')}
              >
                Find Instructors
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MessagesPage;
