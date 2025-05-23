
import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative">
        {/* iPhone notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10"></div>
        
        {/* Screen content */}
        <div className="h-full pt-12 pb-8 px-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
