
import React, { useState } from 'react';
import MobileFrame from '../components/MobileFrame';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup' | 'success'>('login');
  const [userPhone, setUserPhone] = useState('9876543210'); // Mock phone number

  const handleLoginSuccess = () => {
    setCurrentScreen('signup');
  };

  const handleSignupComplete = () => {
    setCurrentScreen('success');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
      case 'signup':
        return <SignupScreen phoneNumber={userPhone} onSignupComplete={handleSignupComplete} />;
      case 'success':
        return (
          <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Welcome to Yoga!</h1>
            <p className="text-slate-600 max-w-xs">
              Your account has been created successfully. Start your yoga journey today!
            </p>
            <button
              onClick={() => setCurrentScreen('login')}
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-xl font-medium"
            >
              Start Over (Demo)
            </button>
          </div>
        );
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MobileFrame>
        {renderScreen()}
      </MobileFrame>
    </div>
  );
};

export default Index;
