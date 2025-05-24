
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Video, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MobileFrame from '../components/MobileFrame';

const MessagesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Messages</h1>
            <p className="text-slate-600">Chat with your instructors</p>
          </div>
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-12 text-base rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
              />
            </div>
          </div>
          
          {/* Content Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="chats" className="w-full h-full flex flex-col">
              <TabsList className="grid grid-cols-2 mb-6 p-1 bg-blue-50 rounded-xl">
                <TabsTrigger 
                  value="chats"
                  className="rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chats
                </TabsTrigger>
                <TabsTrigger 
                  value="calls"
                  className="rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Calls
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="chats" className="flex-1 flex flex-col">
                {/* Empty State for Chats */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-50 p-6 rounded-full mb-4">
                    <MessageCircle className="h-10 w-10 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">No messages yet</h3>
                  <p className="text-slate-500 mb-6">Start chatting with an instructor</p>
                  <Button 
                    variant="default"
                    className="w-full max-w-xs h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
                    onClick={() => navigate('/instructors')}
                  >
                    Find Instructors
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="calls" className="flex-1 flex flex-col">
                {/* Empty State for Calls */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-50 p-6 rounded-full mb-4">
                    <Video className="h-10 w-10 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">No recent calls</h3>
                  <p className="text-slate-500 mb-6">Your call history will appear here</p>
                  <Button 
                    variant="outline"
                    className="w-full max-w-xs h-12 text-base font-semibold rounded-xl border-2 border-blue-100 text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate('/instructors')}
                  >
                    Find Instructors
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
};

export default MessagesPage;
