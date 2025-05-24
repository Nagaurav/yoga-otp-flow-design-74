
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Calendar, Video } from 'lucide-react';
import MobileFrame from '../components/MobileFrame';

const ChatDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([]);
  
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 shadow-sm py-3 -mx-6 px-6 mb-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-2"
                onClick={() => navigate('/messages')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
              
              <div className="flex-1">
                <h2 className="font-semibold text-slate-800">Instructor Name</h2>
                <p className="text-xs text-green-600">Online</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-blue-600 rounded-full bg-blue-50 hover:bg-blue-100"
                  onClick={() => navigate(`/instructors/${id}/book`)}
                >
                  <Calendar className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-blue-600 rounded-full bg-blue-50 hover:bg-blue-100"
                  onClick={() => navigate(`/messages/call/${id}?type=video`)}
                >
                  <Video className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="text-center text-xs text-slate-500 mb-6">
              Today
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="bg-blue-50 p-6 rounded-full mb-4">
                <Send className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">No messages yet</h3>
              <p className="text-slate-500 text-center mb-4">Start the conversation with your instructor</p>
            </div>
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Start Video Call Button */}
          <div className="py-3">
            <Button 
              className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
              onClick={() => navigate(`/messages/call/${id}?type=video`)}
            >
              <Video className="h-4 w-4 mr-2" /> 
              Start Video Call
            </Button>
          </div>
          
          {/* Message Input */}
          <div className="bg-white border-t border-gray-100 p-3 -mx-6 -mb-8">
            <div className="flex items-center bg-blue-50 rounded-full px-4 py-1 border-2 border-blue-100">
              <Input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border-none bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-base"
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
                className="text-blue-600 hover:bg-blue-100 rounded-full"
                onClick={handleSendMessage}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
};

export default ChatDetail;
