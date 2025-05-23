
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Calendar, Video } from 'lucide-react';

const ChatDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Mock instructor data based on id
  const instructor = {
    id,
    name: id === "1" ? "Riya Sharma" : "Amit Patel",
    online: true,
    imageUrl: "https://placehold.co/400x400"
  };
  
  // Mock messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you with your yoga practice today?", sender: 'instructor', time: '10:25 AM' },
    { id: 2, text: "Hi Riya! I wanted to ask if your 7 AM slot is available tomorrow?", sender: 'user', time: '10:28 AM' },
    { id: 3, text: "Yes! The 7 AM slot is available. You can book it now if you'd like.", sender: 'instructor', time: '10:30 AM' }
  ]);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate instructor response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "Great! I'll see you at the session tomorrow. Would you like me to prepare anything specific for your practice?",
        sender: 'instructor',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm py-2">
        <div className="flex items-center px-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => navigate('/messages')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <img 
            src={instructor.imageUrl} 
            alt={instructor.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          
          <div className="flex-1">
            <h2 className="font-semibold text-slate-800">{instructor.name}</h2>
            <p className="text-xs text-green-600">{instructor.online ? 'Online' : 'Offline'}</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-blue-600 rounded-full"
              onClick={() => navigate(`/instructors/${id}/book`)}
            >
              <Calendar className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-blue-600 rounded-full"
              onClick={() => navigate(`/messages/call/${id}?type=video`)}
            >
              <Video className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center text-xs text-slate-500 mb-6">
          Today
        </div>
        
        {messages.map(msg => (
          <div 
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'instructor' && (
              <img 
                src={instructor.imageUrl} 
                alt={instructor.name}
                className="w-8 h-8 rounded-full object-cover mr-2 mt-1"
              />
            )}
            
            <div 
              className={`max-w-[80%] p-3 rounded-2xl ${
                msg.sender === 'user' 
                  ? 'bg-blue-500 text-white rounded-tr-none' 
                  : 'bg-gray-100 text-slate-800 rounded-tl-none'
              }`}
            >
              <p className="text-sm mb-1">{msg.text}</p>
              <p className={`text-[10px] ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Start Video Call Button */}
      <div className="px-4 py-2">
        <Button 
          className="w-full bg-green-500 hover:bg-green-600"
          onClick={() => navigate(`/messages/call/${id}?type=video`)}
        >
          <Video className="h-4 w-4 mr-2" /> 
          Start Video Call
        </Button>
      </div>
      
      {/* Message Input */}
      <div className="bg-white border-t border-gray-100 p-2">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-1 border border-gray-200">
          <Input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border-none bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="text-blue-600"
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
