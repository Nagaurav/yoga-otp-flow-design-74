
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Video, Star, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock instructor data (in a real app this would come from an API call)
  const instructor = {
    id,
    name: "Alexa Chen",
    speciality: "Hatha Yoga",
    experience: "7+ years",
    rating: 4.9,
    reviews: 128,
    imageUrl: "https://placehold.co/400x400",
    bio: "Alexa is a certified Hatha Yoga instructor with over 7 years of experience. She specializes in helping beginners build a strong foundation and develop proper alignment. Her classes focus on mindfulness and connecting breath with movement.",
    location: "Central Delhi",
    languages: ["English", "Hindi"],
    certifications: ["RYT-200", "Yoga Alliance Certification"],
    classes: [
      { id: 1, title: "Morning Flow", duration: "60 min", type: "Group", price: "₹500" },
      { id: 2, title: "One-to-One Session", duration: "45 min", type: "Private", price: "₹1200" },
      { id: 3, title: "Yoga for Beginners", duration: "75 min", type: "Group", price: "₹600" }
    ],
    availableTimes: ["7:00 AM", "9:00 AM", "5:00 PM", "7:30 PM"]
  };
  
  // Sample reviews
  const reviews = [
    { 
      id: 1, 
      user: "Priya S.", 
      rating: 5, 
      comment: "Alexa is an amazing instructor! Her sessions are both challenging and relaxing. Highly recommend.", 
      date: "2 weeks ago" 
    },
    { 
      id: 2, 
      user: "Ravi K.", 
      rating: 4, 
      comment: "Great instructor. Very attentive and provides good modifications for beginners.", 
      date: "1 month ago" 
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
            {instructor.location}
          </div>
          {instructor.languages.map(lang => (
            <div key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {lang}
            </div>
          ))}
        </div>
        
        <div className="flex gap-2 mb-6">
          <Button 
            className="flex-1 bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate(`/instructors/${instructor.id}/book`)}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Session
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            onClick={() => navigate(`/messages/${instructor.id}`)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
        
        <Tabs defaultValue="about">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Bio</h3>
              <p className="text-slate-600 text-sm">{instructor.bio}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Certifications</h3>
              <ul className="text-sm text-slate-600 list-disc pl-5">
                {instructor.certifications.map(cert => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="classes" className="space-y-3">
            {instructor.classes.map(classItem => (
              <div 
                key={classItem.id}
                className="p-3 border border-gray-100 rounded-xl shadow-sm"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-slate-800">{classItem.title}</h3>
                  <span className="font-semibold text-blue-600">{classItem.price}</span>
                </div>
                <div className="flex items-center text-xs text-slate-500 mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{classItem.duration}</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span className={`px-1.5 py-0.5 rounded-full ${
                    classItem.type === 'Private' ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'
                  }`}>{classItem.type}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate(`/instructors/${instructor.id}/book/${classItem.id}`)}
                >
                  <Calendar className="h-3 w-3 mr-2" />
                  Book this class
                </Button>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-semibold text-lg">{instructor.rating}</span>
                </div>
                <p className="text-xs text-slate-500">{instructor.reviews} reviews</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Write a Review
              </Button>
            </div>
            
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstructorDetail;
