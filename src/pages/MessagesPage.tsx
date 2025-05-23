
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Video, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MessagesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for chats
  const chats = [
    { 
      id: 1, 
      name: "Alexa Chen", 
      lastMessage: "How was your practice yesterday?", 
      time: "10:30 AM",
      unread: 2,
      online: true,
      imageUrl: "https://placehold.co/400x400"
    },
    { 
      id: 2, 
      name: "Mike Johnson", 
      lastMessage: "Looking forward to our session tomorrow!", 
      time: "Yesterday",
      unread: 0,
      online: false,
      imageUrl: "https://placehold.co/400x400"
    },
    { 
      id: 3, 
      name: "Sarah Williams", 
      lastMessage: "Thank you for the meditation tips.", 
      time: "Monday",
      unread: 0,
      online: false,
      imageUrl: "https://placehold.co/400x400"
    },
  ];
  
  // Mock data for calls
  const calls = [
    { 
      id: 1, 
      name: "Alexa Chen", 
      time: "Today, 09:45 AM",
      type: "video",
      status: "missed",
      imageUrl: "https://placehold.co/400x400"
    },
    { 
      id: 2, 
      name: "Mike Johnson", 
      time: "Yesterday, 11:20 AM",
      type: "video",
      status: "completed",
      duration: "18:32",
      imageUrl: "https://placehold.co/400x400"
    },
    { 
      id: 3, 
      name: "Sarah Williams", 
      time: "May 12, 02:15 PM",
      type: "audio",
      status: "completed",
      duration: "05:12",
      imageUrl: "https://placehold.co/400x400"
    },
  ];

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
            {chats.map(chat => (
              <div 
                key={chat.id}
                className="flex items-center p-3 rounded-xl hover:bg-gray-50"
                onClick={() => navigate(`/messages/chat/${chat.id}`)}
              >
                <div className="relative mr-3">
                  <img 
                    src={chat.imageUrl} 
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-slate-800 truncate">{chat.name}</h3>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                </div>
                
                {chat.unread > 0 && (
                  <div className="ml-2 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="calls" className="space-y-2">
            {calls.map(call => (
              <div 
                key={call.id}
                className="flex items-center p-3 rounded-xl hover:bg-gray-50"
              >
                <img 
                  src={call.imageUrl} 
                  alt={call.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-slate-800">{call.name}</h3>
                    <span className="text-xs text-slate-500">{call.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    {call.type === 'video' ? (
                      <Video className="h-3 w-3 mr-1 text-slate-400" />
                    ) : (
                      <MessageCircle className="h-3 w-3 mr-1 text-slate-400" />
                    )}
                    <span className={`${
                      call.status === 'missed' ? 'text-red-500' : 'text-slate-500'
                    }`}>
                      {call.status === 'missed' ? 'Missed call' : `Call · ${call.duration}`}
                    </span>
                  </div>
                </div>
                
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => 
                    navigate(`/messages/call/${call.id}?type=${call.type}`)
                  }
                >
                  {call.type === 'video' ? (
                    <Video className="h-4 w-4" />
                  ) : (
                    <MessageCircle className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MessagesPage;
