import React from 'react';

const BackgroundScreen = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#F2F2F2] flex flex-col">
      {children}
    </div>
  );
};

export default BackgroundScreen;