import React from 'react';
import { useNavigate } from 'react-router-dom';
import AIThemeBackground from '../components/AIThemeBackground';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/generator');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleStart();
    }
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden m-0 p-0 bg-gradient-to-br from-purple-900 via-blue-800 to-gray-900 animate-gradient-x">
      <AIThemeBackground className="opacity-40" />
      
      <div className="z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Work Fast in <span className="text-blue-400">AI Speed</span>
        </h1>
        
        <div className="w-full h-[60px]" />
        
        <button
          className="mt-0 w-[175px] h-[40px] bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
          onClick={handleStart}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label=" "
        >
          start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
