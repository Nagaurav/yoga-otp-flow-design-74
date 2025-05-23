
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ArrowLeft, Video, MapPin } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const BookingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState('');
  const [bookingType, setBookingType] = useState('online');
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock instructor data
  const instructor = {
    id,
    name: "Alexa Chen",
    speciality: "Hatha Yoga",
    imageUrl: "https://placehold.co/400x400",
  };
  
  // Mock time slots
  const timeSlots = ["7:00 AM", "9:00 AM", "11:00 AM", "5:00 PM", "7:30 PM"];
  
  const handleBookSession = () => {
    if (!date || !timeSlot) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/booking-confirmation');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full pt-8 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center px-4 mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2"
          onClick={() => navigate(`/instructors/${id}`)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold text-slate-800">Book a Session</h1>
      </div>
      
      {/* Instructor Info */}
      <div className="px-4 mb-6 flex items-center">
        <img 
          src={instructor.imageUrl} 
          alt={instructor.name}
          className="w-14 h-14 rounded-full object-cover mr-3"
        />
        <div>
          <h2 className="font-semibold text-slate-800">{instructor.name}</h2>
          <p className="text-sm text-slate-500">{instructor.speciality}</p>
        </div>
      </div>
      
      {/* Session Type */}
      <div className="px-4 mb-6">
        <h3 className="font-medium text-slate-800 mb-3">Select Session Type</h3>
        <RadioGroup 
          value={bookingType} 
          onValueChange={setBookingType}
          className="grid grid-cols-2 gap-3"
        >
          <div className={`flex flex-col items-center border-2 rounded-xl p-4 ${
            bookingType === 'online' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
          }`}>
            <RadioGroupItem value="online" id="online" className="sr-only" />
            <Label htmlFor="online" className="flex flex-col items-center cursor-pointer">
              <Video className={`h-6 w-6 mb-2 ${bookingType === 'online' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`font-medium ${bookingType === 'online' ? 'text-blue-600' : 'text-slate-600'}`}>Online Session</span>
              <span className="text-xs text-slate-500 mt-1">Video call</span>
            </Label>
          </div>
          
          <div className={`flex flex-col items-center border-2 rounded-xl p-4 ${
            bookingType === 'in-person' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
          }`}>
            <RadioGroupItem value="in-person" id="in-person" className="sr-only" />
            <Label htmlFor="in-person" className="flex flex-col items-center cursor-pointer">
              <MapPin className={`h-6 w-6 mb-2 ${bookingType === 'in-person' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`font-medium ${bookingType === 'in-person' ? 'text-blue-600' : 'text-slate-600'}`}>In-Person</span>
              <span className="text-xs text-slate-500 mt-1">At home or studio</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Select Date */}
      <div className="px-4 mb-6">
        <h3 className="font-medium text-slate-800 mb-3">Select Date</h3>
        <div className="border rounded-xl p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date() || date > new Date(new Date().setDate(new Date().getDate() + 30))}
            className={cn("p-3 pointer-events-auto")}
          />
        </div>
      </div>
      
      {/* Select Time */}
      {date && (
        <div className="px-4 mb-6 animate-fade-in">
          <h3 className="font-medium text-slate-800 mb-3">
            Select Time for {format(date, 'EEEE, MMM d')}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button" 
                onClick={() => setTimeSlot(time)}
                className={`py-3 rounded-xl border-2 text-center ${
                  timeSlot === time 
                    ? 'border-blue-600 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 text-slate-600'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Summary and Confirmation */}
      {date && timeSlot && (
        <div className="px-4 mb-6 animate-fade-in">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
            <h3 className="font-medium text-slate-800 mb-2">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="font-medium">{format(date, 'EEEE, MMMM d, yyyy')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time:</span>
                <span className="font-medium">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Session Type:</span>
                <span className="font-medium capitalize">{bookingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Instructor:</span>
                <span className="font-medium">{instructor.name}</span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-blue-600">₹1,200</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Book Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <Button
          className="w-full h-12 rounded-xl font-medium"
          disabled={!date || !timeSlot || isLoading}
          onClick={handleBookSession}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
          ) : (
            'Confirm Booking'
          )}
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;
