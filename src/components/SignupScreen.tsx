
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface SignupScreenProps {
  phoneNumber: string;
  onSignupComplete: () => void;
}

const SignupScreen = ({ phoneNumber, onSignupComplete }: SignupScreenProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: undefined as Date | undefined,
    gender: '',
    city: '',
    location: { lat: '', lng: '' }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const detectLocation = () => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            location: {
              lat: position.coords.latitude.toFixed(6),
              lng: position.coords.longitude.toFixed(6)
            }
          }));
          setLocationLoading(false);
        },
        () => {
          // Fallback to dummy coordinates
          setFormData(prev => ({
            ...prev,
            location: {
              lat: '28.6139',
              lng: '77.2090'
            }
          }));
          setLocationLoading(false);
        }
      );
    } else {
      setFormData(prev => ({
        ...prev,
        location: {
          lat: '28.6139',
          lng: '77.2090'
        }
      }));
      setLocationLoading(false);
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSignupComplete();
    }, 1500);
  };

  const isFormValid = formData.fullName && formData.dateOfBirth && formData.gender && formData.city;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Complete Signup</h1>
        <p className="text-slate-600">Please fill in your details</p>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        {/* Phone Number (Read-only) */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">Phone Number</Label>
          <Input
            value={`+91 ${phoneNumber}`}
            readOnly
            className="h-12 rounded-xl border-2 border-gray-200 bg-gray-50 text-slate-600"
          />
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">Full Name *</Label>
          <Input
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">Date of Birth *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30",
                  !formData.dateOfBirth && "text-slate-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "Select your date of birth"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.dateOfBirth}
                onSelect={(date) => setFormData(prev => ({ ...prev, dateOfBirth: date }))}
                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Gender */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700">Gender *</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
            className="flex space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="text-sm">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="text-sm">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="text-sm">Other</Label>
            </div>
          </RadioGroup>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">City *</Label>
          <Input
            placeholder="Enter your city"
            value={formData.city}
            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
            className="h-12 rounded-xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">Location</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-3 rounded-xl border-2 border-gray-200 bg-gray-50">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">
                {locationLoading ? 'Detecting location...' : 
                  formData.location.lat ? 
                    `${formData.location.lat}, ${formData.location.lng}` : 
                    'Location not available'
                }
              </span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={detectLocation}
              disabled={locationLoading}
              className="w-full h-10 rounded-xl border-2 border-blue-100 text-blue-600 hover:bg-blue-50"
            >
              {locationLoading ? 'Detecting...' : 'Auto-detect Location'}
            </Button>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
          className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            'Complete Signup'
          )}
        </Button>
      </div>
    </div>
  );
};

export default SignupScreen;
