import React from 'react';

const DataFlowBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* 主背景层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      
      {/* 光晕效果 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-600 filter blur-3xl mix-blend-screen"></div>
      </div>
      
      {/* 网格线效果 */}
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05]"></div>
    </div>
  );
};

export default DataFlowBackground;
