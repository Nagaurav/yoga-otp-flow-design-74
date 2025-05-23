
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Video, Star, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock instructor data based on id
  const instructor = {
    id,
    name: id === "1" ? "Riya Sharma" : "Amit Patel",
    speciality: id === "1" ? "Ashtanga Yoga" : "Hatha Yoga",
    experience: "5+ years",
    rating: id === "1" ? 4.8 : 4.7,
    reviews: id === "1" ? 150 : 98,
    imageUrl: "https://placehold.co/400x400",
    bio: id === "1" 
      ? "Riya is a certified Ashtanga Yoga instructor with over 5 years of experience. She specializes in helping practitioners build strength and flexibility through traditional Ashtanga sequences. Her classes focus on breath control and proper alignment."
      : "Amit is a passionate Hatha Yoga instructor dedicated to helping students find balance between body and mind. With 5+ years of teaching experience, he emphasizes proper form and mindful practice.",
    city: id === "1" ? "Mumbai" : "Delhi",
    availableSlots: [
      { id: 1, time: "6:00 AM - 7:00 AM" },
      { id: 2, time: "7:00 PM - 8:00 PM" }
    ],
    certifications: ["RYT-200", "Yoga Alliance Certification"],
  };
  
  // Sample reviews
  const reviews = [
    { 
      id: 1, 
      user: "Meera K.", 
      rating: 5, 
      comment: "Amazing instructor! Riya's attention to detail helped me improve my practice tremendously.", 
      date: "2 weeks ago" 
    },
    { 
      id: 2, 
      user: "Arjun S.", 
      rating: 4, 
      comment: "Great energy and very knowledgeable. Highly recommend for beginners.", 
      date: "1 month ago" 
    },
    {
      id: 3,
      user: "Neha P.",
      rating: 5,
      comment: "The best yoga instructor I've had. Very patient and supportive.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      {/* Header with image */}
      <div className="relative h-64">
        <img 
          src={instructor.imageUrl}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 left-4 text-white bg-black/30 hover:bg-black/40 rounded-full"
          onClick={() => navigate('/instructors')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Instructor info */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{instructor.name}</h1>
            <p className="text-slate-600">{instructor.speciality}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium text-sm">{instructor.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
            <Clock className="h-3 w-3 mr-1" />
            {instructor.experience}
          </div>
          <div className="flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
            <MapPin className="h-3 w-3 mr-1" />
            {instructor.city}
          </div>
        </div>
        
        {/* Bio */}
        <div className="mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">About</h3>
          <p className="text-slate-600 text-sm">{instructor.bio}</p>
        </div>
        
        {/* Available time slots */}
        <div className="mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">Available Time Slots</h3>
          <div className="flex gap-2 flex-wrap">
            {instructor.availableSlots.map(slot => (
              <div 
                key={slot.id} 
                className="px-3 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate(`/instructors/${instructor.id}/book`)}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book One-on-One
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50"
            onClick={() => navigate(`/instructors/${instructor.id}/video`)}
          >
            <Video className="h-4 w-4 mr-2" />
            Join Video Session
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-green-200 text-green-600 hover:bg-green-50"
            onClick={() => navigate(`/messages/chat/${instructor.id}`)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat with Instructor
          </Button>
        </div>
        
        {/* Reviews section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">Reviews</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-medium">{instructor.rating}</span>
              <span className="text-slate-500 text-xs ml-1">({instructor.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="border-t border-gray-100 pt-3">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-800">{review.user}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${
                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-1">{review.comment}</p>
                <p className="text-xs text-slate-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetail;
