
import React, { useState } from 'react';
import MobileFrame from '../components/MobileFrame';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import SuccessScreen from '../components/SuccessScreen';

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
        return <SuccessScreen />;
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
