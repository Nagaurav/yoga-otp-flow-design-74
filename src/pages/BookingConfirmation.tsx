
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Video, MapPin, CheckCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import MobileFrame from '../components/MobileFrame';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [bookingMode, setBookingMode] = useState<'in-person' | 'video'>('video');
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock booking data
  const booking = {
    instructorName: "Riya Sharma",
    instructorImage: "https://placehold.co/400x400",
    date: "May 25, 2023",
    time: "6:00 AM - 7:00 AM",
    class: "Ashtanga Yoga - One-on-One Session"
  };
  
  // Mock user data
  const user = {
    name: "Raj Mehta",
    phone: "+91 98765 43210",
    city: "Mumbai"
  };

  const handleConfirmBooking = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-slate-800">Booking Confirmation</h1>
          </div>
          
          {/* Instructor Info */}
          <div className="mb-6 flex items-center">
            <img 
              src={booking.instructorImage} 
              alt={booking.instructorName}
              className="w-14 h-14 rounded-full object-cover mr-3"
            />
            <div>
              <h2 className="font-semibold text-slate-800">{booking.instructorName}</h2>
              <p className="text-sm text-slate-500">{booking.class}</p>
            </div>
          </div>
          
          {/* Class Details */}
          <div className="mb-6">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-slate-800">Session Details</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Date:</span>
                  <span className="font-medium">{booking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time:</span>
                  <span className="font-medium">{booking.time}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Session Mode */}
          <div className="mb-6">
            <h3 className="font-medium text-slate-800 mb-3">Select Session Mode</h3>
            <RadioGroup 
              value={bookingMode} 
              onValueChange={(value: 'in-person' | 'video') => setBookingMode(value)}
              className="grid grid-cols-2 gap-3"
            >
              <div className={`flex flex-col items-center border-2 rounded-xl p-4 ${
                bookingMode === 'video' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}>
                <RadioGroupItem value="video" id="video" className="sr-only" />
                <Label htmlFor="video" className="flex flex-col items-center cursor-pointer">
                  <Video className={`h-6 w-6 mb-2 ${bookingMode === 'video' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`font-medium ${bookingMode === 'video' ? 'text-blue-600' : 'text-slate-600'}`}>Video Call</span>
                  <span className="text-xs text-slate-500 mt-1">Join from anywhere</span>
                </Label>
              </div>
              
              <div className={`flex flex-col items-center border-2 rounded-xl p-4 ${
                bookingMode === 'in-person' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}>
                <RadioGroupItem value="in-person" id="in-person" className="sr-only" />
                <Label htmlFor="in-person" className="flex flex-col items-center cursor-pointer">
                  <MapPin className={`h-6 w-6 mb-2 ${bookingMode === 'in-person' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`font-medium ${bookingMode === 'in-person' ? 'text-blue-600' : 'text-slate-600'}`}>In-Person</span>
                  <span className="text-xs text-slate-500 mt-1">At your location</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* User Info */}
          <div className="mb-6">
            <h3 className="font-medium text-slate-800 mb-3">User Information</h3>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Name:</span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-medium">{user.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">City:</span>
                  <span className="font-medium">{user.city}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Summary */}
          <div className="mb-6">
            <h3 className="font-medium text-slate-800 mb-3">Payment Summary</h3>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Session Fee:</span>
                  <span className="font-medium">₹1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Platform Fee:</span>
                  <span className="font-medium">₹100</span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                  <span className="font-medium">Total Amount:</span>
                  <span className="font-bold text-blue-600">₹1,300</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Confirm Button */}
          <div className="mt-auto pt-4">
            <Button
              className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
              onClick={handleConfirmBooking}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                'Confirm Booking'
              )}
            </Button>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
};

export default BookingConfirmation;
