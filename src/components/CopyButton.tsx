import React, { useState } from 'react';
import copy from 'clipboard-copy';

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('复制失败:', err);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCopy();
    }
  };

  return (
    <button
      className={`px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center min-w-[80px] ${copied ? 'bg-green-500' : ''} ${className}`}
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      aria-label="复制到剪贴板"
      tabIndex={0}
    >
      {copied ? '已复制!' : '复制'}
    </button>
  );
};

export default CopyButton;
