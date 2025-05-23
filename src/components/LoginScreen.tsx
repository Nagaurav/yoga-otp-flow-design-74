
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setShowOTP(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full justify-center px-2">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Login / Signup</h1>
        <p className="text-slate-600">Enter your phone number to continue</p>
      </div>

      {/* Phone Number Input */}
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-500 sm:text-sm">+91</span>
            </div>
            <Input
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                setPhoneNumber(value);
              }}
              className="pl-12 h-14 text-lg rounded-2xl border-2 border-blue-100 focus:border-blue-300 bg-blue-50/30"
              disabled={showOTP}
            />
          </div>
        </div>

        {/* OTP Input */}
        {showOTP && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Enter OTP
              </label>
              <p className="text-xs text-slate-500">
                We've sent a 6-digit code to +91 {phoneNumber}
              </p>
            </div>
            
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot index={0} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                  <InputOTPSlot index={1} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                  <InputOTPSlot index={2} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                  <InputOTPSlot index={3} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                  <InputOTPSlot index={4} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                  <InputOTPSlot index={5} className="w-12 h-12 text-lg rounded-xl border-2 border-blue-100 focus:border-blue-300" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center">
              <button className="text-blue-600 text-sm font-medium">
                Resend OTP
              </button>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button
          onClick={showOTP ? handleVerifyOTP : handleSendOTP}
          disabled={(!showOTP && phoneNumber.length !== 10) || (showOTP && otp.length !== 6) || isLoading}
          className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : showOTP ? (
            'Verify OTP'
          ) : (
            'Send OTP'
          )}
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center">
        <p className="text-xs text-slate-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
